"use client";

import Image from "next/image";
import { useState } from "react";
import "./page.css";

export default function Home() {
  const rows = 20; // Cantidad de filas
  const cols = 20; // Cantidad de columnas

  // Estado con los textos y sus posiciones
  const [texts, setTexts] = useState([
    { id: 1, x: 20, y: 30, text: "Hola", rotation: 0 },
    { id: 2, x: 60, y: 50, text: "Chao", rotation: 45 },
  ]);

  // Manejar clics en la cuadrícula
  const handleCellClick = (x, y) => {
    console.log(`Clic en coordenadas: X=${x}%, Y=${y}%`);
  };

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/intro4.png"
          alt="Imagen con cuadrícula"
          className="image"
          width={3280}
          height={4720}
          priority
          unoptimized
        />

        {/* Cuadrícula interactiva con botones más grandes */}
        <div className="grid-overlay">
          {Array.from({ length: rows * cols }, (_, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            const x = (col / (cols - 1)) * 100; // Coordenada X en porcentaje
            const y = (row / (rows - 1)) * 100; // Coordenada Y en porcentaje

            return (
              <button
                key={index}
                className="grid-cell"
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => handleCellClick(x, y)}
              />
            );
          })}
        </div>

        {/* Texto posicionado dinámicamente */}
        {texts.map(({ id, x, y, text, rotation }) => (
          <div
            key={id}
            className="text-overlay"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
