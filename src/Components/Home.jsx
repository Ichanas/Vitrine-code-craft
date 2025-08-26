import React from "react";
import GlitchText from "./Effet/Glitch";

<GlitchText className="text-5xl md:text-7xl mb-6">
  Code Craft
</GlitchText>

// 👈 importe ton composant

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-16 backdrop-blur-lg bg-black/60">
        <div className="flex items-center gap-2">
            <span className="bg-yellow-400 rounded-full p-2">
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M8 17l-5-5 5-5" />
                <path d="M16 7l5 5-5 5" />
            </svg>
            </span>
            <span className="text-yellow-400 font-bold text-xl">Code Craft</span>
        </div>
        <nav className="hidden md:flex gap-8 text-white font-medium">
            <a href="#accueil" className="hover:text-yellow-400">Accueil</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#projets" className="hover:text-yellow-400">Projets</a>
            <a href="#apropos" className="hover:text-yellow-400">À propos</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
        </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
        {/* 🔥 Ici on utilise GlitchText */}
     
            <GlitchText className="text-5xl md:text-7xl mb-6">
            Code Craft
            </GlitchText>   

        <p className="text-white text-lg md:text-2xl max-w-2xl mb-8 mx-auto">
          Excellence en développement et digitalisation. Nous transformons vos
          idées en solutions numériques haut de gamme.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-500 transition"
          >
            Découvrir nos services
          </a>
          <a
            href="#projets"
            className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Voir nos projets
          </a>
        </div>
        <div className="mt-16">
          <span className="text-yellow-400 animate-bounce text-3xl">
            &#8595;
          </span>
        </div>
      </main>
    </div>
  );
};

export default Home;
