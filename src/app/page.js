"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos el router de Next.js
import "./page.css";

export default function Home() {
  const router = useRouter(); // Hook para navegación en Next.js

  // Lista de textos con coordenadas, rotación y URL de destino
  const [texts, setTexts] = useState([
    { id: 1, x: 20, y: 30, text: "Ir a Google", rotation: 0, url: "https://www.google.com" },
    { id: 2, x: 60, y: 50, text: "Ir a Next.js", rotation: 45, url: "/about" }, // Página interna de Next.js
  ]);

  return (
    <div className="full-screen-container">
      {/* Contenedor de la imagen */}
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

        {/* Botones posicionados dinámicamente */}
        {texts.map(({ id, x, y, text, rotation, url }) => (
          <button
            key={id}
            className="text-overlay"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            }}
            onClick={() => {
              if (url.startsWith("http")) {
                window.open(url, "_blank"); // Para enlaces externos
              } else {
                router.push(url); // Para navegación interna en Next.js
              }
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
