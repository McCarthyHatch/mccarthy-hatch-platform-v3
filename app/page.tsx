import Link from "next/link";
import { TerminalPreview } from "@/components/SiteChrome";
import { capabilities, products } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black py-20 md:py-28">
        <div className="grid-pattern absolute inset-0 opacity-70" />

        <div className="page-shell relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.24em] text-emerald-300">
              Enterprise AI Platform
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
              McCarthy Hatch Platform
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              A secure software platform for financial intelligence, consumer
              product discovery, applied research, and client-ready
              deliverables.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/client-workspace"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Client Workspace
              </Link>

              <Link
                href="/client-workspace#terminal"
                className="rounded-full border border-cyan-400/50 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white"
              >
                Launch Terminal
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ["6", "Platform modules"],
                ["4", "Product tracks"],
                ["100%", "Azure pipeline"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-l border-white/15 pl-4"
                >
                  <p className="text-3xl font-semibold text-white md:text-4xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <TerminalPreview />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">
            Platform capabilities
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Built for enterprise AI operations.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="bg-black p-6"
              >
                <span className="mb-8 block h-1 w-10 bg-emerald-300" />

                <h3 className="text-xl font-semibold text-white">
                  {item}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Composable infrastructure for secure research,
                  modeling, workflow, and delivery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.03] py-16 md:py-24">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-amber-300">
            Products
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Enterprise products, not consulting pages.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="border border-white/10 bg-black p-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {product.name}
                  </h3>

                  <span className="shrink-0 border border-white/15 px-3 py-1 text-xs text-zinc-300">
                    {product.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {product.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
