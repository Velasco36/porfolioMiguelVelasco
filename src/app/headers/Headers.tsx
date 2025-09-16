'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Efecto para controlar la reproducción del audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Intentar reproducir el audio cuando el componente se monta
    const playAudio = async () => {
      try {
        await audio.play();
        setIsSoundPlaying(true);
      } catch (error) {
        console.log('La reproducción automática fue bloqueada:', error);
        setIsSoundPlaying(false);
      }
    };

    playAudio();

    // Configurar el evento para cuando el audio termina
    const handleEnded = () => {
      // Reiniciar y reproducir nuevamente en bucle
      audio.currentTime = 0;
      audio.play().catch(() => setIsSoundPlaying(false));
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Función para alternar el sonido
  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSoundPlaying) {
      audio.pause();
      setIsSoundPlaying(false);
    } else {
      audio.play()
        .then(() => setIsSoundPlaying(true))
        .catch(error => console.log('Error al reproducir audio:', error));
    }
  };

  return (
    <header className="w-full bg-headers shadow-lg fixed top-0 z-50">
      {/* Elemento de audio */}
      <audio ref={audioRef} preload="auto" loop>
        <source src="/sounds/Knowing.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

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
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-purple-200 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/services" className="text-white hover:text-purple-200 transition-colors font-medium">
              Servicios
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-200 transition-colors font-medium">
              Contacto
            </Link>

            {/* Control de sonido */}
            <div className="flex items-center ml-4">
              <button
                onClick={toggleSound}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={isSoundPlaying ? "Silenciar audio" : "Reproducir audio"}
              >
                <div className="relative">
                  {/* Icono de sonido o animación */}
                  {isSoundPlaying ? (
                    <div className="flex items-center">
                      <img
                        src="/Gifs/sound.gif"
                        alt="Sonido reproduciéndose"
                        className="h-6 w-6"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z"
                        />
                        {/* Línea diagonal de mute */}
                        <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth={2} />
                      </svg>
                      {/* Línea recta simulando mute (sin volumen) */}

                    </div>
                  )}
                </div>
              </button>
            </div>
          </nav>

          {/* Botón Menú Móvil */}
          <div className="flex items-center md:hidden">
            {/* Control de sonido para móvil */}
            <button
              onClick={toggleSound}
              className="mr-4 flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors"
              aria-label={isSoundPlaying ? "Silenciar audio" : "Reproducir audio"}
            >
              {isSoundPlaying ? (
                <img
                  src="/sound.gif"
                  alt="Sonido reproduciéndose"
                  className="h-5 w-5"
                />
              ) : (
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z"
                  />
                  <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth={2} />
                </svg>
              )}
            </button>

            <button
              className="text-white focus:outline-none"
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
