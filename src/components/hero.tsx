'use client';

import { Link } from "react-router-dom";
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToDisciplinas = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('disciplinas');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-black to-red-950/20 pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Forja tu Fuerza
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mt-2">
              en Atlas
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Gimnasio especializado con equipamiento de gran calidad. Musculación, calistenia, clases de glúteos y stretching. Entrena con los mejores.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/contacto"
            className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            Únete Ahora
          </Link>
          <button
            onClick={scrollToDisciplinas}
            className="px-8 py-4 border-2 border-red-600 text-red-500 font-bold text-lg rounded-lg hover:bg-red-600/10 transition-all duration-300 uppercase tracking-wider"
          >
            Ver Disciplinas
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToDisciplinas}
            className="animate-bounce p-2 rounded-full border border-red-600 text-red-500 hover:text-red-400 hover:border-red-400 transition-colors"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
