'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Componente para el fondo de teléfono con chat
  const PhoneChatBackground = () => {
    const [showResponse, setShowResponse] = useState(false);
    const [dots, setDots] = useState('');

    useEffect(() => {
      // Animación de puntos suspensivos
      const dotsInterval = setInterval(() => {
        setDots(prev => {
          if (prev.length === 3) return '';
          return prev + '.';
        });
      }, 500);

      // Mostrar respuesta después de un tiempo
      const responseTimer = setTimeout(() => {
        setShowResponse(true);
      }, 2500);

      return () => {
        clearInterval(dotsInterval);
        clearTimeout(responseTimer);
      };
    }, []);

    return (
      <div className="relative mx-auto w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="bg-whiteh-6 flex justify-between items-center px-6 pt-2">
            <span className="text-xs font-semibold text-black">15:40</span>
            <div className="flex space-x-1 items-center">
              <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
              <span className="text-xs text-black">46%</span>
            </div>
          </div>

          {/* Chat header */}
          <div className="flex items-center p-4  border-gray-800 border-b-[0.5px]">
            <ChevronLeft className="w-5 h-5 text-black" />
            <div className="ml-2 flex-1">
              <p className="font-semibold text-black">Miguel Velasco</p>
              <p className="text-xs text-gray-400">En línea</p>
            </div>
          </div>

          {/* Chat content */}
          <div className="p-4 h-[calc(100%-88px)] overflow-y-auto ">

            <div className="message received mb-4">
              <div className="message-content bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-black">¿Qué te parece Miguel Velasco</p>
              </div>
            </div>

            {/* Indicador de escritura */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-400 shadow-2xl flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs">MV</span>
              </div>
              <div className=" bg-white  rounded-xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-300"></div>
                </div>
              </div>
            </div>

            {showResponse && (
              <div className="message sent flex justify-end">
                <div className="message-content bg-green-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-black">Me parece una persona responsable y profesional. Su trabajo es excelente.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const testimonios = [
    {
      id: 1,
      mockup: (
       <div className="relative mx-auto w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="bg-whiteh-6 flex justify-between items-center px-6 pt-2">
            <span className="text-xs font-semibold text-black">15:40</span>
            <div className="flex space-x-1 items-center">
              <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
              <span className="text-xs text-black">46%</span>
            </div>
          </div>

          {/* Chat header */}
          <div className="flex items-center p-4  border-gray-800 border-b-[0.5px]">
            <ChevronLeft className="w-5 h-5 text-black" />
            <div className="ml-2 flex-1">
              <p className="font-semibold text-black">Miguel Velasco</p>
              <p className="text-xs text-gray-400">En línea</p>
            </div>
          </div>

          {/* Chat content */}
          <div className="p-4 h-[calc(100%-88px)] overflow-y-auto ">

            <div className="message received mb-4">
              <div className="message-content bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-black">¿Qué te parece Miguel Velasco</p>
              </div>
            </div>

            {/* Indicador de escritura */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-400 shadow-2xl flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs">MV</span>
              </div>
              <div className=" bg-white  rounded-xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-300"></div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      )
    },
    {
      id: 2,
      mockup: (
        <div className="relative mx-auto w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="bg-whiteh-6 flex justify-between items-center px-6 pt-2">
            <span className="text-xs font-semibold text-black">15:40</span>
            <div className="flex space-x-1 items-center">
              <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
              <span className="text-xs text-black">46%</span>
            </div>
          </div>

          {/* Chat header */}
          <div className="flex items-center p-4  border-gray-800 border-b-[0.5px]">
            <ChevronLeft className="w-5 h-5 text-black" />
            <div className="ml-2 flex-1">
              <p className="font-semibold text-black">Miguel Velasco</p>
              <p className="text-xs text-gray-400">En línea</p>
            </div>
          </div>

          {/* Chat content */}
          <div className="p-4 h-[calc(100%-88px)] overflow-y-auto ">

            <div className="message received mb-4">
              <div className="message-content bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-black">¿Qué te parece Miguel Velasco</p>
              </div>
            </div>

            {/* Indicador de escritura */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-400 shadow-2xl flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs">MV</span>
              </div>
              <div className=" bg-white  rounded-xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-300"></div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      )
    },
    {
      id: 3,
      mockup: (
       <div className="relative mx-auto w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="bg-whiteh-6 flex justify-between items-center px-6 pt-2">
            <span className="text-xs font-semibold text-black">15:40</span>
            <div className="flex space-x-1 items-center">
              <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
              <span className="text-xs text-black">46%</span>
            </div>
          </div>

          {/* Chat header */}
          <div className="flex items-center p-4  border-gray-800 border-b-[0.5px]">
            <ChevronLeft className="w-5 h-5 text-black" />
            <div className="ml-2 flex-1">
              <p className="font-semibold text-black">Miguel Velasco</p>
              <p className="text-xs text-gray-400">En línea</p>
            </div>
          </div>

          {/* Chat content */}
          <div className="p-4 h-[calc(100%-88px)] overflow-y-auto ">

            <div className="message received mb-4">
              <div className="message-content bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-black">¿Qué te parece Miguel Velasco</p>
              </div>
            </div>

            {/* Indicador de escritura */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-400 shadow-2xl flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs">MV</span>
              </div>
              <div className=" bg-white  rounded-xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-300"></div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
      )
    },
    {
      id: 4,
      mockup: <PhoneChatBackground />
    }
  ];

  const getSlidePosition = (index) => {
    const total = testimonios.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === total - 1) return 'left';
    return 'hidden';
  };

  const getSlideStyles = (position) => {
    const baseStyles = 'absolute top-0 transition-all duration-700 ease-in-out';

    switch (position) {
      case 'center':
        return `${baseStyles} left-1/2 transform -translate-x-1/2 scale-110 z-30 opacity-100`;
      case 'left':
        return `${baseStyles} left-[15%] transform -translate-x-1/2 scale-90 z-20 opacity-70`;
      case 'right':
        return `${baseStyles} right-[15%] transform translate-x-1/2 scale-90 z-20 opacity-70`;
      case 'hidden':
        return `${baseStyles} left-1/2 transform -translate-x-1/2 scale-80 z-10 opacity-0 pointer-events-none`;
      default:
        return `${baseStyles} opacity-0 pointer-events-none`;
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="min-h-screen py-16 px-4 full-width-blur">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Testimonios
            </span>
          </h2>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Cards Container */}
          <div className="relative h-[600px] overflow-visible">
            {testimonios.map((testimonio, index) => {
              const position = getSlidePosition(index);
              return (
                <div
                  key={testimonio.id}
                  className={getSlideStyles(position)}
                  onClick={() => position !== 'center' && goToSlide(index)}
                  style={{ cursor: position !== 'center' ? 'pointer' : 'default' }}
                >
                  <div className={`transform transition-all duration-300 ${
                    position === 'center' ? 'hover:scale-105' : 'hover:scale-95'
                  }`}>
                    {testimonio.mockup}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-40 shadow-xl border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-40 shadow-xl border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
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
            />
          ))}
        </div>

        {/* Counter */}
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
