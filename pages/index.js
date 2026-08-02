import Link from 'next/link'
import { useRouter } from 'next/router'
import SiteLayout from '../components/SiteLayout'
import { withBasePath } from '../lib/assetPath'
import { getSiteContent } from '../lib/siteContent'

export function getStaticProps() {
  const content = getSiteContent()

  return {
    props: {
      site: content.site,
      pageContent: content.home,
      researchContent: content.research,
    },
  }
}

export default function Home({ site, pageContent, researchContent }) {
  const router = useRouter()
  const profileImageSrc = withBasePath(pageContent.profileImage?.src, router.basePath)
  const campusImageSrc = withBasePath(pageContent.campusImage?.src, router.basePath)

  return (
    <SiteLayout
      title={pageContent.title}
      subtitle={pageContent.subtitle}
      site={site}
      showPageHeading={false}
    >
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Incoming Ph.D. Student · Fall 2026</p>
          <h1 className="hero-name">{pageContent.title}</h1>
          <p className="hero-role">{pageContent.subtitle}</p>
          <p className="hero-intro">{pageContent.hero.body}</p>

          <div className="hero-actions" aria-label="Profile links">
            {pageContent.ctaButtons.map((button) => (
              <Link
                key={`${button.href}-${button.label}`}
                href={button.href}
                className={button.variant === 'secondary' ? 'button button-quiet' : 'button button-primary'}
              >
                {button.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <a className="button button-text" href={`mailto:${site.email}`}>
              Email me
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className="profile-facts">
            {pageContent.metaItems.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.label.toLowerCase() === 'email' ? (
                    <a href={`mailto:${item.value}`}>{item.value}</a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="portrait-figure">
          <div className="portrait-frame">
            <img
              src={profileImageSrc}
              alt={pageContent.profileImage?.alt}
              className="profile-portrait"
            />
          </div>
          <figcaption>
            <span>Emory University</span>
            <span>Department of Economics</span>
          </figcaption>
        </figure>
      </section>

      <section className="research-overview section-rule">
        <div className="section-heading">
          <p className="eyebrow">Research</p>
          <h2>Questions at the intersection of firms, health, and technology.</h2>
        </div>
        <p className="section-lead">
          I use applied microeconomics and administrative data to study how incentives and new
          technologies shape decisions inside health-care organizations.
        </p>
      </section>

      <section className="selected-work" aria-labelledby="selected-research-title">
        <div className="section-title-row">
          <h2 id="selected-research-title">Selected research</h2>
          <Link href="/research" className="inline-link">
            All research <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="paper-list home-paper-list">
          {researchContent.papers.map((paper, index) => (
            <article className="paper-row" key={paper.title}>
              <p className="paper-number">{String(index + 1).padStart(2, '0')}</p>
              <div className="paper-copy">
                <p className="paper-status">{paper.status ?? paper.meta.split('·')[0].trim()}</p>
                <h3>
                  {paper.href ? (
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.title}
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>
                <p>{paper.summary}</p>
              </div>
              {paper.href ? (
                <a
                  className="paper-arrow"
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${paper.title}`}
                >
                  ↗
                </a>
              ) : (
                <span className="paper-arrow is-muted" aria-hidden="true">—</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="news-section section-rule" aria-labelledby="news-title">
        <div className="section-heading compact-heading">
          <p className="eyebrow">News</p>
          <h2 id="news-title">Recent updates</h2>
        </div>
        <ol className="news-list">
          {pageContent.recentUpdates.map((item) => {
            const [date, ...update] = item.split(': ')
            return (
              <li key={item}>
                <time>{date}</time>
                <p>{update.join(': ') || item}</p>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="emory-band">
        <img src={campusImageSrc} alt={pageContent.campusImage?.alt} />
        <div className="emory-band-overlay">
          <p className="eyebrow light-eyebrow">Next chapter</p>
          <h2>Emory Economics · Atlanta</h2>
          <p>Beginning the Ph.D. program in Fall 2026.</p>
        </div>
      </section>

      <section className="academic-links section-rule" aria-labelledby="academic-links-title">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Academic network</p>
          <h2 id="academic-links-title">Institutions &amp; researchers</h2>
        </div>
        <div className="link-columns">
          {pageContent.recommendedLinks.groups.map((group) => (
            <div className="link-column" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
