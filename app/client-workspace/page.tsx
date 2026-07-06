import { AccessGate } from "@/components/AccessGate";
import { TerminalPreview } from "@/components/SiteChrome";
import { externalLinks } from "@/lib/content";

export default function ClientWorkspacePage() {
  return (
    <main>
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">
            Client Workspace
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
            Secure entry for terminal and client deliverables.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Enter the assigned access code to open the approved product surface.
            Terminal access and secure deliverables are separated by gate.
          </p>
        </div>
      </section>

      <section className="page-shell py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <AccessGate
            title="Terminal"
            eyebrow="Market intelligence interface"
            summary="Direct entry to the Consumer Financial Market Terminal for financial intelligence, product signals, and market workflows."
            code="MH2026"
            href={externalLinks.terminal}
            buttonLabel="Launch terminal"
          />

          <AccessGate
            title="Client Secure Deliverables"
            eyebrow="Controlled delivery"
            summary="Secure access to approved client deliverables, including CPDIM: the Consumer Product Discovery Intelligence Model for demand, category, competitor, and product discovery analysis."
            code="CROSNER2026"
            href={externalLinks.cpdim}
            buttonLabel="Open CPDIM"
          />
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <TerminalPreview />
      </section>
    </main>
  );
}
