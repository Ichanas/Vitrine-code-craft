import React from "react";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Développement Web",
    description: "Applications web modernes et performantes avec les dernières technologies",
    icon: (
      <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 9h8M8 13h8" />
      </svg>
    ),
  },
  {
    title: "Applications Mobile",
    description: "Solutions mobiles natives et cross-platform pour iOS et Android",
    icon: (
      <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Solutions Cloud",
    description: "Infrastructure cloud sécurisée et évolutive pour votre croissance",
    icon: (
      <svg width="32" height="32" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17.5 18a4.5 4.5 0 00-9 0" />
        <path d="M12 6a6 6 0 016 6c0 1.657-1.343 3-3 3H9a3 3 0 01-3-3c0-3.314 2.686-6 6-6z" />
      </svg>
    ),
  },
];

const ServiceCard = ({ title, description, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#181c27] rounded-xl p-8 flex flex-col items-center justify-center shadow-lg transition-all duration-500 border border-gray-700
      hover:shadow-2xl hover:bg-opacity-80"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <span className="bg-yellow-400 rounded-full p-3 mb-4 flex items-center justify-center shadow-lg">
        {icon}
      </span>
      <h3 className="text-yellow-400 font-semibold text-xl mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-center text-sm">{description}</p>
    </div>
  );
};

const Services = () => (
  <section id="services" className="bg-black py-16 px-4 flex flex-col items-center">
    <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-4 text-center">Nos Services</h2>
    <p className="text-gray-200 text-center mb-10 max-w-2xl">
      Des solutions sur mesure pour propulser votre entreprise vers l’excellence numérique
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  </section>
);

export default Services;