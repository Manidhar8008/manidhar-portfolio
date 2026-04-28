import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function AiLabSection() {
  return (
    <Section id="ai-lab" tone="base">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Heading
          eyebrow="AI Lab / Playspace"
          title="mw.ai data systems"
          description={FOUNDER_NARRATIVE.lab.intro}
        />

        <div className="space-y-6">
          <div className="rounded-[32px] bg-slate-950 px-6 py-7 text-stone-100 shadow-[0_18px_50px_rgba(2,6,23,0.28)]">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
              Active direction
            </p>
            <p className="mt-4 text-[15px] leading-7 text-stone-300">{FOUNDER_NARRATIVE.lab.detail}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {FOUNDER_NARRATIVE.lab.products.map((product) => (
              <article key={product.name} className="rounded-[24px] bg-white/82 px-5 py-5 dark:bg-slate-900/56">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-800 dark:text-teal-300">
                  {product.status}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-900 dark:text-stone-100">
                  {product.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
