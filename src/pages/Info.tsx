import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Link } from "react-router-dom"

export function Info() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Información de Horarios y Actividades</h1>
          <p className="text-gray-300 text-lg mb-12">Aquí tienes toda la información de clases, horarios y pases disponibles en Atlas Gym.</p>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-red-600/40 bg-gray-900/70 shadow-xl p-6 backdrop-blur">
              <h2 className="text-3xl font-bold text-red-400 mb-4">Horarios</h2>
              <ul className="space-y-3 text-gray-200 text-lg">
                <li><span className="font-semibold text-white">Lunes a Viernes:</span> 6:30 A.M. a 22:00 P.M.</li>
                <li><span className="font-semibold text-white">Sábados:</span> 8:30 A.M. a 13:00 P.M.</li>
              </ul>
              <p className="mt-4 text-gray-400">Aprovecha cada momento con rutinas enfocadas en potencia, resistencia y fitness general.</p>
            </article>

            <article className="rounded-2xl border border-red-600/40 bg-gray-900/70 shadow-xl p-6 backdrop-blur">
              <h2 className="text-3xl font-bold text-red-400 mb-4">Actividades Full Pass</h2>
              <p className="text-gray-200 text-lg mb-4">Con nuestro Full Pass accedes a todas las clases semanales, con enfoque en músculo, cardo, flexibilidad y recuperación:</p>
              <ul className="space-y-2 text-gray-200 text-lg list-disc list-inside">
                <li>Musculación libre</li>
                <li>Calistenia</li>
                <li>Clases de glúteos</li>
                <li>Stretching</li>
                <li>Funcional, Cardio y Flexi</li>
              </ul>
              <p className="mt-4 text-gray-400">Consigue tus 8 pases mensuales y transforma tu rutina con asesoría permanente.</p>
            </article>
          </div>

          <div className="mt-16 mb-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestras Tarifas</h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              
              {/* Card 1: Musculación Libre */}
              <div className="relative group rounded-2xl border border-white/10 bg-gray-900/40 p-8 shadow-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:bg-gray-900/80 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-medium text-red-400 mb-2">Musculación Libre</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">$45.000</span>
                  <span className="text-gray-400">/mes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  Acceso completo a nuestra zona de pesas libres, máquinas guiadas y área de cardio.
                </p>
              </div>

              {/* Card 2: Clase de Glúteos (Destacado) */}
              <div className="relative group rounded-2xl border border-red-500/60 bg-gradient-to-b from-gray-900 to-black p-8 shadow-2xl overflow-hidden hover:border-red-400 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] flex flex-col">
                <div className="absolute top-0 right-0 bg-red-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest backdrop-blur-sm">Más Popular</div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-medium text-red-400 mb-2 z-10">Clase de Glúteos</h3>
                <div className="flex items-baseline gap-1 mb-6 z-10">
                  <span className="text-4xl font-bold text-white">$20.000</span>
                  <span className="text-gray-400">/mes</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow z-10">
                  Clases enfocadas en hipertrofia y tonificación del tren inferior con rutinas especializadas.
                </p>
              </div>

              {/* Card 3: Personalizados */}
              <div className="relative group rounded-2xl border border-white/10 bg-gray-900/40 p-8 shadow-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:bg-gray-900/80 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-medium text-red-400 mb-2">Personalizados</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">$500.000</span>
                  <span className="text-gray-400">/mes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  Planificación exclusiva 1 a 1, seguimiento diario, adaptación de dieta y entrenamiento a medida.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contacto" className="inline-block px-8 py-4 font-bold text-black text-lg bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-red-500/20">
              Solicitar más información
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
