'use client';
import react from './../../../public/svg/react.svg';
import nextjs from './../../../public/svg/nextjs.svg';
import css from './../../../public/svg/css.svg';
import django from './../../../public/svg/django.svg';
import html from './../../../public/svg/html.svg';
import js from './../../../public/svg/js.svg';
import mongodb2 from './../../../public/svg/mongodb2.svg';
import ts from './../../../public/svg/ts.svg';
import Image from 'next/image';

const InfiniteCarousel = () => {
  const technologies = [
    { name: 'React', icon: react },
    { name: 'Next.js', icon: nextjs },
    { name: 'CSS', icon: css },
    { name: 'Django', icon: django },
    { name: 'HTML', icon: html },
    { name: 'JavaScript', icon: js },
    { name: 'MongoDB', icon: mongodb2 },
    { name: 'TypeScript', icon: ts },
  ];

  // Duplicamos el array para crear el efecto infinito
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="w-full hiddes-test  ">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Tecnologías que uso
        </h2> */}

        <div className="carruselContainerHome">
          <div className="carruselHome">
            {duplicatedTechnologies.map((tech, index) => (
              <div key={index} className="carruselItem">
                <div className="iconContainer">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <p className="techName">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteCarousel;
