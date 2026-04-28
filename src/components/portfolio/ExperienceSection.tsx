import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Heading from './ui/Heading'
import Section from './ui/Section'

export default function ExperienceSection() {
  return (
    <Section id="experience" tone="base">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Heading
          eyebrow="Experience"
          title="Operating history behind the systems."
          description="The common thread is not role title. It is system replacement: take inefficient workflows, rebuild the loop, and improve the outcome."
        />

        <div className="space-y-6">
          {FOUNDER_NARRATIVE.experience.map((item) => (
            <article key={item.title} className="grid gap-3 pb-6 last:pb-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-stone-100">
                    {item.title}
                  </p>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-800 dark:text-teal-300">
                    {item.context}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-stone-400">{item.signal}</p>
              </div>
              <p className="text-[15px] leading-7 text-slate-600 dark:text-stone-300">{item.detail}</p>
            </article>
          ))}

          <p className="pt-2 text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-stone-100">
            I started in operations. I now build systems that replace them.
          </p>
        </div>
      </div>
    </Section>
  )
}
