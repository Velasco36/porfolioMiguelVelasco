'use client'

import { useEffect, useRef } from 'react'

export default function Modelo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()

        // Comprobar si la sección está visible en la pantalla
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Reproducir el video cuando la sección es visible
          videoRef.current.play().catch(error => {
            console.log("Autoplay prevenido por el navegador:", error)
          })
        } else {
          // Pausar el video cuando no es visible
          videoRef.current.pause()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Llamar una vez al cargar para verificar el estado inicial
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Ajusta según la altura real de tu header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Función para reproducir el sonido y hacer scroll
  const handleButtonClick = (sectionId: string) => {
    // Reproducir sonido
    playButtonSound();
    // Hacer scroll a la sección
    scrollToSection(sectionId);
  };

  // Función para reproducir el sonido al hacer clic en los botones
  const playButtonSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reiniciar el sonido
      audioRef.current.play().catch(error => {
        console.log("Error al reproducir sonido:", error)
      })
    }
  }

  // Manejar cuando el video termine para reiniciarlo
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(error => {
        console.log("Error al reiniciar el video:", error)
      })
    }
  }

  return (
    <section className="intro-section hide-scrollbar" ref={sectionRef} id='background-mask'>
      {/* Elemento de audio para el sonido de los botones */}
      <audio ref={audioRef} preload="auto">
        <source src="/sounds/riser-swoosh2.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <video
        ref={videoRef}
        className="fullscreen-video"
        src="/video/astro.mp4"
        muted
        playsInline
        loop
        preload="auto"
        onEnded={handleVideoEnd}
      />
      <div className="content-overlay">
        <h1>MIGUEL VELASCO no se detiene. Él desarrolla.</h1>
      </div>

      <div className="footer-buttons">
        <button
          className="action-button"
          onClick={() => handleButtonClick('proyects')}
        >
          Proyectos
        </button>
        <button
          className="action-button"
          onClick={() => handleButtonClick('lineTime')}
        >
          Trabajos
        </button>
        <button
          className="action-button"
          onClick={() => handleButtonClick('iam')}
        >
          Quien soy
        </button>
         <button
          className="action-button"
          onClick={() => handleButtonClick('testimonio')}
        >
          Testimonios
        </button>
      </div>
    </section>
  )
}
