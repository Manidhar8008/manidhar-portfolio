import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Operate() {
  return (
    <Section id="operate">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Heading
          eyebrow="How I Operate"
          title="Execution is a system, not a mood."
          description="The work is useful only when it sharpens the feedback loop, improves the decision, or moves the outcome."
        />

        <div className="space-y-8">
          {PORTFOLIO.playbook.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 border-t border-slate-200/70 pt-8 first:border-t-0 first:pt-0 sm:grid-cols-[88px_1fr] dark:border-white/10"
            >
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-900 dark:text-stone-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
