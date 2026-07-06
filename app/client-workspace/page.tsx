import Link from "next/link";
import { TerminalPreview } from "@/components/SiteChrome";
import { externalLinks } from "@/lib/content";

const gates = [
  {
    id: "workspace-gate",
    name: "Client Workspace",
    label: "Enter workspace",
    href: externalLinks.clientWorkspace,
    eyebrow: "Private client portal",
    summary:
      "A gated workspace for active client engagements, operating notes, project status, and approved collaboration surfaces.",
  },
  {
    id: "terminal-gate",
    name: "Market Terminal",
    label: "Launch terminal",
    href: externalLinks.terminal,
    eyebrow: "Live product",
    summary:
      "Direct entry to the Consumer Financial Market Terminal for financial intelligence, product signals, and market workflows.",
  },
  {
    id: "cpdim-gate",
    name: "CPDIM",
    label: "Open CPDIM",
    href: externalLinks.cpdim,
    eyebrow: "Live product",
    summary:
      "Direct entry to the Consumer Product Discovery Intelligence Model for demand, category, competitor, and product discovery analysis.",
  },
  {
    id: "deliverables-gate",
    name: "Secure Deliverables",
    label: "Open deliverables",
    href: externalLinks.deliverables,
    eyebrow: "Controlled delivery",
    summary:
      "A secure destination for approved reports, executive briefs, research outputs, and future authenticated downloads.",
  },
];

export default function ClientWorkspacePage() {
  return (
    <main>
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">
            Client Workspace
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
            Controlled entry points for workspace, terminal, products, and deliverables.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            This page is the platform gate. Live product surfaces open from here,
            while workspace and deliverables remain ready for secured routing.
          </p>
        </div>
      </section>

      <section className="page-shell py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {gates.map((gate) => (
            <section
              key={gate.id}
              id={gate.id}
              className="flex min-h-[320px] flex-col justify-between border border-white/10 bg-zinc-950 p-6 shadow-xl shadow-black/20"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">
                  {gate.eyebrow}
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-white">
                  {gate.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {gate.summary}
                </p>
              </div>

              <Link
                href={gate.href}
                className="mt-8 inline-flex items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                {gate.label}
              </Link>
            </section>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <TerminalPreview />
      </section>
    </main>
  );
}
