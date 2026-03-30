import Link from 'next/link'
import { useRouter } from 'next/router'
import SiteLayout from '../components/SiteLayout'
import { withBasePath } from '../lib/assetPath'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('home')

export default function Home({ site, pageContent }) {
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
      <section className="home-layout">
        <aside className="profile-rail">
          <div className="profile-card">
            <div className="profile-portrait-wrap">
              <img
                src={profileImageSrc}
                alt={pageContent.profileImage?.alt}
                className="profile-portrait"
              />
            </div>
            <p className="profile-kicker">{site?.kicker}</p>
            <h1 className="profile-name">{pageContent.title}</h1>
            <p className="profile-subtitle">{pageContent.subtitle}</p>

            <div className="profile-meta-list">
              {pageContent.metaItems.map((item) => (
                <p key={item.label}>
                  <span>{item.label}</span>
                  {item.label.toLowerCase() === 'email' ? (
                    <a href={`mailto:${item.value}`} className="text-link">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              ))}
            </div>

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
        </aside>

        <div className="home-main">
          <section className="hero-banner">
            <div className="hero-banner-media">
              <img
                src={campusImageSrc}
                alt={pageContent.campusImage?.alt}
                className="hero-banner-image"
              />
            </div>
            <div className="hero-banner-copy">
              <p className="section-kicker">{pageContent.hero.sectionTitle}</p>
              <h2 className="hero-banner-title">{pageContent.subtitle}</h2>
              <p className="hero-banner-text">{pageContent.hero.body}</p>
            </div>
          </section>

          <div className="home-section-grid">
            <section className="card section-panel">
              <h2>{pageContent.recentUpdatesTitle}</h2>
              <ul className="clean-list">
                {pageContent.recentUpdates.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="card section-panel">
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
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
