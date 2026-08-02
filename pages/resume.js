import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('resume')

export default function Resume({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <div className="cv-layout">
        <aside className="cv-sidebar">
          <section>
            <p className="eyebrow">{pageContent.fieldsTitle}</p>
            <ul className="plain-list field-sidebar-list">
              {pageContent.fields.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="eyebrow">Contact</p>
            <a className="sidebar-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p>{site.affiliation}</p>
          </section>
        </aside>

        <div className="cv-main">
          <section className="cv-section" aria-labelledby="education-title">
            <div className="cv-section-heading">
              <p>01</p>
              <h2 id="education-title">{pageContent.educationTitle}</h2>
            </div>
            <div className="timeline">
              {pageContent.education.map((item) => (
                <article className="timeline-item" key={`${item.time}-${item.institution}`}>
                  <div>
                    <h3>{item.institution}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section" aria-labelledby="experience-title">
            <div className="cv-section-heading">
              <p>02</p>
              <h2 id="experience-title">{pageContent.experienceTitle}</h2>
            </div>
            <ul className="experience-list">
              {pageContent.experience.map((item) => {
                const [role, detail] = item.split(', ')
                return (
                  <li key={item}>
                    <h3>{role}</h3>
                    <p>{detail || item}</p>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="cv-section" aria-labelledby="skills-title">
            <div className="cv-section-heading">
              <p>03</p>
              <h2 id="skills-title">{pageContent.skillsTitle}</h2>
            </div>
            <dl className="skills-list">
              {pageContent.skills.map((item) => {
                const [label, ...value] = item.split(': ')
                return (
                  <div key={item}>
                    <dt>{label}</dt>
                    <dd>{value.join(': ')}</dd>
                  </div>
                )
              })}
            </dl>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}
