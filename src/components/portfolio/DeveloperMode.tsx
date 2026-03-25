import { CASE_STUDY } from '../../content/portfolio'
import Section from './Section'

export default function DeveloperMode() {
  return (
    <Section id="developer-mode" eyebrow="Developer mode" title="Engineering notes">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <p className="text-sm font-semibold text-white">Results (current)</p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            {CASE_STUDY.results.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <p className="text-sm font-semibold text-white">Future improvements</p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            {CASE_STUDY.future.bullets.map((b) => (
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

