import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Container from './ui/Container'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Container className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{FOUNDER_NARRATIVE.hero.eyebrow}</p>
          <h1>{FOUNDER_NARRATIVE.hero.headline}</h1>
          <p className="hero__lede">{FOUNDER_NARRATIVE.hero.subheadline}</p>
          <p className="hero__proof">{FOUNDER_NARRATIVE.hero.proofLine}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#flagship">See Vasuki OS</a>
            <a className="button button--secondary" href="#case-studies">Explore my work</a>
          </div>

          <div className="hero__signals" aria-label="What I build">
            {FOUNDER_NARRATIVE.hero.replacementSignals.map((signal, index) => (
              <div className="signal-card" key={signal}>
                <span className="signal-card__index">{String(index + 1).padStart(2, '0')}</span>
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero__aside" aria-label="Working identity">
          <div className="portrait-card">
            <div className="portrait-card__mark">MP</div>
            <div>
              <p className="portrait-card__label">Founder / Systems Builder</p>
              <p className="portrait-card__name">Manidhar Pati</p>
            </div>
          </div>

          <div className="hero__note">
            <span className="eyebrow">The thread</span>
            <p>Operations taught me where systems break. AI gives me the leverage to rebuild the loop.</p>
          </div>
        </aside>
      </Container>
    </section>
  )
}
