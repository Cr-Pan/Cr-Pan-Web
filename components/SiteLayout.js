import Link from 'next/link'
import { useRouter } from 'next/router'

const defaultNavItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/resume', label: 'CV' },
]

export default function SiteLayout({ title, subtitle, site, children, showPageHeading = true }) {
  const router = useRouter()
  const navigation = site?.navigation?.length ? site.navigation : defaultNavItems
  const kicker = site?.kicker ?? 'Personal Academic Website'
  const siteName = site?.footerName ?? title
  const footerName = site?.footerName ?? title
  const footerLastUpdated = site?.footerLastUpdated

  return (
    <div className="site-shell">
      <div className="container">
        <header className="site-header">
          <div className="site-brand">
            <p className="kicker">{kicker}</p>
            <Link href="/" className="site-brand-link">
              {siteName}
            </Link>
          </div>
          <nav className="top-nav" aria-label="Main navigation">
            {navigation.map((item) => {
              const active = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? 'nav-link is-active' : 'nav-link'}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </header>

        {showPageHeading ? (
          <section className="page-heading">
            <p className="page-kicker">{kicker}</p>
            <h1>{title}</h1>
            {subtitle ? <p className="subtitle">{subtitle}</p> : null}
          </section>
        ) : null}

        <main className="page-body">{children}</main>

        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {footerName}
            {footerLastUpdated ? ` · Last updated: ${footerLastUpdated}` : ''}
          </p>
        </footer>
      </div>
    </div>
  )
}
