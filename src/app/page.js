"use client"; // Asegura que es un Client Component

import Image from "next/image";
import { useState } from "react";
import "./page.css";

export default function Home() {
  // Estado con los textos de cada celda
  const [gridTexts, setGridTexts] = useState({
    2: "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    3: "Chao",
  });

  // Función para truncar textos demasiado largos
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="full-screen-container">
      {/* Imagen de fondo */}
      <div className="image-container">
        <Image
          src="/intro4.png"
          alt="Intro image"
          className="w-full h-full"
          width={3280}
          height={4720}
          priority
          unoptimized={true}
        />
      </div>

      {/* Cuadrícula sobrepuesta */}
      <div className="grid-overlay">
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className="grid-cell">
            <span>{truncateText(gridTexts[index] || "", 20)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
