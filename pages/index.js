import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'

export default function Home() {
  return (
    <SiteLayout
      title="Your Name"
      subtitle="PhD Candidate in Economics · University Name"
    >
      <section className="card hero-grid">
        <div>
          <h2>Research Interests</h2>
          <p>
            My research focuses on labor economics, applied microeconomics, and
            policy evaluation. I use empirical methods to identify causal effects
            in labor markets.
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
            <span>Affiliation</span>University Name
          </p>
          <p>
            <span>Email</span>your.name@example.com
          </p>
          <p>
            <span>Status</span>Job Market 2026-2027
          </p>
          <p>
            <span>Location</span>City, State, US
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Recent Updates</h2>
        <ul className="clean-list">
          <li>Feb 2026: Working paper updated with new identification checks.</li>
          <li>Jan 2026: Presented at the Applied Micro Seminar.</li>
          <li>Dec 2025: Awarded departmental research grant.</li>
        </ul>
      </section>

      <section className="card">
        <h2>One-Sentence Research Summary</h2>
        <p>
          I study how policy affects individual labor supply and firm hiring,
          combining rich administrative data with quasi-experimental designs.
        </p>
      </section>
    </SiteLayout>
  )
}
