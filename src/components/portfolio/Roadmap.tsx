import { PORTFOLIO } from '../../content/portfolio'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function Roadmap() {
  return (
    <Section id="roadmap">
      <Heading
        eyebrow="Roadmap"
        title="Long-term thinking with systems underneath it."
        description="The next step is not more surface area. It is stronger infrastructure, tighter evaluation, and systems that compound context over time."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PORTFOLIO.roadmap.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] bg-stone-100/88 px-6 py-6 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:ring-white/10"
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              Forward signal
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight tracking-[-0.03em] text-slate-900 dark:text-stone-100">
              {item.title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
