import { PORTFOLIO } from '../../content/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-[0.03]" 
             style={{ background: 'radial-gradient(circle, #00f5c4 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-[0.03]" 
             style={{ background: 'radial-gradient(circle, #7c5cfc 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="mb-12">
          <span className="inline-block px-5 py-2 bg-emerald-950 border border-emerald-500/30 rounded-full text-xs font-mono tracking-widest text-emerald-400">
            🎯 FOUNDER'S OFFICE • AVAILABLE NOW
          </span>
        </div>

        {/* Headline - Dominant */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-16 text-white">
          {PORTFOLIO.headline}
        </h1>

        {/* Proof Line - Short & Punchy */}
        <div className="mb-20 pl-6 border-l-4 border-emerald-500">
          <p className="text-lg text-zinc-300">
            {PORTFOLIO.proofLine.split('.')[0]}.
          </p>
        </div>

        {/* First 30 Days - Compact */}
        <div className="mb-20">
          <h3 className="uppercase text-emerald-400 text-xs font-mono tracking-widest mb-8 opacity-70">30-Day Deliverables</h3>
          <div className="space-y-3">
            {PORTFOLIO.thirtyDayValue.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold flex-shrink-0 text-lg">→</span>
                <p className="text-zinc-300 text-base pt-1">{item.split('(')[0].trim()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs - Evenly spaced */}
        <div className="flex gap-6 justify-start">
          <a 
            href="#projects"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm rounded-xl transition-all"
          >
            See My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-zinc-600 hover:border-emerald-400 text-white font-semibold text-sm rounded-xl transition-all"
          >
            Let's Talk
          </a>
          <a 
            href="https://github.com/Manidhar8008"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-zinc-600 hover:border-emerald-400 text-white font-semibold text-sm rounded-xl transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}