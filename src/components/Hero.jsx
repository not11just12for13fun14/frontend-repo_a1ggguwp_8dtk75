import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for premium feel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,254,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-24 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-blue-200/90">MEMBRESÍA DE ÉLITE WIT</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Activa tu libertad financiera y mental
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            Únete a la membresía que cambiará tu forma de invertir, crecer y vivir con propósito
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#precio" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400/60">
              QUIERO ENTRAR AHORA
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <p className="text-sm text-blue-200/80">Accede y sé de los primeros en entrar a la nueva membresía que impulsará tu evolución personal y financiera desde el primer mes</p>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="mt-10 flex items-end md:mt-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-yellow-500/60 via-yellow-300/30 to-blue-500/40 blur-xl opacity-60" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <div className="h-64 w-48 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 sm:h-80 sm:w-56">
                {/* Replace the image src with Christian's photo when available */}
                <img
                  src="https://images.unsplash.com/photo-1519340333755-5063d8bda2ac?q=80&w=1200&auto=format&fit=crop"
                  alt="Christian"
                  className="h-full w-full object-cover opacity-95"
                />
              </div>
            </div>
            <div className="mt-3 text-center text-xs uppercase tracking-widest text-blue-200/70">FOTO DE CHRISTIAN</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
