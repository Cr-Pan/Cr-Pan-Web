import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('research')

export default function Research({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="research-note section-rule">
        <p className="research-note-label">Primary fields</p>
        <div className="field-list">
          <span>Industrial Organization</span>
          <span>Health Economics</span>
          <span>Applied Microeconomics</span>
        </div>
      </section>

      <section className="research-page-section" aria-labelledby="working-papers-title">
        <div className="section-title-row research-title-row">
          <h2 id="working-papers-title">{pageContent.workingPapersTitle}</h2>
          <p>{pageContent.papers.length} current projects</p>
        </div>

        <div className="research-paper-list">
          {pageContent.papers.map((paper, index) => (
            <article className="research-paper" key={paper.title}>
              <div className="research-paper-index">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="research-paper-body">
                <p className="paper-status">{paper.status ?? 'Working paper'}</p>
                <h3>{paper.title}</h3>
                <p className="paper-meta">{paper.meta}</p>
                <p className="paper-abstract">{paper.summary}</p>
                {paper.href ? (
                  <a className="paper-link" href={paper.href} target="_blank" rel="noreferrer">
                    View paper <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="paper-link is-disabled">Draft in progress</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="research-contact">
        <p className="eyebrow">Research inquiries</p>
        <p>
          For questions about my work or potential collaboration, please write to{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </aside>
    </SiteLayout>
  )
}
