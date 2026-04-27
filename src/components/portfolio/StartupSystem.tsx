import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function StartupSystem() {
  const startup = FOUNDER_NARRATIVE.startup

  return (
    <Section id="startup" tone="alt">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Heading eyebrow={startup.eyebrow} title={startup.title} description={startup.operatorSignal} />

        <div className="grid gap-6">
          <div className="rounded-[30px] bg-white/82 px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.04)] dark:bg-slate-900/58">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
              What it does
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{startup.summary}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] bg-white/72 px-6 py-6 dark:bg-slate-900/48">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                System
              </p>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600 dark:text-stone-300">
                <li>behavior tracking</li>
                <li>pattern recognition</li>
                <li>intervention engine (LLM-based)</li>
                <li>feedback loop</li>
              </ul>
            </div>

            <div className="rounded-[30px] bg-white/72 px-6 py-6 dark:bg-slate-900/48">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
                What it replaces
              </p>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600 dark:text-stone-300">
                {startup.replaces.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[30px] bg-white/72 px-6 py-6 dark:bg-slate-900/48">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
              Outcome
            </p>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-700 dark:text-stone-200">
              <li>real-time behavior correction</li>
              <li>measurable consistency</li>
              <li>automated decision support</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
