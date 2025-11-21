function Why() {
  const points = [
    {
      title: "Experiencia real en inversión y disciplina",
      desc: "Aquí encontrarás a los mejores mentores expertos en cada área, nada de gurús que no aplican lo que dicen.",
    },
    {
      title: "Aprendizaje mensual, práctico y accionable",
      desc: "Cada mes recibirás formación real, aplicable y enfocada en lograr resultados.",
    },
    {
      title: "Acompañamiento y comunidad",
      desc: "No caminarás solo, tendrás impulso, soporte y claridad.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-black py-20 text-white">
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest text-blue-300/90">POR QUÉ MEMBRESÍA DE ÉLITE WIT</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Un camino claro, real y acompañado</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400/30 to-blue-500/30 blur-2xl" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-blue-200/90">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
