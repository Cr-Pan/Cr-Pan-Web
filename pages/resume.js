import SiteLayout from '../components/SiteLayout'

export default function Resume() {
  return (
    <SiteLayout title="Resume / CV" subtitle="Education, Research Experience, and Skills">
      <section className="card">
        <div className="section-title-row">
          <h2>Education</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <p className="time">01/2024 - 12/2024</p>
            <div>
              <h3>University of Wisconsin-Madison</h3>
              <p>M.S. in Economics · Madison, WI, USA</p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="time">09/2022 - 06/2026</p>
            <div>
              <h3>Shandong University</h3>
              <p>M.S. in Economics · Jinan, China</p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="time">09/2016 - 06/2020</p>
            <div>
              <h3>Shandong University of Finance and Economics</h3>
              <p>B.A. in Economics · Jinan, China</p>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Fields of Interests</h2>
        <ul className="clean-list">
          <li>Industrial Organization</li>
          <li>Health Economics</li>
        </ul>
      </section>

      <section className="card">
        <h2>Research Experience</h2>
        <ul className="clean-list">
          <li>Research Assistant for Prof. Panle Barwick, University of Wisconsin-Madison (05/2025 - Present)</li>
          <li>Full-time Research Assistant, National School of Development, Peking University (07/2025 - Present)</li>
        </ul>
      </section>

      <section className="card">
        <h2>Other Skills</h2>
        <ul className="clean-list">
          <li>Languages: Mandarin Chinese (Native), English (Fluent)</li>
          <li>Programming: R, Python, Stata, ArcGIS, QGIS, LaTeX</li>
        </ul>
      </section>
    </SiteLayout>
  )
}
