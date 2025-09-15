'use client'

import { useEffect, useRef } from 'react'

export default function Modelo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section className="intro-section hide-scrollbar" ref={sectionRef}>
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
        <button className="action-button">
          Proyectos
        </button>
        <button className="action-button">
          Trabajos
        </button>
        <button className="action-button">
          Quien soy
        </button>
      </div>
    </section>
  )
}
