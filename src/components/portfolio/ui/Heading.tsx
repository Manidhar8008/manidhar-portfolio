import type { ReactNode } from 'react'

type HeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export default function Heading({ eyebrow, title, description, className = '' }: HeadingProps) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}
