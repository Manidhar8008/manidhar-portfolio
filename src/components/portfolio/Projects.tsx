export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 / Projects</span>
          <h2 className="section-title">
            Proof of <em>execution</em>
          </h2>
        </div>

        <div className="projects-grid">
          {/* FLAGSHIP */}
          <div className="project-card flagship">
            <div className="project-header">
              <span className="project-num">FLAGSHIP / 01</span>
              <span className="project-status status-building">BUILDING</span>
            </div>

            <div className="flagship-grid">
              <div>
                <h3 className="project-title">Personal AI Discipline System</h3>
                <p className="project-desc">
                  A self-built agentic AI system that improves discipline, habits,
                  and productivity through behavioral tracking and LLM-driven
                  reinforcement loops. This is the core of what became JANANI.AI —
                  built to solve real personal inconsistency, not as a tutorial
                  project.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Ollama</span>
                  <span className="tech-tag">Behavioral AI</span>
                </div>
              </div>

              <div>
                <ul className="project-features">
                  <li>Daily task tracking + behavioral logging</li>
                  <li>Routine alerts (yoga, focus blocks)</li>
                  <li>LLM-based personalized feedback loop</li>
                  <li>PostgreSQL-backed memory system</li>
                  <li>Modular agent design (Self-AI, Consumption-AI)</li>
                  <li>Evolving into multi-agent ecosystem</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ALGO TRADING */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-num">02</span>
              <span className="project-status status-live">
                LIVE ON GITHUB
              </span>
            </div>
            <h3 className="project-title">Algo-Trading ML Automation</h3>
            <p className="project-desc">
              End-to-end trading automation system using rule-based + ML
              logic. RSI and moving average crossover strategies with
              automated signal generation and Google Sheets logging.
            </p>
            <ul className="project-features">
              <li>RSI + MA crossover strategy</li>
              <li>Stock data API integration</li>
              <li>Automated trade signal generation</li>
              <li>Google Sheets logging pipeline</li>
            </ul>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">APIs</span>
              <span className="tech-tag">Data Analysis</span>
            </div>
          </div>

          {/* HIRING ASSISTANT */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-num">03</span>
              <span className="project-status status-live">COMPLETE</span>
            </div>
            <h3 className="project-title">AI Hiring Assistant Chatbot</h3>
            <p className="project-desc">
              LLM-powered chatbot simulating a hiring assistant with
              context-aware conversation, technical question generation, and
              candidate evaluation logic.
            </p>
            <ul className="project-features">
              <li>Context-aware multi-turn conversation</li>
              <li>Technical question generation by role</li>
              <li>Candidate interaction flow design</li>
              <li>Evaluation + scoring logic</li>
            </ul>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">LLM APIs</span>
              <span className="tech-tag">Streamlit</span>
            </div>
          </div>

          {/* JANANI */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-num">04</span>
              <span className="project-status status-mvp">MVP STAGE</span>
            </div>
            <h3 className="project-title">JANANI.AI</h3>
            <p className="project-desc">
              40-day behavioral transformation AI companion. Privacy-first,
              local inference. Built for Tier-2 India students and young
              professionals. GTM targeting colleges and the Indian diaspora in
              Singapore/UAE.
            </p>
            <ul className="project-features">
              <li>40-day transformation framework</li>
              <li>Local inference via Ollama (privacy-first)</li>
              <li>Whisper for voice input</li>
              <li>FastAPI + PostgreSQL backend</li>
            </ul>
            <div className="project-tech">
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Ollama</span>
              <span className="tech-tag">Whisper</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>

          {/* NETFLIX */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-num">05</span>
              <span className="project-status status-live">COMPLETE</span>
            </div>
            <h3 className="project-title">Netflix Data Analysis</h3>
            <p className="project-desc">
              End-to-end data analysis project extracting business insights
              from the Netflix dataset — cleaning, trend analysis, and
              visualization dashboards.
            </p>
            <ul className="project-features">
              <li>Data cleaning and preprocessing</li>
              <li>Trend and content analysis</li>
              <li>Business insight dashboards</li>
            </ul>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">Visualization</span>
            </div>
          </div>

          {/* RETAIL */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-num">06</span>
              <span className="project-status status-live">COMPLETE</span>
            </div>
            <h3 className="project-title">UCI Online Retail Analysis</h3>
            <p className="project-desc">
              Structured data analytics project on customer and sales data —
              transaction analysis, customer segmentation, and revenue pattern
              modeling.
            </p>
            <ul className="project-features">
              <li>Transaction cohort analysis</li>
              <li>Customer segmentation (RFM)</li>
              <li>Revenue pattern modeling</li>
            </ul>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

