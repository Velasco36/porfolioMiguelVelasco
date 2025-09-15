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
            <div className="bg-white h-6 flex justify-between items-center px-6 pt-2">
              <span className="text-xs font-semibold">15:40</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <span className="text-xs">46%</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bienvenido</h3>
              <p className="text-gray-600 mb-8">Regístrate en Tu Wallet</p>

              {/* Logo placeholder */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                <div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">Crear Cuenta</span>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <div className="h-2 bg-green-200 rounded-full w-3/4"></div>
                <div className="h-2 bg-green-200 rounded-full w-1/2"></div>
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
            <div className="bg-white h-6 flex justify-between items-center px-6 pt-2">
              <span className="text-xs font-semibold">15:40</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <span className="text-xs">46%</span>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center p-4">
              <ChevronLeft className="w-5 h-5" />
              <span className="ml-2 font-medium">Volver</span>
            </div>

            {/* Content */}
            <div className="p-6 pt-2">
              <p className="text-sm text-gray-600 mb-6">Carga los documentos que se solicitan a continuación</p>

              {/* Document options */}
              <div className="space-y-4">
                <div className="border border-blue-300 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">ID</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Cédula/DNI/Licencia/Pasaporte</p>
                      <p className="text-xs text-gray-600">Documento frontal del documento de identidad</p>
                    </div>
                  </div>
                  <div className="mt-3 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-sm">Tomar Foto</span>
                  </div>
                </div>

                <div className="border border-blue-300 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">ID</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Cédula/DNI/Licencia/Pasaporte</p>
                      <p className="text-xs text-gray-600">Documento trasero del documento de identidad</p>
                    </div>
                  </div>
                  <div className="mt-3 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-sm">Tomar Foto</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Enviar</span>
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
          <div className="w-full h-full bg-gray-700 rounded-[2.5rem] overflow-hidden relative">
            {/* Status bar */}
            <div className="bg-transparent h-6 flex justify-between items-center px-6 pt-2">
              <span className="text-xs font-semibold text-white">15:40</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-700 rounded-sm"></div>
                <span className="text-xs text-white">46%</span>
              </div>
            </div>

            {/* Header */}
            <div className="p-6 pt-4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Hola,</p>
                  <h2 className="text-xl font-bold text-white">Usuario</h2>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              </div>

              {/* Balance card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <p className="text-gray-600 text-sm mb-2">Saldo total</p>
                <h3 className="text-2xl font-bold mb-4">$12,450.00</h3>
                <div className="flex space-x-4">
                  <div className="flex-1 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Enviar</span>
                  </div>
                  <div className="flex-1 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Recibir</span>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full mb-2"></div>
                  <p className="text-sm font-semibold">Transferir</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full mb-2"></div>
                  <p className="text-sm font-semibold">Pagar</p>
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
