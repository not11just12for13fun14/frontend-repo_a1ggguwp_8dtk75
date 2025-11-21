function Pricing() {
  return (
    <section id="precio" className="relative overflow-hidden bg-gradient-to-b from-black to-slate-950 py-24 text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_50%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-yellow-400/90">TODO INCLUIDO</p>
        <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl">Aprovecha la oferta de lanzamiento</h2>
        <p className="mt-3 text-blue-200/90">Que no volverá a repetirse</p>

        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-black p-8 shadow-[0_20px_80px_rgba(250,204,21,0.15)]">
          <div className="mb-6">
            <div className="text-2xl line-through text-blue-200/60">100 $/mes</div>
            <div className="text-5xl font-extrabold tracking-tight text-yellow-400">30 $/mes</div>
          </div>
          <a href="#cta" className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(250,204,21,0.35)] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-300/60">
            ACEPTO LA TRANSFORMACIÓN AHORA
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
