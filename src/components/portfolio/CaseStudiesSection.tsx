import Heading from './ui/Heading'
import Section from './ui/Section'

const CASE_STUDIES = [
  {
    title: 'ANI.AI',
    detail: 'AI-assisted book writing system combining emotional and logical structuring.',
    focus: 'Human-AI creative system',
  },
  {
    title: 'Cognitive Game (Sudoku Variant)',
    detail: 'Symbol-based cognitive system designed to improve perception and mental flexibility.',
    focus: 'Cognition + pattern recognition',
  },
]

export default function CaseStudiesSection() {
  return (
    <Section id="case-studies" tone="alt">
      <Heading eyebrow="Case Studies" title="Case studies." description="Short and sharp." />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {CASE_STUDIES.map((study) => (
          <article key={study.title} className="rounded-[28px] bg-white/88 px-6 py-6 dark:bg-slate-900/62">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
              Focus
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-slate-900 dark:text-stone-100">
              {study.title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{study.detail}</p>
            <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-stone-200">{study.focus}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
