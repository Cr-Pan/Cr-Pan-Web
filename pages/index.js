import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'

export default function Home() {
  return (
    <SiteLayout
      title="Congrong Pan"
      subtitle="Economics Researcher · IO and Health Economics"
    >
      <section className="card hero-grid">
        <div>
          <h2>Research Interests</h2>
          <p>
            My research focuses on industrial organization and health economics. I
            study how policy design and performance incentives shape provider and
            individual behavior using administrative data and quasi-experimental methods.
          </p>
          <div className="cta-row">
            <Link href="/research" className="btn btn-primary">
              View Research
            </Link>
            <Link href="/resume" className="btn btn-secondary">
              View CV
            </Link>
          </div>
        </div>
        <div className="meta-list">
          <p>
            <span>Affiliation</span>UW-Madison / Shandong University
          </p>
          <p>
            <span>Email</span>pancrecon123@gmail.com
          </p>
          <p>
            <span>Status</span>Research Assistant
          </p>
          <p>
            <span>Location</span>Madison & Jinan
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Recent Updates</h2>
        <ul className="clean-list">
          <li>May 2025 - Present: Research Assistant for Prof. Panle Barwick at UW-Madison.</li>
          <li>July 2025 - Present: Full-time Research Assistant at NSD, Peking University.</li>
          <li>Current: Working on hospital incentives, coding responses, and policy distortion.</li>
        </ul>
      </section>

      <section className="card">
        <h2>One-Sentence Research Summary</h2>
        <p>
          I examine how policy rules and metrics change real behavior and reporting,
          combining theory with quasi-experimental evidence from rich administrative data.
        </p>
      </section>
    </SiteLayout>
  )
}
