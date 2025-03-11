"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlay from "./GridOverlay";
import "./Home.css";

export default function HomeContent() {
  const [texts, setTexts] = useState([
    { id: 1, x: 85, y: 97, text: "Spanish", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/education", isInput: false },
    { id: 2, x: 4, y: 97, text: "❬ Back", rotation: 0, scaleRotation: 0, rotationDirection: 1, url: "/", isInput: false }, 
    { id: 4, x: 84, y: 4, text: "guevara.guillermo.g@gmail.com", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/pagina2", isInput: false },
    { id: 5, x: 25, y: 10, text: "Contact", rotation: 66, scaleRotation: 0.06, rotationDirection: 1, url: "/contact", isInput: false },
    { id: 9, x: 25, y: 20, text: "", rotation: 10, scaleRotation: 0, rotationDirection: 1, url: "/", isInput: true },
  ]);

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo - NO SE TOCA */}
        <Image
          src="/contact4.png"
          alt="Imagen con cuadrícula"
          className="image"
          width={3280}
          height={4720}
          priority
          unoptimized
        />

        {/* Imagen sobrepuesta - SE AGREGA SIN AFECTAR LO DEMÁS */}
        <Image
          src="/portait.jpg"
          alt="Imagen sobrepuesta"
          className="overlay-image"
          width={500} 
          height={700}
          priority
          unoptimized
        />

        {/* Cuadrícula interactiva - NO SE TOCA */}
        <GridOverlay texts={texts} />
      </div>
    </div>
  );
}
