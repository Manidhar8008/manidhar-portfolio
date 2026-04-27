import { useState } from 'react'
import type { CaseStudy as CaseStudyData } from '../../../content/portfolio'
import { normalizeCopy } from '../../../utils/normalizeCopy'

type CaseStudyProps = {
  study: CaseStudyData
  index: number
}

export default function CaseStudy({ study, index }: CaseStudyProps) {
  const [open, setOpen] = useState(false)

  return (
    <article
      data-zone="case-study"
      data-intent="github"
      className="rounded-[28px] bg-white/92 px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:bg-white sm:px-8 sm:py-8 dark:bg-slate-900/78 dark:hover:bg-slate-900/86"
    >
      <div className="flex items-start justify-between gap-6">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex-1 text-left"
          aria-expanded={open}
        >
          <div className="max-w-3xl space-y-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
              Case Study {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl dark:text-stone-100">
              {normalizeCopy(study.title)}
            </h3>
            <p className="text-base leading-7 text-slate-600 dark:text-stone-300">
              {normalizeCopy(study.summary)}
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-stone-200">
              {study.impact.slice(0, 3).map((metric) => (
                <span
                  key={`${study.id}-${metric.label}-pill`}
                  className="rounded-full bg-stone-100 px-3 py-1 font-semibold tracking-[0.01em] dark:bg-white/10"
                >
                  {normalizeCopy(metric.label)}: {normalizeCopy(metric.value)}
                </span>
              ))}
            </div>
          </div>
        </button>

        <div className="flex flex-col items-end gap-3">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-stone-200"
            aria-hidden
          >
            {open ? '-' : '+'}
          </span>
          <a
            href={study.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-zone="github"
            data-intent="github"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-900 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
          >
            View Work
          </a>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
                Problem
              </p>
              <p className="text-[15px] leading-7 text-slate-600 dark:text-stone-300">
                {normalizeCopy(study.problem)}
              </p>

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
                System
              </p>
              <p className="text-[15px] leading-7 text-slate-600 dark:text-stone-300">
                {normalizeCopy(study.systemBuilt)}
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
                Impact
              </p>
              <ul className="space-y-2 text-[15px] leading-7 text-slate-700 dark:text-stone-200">
                {study.impact.map((metric) => (
                  <li
                    key={`${study.id}-${metric.label}`}
                    className="flex items-start justify-between gap-3 rounded-2xl bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-white/[0.03] dark:text-stone-200"
                  >
                    <span className="text-[13px] font-semibold tracking-[0.08em] text-slate-600 dark:text-stone-300">
                      {normalizeCopy(metric.label)}
                    </span>
                    <div className="text-right">
                      <p className="font-display text-xl leading-none tracking-[-0.02em] text-slate-900 dark:text-stone-100">
                        {normalizeCopy(metric.value)}
                      </p>
                      <p className="text-[12px] text-slate-500 dark:text-stone-400">
                        {normalizeCopy(metric.detail)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500 dark:text-stone-400">
            {normalizeCopy(study.closing)}
          </p>
        </div>
      </div>
    </article>
  )
}
