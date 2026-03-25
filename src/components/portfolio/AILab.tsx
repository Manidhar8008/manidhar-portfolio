export default function AILab() {
  return (
    <section id="ai-lab" className="py-20 w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            AI Lab
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Building systems that improve human behavior
          </h2>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <p className="text-neutral-200 leading-relaxed">
            An experimental AI lab where I build and test systems that improve
            discipline, decision-making, and follow-through. The goal is
            simple: translate psychology into measurable automation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-black/20 p-5">
              <p className="text-sm font-semibold text-white">
                Behavioral tracking systems
              </p>
              <p className="mt-2 text-sm text-neutral-300">
                Turn actions into signals so feedback isn’t guesswork.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/20 p-5">
              <p className="text-sm font-semibold text-white">
                Agentic AI experiments
              </p>
              <p className="mt-2 text-sm text-neutral-300">
                Iterate on loops where the model learns from what happens next.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/20 p-5">
              <p className="text-sm font-semibold text-white">
                Automation tools
              </p>
              <p className="mt-2 text-sm text-neutral-300">
                Deploy workflows that reduce friction and keep execution consistent.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-neutral-500">
            Built with the mindset of a product engineer: clear inputs, explicit
            feedback, and continuous improvement.
          </div>
        </div>
      </div>
    </section>
  )
}

