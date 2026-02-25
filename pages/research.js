import SiteLayout from '../components/SiteLayout'

export default function Research() {
  return (
    <SiteLayout title="Research / Papers" subtitle="Working Papers, Publications, and Ongoing Projects">
      <section className="card">
        <h2>Working Papers</h2>
        <div className="paper-item">
          <h3>Paper Title One</h3>
          <p className="paper-meta">Job Market Paper · Solo Author · 2026</p>
          <p>Short abstract: one paragraph introducing the research question, method, and main finding.</p>
          <p>
            <a href="#" className="text-link">
              PDF
            </a>{' '}
            ·{' '}
            <a href="#" className="text-link">
              Appendix
            </a>{' '}
            ·{' '}
            <a href="#" className="text-link">
              Slides
            </a>
          </p>
        </div>
        <div className="paper-item">
          <h3>Paper Title Two (with Coauthor)</h3>
          <p className="paper-meta">Work in Progress · 2026</p>
          <p>Short abstract: one sentence for motivation, one sentence for empirical design, one sentence for contribution.</p>
        </div>
      </section>

      <section className="card">
        <h2>Publications</h2>
        <p>If you do not have published papers yet, you can write: "No publications yet."</p>
      </section>
    </SiteLayout>
  )
}
