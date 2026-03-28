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

          <div className="mt-12 text-center">
            <Link to="/contacto" className="inline-block px-8 py-3 font-bold text-black bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
              Solicitar más información
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
