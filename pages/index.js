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
  const subtitleLines = pageContent.subtitle?.split(' · ').filter(Boolean) ?? []
  const flagBanners = [
    {
      school: 'Shandong University of Finance and Economics',
      shortName: 'SDUFE',
      imageSrc: withBasePath('/images/flags/shandong-university-of-finance-and-economics.jpeg', router.basePath),
    },
    {
      school: 'Shandong University',
      shortName: 'Shandong U',
      imageSrc: withBasePath('/images/flags/shandong-university.jpeg', router.basePath),
    },
    {
      school: 'University of Wisconsin-Madison',
      shortName: 'UW-Madison',
      imageSrc: withBasePath('/images/flags/uw-madison.png', router.basePath),
    },
    {
      school: 'Emory University',
      shortName: 'Emory',
      imageSrc: withBasePath('/images/flags/emory-university.jpeg', router.basePath),
    },
  ]

  return (
    <SiteLayout
      title={pageContent.title}
      subtitle={pageContent.subtitle}
      site={site}
      showPageHeading={false}
    >
      <section className="flags-showcase" aria-label="Academic flags">
        <div className="flags-showcase-header">
          <p className="section-kicker">Academic Journey</p>
          <p className="flags-showcase-note">Four institutions, suspended as paper-style hanging banners.</p>
        </div>

        <div className="flags-rack" aria-hidden="true" />

        <div className="flags-grid">
          {flagBanners.map((flag) => (
            <figure
              key={flag.school}
              className="flag-banner"
            >
              <div className="flag-banner-top">
                <span className="flag-banner-tag">{flag.shortName}</span>
              </div>
              <div className="flag-banner-surface">
                <img
                  src={flag.imageSrc}
                  alt={`${flag.school} flag`}
                  className="flag-banner-image"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

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
              <div className="hero-banner-subtitle" aria-label="Academic summary">
                {subtitleLines.map((line) => (
                  <p className="hero-banner-subtitle-line" key={line}>
                    {line}
                  </p>
                ))}
              </div>
              <p className="section-kicker">{pageContent.hero.sectionTitle}</p>
              <p className="hero-banner-text">{pageContent.hero.body}</p>
            </div>
          </section>

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
            <div className="stacked-link-groups">
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
      </section>
    </SiteLayout>
  )
}
