export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <div className="section-header">
              <span className="section-tag">06 / Contact</span>
              <h2 className="section-title">
                Let's <em>build</em> something
              </h2>
            </div>
            <p>
              Open to AI/ML/Data roles, freelance AI systems work, and
              collaboration on agentic AI projects.
            </p>

            <div className="contact-links">
              <a href="mailto:manidhar@mw.ai" className="contact-link">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-val">manidhar@mw.ai</span>
              </a>
              <a
                href="https://linkedin.com"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-val">
                  linkedin.com/in/manidhar
                </span>
              </a>
              <a
                href="https://github.com"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-val">github.com/manidhar</span>
              </a>
              <a
                href="https://instagram.com"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">Instagram</span>
                <span className="contact-link-val">@mw.ai.systems</span>
              </a>
            </div>
          </div>

          <div className="cta-block">
            <h3>Why hire me?</h3>
            <p>
              I don't bring tutorials. I bring shipped systems, enterprise
              operational experience, and a rare combination of behavioral
              psychology + AI execution.
            </p>
            <div className="cta-options">
              <div className="cta-option">6+ real projects with working code on GitHub</div>
              <div className="cta-option">Enterprise background at Cognizant + Genpact</div>
              <div className="cta-option">
                Builds fast with Python + FastAPI + LLMs + local AI
              </div>
              <div className="cta-option">Psychology-driven design — systems that actually change behavior</div>
              <div className="cta-option">Running own AI entity (mw.ai) — founder mindset</div>
              <div className="cta-option">Execution-first: build → test → ship → iterate</div>
            </div>
            <div style={{ marginTop: 32 }}>
              <a href="mailto:manidhar@mw.ai" className="btn btn-primary">
                Hire Manidhar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

