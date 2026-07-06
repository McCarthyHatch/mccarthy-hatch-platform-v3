import { products } from "@/lib/content";

export default function ProductsPage() {
  return (
    <main className="page-shell py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-amber-300">Products</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
        Applied AI products for financial and consumer intelligence.
      </h1>
      <div className="mt-12 space-y-4">
        {products.map((product) => (
          <article key={product.name} className="grid gap-6 border border-white/10 bg-black p-6 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="mb-4 inline-block border border-white/15 px-3 py-1 text-xs text-zinc-300">
                {product.status}
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">{product.name}</h2>
            </div>
            <p className="text-sm leading-6 text-zinc-300">{product.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
