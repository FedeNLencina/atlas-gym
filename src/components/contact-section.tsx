'use client';

import { MessageCircle, Phone } from 'lucide-react';
export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-red-950/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Contacto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos disponibles para responder todas tus preguntas. Contacta con nosotros ahora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-red-600/30 hover:border-red-600/60 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-600/20 group-hover:bg-red-600/40 transition-colors">
                  <MessageCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">WhatsApp</h3>
                  <a 
                    target='_blank'
                    href="https://wa.me/5491164081774"
                    className="text-red-400 hover:text-red-300 transition-colors font-semibold flex items-center gap-2"
                  >
                    Envíanos un mensaje
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-red-600/30 hover:border-red-600/60 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-600/20 group-hover:bg-red-600/40 transition-colors">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">Instagram</h3>
                  <a 
                    href="https://instagram.com/atlasgimnasio_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors font-semibold flex items-center gap-2"
                  >
                    @atlasgymfitness
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden border border-red-600/30 group hover:border-red-600/60 transition-all duration-300 h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0176919283316!2d-58.38158!3d-34.60373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb7c91c543%3A0x1234567890ab!2sAtlas%20Gym!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">¿Listo para comenzar tu transformación?</p>
          <a
            href="https://wa.me/5491164081774"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
