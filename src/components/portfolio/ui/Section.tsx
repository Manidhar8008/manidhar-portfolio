import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  containerClassName?: string
  divided?: boolean
}

export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  divided = true,
}: SectionProps) {
  const borderClass = divided ? 'border-t border-slate-200/70 dark:border-white/10' : ''

  return (
    <section id={id} className={`${borderClass} ${className}`.trim()}>
      <Container className={`py-16 sm:py-20 lg:py-24 ${containerClassName}`.trim()}>{children}</Container>
    </section>
  )
}
