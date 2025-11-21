function Benefits() {
  const bullets = [
    "¿Sientes que podrías estar mucho más lejos — en tu dinero, en tus hábitos, en tu mentalidad — pero te falta guía, constancia o claridad para avanzar?",
    "¿Has intentado invertir, pero terminas sintiéndote perdido o sin claridad para tomar decisiones seguras?",
    "¿Empiezas hábitos, rutinas o retos, pero te cuesta mantenerlos más de unos días?",
    "¿Notas que tu energía, tu disciplina o tu enfoque no están al nivel de la vida que quieres construir?",
    "¿Te frustra tanta información y te gustaría tener un sistema claro, directo y accionable?",
    "¿Estás cansado de ver avanzar a otros mientras tú sientes que avanzas más lento de lo que podrías?",
  ];

  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-yellow-400/90">DENTRO DE ESTA MEMBRESÍA</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Dejarás de avanzar desde la duda y encontrarás una estructura clara, acompañada y diseñada para progresar mes a mes sin volver atrás
          </h2>
        </div>

        <ul className="space-y-4 text-blue-100/90">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 p-4">
              <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_0_2px_rgba(250,204,21,0.25)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
