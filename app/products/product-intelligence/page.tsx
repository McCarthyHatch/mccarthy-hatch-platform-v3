import Link from "next/link";

export default function ProductIntelligencePage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-amber-300">
        Private Product Intelligence
      </p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Proprietary product discovery intelligence.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Private Product Intelligence supports demand discovery, category
        analysis, competitive mapping, and product strategy. Access is reserved
        for approved client deliverables through the secure workspace.
      </p>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {[
          ["Market structure", "Understand product categories, competitor movement, and commercial positioning."],
          ["Discovery intelligence", "Convert fragmented product and market signals into structured strategy inputs."],
        ].map(([title, text]) => (
          <div key={title} className="border border-white/10 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{text}</p>
          </div>
        ))}
      </section>

      <Link href="/client-workspace" className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-300">
        Go to secure deliverables
      </Link>
    </main>
  );
}
