import Container from "./ui/Container";

export default function Problem() {
  return (
    <section
      id="problem"
      className="border-t border-white/10 bg-[#05070b] py-24"
    >
      <Container>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-cyan-400">
          PROBLEM
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight text-white">
          Knowledge is fragmented.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          Modern work is spread across conversations, screenshots,
          GitHub repositories, PDFs, browsers, voice notes,
          calendars and cloud services.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500">
          Existing AI answers questions using the current prompt,
          but it does not continuously observe your digital life,
          remember context over months,
          connect information together,
          or build an evolving understanding of how you work.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-2xl font-semibold text-red-300">
              Today's Workflow
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-300">
              <li>✕ Search across dozens of apps</li>
              <li>✕ Re-explain context every conversation</li>
              <li>✕ Lost screenshots and notes</li>
              <li>✕ Forgotten documents</li>
              <li>✕ No long-term memory</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
            <h3 className="text-2xl font-semibold text-cyan-300">
              Vasuki
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-300">
              <li>✓ Continuous indexing</li>
              <li>✓ Persistent memory</li>
              <li>✓ Knowledge graph</li>
              <li>✓ Timeline reconstruction</li>
              <li>✓ Local-first intelligence</li>
            </ul>
          </div>

        </div>

      </Container>
    </section>
  );
}
