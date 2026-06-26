import type { ReactNode } from 'react'

type HeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export default function Heading({ eyebrow, title, description, className = '' }: HeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}
