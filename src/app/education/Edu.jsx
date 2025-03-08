"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlay from "./GridOverlay";
import "./Home.css";

export default function HomeContent() {
  // Estado con los textos y sus posiciones, ahora con rutas internas
  const [texts, setTexts] = useState([
    { id: 1, x: 10, y: 52, text: "Education", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/education" },
    { id: 2, x: 20, y: 69, text: "Interests", rotation: 0, scaleRotation: 0, rotationDirection: 1, url: "/pagina2" },
    { id: 3, x: 65, y: 80, text: "Skills", rotation: 90, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    { id: 4, x: 25, y: 10, text: "Contact", rotation: 66, scaleRotation: 0.06, rotationDirection: 1, url: "/pagina2" },
    { id: 5, x: 65, y: 9, text: "Experience", rotation: -55, scaleRotation: 0.06, rotationDirection: -1, url: "/pagina2" },
    { id: 6, x: 84, y: 10, text: "Languages", rotation: 90, scaleRotation: 0, rotationDirection: 1, url: "/pagina2" },
    { id: 7, x: 87.7, y: 50, text: "Projects", rotation: 55, scaleRotation: 0.06, rotationDirection: 1, url: "/pagina2" },
  ]);
  
  
  

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/imgEdu.png"
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
