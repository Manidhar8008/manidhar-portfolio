import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function AiLabSection() {
  return (
    <Section id="ai-lab">
      <div className="lab-panel">
        <Heading
          eyebrow="Now / mw.ai"
          title="A founder-operated lab where ideas become systems."
          description={FOUNDER_NARRATIVE.lab.intro}
        />

        <div className="lab-panel__body">
          <div className="lab-panel__copy">
            <p>{FOUNDER_NARRATIVE.lab.detail}</p>
            <a className="text-link" href="#contact">Talk about a system ↗</a>
          </div>
          <div className="lab-products">
            {FOUNDER_NARRATIVE.lab.products.map((product) => (
              <article className="lab-product" key={product.name}>
                <span>{product.status}</span>
                <strong>{product.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
