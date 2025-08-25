import React from "react";

const Contact = () => (
  <div className="bg-black min-h-screen flex flex-col items-center py-12 px-4">
    <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center mb-4">Contactez-nous</h2>
    <p className="text-gray-200 text-center mb-10 max-w-2xl">
      Prêt à transformer votre vision en réalité numérique ? Discutons de votre projet.
    </p>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Form */}
      <form className="bg-[#181c27] rounded-xl p-6 md:col-span-1 shadow-lg flex flex-col gap-4 border border-gray-700">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Prénom"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white w-1/2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Nom"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white w-1/2 focus:outline-none"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white w-full focus:outline-none"
        />
        <input
          type="text"
          placeholder="Téléphone"
          className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white w-full focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white w-full focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-md py-2 mt-2"
        >
          Envoyer le message
        </button>
      </form>
      {/* Contact Info */}
      <div className="flex flex-col gap-6 justify-center md:col-span-1">
        <div className="flex items-center gap-3">
          <span className="bg-yellow-400 rounded-full p-2">
            {/* Adresse icon */}
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2C7 2 4 6.5 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-3.5-3-8-8-8z" />
            </svg>
          </span>
          <div>
            <span className="text-yellow-400 font-semibold">Adresse</span>
            <div className="text-gray-200 text-sm">123 Avenue de l'Innovation<br />75001 Paris, France</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-yellow-400 rounded-full p-2">
            {/* Téléphone icon */}
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.37 1.6.72 2.34a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c.74.35 1.53.59 2.34.72a2 2 0 011.72 2z"/>
            </svg>
          </span>
          <div>
            <span className="text-yellow-400 font-semibold">Téléphone</span>
            <div className="text-gray-200 text-sm">+33 1 23 45 67 89</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-yellow-400 rounded-full p-2">
            {/* Email icon */}
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </span>
          <div>
            <span className="text-yellow-400 font-semibold">Email</span>
            <div className="text-gray-200 text-sm">contact@codecraft.fr</div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="flex items-center justify-center md:col-span-1">
        <div className="bg-[#23283a] rounded-xl w-full h-48 flex items-center justify-center">
          <img
            src="/map.png"
            alt="Carte"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;