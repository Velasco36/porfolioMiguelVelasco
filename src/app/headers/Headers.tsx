'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-headers shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                M
              </span>
            </div>
            <span className="text-xl font-bold text-white">Dev Miguel Velasco</span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-purple-200 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/services" className="text-white hover:text-purple-200 transition-colors font-medium">
              Servicios
            </Link>

            <Link href="/contact" className="text-white hover:text-purple-200 transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-400 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-purple-200 transition-colors font-medium py-2">
                Inicio
              </Link>
              <Link href="/services" className="text-white hover:text-purple-200 transition-colors font-medium py-2">
                Servicios
              </Link>
              <Link href="/about" className="text-white hover:text-purple-200 transition-colors font-medium py-2">
                Acerca de
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-200 transition-colors font-medium py-2">
                Contacto
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <button className="bg-white text-purple-700 hover:bg-purple-50 px-5 py-2 rounded-full font-semibold transition-colors shadow-md">
                  Login
                </button>
                <button className="bg-purple-500 text-white hover:bg-purple-600 px-5 py-2 rounded-full font-semibold transition-colors shadow-md">
                  Registrarse
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
