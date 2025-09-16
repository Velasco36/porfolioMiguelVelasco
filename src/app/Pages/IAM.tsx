'use client';
import { useState, useEffect } from 'react';

const IAM = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'Miguel Velasco';

  const typeWriter = () => {
    let index = 0;
    const typingSpeed = 100; // velocidad de escritura en ms

    setShowCursor(true);
    setDisplayedText('');

    const typing = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typing, typingSpeed);
      } else {
        // Cuando termine de escribir, espera un poco y oculta el cursor
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    };

    typing();
  };

  useEffect(() => {
    // Primera ejecución inmediata
    typeWriter();

    // Configurar intervalo para repetir cada 7 segundos
    const interval = setInterval(() => {
      typeWriter();
    }, 7000);

    // Limpiar intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id='iam' className="w-full justify-items-start py-16 px-4 mt-12 hide-scrollbar">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar/Imagen */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <span translate="no" className="text-5xl md:text-6xl font-bold text-white">M</span>
            </div>
          </div>

          {/* Información */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {displayedText}
              <span className={`typewriter-cursor ${showCursor ? 'blink' : 'hidden'}`}>|</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-200 mb-4 font-medium">
              Desarrollador Full Stack
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed max-w-2xl">
              Apasionado desarrollador con más de 4 años de experiencia creando aplicaciones web modernas
              utilizando tecnologías como React, Next.js, Node.js y TypeScript. Me encanta resolver problemas
              complejos y crear experiencias de usuario excepcionales.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-semibold transition-colors shadow-md">
                Contactar
              </button>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/miguel-velasco-366743294/" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="https://github.com/Velasco36" target="_blank" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=584244589598"
                  target="_blank"
                  rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAM;
