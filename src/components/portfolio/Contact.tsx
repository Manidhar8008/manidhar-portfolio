export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="section-header">
              <span className="section-tag">08 / CONTACT</span>
              <h2 className="section-title">
                Let’s <em>build</em>
                <br />
                something
              </h2>
            </div>

            <p>
              If you're a founder looking for someone who can execute fast
              and take ownership — I’m in.
            </p>

            <div className="contact-links">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">patimanidhar23@gmail.com</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">LINKEDIN</span>
                <span className="contact-value">
                  https://www.linkedin.com/in/manidhar-pati-1723811b0/
                </span>
              </div>

              <div className="contact-item">
                <span className="contact-label">GITHUB</span>
                <span className="contact-value">
                  https://github.com/Manidhar8008
                </span>
              </div>

              <div className="contact-item">
                <span className="contact-label">INSTAGRAM</span>
                <span className="contact-value">https://www.instagram.com/manidharpati/</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-card">
            <h3>Why you should talk to me</h3>

            <ul className="contact-points">
              <li>I don’t need hand-holding</li>
              <li>I can take an idea and ship it end-to-end</li>
              <li>I work fast and iterate using real feedback</li>
              <li>I understand both systems and business impact</li>
              <li>I’m comfortable working in ambiguity</li>
            </ul>

            <p style={{ marginTop: 16 }}>
              If you're building something and need someone who can execute — I'm in.
            </p>

            <a href="mailto:manidhar@mw.ai" className="btn btn-primary">
              Let’s Build →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}