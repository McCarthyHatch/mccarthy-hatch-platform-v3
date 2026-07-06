export default function ResearchPage() {
  const tracks = [
    "Model evaluation",
    "Market signal research",
    "Consumer product intelligence",
    "Financial workflow automation",
  ];

  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">Research</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Research that becomes deployable software.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        The research layer converts market, product, and financial-domain experimentation
        into platform capabilities that can be governed, deployed, and delivered.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {tracks.map((track, index) => (
          <section key={track} className="border border-white/10 bg-white/[.035] p-6">
            <p className="font-mono text-sm text-emerald-300">0{index + 1}</p>
            <h2 className="mt-8 text-2xl font-semibold text-white">{track}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              A structured research stream with measurable outputs and enterprise delivery paths.
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
