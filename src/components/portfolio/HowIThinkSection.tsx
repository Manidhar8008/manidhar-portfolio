import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function HowIThinkSection() {
  return (
    <Section id="how-i-think" tone="alt">
      <Heading
        eyebrow="How I Work"
        title="I start from the loop, not the tool."
        description="The software stack changes. The way I attack a problem is more stable."
      />

      <div className="thinking-grid">
        {FOUNDER_NARRATIVE.thinking.map((item, index) => (
          <article className="thinking-card" key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
