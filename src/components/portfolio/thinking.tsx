export default function Thinking() {
  return (
    <section id="thinking" className="py-20 md:py-32 border-t border-white/8">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 / EXECUTION</span>
          <h2 className="section-title">
            How I <em>operate</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all">
            <h3 className="text-lg font-bold mb-3">Problem Validation</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted">
              I prototype in &lt;48 hours and test with real data/users before writing specs. Kill bad ideas fast if they don't move key metrics in week 1.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all">
            <h3 className="text-lg font-bold mb-3">MVP Strategy</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted">
              Start with the riskiest assumption. Build only the one feature that can kill the idea. Measure immediately. No overengineering.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all">
            <h3 className="text-lg font-bold mb-3">Decision Framework</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted">
              3 questions: What's the worst case? How fast can I test it? What's the real cost of being wrong? Then move.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all">
            <h3 className="text-lg font-bold mb-3">Execution System</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted">
              Daily logging → weekly review → monthly system upgrade. Everything feedback-loop driven. Outcomes, not tasks.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}