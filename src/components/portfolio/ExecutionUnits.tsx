import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function ExecutionUnits() {
  return (
    <Section id="projects">
      <Heading eyebrow="Other Builds" title="The rest of the workshop." description="Smaller systems that show the range: orchestration, career automation and operational tooling." />

      <div className="workshop-grid">
        {FOUNDER_NARRATIVE.executionUnits.map((unit, index) => (
          <article className="workshop-card" key={unit.title}>
            <span className="workshop-card__index">{String(index + 1).padStart(2, '0')}</span>
            <p className="eyebrow">{unit.context}</p>
            <h3>{unit.title}</h3>
            <p>{unit.detail}</p>
            <div className="workshop-card__split">
              <div><span>Replaces</span><p>{unit.replaces}</p></div>
              <div><span>Drives</span><p>{unit.outcome}</p></div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
