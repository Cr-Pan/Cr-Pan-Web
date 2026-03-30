import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('resume')

export default function Resume({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="card section-panel">
        <div className="section-title-row">
          <h2>{pageContent.educationTitle}</h2>
        </div>
        <div className="timeline">
          {pageContent.education.map((item) => (
            <div className="timeline-item" key={`${item.time}-${item.institution}`}>
              <p className="time">{item.time}</p>
              <div>
                <h3>{item.institution}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card section-panel">
        <h2>{pageContent.fieldsTitle}</h2>
        <ul className="clean-list">
          {pageContent.fields.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card section-panel">
        <h2>{pageContent.experienceTitle}</h2>
        <ul className="clean-list">
          {pageContent.experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card section-panel">
        <h2>{pageContent.skillsTitle}</h2>
        <ul className="clean-list">
          {pageContent.skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  )
}
