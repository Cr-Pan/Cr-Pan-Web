import SiteLayout from '../components/SiteLayout'

export default function Contact() {
  return (
    <SiteLayout title="Contact" subtitle="Feel free to reach out for research discussions or collaboration">
      <section className="card contact-grid">
        <div>
          <h2>Primary Contact</h2>
          <p>
            Email:{' '}
            <a href="mailto:pancrecon123@gmail.com" className="text-link">
              pancrecon123@gmail.com
            </a>
          </p>
          <p>Research Areas: Industrial Organization, Health Economics</p>
          <p>Location: Madison, WI, USA / Jinan, China</p>
        </div>
        <div>
          <h2>Paper Links</h2>
          <ul className="clean-list">
            <li>
              <a
                href="https://www.dropbox.com/scl/fi/4u5oc5xnglbl7cyadyjul/Credit.pdf?rlkey=mxqnt2oi349s1ssl3rrebf0x0&st=9ekqtrg7&dl=0"
                className="text-link"
              >
                Credit Collections Paper
              </a>
            </li>
            <li>
              <a
                href="https://www.dropbox.com/scl/fi/ckhp4eq5tq1ufbrblibao/cesifo1_wp12030.pdf?rlkey=qvnazf0ih85r4eidet603jlux&st=07teihue&dl=0"
                className="text-link"
              >
                Air Pollution & Sentiment Paper
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  )
}
