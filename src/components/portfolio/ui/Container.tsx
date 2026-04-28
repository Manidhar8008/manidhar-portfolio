import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-[880px] px-5 sm:px-6 ${className}`.trim()}>{children}</div>
}
