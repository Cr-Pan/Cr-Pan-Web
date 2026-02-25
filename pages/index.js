import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>姓名（你的名字）</h1>
        <p>美国经济学 PhD — 研究领域、职位、机构</p>
        <nav>
          <Link href="/resume">简历</Link> | <Link href="/research">研究</Link> | <Link href="/contact">联系方式</Link>
        </nav>
      </header>

      <main>
        <section className="card">
          <h2>最新动态</h2>
          <p>在这里放置近期工作、会议或新闻。</p>
        </section>

        <section className="card">
          <h2>研究简介</h2>
          <p>一句话概述你的研究。链接到研究页面了解更多。</p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} 你的名字</p>
      </footer>
    </div>
  )
}
