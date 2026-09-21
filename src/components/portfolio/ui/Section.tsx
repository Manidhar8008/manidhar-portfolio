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
  divided = true,
  tone = 'base',
}: SectionProps) {
  const toneClass = tone === 'alt' ? 'section--alt' : 'section--base'

  return (
    <section
      id={id}
      className={`section ${toneClass} ${divided ? 'section--divided' : ''} ${className}`.trim()}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
