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
      ? 'bg-gray-50 dark:bg-gray-900/20'
      : 'bg-white dark:bg-black'

  return (
    <section id={id} className={`${backgroundClass} ${className}`.trim()}>
      <Container className={`py-20 sm:py-24 lg:py-28 ${containerClassName}`.trim()}>
        {children}
      </Container>
    </section>
  )
}
