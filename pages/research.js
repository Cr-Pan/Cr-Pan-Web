import SiteLayout from '../components/SiteLayout'

export default function Research() {
  return (
    <SiteLayout title="Research / Papers" subtitle="Working Papers, Publications, and Ongoing Projects">
      <section className="card">
        <h2>Working Papers</h2>
        <div className="paper-item">
          <h3>Gaming the Metric: Ratio-Based Surgery Targets and Hospital Behavior in China</h3>
          <p className="paper-meta">Working Paper · Solo Author</p>
          <p>
            This paper studies distortions in Chinese hospitals after a 2019 reform tied presidents&apos;
            evaluations to the share of high-complexity surgeries. Using surgical records and a regression
            discontinuity design around a 2020 leadership transition, I find reductions in routine surgeries
            and increased Level-4 coding intensity.
          </p>
        </div>
        <div className="paper-item">
          <h3>
            <a
              href="https://www.dropbox.com/scl/fi/4u5oc5xnglbl7cyadyjul/Credit.pdf?rlkey=mxqnt2oi349s1ssl3rrebf0x0&st=9ekqtrg7&dl=0"
              className="text-link"
            >
              Can Credit Collections on Traffic Violations Save Lives? Evidence from Chinese Auto Insurance
              Market
            </a>
          </h3>
          <p className="paper-meta">
            R&amp;R (Resubmitted) in Regional Science and Urban Economics · with Ying Liu, Lihua Qin, Fangjie
            Zhang
          </p>
          <p>
            Using a quasi-experimental policy change and individual underwriting/claims data in the Chinese
            auto insurance market, we estimate the causal effect of credit-based traffic-violation sanctions
            on road safety. The policy significantly reduced fatalities and injuries.
          </p>
        </div>
        <div className="paper-item">
          <h3>
            <a
              href="https://www.dropbox.com/scl/fi/ckhp4eq5tq1ufbrblibao/cesifo1_wp12030.pdf?rlkey=qvnazf0ih85r4eidet603jlux&st=07teihue&dl=0"
              className="text-link"
            >
              Can Air Pollution Affect Our Sentiments: Social Media Evidence from Japan
            </a>
          </h3>
          <p className="paper-meta">CESifo Working Paper No. 12030 · with Zehao Lin, Ying Liu, Lutz Sager</p>
          <p>
            This study identifies the impact of air pollution on sentiment using city-day panel data from
            Japanese cities and wind-based instruments for PM2.5/PM10. The findings show sizable declines in
            sentiment, especially for negative emotions such as anger, anxiety, and sadness.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Current Research Focus</h2>
        <p>
          I work on applied microeconomics questions in industrial organization and health economics, with
          interests in policy design, incentives, and behavioral responses in administrative data.
        </p>
      </section>
    </SiteLayout>
  )
}
