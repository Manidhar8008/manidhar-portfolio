import { PORTFOLIO } from '../../content/portfolio'
import CaseStudy from './ui/CaseStudy'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Projects() {
  return (
    <Section id="work">
      <Heading
        eyebrow="Proof of Execution"
        title="Systems built around outcomes."
        description="Tap to open what matters: problem → system → impact."
      />

      <div className="mt-12 space-y-8" data-zone="projects" data-intent="github">
        {PORTFOLIO.caseStudies.map((study, index) => (
          <CaseStudy key={study.id} study={study} index={index} />
        ))}
      </div>
    </Section>
  )
}
