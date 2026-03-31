export default function FounderFit() {
  return (
    <section id="founder-fit" className="py-20 md:py-32 border-t border-white/8">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 / OPERATOR FIT</span>
          <h2 className="section-title">
            Why I <em>work here</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          {/* Why This Role */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl">
            <div className="h-10 w-10 bg-emerald-500/20 rounded flex items-center justify-center mb-4">
              <span className="text-emerald-400 font-bold">1</span>
            </div>
            <h3 className="text-lg font-bold mb-4">Why This Role</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>• Depth over breadth — own one core function end-to-end</li>
              <li>• Real skin in game with clear metrics</li>
              <li>• Co-builder mode, not order-taker</li>
              <li>• Equity-aligned thinking from day 1</li>
            </ul>
          </div>

          {/* What I Bring */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl">
            <div className="h-10 w-10 bg-emerald-500/20 rounded flex items-center justify-center mb-4">
              <span className="text-emerald-400 font-bold">2</span>
            </div>
            <h3 className="text-lg font-bold mb-4">What I Bring</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>• Full-stack execution (code + strategy + ops)</li>
              <li>• Built teams and processes at $100M+ scale</li>
              <li>• Comfortable with ambiguity, bias toward action</li>
              <li>• No ego on the work, only on outcomes</li>
            </ul>
          </div>

          {/* First 30 Days */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl">
            <div className="h-10 w-10 bg-emerald-500/20 rounded flex items-center justify-center mb-4">
              <span className="text-emerald-400 font-bold">3</span>
            </div>
            <h3 className="text-lg font-bold mb-4">First 30 Days</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>• Map the real problem (not the stated one)</li>
              <li>• Ship one thing that moves the needle</li>
              <li>• Build feedback loops with the team</li>
              <li>• Become the person with the most context</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}