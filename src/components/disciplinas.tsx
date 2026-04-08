'use client';


import { Dumbbell, Users, Heart, Wind, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import musculacionImg from '../assets/musculacion.png';
import gluteosImg from '../assets/clasegluteos.png';
import stretchingImg from '../assets/stretching.png';
import calisteniaImg from '../assets/calistenia.png';

const disciplinas = [
  {
    id: 1,
    name: 'Musculación',
    description: 'Construye músculo con técnica profesional. Equipamiento completo de pesas, barras y máquinas para todos los niveles.',
    icon: Dumbbell,
    color: 'from-red-600 to-red-500',
    image: musculacionImg,
  },
  {
    id: 2,
    name: 'Calistenia',
    description: 'Ejercicios de peso corporal con resultados excepcionales. Domina tu propio cuerpo y alcanza nuevos niveles de control.',
    icon: Users,
    color: 'from-red-700 to-red-600',
    image: calisteniaImg,
  },
  {
    id: 3,
    name: 'Clases de Glúteos',
    description: 'Programas específicos para tonificar y fortalecer. Clases dinámicas, enfocadas y con resultados visibles.',
    icon: Heart,
    color: 'from-red-600 to-orange-500',
    image: gluteosImg,
  },
  {
    id: 4,
    name: 'Stretching',
    description: 'Recuperación y flexibilidad. Sesiones dedicadas a mejorar tu rango de movimiento y prevenir lesiones.',
    icon: Wind,
    color: 'from-red-700 to-red-600',
    image: stretchingImg,
  },
];

export function Disciplinas() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="disciplinas" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Disciplinas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elige el camino que mejor se adapte a tus objetivos. Tenemos todo lo que necesitas para transformarte.
          </p>
        </div>

        {/* Disciplinas Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {disciplinas.map((disciplina) => {
            const Icon = disciplina.icon;
            const isHovered = hoveredId === disciplina.id;

            return (
              <div
                key={disciplina.id}
                className="group relative h-96 rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredId(disciplina.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={disciplina.image}
                    alt={disciplina.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${disciplina.color} opacity-60 group-hover:opacity-80 transition-all duration-500`}></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 transform transition-all duration-500">
                  {/* Icon and Title - Always Visible */}
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'scale-110 bg-white/20' : ''}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`w-1 h-12 bg-red-500 rounded-full transition-all duration-500 ${isHovered ? 'h-20' : ''}`}></div>
                  </div>

                  {/* Text Section - Expands on Hover */}
                  <div className="transform transition-all duration-500">
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      {disciplina.name}
                    </h3>

                    {/* Description - Appears on Hover */}
                    <p className={`text-white text-sm leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-100 line-clamp-none' : 'opacity-100 line-clamp-none lg:opacity-80 lg:line-clamp-2'}`}>
                      {disciplina.description}
                    </p>

                    {/* Action Button */}
                    <button
                      onClick={() => navigate('/disciplinas')}
                      className={`mt-6 px-6 py-2 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 transition-all duration-500 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:pointer-events-none'}`}>
                      <span>Ver más detalles</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
