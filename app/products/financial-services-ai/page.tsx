import Link from "next/link";

export default function FinancialServicesAIPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">
        Financial Services AI
      </p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Consumer harm intelligence for financial institutions.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Financial Services AI helps teams identify emerging consumer harm,
        regulatory exposure, servicing failures, and control weaknesses earlier
        by interpreting the language consumers actually use.
      </p>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          ["Earlier detection", "Move from reactive complaint handling to proactive consumer protection intelligence."],
          ["Narrative-first analysis", "Analyze consumer stories, operational signals, and risk themes with explainable AI workflows."],
          ["Enterprise relevance", "Support compliance, legal, risk, product, and operations teams with decision-ready intelligence."],
        ].map(([title, text]) => (
          <div key={title} className="border border-white/10 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{text}</p>
          </div>
        ))}
      </section>

      <Link href="/contact" className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-300">
        Discuss enterprise fit
      </Link>
    </main>
  );
}
