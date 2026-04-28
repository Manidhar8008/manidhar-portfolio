import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function ExecutionUnits() {
  return (
    <Section id="projects" tone="base">
      <div className="space-y-12">
        <Heading
          eyebrow="Projects"
          title="Execution units."
          description="Systems inventory."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {FOUNDER_NARRATIVE.executionUnits.map((unit) => (
            <article
              key={unit.title}
              className="rounded-xl bg-[#111827] px-6 py-6 shadow-[0_16px_36px_rgba(15,23,42,0.04)]"
            >
              <div className="space-y-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  {unit.context}
                </p>
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">
                  {unit.title}
                </h3>
                <p className="text-[15px] leading-7 text-slate-300">{unit.detail}</p>
              </div>

              <div className="mt-6 grid gap-5">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-300">
                    Replaces
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-rose-100/85">{unit.replaces}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                    Drives
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-teal-50">{unit.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
