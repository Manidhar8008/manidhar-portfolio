import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function FlagshipSystem() {
  const flagship = FOUNDER_NARRATIVE.flagship

  return (
    <Section id="flagship" tone="base">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Heading
          eyebrow={flagship.eyebrow}
          title={flagship.title}
          description={flagship.operatorSignal}
        />

        <div className="grid gap-10 rounded-[32px] bg-white/78 px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] dark:bg-slate-900/62">
          <div>
            <div className="mb-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                Problem
              </p>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{flagship.problem}</p>
            </div>

            <div className="mb-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                System
              </p>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{flagship.systemBuilt}</p>
            </div>

            <div className="mb-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                What it replaces
              </p>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600 dark:text-stone-300">
                {flagship.replaces.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                Outcome
              </p>
              <p className="mt-4 text-[15px] leading-7 text-slate-700 dark:text-stone-200">{flagship.closing}</p>
            </div>
          </div>

          <div className="grid gap-8">
            {flagship.impact.map((metric) => (
              <div key={metric.label} className="mb-8 last:mb-0">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-stone-400">
                  {metric.label}
                </p>
                <p className="mt-3 font-display text-[2.2rem] leading-none tracking-[-0.05em] text-slate-900 dark:text-stone-100">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-stone-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
