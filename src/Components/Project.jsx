import React, { useState } from "react";

const categories = [
  {
    name: "Tous",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "Web",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 9h8M8 13h8" />
      </svg>
    ),
  },
  {
    name: "Mobile",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    name: "Cloud",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17.5 18a4.5 4.5 0 00-9 0" />
        <path d="M12 6a6 6 0 016 6c0 1.657-1.343 3-3 3H9a3 3 0 01-3-3c0-3.314 2.686-6 6-6z" />
      </svg>
    ),
  },
];

const projects = [
  {
    title: "WIGU YOURADS",
    image: "/project1.png",
    description: "Site e-commerce haut de gamme pour la mode et les accessoires.",
    category: "Web",
  },
  {
    title: "Mobile Banking",
    image: "/project2.png",
    description: "Application mobile bancaire avec dashboard interactif.",
    category: "Mobile",
  },
  {
    title: "Analytics Dashboard",
    image: "/project3.png",
    description: "Solution cloud pour la visualisation et l’analyse de données.",
    category: "Cloud",
  },
];

const Projects = () => {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projets" className="bg-black py-16 px-4 flex flex-col items-center">
      <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-4 text-center">Nos Projets</h2>
      <p className="text-gray-200 text-center mb-8 max-w-2xl">
        Découvrez nos réalisations exceptionnelles qui témoignent de notre expertise
      </p>
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {categories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border border-white text-yellow-400 font-semibold transition
              ${active === cat.name ? "bg-yellow-400 text-black" : "bg-transparent hover:bg-yellow-400 hover:text-black"}`}
            style={{ minWidth: 100 }}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {filtered.map((project, idx) => (
          <div
            key={idx}
            className="perspective group"
            style={{ minHeight: 320 }}
          >
            <div className="relative w-full h-72 rounded-xl shadow-lg bg-[#181c27] border border-white transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Titre visible sur la face avant */}
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-yellow-400 px-4 py-2 rounded font-bold text-lg">
                  {project.title}
                </span>
              </div>
              {/* Back */}
              <div className="absolute inset-0 w-full h-full rounded-xl flex flex-col items-center justify-center bg-black bg-opacity-90 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-yellow-400 text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-center px-4">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .perspective {
            perspective: 1200px;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;