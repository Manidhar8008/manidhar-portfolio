import { CASE_STUDY } from '../../content/portfolio'
import Section from './Section'

export default function Solution() {
  return (
    <Section id="solution" eyebrow="Solution" title={CASE_STUDY.solution.title}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6">
          <p className="text-sm font-semibold text-white">Positioning</p>
          <p className="mt-3 text-neutral-200 leading-relaxed">
            {CASE_STUDY.positioning}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6">
          <p className="text-sm font-semibold text-white">What I ship</p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            {CASE_STUDY.solution.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

