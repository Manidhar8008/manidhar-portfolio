import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Container from './ui/Container'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-stone-50 dark:bg-[#0a0f1a]">
      <Container className="pb-[130px] pt-[140px] sm:pb-[140px] sm:pt-[160px] lg:pb-[150px] lg:pt-[170px]">
        <div className="max-w-[700px]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
            {FOUNDER_NARRATIVE.hero.eyebrow}
          </p>

          <div className="mb-10 mt-[120px] space-y-5">
            <h1 className="max-w-[700px] font-display text-[3.5rem] font-semibold leading-[0.92] tracking-[-0.05em] text-slate-900 sm:text-[4rem] lg:text-[4.5rem] dark:text-stone-100">
              {FOUNDER_NARRATIVE.hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 tracking-[-0.01em] text-slate-700 sm:text-xl dark:text-stone-200">
              {FOUNDER_NARRATIVE.hero.subheadline}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-stone-400">
              {FOUNDER_NARRATIVE.hero.proofLine}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#flagship"
              className="inline-flex items-center justify-center rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-950 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
            >
              View flagship system
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white dark:bg-white/[0.06] dark:text-stone-200 dark:hover:bg-white/[0.12]"
            >
              Contact
            </a>
          </div>

          <div className="grid gap-3 pt-8 sm:grid-cols-3">
            {FOUNDER_NARRATIVE.hero.replacementSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-[24px] bg-white/72 px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] dark:bg-slate-900/50"
              >
                <p className="text-sm leading-6 text-slate-600 dark:text-stone-300">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
