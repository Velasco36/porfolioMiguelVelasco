'use client';
import React, { useState, useRef } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [loadingVideos, setLoadingVideos] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // videos
  const TW_VIDEO = "/video/Tw.mp4";
  const Modelo_VIDEO = "/video/Modelo2.mp4";
  const Frepool_VIDEO = "/video/freepool.mp4";

  // images
  const TW_IMAGES = "/images/tw.webp";
  const TW_3D = "/images/modeloRender.png";
  const MAP_images = "/images/map.jpg";

  // Manejar la carga del video
  const handleVideoLoadStart = (projectId: number) => {
    setLoadingVideos(prev => ({ ...prev, [projectId]: true }));
  };

  const handleVideoCanPlay = (projectId: number) => {
    setLoadingVideos(prev => ({ ...prev, [projectId]: false }));
  };

  const handleVideoError = (projectId: number) => {
    setLoadingVideos(prev => ({ ...prev, [projectId]: false }));
  };

  // Datos de ejemplo para los proyectos
  const projects = [
    {
      id: 1,
      title: "Landing page Tu Wallet",
      description: " Creé una landing page profesional con un diseño de madera basado en Figma, implementando animaciones para una mejor experiencia de usuario.",
      technologies: ["Php", "Css", "Html", "Js"],
      videoUrl: TW_VIDEO,
      thumbnail: TW_IMAGES
    },
    {
      id: 2,
      title: "Animación de desplazamiento 3D",
      description: "Desarrollo de una animación de desplazamiento 3D que crea un efecto visual dinámico e inmersivo, sincronizado con el scroll del usuario para generar una experiencia interactiva.",
      technologies: ["NextJs", "Css", "ThreeJs"],
      videoUrl: Modelo_VIDEO,
      thumbnail: TW_3D
    },
    {
      id: 3,
      title: "GeoLocalización y Realiadad Aumentada",
      description: " Diseño de prototipo en Figma para una aplicación de realidad aumentada (AR). Se implementó la colocación de diseños digitales en el entorno real, con la funcionalidad de distribuir puntos de interés en un mapa",
      technologies: ["React Native", "MERN"],
      videoUrl: Frepool_VIDEO,
      thumbnail: MAP_images
    },
  ];

  return (
    <section id="proyects" className="min-h-screen py-16 px-4 full-width-blur">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Proyectos</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mi experiencia en desarrollo full-stack y tecnologías modernas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 ease-out"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                boxShadow: hoveredProject === project.id
                  ? '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 4px 20px rgba(0, 0, 0, 0.3)',
                border: hoveredProject === project.id
                  ? '1px solid transparent'
                  : '1px solid rgba(75, 85, 99, 0.3)',
                background: hoveredProject === project.id
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%), rgba(31, 41, 55, 0.8)'
                  : undefined
              }}
            >
              {/* Efecto de brillo animado en el borde */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.4) 50%, rgba(147, 51, 234, 0.4) 100%)',
                  padding: '1px',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                }}
              />

              {/* Video/Thumbnail Container */}
              <div className="relative h-48 overflow-hidden">
                {hoveredProject === project.id ? (
                  <div className="relative w-full h-full">
                    {/* Spinner de carga */}
                    {loadingVideos[project.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 z-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                      </div>
                    )}

                    <video
                      ref={el => videoRefs.current[project.id] = el}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoadStart={() => handleVideoLoadStart(project.id)}
                      onCanPlay={() => handleVideoCanPlay(project.id)}
                      onError={() => handleVideoError(project.id)}
                      preload="metadata"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                  </div>
                ) : (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play icon indicator */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="bg-blue-600/80 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-700/80 text-blue-300 rounded-full backdrop-blur-sm border border-gray-600/50 group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Demo
                  </button>
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
