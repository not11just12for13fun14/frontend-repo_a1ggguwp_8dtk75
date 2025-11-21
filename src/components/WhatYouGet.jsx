function WhatYouGet() {
  const items = [
    "5 módulos de desarrollo continuo (mentalidad, inversión, finanzas, hábitos, salud)",
    "Un sistema real de hábitos que te permitirá sostener tus resultados a largo plazo",
    "Una estructura financiera más consciente y una visión profesional como inversor",
    "1 clase al mes en vivo con Christian Villar",
    "1 clase mensual con un experto en nutrición y entrenamiento",
    "El Reto de 7 días para avanzar desde el primer momento",
    "El libro digital Whatever It Takes de Christian Villar",
  ];

  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-yellow-400/90">QUÉ OBTENDRÁS</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Con tu acceso a la membresía</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-bold">✓</span>
              <p className="text-blue-100/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
