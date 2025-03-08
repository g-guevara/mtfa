"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlayEdu from "./GridOverlayEdu";
import "./Edu.css";

export default function Education() {
  // Estado con los textos y sus posiciones, ahora con rutas internas
  const [texts, setTexts] = useState([
    { id: 1, x: 20, y: 30, text: "Hola", rotation: 0, url: "/pagina1" },
    { id: 2, x: 60, y: 50, text: "Chao", rotation: 45, url: "/pagina2" },
  ]);

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/intro42.png"
          alt="Imagen con cuadrícula"
          className="image"
          width={3280}
          height={4720}
          priority
          unoptimized
        />

        {/* Cuadrícula interactiva */}
        <GridOverlayEdu texts={texts} />
      </div>
    </div>
  );
}
