"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlay from "./GridOverlay";
import "./Home.css";

export default function HomeContent() {
  // Estado con los textos y sus posiciones, ahora con rutas internas
  const [texts, setTexts] = useState([
    { id: 1, x: 85, y: 97, text: "Spanish", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/education" },
    { id: 2, x: 4, y: 97, text: "❬ Back", rotation: 0, scaleRotation: 0, rotationDirection: 1, url: "/" },
    { id: 3, x: 22, y:4, text: "Enlgish", rotation: 0., scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    { id: 4, x: 98.5, y: 42, text: "Italian", rotation: 90, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    { id: 6, x: 84, y: 10, text: "Languages", rotation: 90, scaleRotation: 0, rotationDirection: 1, url: "/Lang" },

  ]);
  
  
  

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/lang2.png"
          alt="Imagen con cuadrícula"
          className="image"
          width={3280}
          height={4720}
          priority
          unoptimized
        />

        {/* Cuadrícula interactiva */}
        <GridOverlay texts={texts} />
      </div>
    </div>
  );
}
