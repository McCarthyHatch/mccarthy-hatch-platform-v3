import Link from "next/link";

export default function FutureEnterpriseProductsPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">
        Future Enterprise Products
      </p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Enterprise AI systems for regulated markets.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        McCarthy Hatch is building a portfolio of secure, domain-specific AI
        systems for consumer protection, market intelligence, and client-ready
        enterprise workflows.
      </p>

      <Link href="/contact" className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-300">
        Discuss roadmap
      </Link>
    </main>
  );
}
