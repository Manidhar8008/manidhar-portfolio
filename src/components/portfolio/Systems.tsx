import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Systems() {
  return (
    <Section id="systems">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Heading
          eyebrow="Operational Systems"
          title="The layers that already run."
          description="Three systems that turn signals into action."
        />

        <div className="space-y-4" data-zone="systems" data-intent="projects">
          {PORTFOLIO.systems.map((system) => (
            <article
              key={system.title}
              className="grid grid-cols-[1fr_auto] items-start gap-4 rounded-2xl bg-white/85 px-5 py-5 text-left ring-1 ring-slate-200/40 dark:bg-white/[0.04] dark:ring-white/10"
            >
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300">
                  {system.title}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{system.detail}</p>
              </div>
              <span className="self-center rounded-full bg-teal-900/10 px-3 py-1 text-xs font-semibold text-teal-900 dark:bg-teal-300/15 dark:text-teal-100">
                {system.signal}
              </span>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
