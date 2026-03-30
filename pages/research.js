import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('research')

export default function Research({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="card section-panel">
        <h2>{pageContent.workingPapersTitle}</h2>
        {pageContent.papers.map((paper) => (
          <div className="paper-item" key={paper.title}>
            <h3>
              {paper.href ? (
                <a href={paper.href} className="text-link">
                  {paper.title}
                </a>
              ) : (
                paper.title
              )}
            </h3>
            <p className="paper-meta">{paper.meta}</p>
            <p>{paper.summary}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  )
}
