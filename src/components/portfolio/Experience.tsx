export default function Experience() {
  return (
    <section id="experience" className="py-20 w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            Experience
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Analytical thinking + operations execution
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6">
            <p className="text-sm font-semibold text-white">Cognizant</p>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Analytical thinking applied to real operations: turning messy inputs
              into systems that run reliably.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                Structured analysis
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                Process-focused execution
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                System understanding
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6">
            <p className="text-sm font-semibold text-white">Genpact</p>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Operations experience paired with automation: designing workflows
              that improve throughput while keeping quality measurable.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                Operational analytics
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                Automation-first thinking
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                Clear systems design
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-neutral-800 bg-black/30 p-6">
          <p className="text-sm text-neutral-400">
            Positioning across Cognizant and Genpact:
          </p>
          <p className="mt-2 text-neutral-200">
            Analytical thinking. Operations experience. Systems understanding.
          </p>
        </div>
      </div>
    </section>
  )
}

