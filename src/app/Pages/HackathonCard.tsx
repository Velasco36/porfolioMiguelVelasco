'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react';

export default function HackathonCard({ project }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Mostrar video después de un delay cuando se hace hover
  useEffect(() => {
    let timeoutId;
    if (hovered && !showVideo) {
      timeoutId = setTimeout(() => {
        setShowVideo(true);
      }, 300);
    } else if (!hovered) {
      setShowVideo(false);
    }
    return () => clearTimeout(timeoutId);
  }, [hovered, showVideo]);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setRotation({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    setVideoLoaded(true);
  }, []);

  return (
    <div
  className="relative transition-all duration-500 ease-out"
  style={{
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
  }}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  onMouseEnter={handleMouseEnter}
>
  {/* Background Image que aparece al hacer hover */}
  <div
    className={`absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat transition-all duration-500 opacity-0 ${
      hovered ? 'opacity-10 scale-105' : 'opacity-0 scale-100'
    }`}
    style={{
      backgroundImage: hovered ? `url('${project.backgroundImage}')` : 'none',
      width: '100px',    // Define el ancho que prefieras
      height: '100px',   // Define el alto que prefieras
      left: '50%',       // Centrar horizontalmente
      top: '50%',        // Centrar verticalmente
      transform: 'translate(-50%, -50%)' // Ajuste para centrado perfecto
    }}
  />

  {/* El resto de tu código permanece igual */}
  <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 ${project.borderColor} transition-all duration-300 h-full flex flex-col`}>

    {/* Video/Image Container */}
    <div className="relative aspect-video bg-slate-950 flex-shrink-0">
      {/* Spinner de carga - solo para video */}
      {showVideo && !videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-purple-300">Cargando...</span>
            </div>
          </div>
        </div>
      )}

      {/* Imagen de thumbnail cuando no hay hover */}
      {!showVideo && (
        <img
          src={project.backgroundImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/* Video cuando hay hover */}
      {showVideo && (
        <>
          {videoError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl">!</span>
                </div>
                <p className="text-gray-300 text-sm">Video no disponible</p>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            >
              <source src={project.video} type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
          )}
        </>
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

      {/* Play icon indicator cuando no hay hover */}
      {!showVideo && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-purple-600/80 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
          {project.status}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-slate-700 text-white text-sm font-semibold rounded-full">
          {project.year}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {project.title}
      </h3>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-slate-700 text-gray-200 text-xs rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className={`w-full bg-gradient-to-r ${project.buttonGradient} text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-auto`}>
        Ver Proyecto Completo
      </button>
    </div>
  </div>

  {/* Glow effect */}
  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 -z-10 transition-opacity duration-300 ${
    hovered ? 'opacity-20' : ''
  }`}></div>
</div>
  );
}
