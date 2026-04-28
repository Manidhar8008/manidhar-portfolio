import type { ReactNode } from 'react'

type HeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export default function Heading({ eyebrow, title, description, className = '' }: HeadingProps) {
  return (
    <div className={`max-w-[700px] ${className}`.trim()}>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-[0.98] tracking-[-0.04em] text-slate-900 sm:text-5xl dark:text-stone-100">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[700px] text-base leading-7 text-slate-600 sm:text-lg dark:text-stone-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}
