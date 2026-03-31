import { PORTFOLIO } from '../../content/portfolio'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 / ABOUT</span>
          <h2 className="section-title">
            {PORTFOLIO.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 mt-12">
          {/* Left column - Story */}
          <div className="md:col-span-7">
            <div className="prose prose-invert text-lg leading-relaxed text-muted max-w-2xl">
              {PORTFOLIO.about.bullets.map((bullet, i) => (
                <p key={i} className="mb-6">
                  {bullet}
                </p>
              ))}
            </div>
          </div>

          {/* Right column - Roles / Titles */}
          <div className="md:col-span-5">
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-accent text-sm font-mono tracking-widest mb-2">B1</div>
                <h4 className="text-xl font-semibold mb-1">AI Systems Builder</h4>
                <p className="text-muted text-sm">Agentic AI, LLM orchestration, multi-agent architectures, behavioral feedback loops</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-accent text-sm font-mono tracking-widest mb-2">B2</div>
                <h4 className="text-xl font-semibold mb-1">Data Analyst & ML Practitioner</h4>
                <p className="text-muted text-sm">End-to-end pipelines from raw data to business decisions, Power BI, backtesting, Sharpe ratio</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-accent text-sm font-mono tracking-widest mb-2">B3</div>
                <h4 className="text-xl font-semibold mb-1">Behavioral Systems Designer</h4>
                <p className="text-muted text-sm">Psychology-driven tools for discipline, habit formation, and decision automation</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-accent text-sm font-mono tracking-widest mb-2">B4</div>
                <h4 className="text-xl font-semibold mb-1">Financial Systems Thinker</h4>
                <p className="text-muted text-sm">FP&amp;A background meets algorithmic trading automation</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-accent text-sm font-mono tracking-widest mb-2">B5</div>
                <h4 className="text-xl font-semibold mb-1">Solopreneur (mw.ai)</h4>
                <p className="text-muted text-sm">AI-driven SaaS, CRM, and automation tools for SMBs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}