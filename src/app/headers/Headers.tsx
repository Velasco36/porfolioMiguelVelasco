'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Intentar reproducir automáticamente al cargar
  useEffect(() => {
    const tryAutoplay = async () => {
      try {
        await audioRef.current?.play();
        setIsSoundPlaying(true);
        console.log("🎵 Autoplay exitoso");
      } catch (err) {
        console.log("🔇 Autoplay bloqueado por el navegador:", err);
        setShowOverlay(true); // Mostrar overlay si el navegador bloquea
      }
    };

    tryAutoplay();
  }, []);

  const handleUserInteraction = async () => {
    try {
      await audioRef.current?.play();
      setIsSoundPlaying(true);
      setShowOverlay(false);
      toast.success('🎵 Música activada', { autoClose: 2000 });
    } catch (err) {
      console.log("❌ Error al reproducir tras interacción:", err);
      toast.error('Error al activar música');
    }
  };

  const toggleSound = async () => {
    if (!audioRef.current) return;
    if (isSoundPlaying) {
      audioRef.current.pause();
      setIsSoundPlaying(false);
      toast.info('🔇 Sonido pausado');
    } else {
      try {
        await audioRef.current.play();
        setIsSoundPlaying(true);
        toast.success('🎵 Sonido activado');
      } catch (err) {
        console.log('Error al reproducir audio:', err);
        toast.error('❌ Error al reproducir audio');
      }
    }
  };

  return (
    <>
      {/* Overlay que pide interacción si el navegador bloquea el audio */}
      {showOverlay && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
          <button
            onClick={handleUserInteraction}
            className="text-white text-xl bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 rounded-full shadow-lg animate-pulse"
          >
            🎧 Haz click para activar la música
          </button>
        </div>
      )}

      <header className="w-full bg-headers shadow-lg fixed top-0 z-40">
        <audio ref={audioRef} preload="auto" loop>
          <source src="/sounds/Knowing.mp3" type="audio/mpeg" />
        </audio>

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                 <Image
                src="/images/miguel.jpg"
                alt="Logo de la empresa"
                width={40}
                height={40}
                className="rounded-full"
              />
              </div>
              <span className="text-xl font-bold text-white">Dev Miguel Velasco</span>
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-white hover:text-purple-200 font-medium">
                Inicio
              </Link>
              <Link href="/" className="text-white hover:text-purple-200 font-medium">
                Servicios
              </Link>
              <Link href="/" className="text-white hover:text-purple-200 font-medium">
                Contacto
              </Link>

              {/* Botón sonido */}
              <button
                onClick={toggleSound}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors cursor-pointer group"
                aria-label={isSoundPlaying ? "Silenciar audio" : "Reproducir audio"}
              >
                {isSoundPlaying ? (
                  <img src="/Gifs/sound.gif" alt="Sonido reproduciéndose" className="h-6 w-6" />
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
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
            </nav>
          </div>
        </div>
      </header>

      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </>
  );
};

export default Header;
