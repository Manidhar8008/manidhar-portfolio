import Heading from './ui/Heading'
import Section from './ui/Section'

export default function HowIThinkSection() {
  return (
    <Section id="how-i-think" tone="alt">
      <div className="space-y-12">
        <Heading eyebrow="How I Think" title="How I Think" />

        <div className="rounded-[28px] bg-white/80 px-6 py-7 shadow-[0_14px_34px_rgba(15,23,42,0.04)] dark:bg-slate-900/55">
          <p className="text-[15px] leading-7 text-slate-600 dark:text-stone-300">
            This section will be written based on my personal thinking framework.
          </p>
        </div>
      </div>
    </Section>
  )
}
