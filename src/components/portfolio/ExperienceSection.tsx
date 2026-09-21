import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <div className="split">
        <Heading
          eyebrow="Experience"
          title="The career path behind the builder."
          description="My background is deliberately mixed: enterprise operations, analytics, automation, then AI systems and founder work."
        />

        <div className="timeline">
          {FOUNDER_NARRATIVE.experience.map((item, index) => (
            <article className="timeline__item" key={item.title}>
              <span className="timeline__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="timeline__context">{item.context}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="timeline__signal">{item.signal}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
