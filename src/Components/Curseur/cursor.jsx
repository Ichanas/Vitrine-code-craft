import React, { useEffect, useState } from "react";
import './Cursor.css'; // On mettra les styles ici

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 150); // détecte souris arrêtée
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", () => setIsMoving(false));

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", () => setIsMoving(false));
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isMoving ? "moving" : "stopped"}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
