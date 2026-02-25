import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'

export default function Home() {
  return (
    <SiteLayout
      title="姓名（你的名字）"
      subtitle="PhD Candidate in Economics · University Name"
    >
      <section className="card hero-grid">
        <div>
          <h2>研究方向</h2>
          <p>
            我的研究聚焦于 labor economics、applied microeconomics 与 policy
            evaluation，使用实证方法识别劳动市场中的因果效应。
          </p>
          <div className="cta-row">
            <Link href="/research" className="btn btn-primary">
              查看研究
            </Link>
            <Link href="/resume" className="btn btn-secondary">
              查看 CV
            </Link>
          </div>
        </div>
        <div className="meta-list">
          <p>
            <span>机构</span>University Name
          </p>
          <p>
            <span>邮箱</span>your.name@example.com
          </p>
          <p>
            <span>状态</span>Job Market 2026-2027
          </p>
          <p>
            <span>地点</span>City, State, US
          </p>
        </div>
      </section>

      <section className="card">
        <h2>最新动态</h2>
        <ul className="clean-list">
          <li>Feb 2026: Working paper updated with new identification checks.</li>
          <li>Jan 2026: Presented at the Applied Micro Seminar.</li>
          <li>Dec 2025: Awarded departmental research grant.</li>
        </ul>
      </section>

      <section className="card">
        <h2>一句话研究简介</h2>
        <p>
          我关注“政策如何改变个体劳动供给和企业雇佣行为”，并将结构化数据与准自然实验结合。
        </p>
      </section>
    </SiteLayout>
  )
}
