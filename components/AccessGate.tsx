"use client";

import { FormEvent, useState } from "react";

type AccessGateProps = {
  title: string;
  eyebrow: string;
  summary: string;
  code: string;
  href: string;
  buttonLabel: string;
};

export function AccessGate({
  title,
  eyebrow,
  summary,
  code,
  href,
}: AccessGateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (value.trim().toUpperCase() === code) {
      window.location.assign(href);
      return;
    }

    setError("Invalid access code.");
  }

  return (
    <section className="flex min-h-[360px] flex-col justify-between border border-white/10 bg-zinc-950 p-6 shadow-xl shadow-black/20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-4 text-sm leading-6 text-zinc-400">{summary}</p>
      </div>

      <form onSubmit={submit} className="mt-8 grid gap-3">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter access code"
          aria-label={`${title} access code`}
          className="border border-white/10 bg-black px-4 py-3 font-mono text-sm uppercase text-white outline-none transition focus:border-emerald-300"
        />
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
        >
          Enter
        </button>
      </form>
    </section>
  );
}
