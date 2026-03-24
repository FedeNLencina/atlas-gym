'use client';

import { Link } from "react-router-dom"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Disciplinas', href: '#disciplinas' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-red-600/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <img
                src="/logo.png"
                alt="Atlas Gym & Fitness"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">Atlas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-red-600/30 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-3 text-white hover:text-red-500 hover:bg-red-500/10 transition-colors duration-300 font-medium text-sm uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
