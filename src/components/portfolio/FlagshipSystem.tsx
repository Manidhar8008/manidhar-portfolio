import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function FlagshipSystem() {
  const flagship = FOUNDER_NARRATIVE.flagship

  return (
    <Section id="flagship">
      <div className="flagship">
        <Heading eyebrow={flagship.eyebrow} title={flagship.title} description={flagship.operatorSignal} />

        <div className="flagship__grid">
          <article className="story-card story-card--dark">
            <p className="eyebrow">The problem</p>
            <p className="story-card__lead">{flagship.problem}</p>
          </article>

          <article className="story-card">
            <p className="eyebrow">The system</p>
            <p className="story-card__lead">{flagship.systemBuilt}</p>
          </article>
        </div>

        <div className="architecture">
          <div className="architecture__intro">
            <p className="eyebrow">How it works</p>
            <p>Memory → retrieval → reasoning → action → feedback. The point is a durable personal operating loop.</p>
          </div>
          <div className="architecture__flow">
            {[
              ['01', 'Ingest', 'Capture files, notes, projects and events'],
              ['02', 'Remember', 'Build structured memory across entities and relationships'],
              ['03', 'Reason', 'Retrieve the right context before reasoning'],
              ['04', 'Act', 'Turn reasoning into useful actions'],
              ['05', 'Learn', 'Keep the memory and workflow state improving'],
            ].map(([index, title, detail], stepIndex) => (
              <div className="architecture__step" key={title}>
                <span className="architecture__index">{index}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </div>
                {stepIndex < 4 ? <span className="architecture__arrow" aria-hidden="true">→</span> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="metric-grid">
          {flagship.impact.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
              <span>{metric.detail}</span>
            </article>
          ))}
        </div>

        <div className="replacement-row">
          <span className="eyebrow">What changes</span>
          {flagship.replaces.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </Section>
  )
}
