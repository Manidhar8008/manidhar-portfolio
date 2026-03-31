export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">07 / ROADMAP</span>
          <h2 className="section-title">
            Where this <em>is going</em>
          </h2>
        </div>

        <div className="roadmap-list">

          {/* NOW */}
          <div className="roadmap-item">
            <span className="roadmap-time">NOW</span>
            <h3>Shipping & Validation</h3>
            <p>
              Getting JANANI AI into hands of real users.
              <br />
              Tracking behavior, validating feedback loops, and iterating based on actual usage.
            </p>
          </div>

          {/* NEXT */}
          <div className="roadmap-item">
            <span className="roadmap-time">NEXT</span>
            <h3>System Expansion</h3>
            <p>
              Expanding into a multi-agent system:
              <br />
              Self AI, Consumption AI, and Finance AI working on shared memory.
              <br />
              Improving automation pipelines and system reliability.
            </p>
          </div>

          {/* LATER */}
          <div className="roadmap-item">
            <span className="roadmap-time">LATER</span>
            <h3>Productization</h3>
            <p>
              Launching SMB-focused AI tools under mw.ai.
              <br />
              Acquiring first paying users and refining based on real business needs.
            </p>
          </div>

          {/* END */}
          <div className="roadmap-item">
            <span className="roadmap-time">END GOAL</span>
            <h3>Operate at Scale</h3>
            <p>
              Build systems that scale independently
              <br />
              OR
              <br />
              Work directly with founders to build and operate high-impact systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}