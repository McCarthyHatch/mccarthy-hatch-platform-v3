import { capabilities } from "@/lib/content";

export default function PlatformPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">Platform</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Secure AI infrastructure for enterprise intelligence.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        McCarthy Hatch Platform 3.2 organizes models, research workflows, client delivery,
        and terminal interfaces into one Azure-native software surface.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <section key={capability} className="border border-white/10 bg-white/[.035] p-6">
            <span className="mb-8 block h-1 w-10 bg-cyan-300" />
            <h2 className="text-xl font-semibold text-white">{capability}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Designed for auditable operations, fast iteration, and secure delivery.
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
