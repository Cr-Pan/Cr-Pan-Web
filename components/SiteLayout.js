import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { withBasePath } from '../lib/assetPath'

const defaultNavItems = [
  { href: '/', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/resume', label: 'CV' },
]

const THEME_STORAGE_KEY = 'congrong-pan-theme'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const activeIsDark = document.documentElement.dataset.theme === 'dark'
    const themeColor = document.querySelector('meta[name="theme-color"]')

    if (themeColor) {
      themeColor.setAttribute('content', activeIsDark ? '#07111f' : '#012169')
    }

    setIsDark(activeIsDark)
  }, [])

  function toggleTheme() {
    const nextIsDark = !isDark
    const root = document.documentElement
    const themeColor = document.querySelector('meta[name="theme-color"]')

    if (nextIsDark) {
      root.dataset.theme = 'dark'
    } else {
      delete root.dataset.theme
    }

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? 'dark' : 'light')
    } catch (_error) {
      // The theme still works when browser storage is unavailable.
    }

    if (themeColor) {
      themeColor.setAttribute('content', nextIsDark ? '#07111f' : '#012169')
    }

    setIsDark(nextIsDark)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
    </button>
  )
}

export default function SiteLayout({ title, subtitle, site, children, showPageHeading = true }) {
  const router = useRouter()
  const navigation = site?.navigation?.length ? site.navigation : defaultNavItems
  const siteName = site?.footerName ?? title
  const pageTitle = showPageHeading ? `${title} — ${siteName}` : `${siteName} — Economics`
  const description = subtitle || site?.description
  const ogImagePath = withBasePath('/og.png', router.basePath)
  const ogImage = site?.siteUrl ? `${site.siteUrl}/og.png` : ogImagePath

  return (
    <div className="site-shell">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="theme-color" content="#012169" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="emory-rule" aria-hidden="true">
        <span />
      </div>

      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="site-brand-link" aria-label={`${siteName}, home`}>
            <span className="brand-name">{siteName}</span>
            <span className="brand-field">Economics</span>
          </Link>

          <div className="header-actions">
            <nav className="top-nav" aria-label="Main navigation">
              {navigation.map((item) => {
                const active = router.pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={active ? 'nav-link is-active' : 'nav-link'}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main-content" className="container">
        {showPageHeading ? (
          <section className="page-heading">
            <p className="eyebrow">{site?.kicker ?? 'Academic profile'}</p>
            <h1>{title}</h1>
            {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
          </section>
        ) : null}

        <div className="page-body">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <p className="footer-name">{siteName}</p>
            <p>{site?.affiliation ?? 'Emory University · Department of Economics'}</p>
          </div>
          <div className="footer-contact">
            {site?.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : null}
            <p>
              © {new Date().getFullYear()}
              {site?.footerLastUpdated ? ` · Updated ${site.footerLastUpdated}` : ''}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
