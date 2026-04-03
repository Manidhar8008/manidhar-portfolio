import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Systems() {
  return (
    <Section id="systems">
      <Heading
        eyebrow="Systems"
        title="Active systems, not feature collections."
        description="These are the operating loops I am building and refining: capture the signal, make the decision, trigger the action."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PORTFOLIO.systems.map((system) => (
          <article
            key={system.title}
            className="rounded-[28px] bg-white/84 px-6 py-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/70 dark:bg-slate-900/70 dark:ring-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              {system.signal}
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight tracking-[-0.03em] text-slate-900 dark:text-stone-100">
              {system.title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{system.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {PORTFOLIO.snapshot.map((item) => (
          <p key={item} className="text-[15px] leading-8 text-slate-600 dark:text-stone-300">
            {item}
          </p>
        ))}
      </div>
    </Section>
  )
}
