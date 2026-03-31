export default function Lab() {
  return (
    <section id="lab">
      <div className="container">
        <div className="lab-inner">
          <div className="lab-text">
            <div className="section-header">
              <span className="section-tag">06 / LAB</span>
              <h2 className="section-title">
                mw.ai
                <br />
                <em>data systems</em>
              </h2>
            </div>

            <p>
              This is where I build and run real AI systems.
            </p>

            <p>
              Current focus:
              <br />• Behavioral AI systems with feedback loops
              <br />• Automation pipelines for content + operations
              <br />• Local LLM optimization (cost + control)
              <br />• SMB-focused AI tools
            </p>

            <p>
              All systems are built → tested → deployed → iterated.
              <br />
              No mock projects. Only working systems.
            </p>

            <div style={{ marginTop: 24 }}>
              <h3 style={{ marginBottom: 8 }}>What I'm actively building</h3>
              <ul style={{ lineHeight: 1.8 }}>
                <li>JANANI AI → behavioral tracking + intervention system</li>
                <li>mw.social → content + analytics automation pipeline</li>
                <li>Sahari AI → SMB automation tools</li>
              </ul>
            </div>

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
              <span className="t-comment"># active AI systems — production focus</span>
              <br />
              <br />

              <span className="t-key">entity</span> <span className="t-muted">=</span>{' '}
              {'{'}
              <br />
              {'\u00A0\u00A0'}
              <span className="t-str">"name"</span>: <span className="t-val">"mw.ai systems"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"founder"</span>: <span className="t-val">"Manidhar"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"mode"</span>: <span className="t-val">"build → deploy → iterate"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"focus"</span>: [<br />
              {'\u00A0\u00A0\u00A0\u00A0'}
              <span className="t-val">"Behavioral AI"</span>,<br />
              {'\u00A0\u00A0\u00A0\u00A0'}
              <span className="t-val">"Automation Systems"</span>,<br />
              {'\u00A0\u00A0\u00A0\u00A0'}
              <span className="t-val">"LLM Infrastructure"</span>,<br />
              {'\u00A0\u00A0\u00A0\u00A0'}
              <span className="t-val">"SMB Tools"</span><br />
              {'\u00A0\u00A0'}
              ]<br />
              {'}'}<br />

              <br />

              <span className="t-key">systems</span> <span className="t-muted">=</span>{' '}
              {'{'}<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"JANANI_AI"</span>: <span className="t-val">"live_mvp"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"mw_social"</span>: <span className="t-val">"automation_pipeline"</span>,<br />
              {'\u00A0\u00A0'}
              <span className="t-str">"Sahari_AI"</span>: <span className="t-val">"in_progress"</span><br />
              {'}'}<br />

              <br />

              <span className="t-comment"># status: execution mode</span>
              <br />
              <span className="t-key">print</span>(<span className="t-val">"shipping"</span>, <span className="t-val">"talking"</span>)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}