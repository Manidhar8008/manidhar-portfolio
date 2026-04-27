import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  containerClassName?: string
  divided?: boolean
  tone?: 'base' | 'alt'
}

export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  divided: _divided = false,
  tone = 'base',
}: SectionProps) {
  const backgroundClass =
    tone === 'alt'
      ? 'bg-stone-100 dark:bg-[#0d1320]'
      : 'bg-stone-50 dark:bg-[#0a0f1a]'

  return (
    <section id={id} className={`${backgroundClass} ${className}`.trim()}>
      <Container className={`py-[100px] sm:py-[100px] lg:py-[100px] ${containerClassName}`.trim()}>
        {children}
      </Container>
    </section>
  )
}
