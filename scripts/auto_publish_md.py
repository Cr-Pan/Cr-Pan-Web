#!/usr/bin/env python3

import json
import re
import signal
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
CONTENT_FILE = REPO_ROOT / "content" / "site-content.md"
PROFILE_IMAGE_FILE = REPO_ROOT / "public" / "images" / "profile-avatar.png"
CAMPUS_IMAGE_FILE = REPO_ROOT / "public" / "images" / "emory-campus.webp"
WATCHED_FILES = [
    {"path": CONTENT_FILE, "requires_validation": True},
    {"path": PROFILE_IMAGE_FILE, "requires_validation": False},
    {"path": CAMPUS_IMAGE_FILE, "requires_validation": False},
]
REQUIRED_SECTIONS = {"site", "home", "research", "resume"}
SECTION_PATTERN = re.compile(
    r"^##\s+([a-z0-9-]+)\s*$([\s\S]*?)(?=^##\s+[a-z0-9-]+\s*$|\Z)",
    re.MULTILINE,
)
JSON_BLOCK_PATTERN = re.compile(r"```json\s*([\s\S]*?)\s*```", re.IGNORECASE)
POLL_INTERVAL_SECONDS = 1.0
DEBOUNCE_SECONDS = 1.5

running = True


def log(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}", flush=True)


def handle_signal(signum, _frame):
    global running
    running = False
    log(f"Received signal {signum}, stopping watcher.")


def relative_path(path):
    return path.relative_to(REPO_ROOT).as_posix()


def run_git_command(args, check=True):
    result = subprocess.run(
        ["git", *args],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )

    if check and result.returncode != 0:
        stderr = result.stderr.strip()
        stdout = result.stdout.strip()
        detail = stderr or stdout or f"git {' '.join(args)} failed"
        raise RuntimeError(detail)

    return result


def validate_content_file():
    source = CONTENT_FILE.read_text(encoding="utf-8").strip()
    sections = {}

    for section_name, section_body in SECTION_PATTERN.findall(source):
        json_match = JSON_BLOCK_PATTERN.search(section_body)
        if not json_match:
            continue

        try:
            sections[section_name] = json.loads(json_match.group(1).strip())
        except json.JSONDecodeError as error:
            raise RuntimeError(
                f'Invalid JSON in section "{section_name}" of content/site-content.md: {error}'
            ) from error

    missing_sections = sorted(REQUIRED_SECTIONS - sections.keys())
    if missing_sections:
        raise RuntimeError(
            "Missing required sections in content/site-content.md: "
            + ", ".join(missing_sections)
        )


def get_current_branch():
    result = run_git_command(["branch", "--show-current"])
    branch = result.stdout.strip()
    if not branch:
        raise RuntimeError("Unable to determine current git branch.")
    return branch


def get_snapshot():
    snapshot = {}
    for item in WATCHED_FILES:
        path = item["path"]
        snapshot[relative_path(path)] = path.stat().st_mtime_ns if path.exists() else None
    return snapshot


def diff_snapshot(previous_snapshot, current_snapshot):
    changed_relatives = []
    for item in WATCHED_FILES:
        file_relative = relative_path(item["path"])
        if previous_snapshot.get(file_relative) != current_snapshot.get(file_relative):
            changed_relatives.append(file_relative)
    return changed_relatives


def resolve_changed_items(changed_relatives):
    changed_set = set(changed_relatives)
    return [
        item for item in WATCHED_FILES if relative_path(item["path"]) in changed_set and item["path"].exists()
    ]


def watched_files_have_changes(changed_items):
    if not changed_items:
        return False

    changed_paths = [relative_path(item["path"]) for item in changed_items]
    result = run_git_command(["status", "--porcelain", "--", *changed_paths], check=False)
    return bool(result.stdout.strip())


def wait_for_stable_snapshot(initial_snapshot):
    stable_since = time.monotonic()
    current_snapshot = initial_snapshot

    while running:
        time.sleep(POLL_INTERVAL_SECONDS)
        latest_snapshot = get_snapshot()
        if latest_snapshot != current_snapshot:
            current_snapshot = latest_snapshot
            stable_since = time.monotonic()
            continue

        if time.monotonic() - stable_since >= DEBOUNCE_SECONDS:
            return current_snapshot

    return current_snapshot


def publish_once(changed_items):
    if any(item["requires_validation"] for item in changed_items):
        validate_content_file()

    if not watched_files_have_changes(changed_items):
        log("No watched-file changes detected after save; skipping publish.")
        return

    branch = get_current_branch()
    changed_paths = [relative_path(item["path"]) for item in changed_items]

    run_git_command(["add", "--", *changed_paths])
    diff_result = run_git_command(["diff", "--cached", "--quiet", "--", *changed_paths], check=False)
    if diff_result.returncode == 0:
        log("The watched files match the current commit; nothing to publish.")
        return

    commit_message = "site: auto-update content and homepage assets"
    run_git_command(["commit", "--only", "--message", commit_message, "--", *changed_paths])
    run_git_command(["push", "origin", branch])
    log(f"Published {', '.join(changed_paths)} to origin/{branch}.")


def main():
    signal.signal(signal.SIGINT, handle_signal)
    signal.signal(signal.SIGTERM, handle_signal)

    initial_snapshot = get_snapshot()
    watched_labels = ", ".join(relative_path(item["path"]) for item in WATCHED_FILES)
    log(f"Watching {watched_labels} for changes.")

    last_snapshot = initial_snapshot

    while running:
        time.sleep(POLL_INTERVAL_SECONDS)
        current_snapshot = get_snapshot()
        if current_snapshot == last_snapshot:
            continue

        stable_snapshot = wait_for_stable_snapshot(current_snapshot)
        changed_relatives = diff_snapshot(last_snapshot, stable_snapshot)
        last_snapshot = stable_snapshot

        changed_items = resolve_changed_items(changed_relatives)
        if not changed_items:
            continue

        try:
            publish_once(changed_items)
        except Exception as error:  # noqa: BLE001
            log(f"Auto-publish failed: {error}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
