import SiteLayout from '../components/SiteLayout'

export default function Contact() {
  return (
    <SiteLayout title="Contact" subtitle="Feel free to reach out for research discussions or collaboration">
      <section className="card contact-grid">
        <div>
          <h2>Primary Contact</h2>
          <p>
            Email:{' '}
            <a href="mailto:your.name@example.com" className="text-link">
              your.name@example.com
            </a>
          </p>
          <p>Office: Building Name, Room 302</p>
          <p>City, State, US</p>
        </div>
        <div>
          <h2>Links</h2>
          <ul className="clean-list">
            <li>
              <a href="#" className="text-link">
                Google Scholar
              </a>
            </li>
            <li>
              <a href="#" className="text-link">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="text-link">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  )
}
