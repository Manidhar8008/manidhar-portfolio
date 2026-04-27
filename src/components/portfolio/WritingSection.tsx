import Heading from './ui/Heading'
import Section from './ui/Section'

export default function WritingSection() {
  return (
    <Section id="writing" tone="alt">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Heading eyebrow="Writing / Newsletter" title="Writing / Newsletter" />

        <div className="rounded-[26px] bg-white/76 px-6 py-6 dark:bg-slate-900/52">
          <p className="text-[15px] leading-7 text-slate-600 dark:text-stone-300">Coming soon.</p>
        </div>
      </div>
    </Section>
  )
}
