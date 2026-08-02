import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { getSiteContent } from '../lib/siteContent'

export function getStaticProps() {
  const content = getSiteContent()

  return {
    props: {
      site: content.site,
      pageContent: {
        title: 'Research',
        subtitle: 'Research materials are currently being updated.',
      },
    },
  }
}

export default function Research({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="research-hold section-rule">
        <p className="eyebrow">Temporarily unavailable</p>
        <h2>Research materials are being updated.</h2>
        <p>Working papers and project details will return in a future update.</p>
        <Link href="/" className="button button-quiet">
          Back to homepage <span aria-hidden="true">→</span>
        </Link>
      </section>
    </SiteLayout>
  )
}
