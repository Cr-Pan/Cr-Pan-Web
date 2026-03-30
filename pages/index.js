import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('home')

export default function Home({ site, pageContent }) {
  return (
    <SiteLayout
      title={pageContent.title}
      subtitle={pageContent.subtitle}
      site={site}
    >
      <section className="card hero-grid">
        <div>
          <h2>{pageContent.hero.sectionTitle}</h2>
          <p>{pageContent.hero.body}</p>
          <div className="cta-row">
            {pageContent.ctaButtons.map((button) => (
              <Link
                key={`${button.href}-${button.label}`}
                href={button.href}
                className={button.variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary'}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="meta-list">
          {pageContent.metaItems.map((item) => (
            <p key={item.label}>
              <span>{item.label}</span>
              {item.value}
            </p>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>{pageContent.recentUpdatesTitle}</h2>
        <ul className="clean-list">
          {pageContent.recentUpdates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>{pageContent.recommendedLinks.sectionTitle}</h2>
        <div className="link-groups">
          {pageContent.recommendedLinks.groups.map((group) => (
            <div className="link-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="link-list">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>{pageContent.summary.sectionTitle}</h2>
        <p>{pageContent.summary.body}</p>
      </section>
    </SiteLayout>
  )
}
