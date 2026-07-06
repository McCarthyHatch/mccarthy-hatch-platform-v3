import Link from "next/link";
import { navItems } from "@/lib/content";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-white/20 bg-white text-sm font-black text-black">
            MH
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white">
            MCCARTHY HATCH
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/client-workspace"
          className="rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300"
        >
          Workspace
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-white">
            MCCARTHY HATCH
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Enterprise AI platform for market intelligence, product discovery,
            and secure client delivery.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function TerminalPreview() {
  const rows = [
    ["system", "workspace initialized"],
    ["model", "financial-services-ai:v3.2"],
    ["signal", "market drift detected in consumer credit"],
    ["deliverable", "executive brief secured"],
    ["status", "ready"],
  ];

  return (
    <div className="relative overflow-hidden border border-white/15 bg-black shadow-2xl shadow-emerald-500/10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-300" />
        </div>
        <span className="font-mono text-xs text-zinc-500">mch-terminal</span>
      </div>
      <div className="space-y-3 p-5 font-mono text-sm">
        {rows.map(([key, value]) => (
          <div
            key={key}
            className="grid grid-cols-[120px_1fr] gap-4 border-b border-white/5 pb-3 last:border-0"
          >
            <span className="text-cyan-300">{key}</span>
            <span className="text-zinc-200">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
