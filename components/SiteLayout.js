import Link from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/resume', label: 'CV' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteLayout({ title, subtitle, children }) {
  const router = useRouter()

  return (
    <div className="site-shell">
      <div className="bg-shape bg-shape-a" />
      <div className="bg-shape bg-shape-b" />
      <div className="container">
        <header className="site-header card">
          <div>
            <p className="kicker">Personal Academic Website</p>
            <h1>{title}</h1>
            {subtitle ? <p className="subtitle">{subtitle}</p> : null}
          </div>
          <nav className="top-nav" aria-label="Main navigation">
            {navItems.map((item) => {
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

        <main>{children}</main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Your Name · Last updated: February 2026</p>
        </footer>
      </div>
    </div>
  )
}
