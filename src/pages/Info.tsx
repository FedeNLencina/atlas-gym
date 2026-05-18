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
            <ScheduleInfo />
            <FullPassInfo />
          </div>

          <PricingSection />

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

function ScheduleInfo() {
  return (
    <article className="rounded-2xl border border-red-600/40 bg-gray-900/70 shadow-xl p-6 backdrop-blur">
      <h2 className="text-3xl font-bold text-red-400 mb-4">Horarios</h2>
      <ul className="space-y-3 text-gray-200 text-lg">
        <li><span className="font-semibold text-white">Lunes a Viernes:</span> 6:30 A.M. a 22:00 P.M.</li>
        <li><span className="font-semibold text-white">Sábados:</span> 8:30 A.M. a 13:00 P.M.</li>
      </ul>
      <p className="mt-4 text-gray-400">Aprovecha cada momento con rutinas enfocadas en potencia, resistencia y fitness general.</p>
    </article>
  )
}

function FullPassInfo() {
  return (
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
  )
}

interface PricingOption {
  label: string;
  price: string;
}

interface PricingCardProps {
  title: string;
  subtitle?: string;
  inscription?: string;
  options: PricingOption[];
  isPopular?: boolean;
}

function PricingCard({ title, subtitle, inscription, options, isPopular }: PricingCardProps) {
  return (
    <div className={`relative group rounded-2xl border p-8 shadow-2xl overflow-hidden transition-all duration-500 flex flex-col ${isPopular
      ? "border-red-500/60 bg-gradient-to-b from-gray-900 to-black hover:border-red-400 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
      : "border-white/10 bg-gray-900/40 hover:border-red-500/50 hover:bg-gray-900/80"
      }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-red-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest backdrop-blur-sm">
          Más Popular
        </div>
      )}
      <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${isPopular ? "from-red-600/10 opacity-50 group-hover:opacity-100" : "from-red-600/5 opacity-0 group-hover:opacity-100"
        }`} />

      <h3 className="text-xl font-bold text-red-400 mb-1 z-10 uppercase tracking-wide">{title}</h3>
      {subtitle && <p className="text-xs font-bold text-white mb-6 uppercase z-10 tracking-wider opacity-90">{subtitle}</p>}
      {!subtitle && <div className="mb-6"></div>}

      <div className="flex-grow z-10 space-y-4">
        {inscription && (
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Inscripción única</span>
            <span className="font-bold text-white bg-gray-800/50 px-2 py-1 rounded">{inscription}</span>
          </div>
        )}

        <div className="space-y-3 pt-2">
          {options.map((opt, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className={`text-sm font-medium uppercase ${isPopular ? "text-gray-300" : "text-gray-400"}`}>{opt.label}</span>
              <span className="font-bold text-white text-lg">{opt.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mt-16 mb-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestras Tarifas</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <PricingCard
          title="Musculación Libre Full Pass"
          subtitle="+2 pases semanales a actividades"
          inscription="$8.000"
          options={[
            { label: "Clase", price: "$10.000" },
            { label: "Mensual (Transferencia)", price: "$45.000" },
            { label: "Mensual (Efectivo)", price: "$43.000" }
          ]}
        />
        <PricingCard
          title="Musculación Libre Gold Pass"
          subtitle="+Pase libre a actividades y horarios"
          inscription="$8.000"
          isPopular
          options={[
            { label: "Clase", price: "$8.000" },
            { label: "Mensual (Transferencia)", price: "$55.000" },
            { label: "Mensual (Efectivo)", price: "$50.000" }
          ]}
        />
        <PricingCard
          title="Calistenia"
          options={[
            { label: "Clase", price: "$6.000" },
            { label: "Mensual (2x semana)", price: "$30.000" },
            { label: "Mensual (3x semana)", price: "$48.000" },
            { label: "Libre", price: "$55.000" }
          ]}
        />
        <PricingCard
          title="Flexibilidad"
          options={[
            { label: "Clase", price: "$10.000" },
            { label: "Mensual (2x semana)", price: "$40.000" }
          ]}
        />
        <PricingCard
          title="Entrenamiento de Glúteos"
          options={[
            { label: "Clase", price: "$6.000" },
            { label: "Mensual (2x semana)", price: "$25.000" },
            { label: "Mensual (3x semana)", price: "$35.000" }
          ]}
        />
        <PricingCard
          title="Core (Abdominales)"
          options={[
            { label: "Clase", price: "$6.000" },
            { label: "Mensual (2x semana)", price: "$25.000" }
          ]}
        />
      </div>
    </div>
  )
}
