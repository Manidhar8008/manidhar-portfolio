export default function Hero() {
  return (
    <section
      className="h-screen w-full bg-black flex items-center justify-center px-4"
      aria-label="Hero"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white">
          I build AI systems that fix human behavior
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-300">
          I combine AI, psychology, and automation to build feedback-loop systems
          that improve discipline, decision-making, and execution.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neutral-400 hover:bg-neutral-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Work With Me
          </a>
        </div>
      </div>
    </section>
  )
}

