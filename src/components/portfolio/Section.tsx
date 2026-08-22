import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow: string
  title: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

