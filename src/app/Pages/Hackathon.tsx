'use client'

import React from 'react';
import HackathonCard from './HackathonCard';

export default function HackathonSection() {
  // videos
  const Neo_VIDEO = "/video/neofood.mp4";
  const capy_VIDEO = "/video/capy.mp4";

  // images
  const TW_IMAGES = "/images/logo.png";
  const TW_3D = "/images/logo.png";

  const projects = [
    {
      id: 1,
      title: "NeoFood",
      description: "Desarrollamos una propuesta innovadora para promocionar los productos de buena calidad pronto a vencerse.",
      tags: ["React", "Next.js", "TypeScript"],
      year: "2025",
      status: "Ganador",
      video: Neo_VIDEO,
      backgroundImage: TW_IMAGES,
      gradient: "from-purple-500 to-pink-600",
      borderColor: "hover:border-purple-400",
      buttonGradient: "from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800"
    },
    {
      id: 2,
      title: "CapyFinance",
      description: "Plataforma revolucionaria de gestión financiera con inteligencia artificial integrada.",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      year: "2024",
      status: "Finalista",
      video: capy_VIDEO,
      backgroundImage: TW_3D,
      gradient: "from-purple-500 to-pink-600",
      borderColor: "hover:border-purple-400",
      buttonGradient: "from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800"
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Hackathon
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Innovación y creatividad en tiempo récord
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project) => (
            <HackathonCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
