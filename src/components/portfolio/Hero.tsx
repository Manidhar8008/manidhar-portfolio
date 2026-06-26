import { FOUNDER_NARRATIVE } from '../../content/founderNarrative'
import Container from './ui/Container'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white dark:bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      
      <Container className="relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {FOUNDER_NARRATIVE.hero.eyebrow}
          </div>

          {/* Headline + Subheadline */}
          <div className="mt-12 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl lg:text-7xl">
              {FOUNDER_NARRATIVE.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {FOUNDER_NARRATIVE.hero.subheadline}
            </p>
            <p className="text-sm font-mono text-gray-500 dark:text-gray-500 uppercase tracking-wider pt-2">
              {FOUNDER_NARRATIVE.hero.proofLine}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#flagship"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white font-medium transition-all hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
              View Vasuki OS
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 bg-white text-black font-medium transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-transparent dark:text-white dark:hover:bg-gray-900/50"
            >
              See case studies
            </a>
          </div>

          {/* Replacement signals */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {FOUNDER_NARRATIVE.hero.replacementSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-lg border border-gray-200 bg-gray-50/50 p-4 dark:border-gray-800 dark:bg-gray-900/30"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
