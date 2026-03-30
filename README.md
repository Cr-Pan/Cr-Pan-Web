# Personal Website

Minimal Next.js personal website scaffold.

## Edit website content

The website content is now centralized in `content/site-content.md`.

1. Edit the JSON blocks inside `content/site-content.md`
2. Run `npm run build` locally to verify the site still builds
3. Commit and push to `main`

The existing GitHub Pages workflow in `.github/workflows/deploy.yml` will rebuild and publish the site after each push to `main`.

## Auto-publish on save

You can run a local watcher that listens for changes to `content/site-content.md`, `public/images/profile-avatar.png`, and `public/images/emory-campus.webp`, then automatically commits and pushes those homepage files.

```bash
./scripts/start-auto-publish.sh
```

To stop the watcher:

```bash
./scripts/stop-auto-publish.sh
```

Notes:

1. The watcher auto-commits the homepage content file and the two homepage image assets
2. It validates the JSON blocks in `content/site-content.md` before committing
3. Logs are written to `.autopublish/auto_publish.log`

## Local dev

```bash
npm install
npm run dev
```

## Build and export (static)

```bash
npm run build
npm run export
```

The site uses the `pages` directory so it can be statically exported for GitHub Pages.
