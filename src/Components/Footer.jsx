import React from "react";

const Footer = () => (
  <footer className="bg-[#181c27] text-white pt-10 pb-4 px-4 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      {/* Logo & Description */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-yellow-400 rounded-full p-2">
            {/* Simple code icon */}
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 17l-5-5 5-5" />
              <path d="M16 7l5 5-5 5" />
            </svg>
          </span>
          <span className="text-yellow-400 font-bold text-lg">Code Craft</span>
        </div>
        <p className="text-sm text-gray-300">Excellence en développement et digitalisation</p>
      </div>
      {/* Services */}
      <div>
        <h3 className="text-yellow-400 font-semibold mb-2">Services</h3>
        <ul className="space-y-1 text-sm">
          <li>Développement Web</li>
          <li>Applications Mobile</li>
          <li>Solutions Cloud</li>
        </ul>
      </div>
      {/* Entreprise */}
      <div>
        <h3 className="text-yellow-400 font-semibold mb-2">Entreprise</h3>
        <ul className="space-y-1 text-sm">
          <li>
            À propos
          </li>
          <li>Carrières</li>
          <li>Blog</li>
        </ul>
      </div>
      {/* Social */}
      <div>
        <h3 className="text-yellow-400 font-semibold mb-2">Suivez-nous</h3>
        <div className="flex gap-3">
          <a href="#" className="bg-transparent border border-yellow-400 rounded p-2 hover:bg-yellow-400 hover:text-black transition">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.516-1.535-2.516-1.537 0-1.773 1.201-1.773 2.439v4.681h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v4.729z"/></svg>
          </a>
          <a href="#" className="bg-transparent border border-yellow-400 rounded p-2 hover:bg-yellow-400 hover:text-black transition">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.197 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.702 4.393 3.957 4.844-.415.113-.853.174-1.304.174-.319 0-.627-.031-.929-.089.627 1.956 2.444 3.377 4.6 3.417-1.685 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.426-.014-.637.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="bg-transparent border border-yellow-400 rounded p-2 hover:bg-yellow-400 hover:text-black transition">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </div>
    {/* Divider */}
    <div className="border-t border-gray-700 my-6"></div>
    {/* Copyright */}
    <div className="text-center text-gray-400 text-xs">
      © 2024 Code Craft. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;