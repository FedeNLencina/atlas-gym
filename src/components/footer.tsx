'use client';

import { Link } from "react-router-dom"
import { MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-red-600/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Atlas Gym & Fitness"
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <h3 className="text-white font-bold text-lg">Atlas</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Gimnasio especializado con equipamiento de clase mundial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Inicio</Link></li>
              <li><Link to="#disciplinas" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Disciplinas</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Disciplinas</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Musculación</span></li>
              <li><span className="text-gray-400 text-sm">Calistenia</span></li>
              <li><span className="text-gray-400 text-sm">Clases de Glúteos</span></li>
              <li><span className="text-gray-400 text-sm">Stretching</span></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-4">
              <Link
                to="https://wa.me/YOUR_WHATSAPP_NUMBER"
                className="p-2 rounded-lg bg-red-600/20 hover:bg-red-600/40 transition-colors text-red-500 hover:text-red-400"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </Link>
              <a
                href="https://instagram.com/atlasgymfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red-600/20 hover:bg-red-600/40 transition-colors text-red-500 hover:text-red-400"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-600/30 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} Atlas Gym & Fitness. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-600" />
              <span>en la web</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
