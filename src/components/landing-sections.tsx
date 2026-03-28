'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Zap } from 'lucide-react';

import espacioImg from '../assets/Screenshot_33.png';   // Calistenia — amplia sala roja
import motivacionImg from '../assets/Screenshot_35.png'; // PUSH bench — dramática oscura
import comunitadImg from '../assets/Screenshot_44.png';  // Pull-ups exterior — acción real

/* ─── Reusable hook: detects when element enters the viewport ─── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Section 1: Nuestro Espacio ─── */
export function NuestroEspacio() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background image — GPU-accelerated, no scaling to preserve sharpness */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <img
          src={espacioImg}
          alt="Nuestro espacio"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'saturate(1.15) contrast(1.05) brightness(0.95)',
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 mb-6 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.1s',
            }}
          >
            <Dumbbell size={16} className="text-red-500" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Instalaciones</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transitionDelay: '0.2s',
            }}
          >
            Un espacio diseñado{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              para vos
            </span>
          </h2>

          <p
            className="text-gray-300 text-lg leading-relaxed mb-8 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transitionDelay: '0.35s',
            }}
          >
            Equipamiento profesional, estructura roja de calistenia, racks de sentadilla, área de pesas libres y mucho más. Todo pensado para que puedas entrenar sin límites.
          </p>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-6 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.5s',
            }}
          >
            {[
              { value: '200m²', label: 'de instalaciones' },
              { value: '4', label: 'disciplinas' },
              { value: '100%', label: 'equipado' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-red-500">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: decorative card */}
        <div
          className="hidden md:flex justify-center transition-all duration-1000"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(60px)',
            transitionDelay: '0.4s',
          }}
        >
          <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-red-600/30 shadow-2xl shadow-red-950/50">
            <img
              src={espacioImg}
              alt="Gym"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(1.15) contrast(1.05)', transform: 'translateZ(0)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-bold text-lg">Atlas Gym</div>
              <div className="text-red-400 text-sm">Calistenia & Musculación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Mentalidad ─── */
export function Mentalidad() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Full bleed background — GPU-accelerated */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <img
          src={motivacionImg}
          alt="Mentalidad"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'saturate(1.1) contrast(1.08) brightness(0.9)',
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        />
        {/* Strong dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Red vignette bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-950/30 to-transparent" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 mb-8 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.1s',
          }}
        >
          <Zap size={16} className="text-red-500" />
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Mentalidad</span>
        </div>

        {/* Giant quote */}
        <blockquote
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '0.25s',
          }}
        >
          No es sobre ser{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
            el mejor.
          </span>
          <br />
          Es sobre ser{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
            mejor que ayer.
          </span>
        </blockquote>

        <p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.4s',
          }}
        >
          En Atlas no solo entrenás el cuerpo. Construís disciplina, constancia y el carácter que te lleva más allá de tus límites.
        </p>

        {/* Feature pills */}
        <div
          className="flex flex-wrap justify-center gap-3 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.55s',
          }}
        >
          {['Constancia', 'Disciplina', 'Resultados', 'Comunidad', 'Progreso'].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium backdrop-blur-sm hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Comunidad / CTA ─── */
export function Comunidad() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-black"
    >
      {/* Background image — GPU-accelerated */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <img
          src={comunitadImg}
          alt="Comunidad Atlas"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'saturate(1.2) contrast(1.05) brightness(1.0)',
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-black/10" />
      </div>

      {/* Content — right aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex justify-end">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/40 bg-red-600/10 mb-6 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.1s',
            }}
          >
            <Users size={16} className="text-red-500" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Comunidad</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: '0.2s',
            }}
          >
            Formá parte de algo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              más grande
            </span>
          </h2>

          <p
            className="text-gray-300 text-lg leading-relaxed mb-10 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: '0.35s',
            }}
          >
            En Atlas encontrás una comunidad que te impulsa, instructores que te guían y un ambiente que te hace querer volver cada día. Tu transformación empieza con un primer paso.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.5s',
            }}
          >
            <Link
              to="/contacto"
              className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wider text-center"
            >
              Empezar Ahora
            </Link>
            <Link
              to="/disciplinas"
              className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:border-red-600/50 hover:bg-white/5 transition-all duration-300 uppercase tracking-wider text-center"
            >
              Ver Disciplinas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
