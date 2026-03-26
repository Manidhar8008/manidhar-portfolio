export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner" style={{ position: 'relative' }}>
          <div
            className="glow-orb"
            style={{
              width: 500,
              height: 500,
              background: 'rgba(0,245,196,0.04)',
              top: -200,
              left: -100,
            }}
          />
          <div
            className="glow-orb"
            style={{
              width: 400,
              height: 400,
              background: 'rgba(124,92,252,0.04)',
              top: 100,
              right: -50,
            }}
          />

          <div className="hero-tag">
            Available for AI / Data roles · Remote or Hyderabad
          </div>
          <h1 className="hero-name">
            MANI<span>DHAR</span>
            <span className="cursor"></span>
          </h1>
          <p className="hero-subtitle">
            <strong>AI Systems Builder.</strong> I combine behavioral
            psychology, data analytics, and agentic AI to build tools that
            solve real problems — not demos, not tutorials. Execution-first
            mindset from a non-traditional path.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              See My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">6+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div>
              <div className="stat-num">3yr</div>
              <div className="stat-label">Building AI Systems</div>
            </div>
            <div>
              <div className="stat-num">2x</div>
              <div className="stat-label">Enterprise Experience</div>
            </div>
            <div>
              <div className="stat-num">∞</div>
              <div className="stat-label">Systems in Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

