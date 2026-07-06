export default function ContactPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-amber-300">Contact</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Start an enterprise AI platform conversation.
      </h1>
      <div className="mt-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="border border-white/10 bg-white/[.035] p-6">
          <p className="text-sm leading-6 text-zinc-300">
            For platform, workspace, or product inquiries, use your preferred McCarthy Hatch
            contact channel while the authenticated portal is prepared.
          </p>
          <p className="mt-6 font-mono text-sm text-emerald-300">platform@mccarthy-hatch.com</p>
        </div>
        <form className="grid gap-4 border border-white/10 bg-black p-6">
          <input aria-label="Name" placeholder="Name" className="border border-white/10 bg-white/[.04] px-4 py-3 text-white outline-none focus:border-emerald-300" />
          <input aria-label="Email" placeholder="Email" className="border border-white/10 bg-white/[.04] px-4 py-3 text-white outline-none focus:border-emerald-300" />
          <textarea aria-label="Message" placeholder="Message" rows={5} className="border border-white/10 bg-white/[.04] px-4 py-3 text-white outline-none focus:border-emerald-300" />
          <button type="button" className="justify-self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-300">
            Submit inquiry
          </button>
        </form>
      </div>
    </main>
  );
}
