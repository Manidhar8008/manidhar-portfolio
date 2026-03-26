export default function Lab() {
  return (
    <section id="lab">
      <div className="container">
        <div className="lab-inner">
          <div className="lab-text">
            <div className="section-header">
              <span className="section-tag">04 / Experimental AI Lab</span>
              <h2 className="section-title">
                mw.ai
                <br />
                <em>data systems</em>
              </h2>
            </div>
            <p>
              My personal AI lab and solopreneur entity. Systems are built,
              tested, and evolved here — not for demos, but for real
              deployment.
            </p>
            <p>
              Current experiments: multi-agent behavioral ecosystems, social
              media automation pipelines, local LLM fine-tuning with
              LoRA/Unsloth, and AI-driven SMB automation tools.
            </p>
            <p>The lab is the company. The company is the proof.</p>
            <div style={{ marginTop: 32 }}>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ marginRight: 12 }}
              >
                Work Together
              </a>
              <a
                href="https://github.com"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="lab-terminal">
            <div className="terminal-bar">
              <div
                className="terminal-dot"
                style={{ background: '#f05454' }}
              />
              <div
                className="terminal-dot"
                style={{ background: '#f0a05a' }}
              />
              <div className="terminal-dot" style={{ background: '#00f5c4' }} />
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'var(--muted)',
                  marginLeft: 8,
                }}
              >
                mw.ai / systems.py
              </span>
            </div>
            <div className="terminal-code">
              <span className="t-comment"># mw.ai data systems — active stack</span>
              <br />
              <br />
              <span className="t-key">entity</span> <span className="t-muted">=</span>{' '}
              {'{'}
              <br />
              {'\u00A0\u00A0'}
              <span className="t-str">"name"</span>: <span className="t-val">"mw.ai data systems"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"founder"</span>: <span className="t-val">"Manidhar"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"base"</span>: <span className="t-val">"Warangal / Bengaluru"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"focus"</span>: [<br />
              {'\u00A0\u00A0\u00A0\u00A0'}
              <span className="t-val">"AI SaaS"</span>, <span className="t-val">"CRM Automation"</span>,<br />
              {'\u00A0\u00A0\u00A0\u00A0'}
              <span className="t-val">"Behavioral AI"</span>, <span className="t-val">"SMB Tools"</span><br />
              {'\u00A0\u00A0'}
              ]<br />
              {'}'}<br />
              <br />
              <span className="t-key">products</span> <span className="t-muted">=</span>{' '}
              {'{'}<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"JANANI.AI"</span>: <span className="t-val">"mvp_stage"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"mw.social"</span>: <span className="t-val">"beta"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"Sahari.AI"</span>: <span className="t-val">"building"</span><br />
              {'}'}<br />
              <br />
              <span className="t-comment"># status: actively building</span>
              <br />
              <span className="t-key">print</span>(<span className="t-val">"execution_mode: ON"</span>)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

