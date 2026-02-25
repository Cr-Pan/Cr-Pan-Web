import SiteLayout from '../components/SiteLayout'

export default function Resume() {
  return (
    <SiteLayout title="简历 / CV" subtitle="Education, Positions, Teaching and Service">
      <section className="card">
        <div className="section-title-row">
          <h2>简历概览</h2>
          <a href="#" className="btn btn-secondary">
            下载完整 CV (PDF)
          </a>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <p className="time">2022 - Present</p>
            <div>
              <h3>PhD in Economics, University Name</h3>
              <p>Fields: Labor Economics, Applied Microeconomics</p>
            </div>
          </div>
          <div className="timeline-item">
            <p className="time">2020 - 2022</p>
            <div>
              <h3>MA in Economics, University Name</h3>
              <p>Thesis: Title of Master Thesis</p>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Teaching</h2>
        <ul className="clean-list">
          <li>Teaching Assistant, Econometrics I (Fall 2025)</li>
          <li>Teaching Assistant, Microeconomic Theory (Spring 2025)</li>
        </ul>
      </section>

      <section className="card">
        <h2>Service & Awards</h2>
        <ul className="clean-list">
          <li>Department Research Grant, 2025</li>
          <li>Student Workshop Organizer, 2024-2026</li>
        </ul>
      </section>
    </SiteLayout>
  )
}
