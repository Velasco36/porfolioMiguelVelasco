'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



interface ContactData {
  initials: string;
  avatarColor: string;
  name: string;
  // añade otras propiedades que uses
  email?: string;
  message?: string;
}

interface TestimonioProps {
  contactData: ContactData; // Ahora es un objeto, no un string
  responseText: string;
  isActive: boolean;
}
const Testimonios = () => {
  // Estado para controlar el índice del testimonio actual
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para prevenir múltiples animaciones simultáneas
  const [isAnimating, setIsAnimating] = useState(false);

   const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  // Componente animado para cada testimonio
 const AnimatedChatTestimonio = ({ contactData, responseText, isActive }: TestimonioProps) => {
    // Estado para controlar si se muestra la respuesta final
    const [showResponse, setShowResponse] = useState(false);
    // Estado para controlar la animación de puntos suspensivos
    const [showTyping, setShowTyping] = useState(true);
    // Contador de animaciones para reiniciar
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
      // Solo animar si el slide está activo (en el centro)

      // if (!isActive) {
      //   // Reset states cuando no está activo
      //   setShowResponse(false);
      //   setShowTyping(true);
      //   return;
      // }

      // Reiniciar estados al comenzar nueva animación
      setShowResponse(false);
      setShowTyping(true);

      // Timer para mostrar la respuesta después de 3 segundos
      const responseTimer = setTimeout(() => {
        setShowTyping(false); // Ocultar indicador de escritura
        setShowResponse(true); // Mostrar respuesta
      }, 2000);

      // Timer para reiniciar la animación cada 10 segundos
      const resetTimer = setTimeout(() => {
        setAnimationKey(prev => prev + 1); // Fuerza re-render
      }, 10000);

      // Cleanup de timers
      return () => {
        clearTimeout(responseTimer);
        clearTimeout(resetTimer);
      };
    }, [isActive, animationKey]); // Dependencias: isActive y animationKey



    return (
      <div className="relative mx-auto w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Pantalla del teléfono */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">

          {/* Barra de estado del teléfono */}
          <div className="bg-white h-6 flex justify-between items-center px-6 pt-2">
            <span className="text-xs font-semibold text-black">
            {currentTime || '--:--'}
          </span>
            <div className="flex space-x-1 items-center">
              <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
              <span className="text-xs text-black">46%</span>
            </div>
          </div>

          {/* Header del chat con información del contacto */}
          <div className="flex items-center p-4 ">
            <ChevronLeft className="w-5 h-5 text-black" />
            {/* Foto de perfil */}
            <div className={`w-10 h-10 rounded-full ${contactData.avatarColor} flex items-center justify-center ml-2 mr-3`}>
              <span className="text-white font-bold text-sm line-h-11" >{contactData.initials}</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-black">{contactData.name}</p>
              <p className="text-xs text-gray-400">En línea</p>
            </div>
          </div>
          <span className="block w-full h-px bg-gray-300"></span>

          {/* Área de contenido del chat */}
          <div className="p-4 h-[calc(100%-88px)] overflow-y-auto">

            {/* Mensaje enviado por nosotros (pregunta inicial) */}
            <div className="flex justify-end mb-4">
              <div className="bg-green-500 rounded-lg rounded-br-sm p-3 max-w-[80%]">
                <p className="text-white">¿Qué te parece trabajar con Miguel Velasco?</p>
                <div className="text-right mt-1">
                  <span className="text-xs text-green-100">15:38</span>
                </div>
              </div>
            </div>

            {/* Indicador de escritura - se muestra solo mientras showTyping es true */}
            {showTyping && (
              <div className="flex items-end mb-4">
                {/* Avatar del contacto */}
                <div className={`w-8 h-8 rounded-full ${contactData.avatarColor} flex items-center justify-center mr-2 mb-1`}>
                  <span className="text-white font-bold text-xs">{contactData.initials}</span>
                </div>
                {/* Burbuja con animación de puntos */}
                <div className="bg-gray-200 rounded-lg rounded-bl-sm p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Respuesta final - se muestra solo cuando showResponse es true */}
            {showResponse && (
              <div className="flex items-end animate-fadeIn">
                {/* Avatar del contacto */}
                <div className={`w-8 h-8 rounded-full ${contactData.avatarColor} flex items-center justify-center mr-2 mb-1`}>
                  <span className="text-white font-bold text-xs">{contactData.initials}</span>
                </div>
                <div className="bg-gray-200 rounded-lg rounded-bl-sm p-3 max-w-[75%]">
                  <p className="text-black">{responseText}</p>
                  <div className="mt-1">
                    <span className="text-xs text-gray-500">15:40</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Array de testimonios con diferentes estados de conversación
  const testimonios = [
    {
      id: 1,
      contactData: {
        name: "Luis Galea",
        initials: "LG",
        avatarColor: "bg-gray-400"
      },
      responseText: "¡Increíble trabajo! 🔥 Muy profesional y detallista. Definitivamente lo recomiendo al 100%"
    },
    {
      id: 2,
      contactData: {
        name: "Alejandro Garcia",
        initials: "AG",
        avatarColor: "bg-gray-400"
      },
      responseText: "¡Súper profesional! 💯 Trabajé con él en mi página web y quedó perfecta. Muy recomendado 👌"
    },
    {
      id: 3,
      contactData: {
        name: "Antonio Ortiz",
        initials: "AO",
        avatarColor: "bg-gray-400"
      },
      responseText: "Excelente trabajo y muy buen trato. Siempre cumple en tiempo y forma. ¡Muy recomendable! ⭐⭐⭐⭐⭐"
    },
    {
      id: 4,
      contactData: {
        name: "Daniel Ortiz",
        initials: "DO",
         avatarColor: "bg-gray-400"
      },
      responseText: "¡Excelente profesional!. Lo recomiendo 100%"
    }
  ];

  /**
   * Calcula la posición de un slide en el carrusel 3D
   * @param {number} index - Índice del slide
   * @returns {string} - Posición del slide ('center', 'left', 'right', 'hidden')
   */
  const getSlidePosition = (index: number) => {
    const total = testimonios.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return 'center';      // Slide activo (centro)
    if (diff === 1) return 'right';       // Siguiente slide (derecha)
    if (diff === total - 1) return 'left'; // Slide anterior (izquierda)
    return 'hidden';                      // Slides ocultos
  };

  /**
   * Genera los estilos CSS para cada posición del slide
   * @param {string} position - Posición del slide
   * @returns {string} - Clases CSS para la posición
   */
  const getSlideStyles = (position: string) => {
    const baseStyles = 'absolute top-0 transition-all duration-700 ease-in-out';

   switch (position) {
  case 'center':
    // Slide principal: centrado, escalado al 110%, máxima opacidad
    return `${baseStyles} left-1/2 transform -translate-x-1/2 scale-110 z-30 opacity-100`;
  case 'left':
    // Slide izquierdo: menor escala, parcialmente transparente con blur
    return `${baseStyles} left-[15%] transform -translate-x-1/2 scale-90 z-20 opacity-70 blur-sm`;
  case 'right':
    // Slide derecho: menor escala, parcialmente transparente con blur
    return `${baseStyles} right-[15%] transform translate-x-1/2 scale-90 z-20 opacity-70 blur-sm`;
  case 'hidden':
    // Slides ocultos: mínima escala, transparentes, sin interacción
    return `${baseStyles} left-1/2 transform -translate-x-1/2 scale-80 z-10 opacity-0 pointer-events-none`;
  default:
    return `${baseStyles} opacity-0 pointer-events-none`;
}
  };

  /**
   * Avanza al siguiente slide del carrusel
   */
  const nextSlide = () => {
    if (isAnimating) return; // Prevenir múltiples animaciones
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
    // Reactivar interacciones después de la animación
    setTimeout(() => setIsAnimating(false), 700);
  };

  /**
   * Retrocede al slide anterior del carrusel
   */
  const prevSlide = () => {
    if (isAnimating) return; // Prevenir múltiples animaciones
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
    // Reactivar interacciones después de la animación
    setTimeout(() => setIsAnimating(false), 700);
  };

  /**
   * Navega directamente a un slide específico
   * @param {number} index - Índice del slide destino
   */
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section id='testimonio' className="min-h-screen py-16 px-4 full-width-blur">
      <div className="max-w-7xl mx-auto">

        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Testimonios
            </span>
          </h2>
        </div>

        {/* Contenedor principal del carrusel 3D */}
        <div className="relative max-w-6xl mx-auto">

          {/* Contenedor de los slides */}
          <div className="relative h-[600px] overflow-visible">
            {testimonios.map((testimonio, index) => {
              const position = getSlidePosition(index);
              const isActive = position === 'center'; // Determinar si el slide está activo

              return (
                <div
                  key={testimonio.id}
                  className={getSlideStyles(position)}
                  onClick={() => position !== 'center' && goToSlide(index)}
                  style={{ cursor: position !== 'center' ? 'pointer' : 'default' }}
                >
                  {/* Efecto hover diferenciado según la posición */}
                  <div className={`transform transition-all duration-300 ${
                    position === 'center' ? 'hover:scale-105' : 'hover:scale-95'
                  }`}>
                    {/* Renderizar el componente animado para cada testimonio */}
                    <AnimatedChatTestimonio
                      contactData={testimonio.contactData}
                      responseText={testimonio.responseText}
                      isActive={isActive}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botón de navegación izquierda */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-40 shadow-xl border border-white/20"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botón de navegación derecha */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-40 shadow-xl border border-white/20"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores de navegación (puntos) */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              } disabled:cursor-not-allowed`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador de slides */}
        <div className="text-center mt-6">
          <span className="text-white/70 text-sm">
            {currentIndex + 1} de {testimonios.length}
          </span>
        </div>
      </div>


    </section>
  );
};

export default Testimonios;
