import React from 'react';

const Timeline = () => {
const timelineData = [

  {
    id: 5,
    title: "Inicio en Dising Lab",
    subtitle: "Desarrollador de software",
    description: "Comencé a trabajar en Dising Lab, una empresa de e-commerce, donde utilicé **Django** e implementé vistas y templates para la página web.",
    date: "2022-2025",
    iconColor: "bg-indigo-700"
  },
  {
    id: 8,
    title: "Trabajo en Hiperreality",
    subtitle: "Desarrollador frontend",
    description: "Trabajé por 9 meses en Hiperreality, en Guatemala. Implementé **React Native** para proyectos de **realidad aumentada** y **geolocalización**, y apliqué diseños de **Figma**.",
    date: "Mayo 2024 - Febrero 2025",
   iconColor: "bg-indigo-700"
  },
  {
    id: 9,
    title: "Freelance en Tu Wallet Casa de Cambio",
    subtitle: "Desarrollador frontend",
    description: "Actualmente, trabajo como **freelance** en Tu Wallet Casa de Cambio. Mi rol es de desarrollador frontend, implementando mejoras y siguiendo los diseños de **Figma** para la plataforma.",
    date: "Noviembre 2023 - Presente",
    iconColor: "bg-indigo-700"
  }
];
  return (
    <section className="py-16 full-width-blur">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un recorrido por los momentos más importantes de nuestro crecimiento y evolución
          </p>
        </div>

        <div
          className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns"

        >
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`vertical-timeline-element ${
                index % 2 === 1 ? 'vertical-timeline-element--right' : ''
              }`}
            >
              <div>
                <div className={`vertical-timeline-element-icon ${item.iconColor} flex items-center justify-center`}>

                </div>

                <div className="vertical-timeline-element-content">
                  <div className="vertical-timeline-element-content-arrow"></div>

                  <h3 className="vertical-timeline-element-title text-xl font-semibold text-gray-50 mb-1">
                    {item.title}
                  </h3>

                  <h4 className="vertical-timeline-element-subtitle text-lg text-gray-50 mb-3">
                    {item.subtitle}
                  </h4>

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  <span className="mx-4 vertical-timeline-element-date text-sm font-medium text-white">
                    {item.date}
                  </span>
                </div>
                 <div className="vertical-timeline-shine"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
