import Link from "next/link";

export default function MarketTerminalPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">
        Consumer Financial Market Terminal
      </p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        A terminal for consumer finance market intelligence.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        The terminal is designed for fast research, market discovery, product
        signal review, and financial-services context. Access is controlled
        through the Client Workspace.
      </p>

      <section className="mt-12 border border-white/10 bg-zinc-950 p-6">
        <h2 className="text-2xl font-semibold text-white">Built for focused intelligence work.</h2>
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          Teams can use the terminal to evaluate market movement, surface
          relevant signals, and organize research into decision-ready context.
        </p>
      </section>

      <Link href="/client-workspace" className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-300">
        Go to secure access
      </Link>
    </main>
  );
}
