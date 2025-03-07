"use client"; // Necesario en Next.js App Router si usas hooks

import Image from "next/image";
import { useState } from "react";
import "./page.css";

export default function Home() {
  // Estado con los textos y coordenadas
  const [texts, setTexts] = useState([
    { id: 1, x: 20, y: 30, text: "Hola" }, // Coordenadas en porcentaje
    { id: 2, x: 60, y: 50, text: "Chao" },
  ]);

  return (
    <div className="full-screen-container">
      {/* Contenedor de la imagen con padding fijo */}
      <div className="image-wrapper">
        <Image
          src="/intro4.png"
          alt="Imagen con cuadrícula"
          className="image"
          width={3280}
          height={4720}
          priority
          unoptimized
        />

        {/* Texto posicionado dinámicamente */}
        {texts.map(({ id, x, y, text }) => (
          <div
            key={id}
            className="text-overlay"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
