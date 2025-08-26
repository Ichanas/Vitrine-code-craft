import React from "react";

const timeline = [
  {
    year: "2020",
    title: "Création de Code Craft",
    desc: "Lancement de notre société avec une vision d’excellence",
    align: "left",
  },
  {
    year: "2022",
    title: "50+ Projets Réalisés",
    desc: "Expansion de notre portfolio avec des clients prestigieux",
    align: "right",
  },
  {
    year: "2024",
    title: "Leader du Marché",
    desc: "Reconnaissance comme référence en développement premium",
    align: "left",
  },
];

const About = () => (
  <section id="apropos" className="bg-black min-h-screen flex flex-col items-center py-16 px-4">
    <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center mb-2">
      <span className="text-white">À </span>Propos
    </h2>
    <p className="text-gray-300 text-center mb-12 max-w-2xl">
      Notre parcours d’excellence dans l’innovation technologique
    </p>
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-400 transform -translate-x-1/2 z-0"></div>
      <div className="flex flex-col gap-16">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative flex items-center justify-between w-full">
            {/* Left side */}
            {item.align === "left" ? (
              <>
                <div className="w-1/2 text-right pr-8">
                  <span className="text-yellow-400 font-bold text-xl">{item.year}</span>
                  <div className="text-white font-semibold text-lg">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
                <div className="flex flex-col items-center z-10">
                  <span className="w-5 h-5 bg-yellow-400 rounded-full border-4 border-black shadow-lg"></span>
                  {idx < timeline.length - 1 && (
                    <span className="w-1 h-16 bg-yellow-400"></span>
                  )}
                </div>
                <div className="w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-1/2"></div>
                <div className="flex flex-col items-center z-10">
                  <span className="w-5 h-5 bg-yellow-400 rounded-full border-4 border-black shadow-lg"></span>
                  {idx < timeline.length - 1 && (
                    <span className="w-1 h-16 bg-yellow-400"></span>
                  )}
                </div>
                <div className="w-1/2 pl-8 text-left">
                  <span className="text-yellow-400 font-bold text-xl">{item.year}</span>
                  <div className="text-white font-semibold text-lg">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;