export default function Solopreneurship90Days() {
  return (
    <section id="solopreneurship-90-days" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/10 bg-black px-6 py-16 text-white shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            The next layer
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Solopreneurship 90 Days
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Learn the pieces. Build the systems. Ship enough work to become the person who can own the whole loop.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div
            className="relative mx-auto aspect-[1.8/1] w-full overflow-hidden"
            aria-label="A three-stage triangle: Learn, Build, Ship, leading to Solopreneurship 90 Days"
          >
            <div
              className="absolute inset-0 border border-white/10 bg-white/[0.06]"
              style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            />

            <div
              className="absolute inset-[1.5%] bg-white/[0.08]"
              style={{ clipPath: 'polygon(50% 96%, 3% 3%, 97% 3%)' }}
            />

            <div className="absolute left-1/2 top-[12%] -translate-x-1/2 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">01</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">Learn</p>
              <p className="mt-1 text-xs text-white/45">Understand the pieces</p>
            </div>

            <div className="absolute left-1/2 top-[41%] -translate-x-1/2 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">02</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">Build</p>
              <p className="mt-1 text-xs text-white/45">Combine them into systems</p>
            </div>

            <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">03</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">Ship</p>
              <p className="mt-1 text-xs text-white/45">Solve a real problem</p>
            </div>
          </div>

          <div className="mx-auto -mt-2 w-[72%] border-t border-white/10 pt-5 text-center sm:w-[62%]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Outcome</p>
            <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
              One person who can move from problem to product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
