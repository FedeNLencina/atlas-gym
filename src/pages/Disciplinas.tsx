import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Dumbbell, Users, Heart, Wind, Play, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import demoVideo from '../assets/videoLanding.mp4'
import musculacionImg from '../assets/musculacion.png';
import gluteosImg from '../assets/clasegluteos.png';
import stretchingImg from '../assets/stretching.png';
import calisteniaImg from '../assets/calistenia.png';


const disciplinasData = [
  {
    id: 1,
    name: 'Musculación',
    description: 'Construye músculo con técnica profesional. Equipamiento completo de pesas, barras y máquinas para todos los niveles.',
    icon: Dumbbell,
    color: 'from-red-600 to-red-500',
    image: musculacionImg,
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    name: 'Calistenia',
    description: 'Ejercicios de peso corporal con resultados excepcionales. Domina tu propio cuerpo y alcanza nuevos niveles de control.',
    icon: Users,
    color: 'from-red-700 to-red-600',
    image: calisteniaImg,
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    name: 'Clases de Glúteos',
    description: 'Programas específicos para tonificar y fortalecer. Clases dinámicas con música motivadora dirigidas por expertos.',
    icon: Heart,
    color: 'from-red-600 to-orange-500',
    image: gluteosImg,
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    name: 'Stretching',
    description: 'Recuperación y flexibilidad. Sesiones dedicadas a mejorar tu rango de movimiento y prevenir lesiones.',
    icon: Wind,
    color: 'from-red-700 to-red-600',
    image: stretchingImg,
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export function Disciplinas() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Disciplinas</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Descubre todas nuestras disciplinas y encuentra la que mejor se adapte a tus objetivos.
          </p>
        </div>
      </section>

      {/* Disciplinas Details */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disciplinas Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {disciplinasData.map((disciplina) => {
              const Icon = disciplina.icon
              const isHovered = hoveredId === disciplina.id

              return (
                <div
                  key={disciplina.id}
                  className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredId(disciplina.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={disciplina.image}
                      alt={disciplina.name}
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
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
                      <p className={`text-white text-sm leading-relaxed transition-all duration-500 line-clamp-2 ${isHovered ? 'opacity-100 line-clamp-none' : 'opacity-80'}`}>
                        {disciplina.description}
                      </p>

                      {/* Video Button */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedVideo(demoVideo)
                        }}
                        className={`mt-6 px-6 py-2 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 transition-all duration-500 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                      >
                        <Play className="w-4 h-4 fill-black" />
                        Ver Ejercicios
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-left">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedVideo(null)}
          />
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-600 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-gray-900 w-full relative">
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
                controlsList="nodownload"
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
