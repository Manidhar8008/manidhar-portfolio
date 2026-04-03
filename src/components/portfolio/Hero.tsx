import { PORTFOLIO } from '../../content/portfolio'
import Container from './ui/Container'

export default function Hero() {
  return (
    <section id="hero">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-800 dark:text-teal-300">
            Founder&apos;s Office Portfolio
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl dark:text-stone-100">
            {PORTFOLIO.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 tracking-[-0.03em] text-slate-700 sm:text-2xl dark:text-stone-200">
            {PORTFOLIO.subheadline}
          </p>

          <p className="mt-8 max-w-3xl text-sm font-medium uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
            {PORTFOLIO.proofLine}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-teal-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-950 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-800 hover:text-teal-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-200 dark:hover:border-teal-300 dark:hover:text-teal-300"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
