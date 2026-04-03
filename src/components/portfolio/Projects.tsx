import { PORTFOLIO } from '../../content/portfolio'
import CaseStudy from './ui/CaseStudy'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Projects() {
  return (
    <Section id="work">
      <Heading
        eyebrow="Proof of Execution"
        title="Systems built around business outcomes."
        description="Each case study is framed in real-world terms: what was broken, what system got built, and what changed."
      />

      <div className="mt-12 space-y-8">
        {PORTFOLIO.caseStudies.map((study, index) => (
          <CaseStudy key={study.id} study={study} index={index} />
        ))}
      </div>
    </Section>
  )
}
