import { CASE_STUDY } from '../../content/portfolio'
import Section from './Section'

export default function Problem() {
  return (
    <Section id="problem" eyebrow="Problem" title={CASE_STUDY.problem.title}>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
        <ul className="space-y-3 text-neutral-300">
          {CASE_STUDY.problem.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

