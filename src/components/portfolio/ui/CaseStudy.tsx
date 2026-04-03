import type { CaseStudy as CaseStudyData } from '../../../content/portfolio'

type CaseStudyProps = {
  study: CaseStudyData
  index: number
}

export default function CaseStudy({ study, index }: CaseStudyProps) {
  return (
    <article className="rounded-[32px] bg-white/88 px-6 py-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur sm:px-8 sm:py-9 dark:bg-slate-900/72 dark:ring-white/10 dark:shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
            Case Study {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl dark:text-stone-100">
            {study.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-stone-300">{study.summary}</p>
        </div>

        <a
          href={study.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-800 hover:text-teal-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-stone-200 dark:hover:border-teal-300 dark:hover:text-teal-300"
        >
          View on GitHub
        </a>
      </div>

      <div className="mt-10 grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              Problem
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{study.problem}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              What this proves
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slate-700 dark:text-stone-200">{study.closing}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              System Built
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-stone-300">{study.systemBuilt}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              Impact
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {study.impact.map((metric) => (
                <div
                  key={`${study.id}-${metric.label}`}
                  className="rounded-[24px] bg-stone-50 px-5 py-5 ring-1 ring-slate-200/70 dark:bg-white/[0.03] dark:ring-white/10"
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-slate-900 dark:text-stone-100">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-stone-300">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
