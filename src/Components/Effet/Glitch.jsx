import React from "react";
import "./Glitch.css"; // on met le style glitch ici

const GlitchText = ({ children, className = "" }) => {
  return (
    <h1 className={`glitch-text ${className}`} data-text={children}>
      {children}
    </h1>
  );
};

export default GlitchText;
