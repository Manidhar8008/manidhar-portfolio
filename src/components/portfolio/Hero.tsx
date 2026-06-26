import { VASUKI } from "../../content/vasuki";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#05070A] text-white flex items-center overflow-hidden">
      <Container>

        <div className="max-w-4xl">

          <div className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-teal-300">
            {VASUKI.hero.badge}
          </div>

          <h1 className="mt-8 text-6xl font-bold tracking-tight leading-none md:text-8xl">
            {VASUKI.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-gray-300">
            {VASUKI.hero.subtitle}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {VASUKI.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-teal-500 px-7 py-4 font-semibold text-black transition hover:bg-teal-400">
              {VASUKI.hero.primaryButton}
            </button>

            <button className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10">
              {VASUKI.hero.secondaryButton}
            </button>

          </div>

          <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">

            {VASUKI.hero.stats.map((item) => (

              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >

                <h2 className="text-3xl font-bold">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}
