import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function CaseStudiesSection() {
  return (
    <Section id="case-studies" tone="alt">
      <Heading
        eyebrow="Selected Work"
        title="Three systems. Three different problems."
        description="I like projects where the interesting part is the loop between messy inputs, a decision, and an outcome."
      />

      <div className="case-grid">
        {PORTFOLIO.caseStudies.map((study, index) => (
          <article className="case-card" key={study.id}>
            <div className="case-card__topline">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{study.id === 'vasuki-os' ? 'Flagship' : study.id === 'janani-ai' ? 'Behavior' : 'ML'}</span>
            </div>
            <h3>{study.title}</h3>
            <p className="case-card__summary">{study.summary}</p>

            <div className="case-card__section">
              <span className="eyebrow">Problem</span>
              <p>{study.problem}</p>
            </div>

            <div className="case-card__section">
              <span className="eyebrow">Built</span>
              <p>{study.systemBuilt}</p>
            </div>

            <div className="case-card__metrics">
              {study.impact.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <a className="text-link" href={study.githubUrl} target="_blank" rel="noreferrer">View the code ↗</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
