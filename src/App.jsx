import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Why from './components/Why'
import WhatYouGet from './components/WhatYouGet'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero with Spline asset */}
      <Hero />
      {/* Pain points and promise */}
      <Benefits />
      {/* Why this membership */}
      <Why />
      {/* What you get */}
      <WhatYouGet />
      {/* Pricing call to action */}
      <Pricing />

      {/* Final CTA footer */}
      <footer id="cta" className="relative border-t border-white/10 bg-black/80 py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">¿Listo para dar el paso?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-blue-200/90">
            Entra hoy y comienza a construir la disciplina, claridad y estructura que te llevará a tu siguiente nivel financiero y personal.
          </p>
          <div className="mt-6 flex justify-center">
            <a href="#precio" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400/60">
              QUIERO ENTRAR AHORA
            </a>
          </div>
          <p className="mt-4 text-xs text-blue-300/80">Garantía de satisfacción de 7 días</p>
        </div>
      </footer>
    </div>
  )
}

export default App
