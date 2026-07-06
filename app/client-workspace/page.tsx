import { TerminalPreview } from "@/components/SiteChrome";

export default function ClientWorkspacePage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">Client Workspace</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Secure workspace for terminals, deliverables, and future authentication.
      </h1>
      <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <section className="space-y-4">
          {["Terminal", "Secure Deliverables", "Future Authentication"].map((item) => (
            <div key={item} className="border border-white/10 bg-white/[.035] p-6">
              <h2 className="text-2xl font-semibold text-white">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                A protected client surface for enterprise workflows, private outputs,
                and controlled access as the platform matures.
              </p>
            </div>
          ))}
        </section>
        <section id="terminal">
          <TerminalPreview />
        </section>
      </div>
    </main>
  );
}
