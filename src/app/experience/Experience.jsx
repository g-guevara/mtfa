"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlay from "./GridOverlay";
import "./Home.css";

export default function HomeContent() {
  // Estado con los textos y sus posiciones, ahora con rutas internas
  const [texts, setTexts] = useState([
    { id: 1, x: 25, y: 42, text: "UAI Photovoltaic Laboratory UAI", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/education" },
    { id: 233, x: 26, y: 49, text: ["March 2022 - March 2023, ", <b key="assistant">Assistant</b>], rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/" },

    { id: 13, x: 86, y: 20, text: "Gildemeister Chile", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "https://www.gildemeister.cl/" },
    { id: 332, x: 32.5, y: 59, text: "Assisted two magistrates in the preparation of their thesis, and optimization and maintenance of the photovoltaic plant, working with suppliers and professors.", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "" },
    { id: 2333, x: 87, y: 27, text: ["February 2025, ", <b key="assistant">Intern</b>], rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/" },
    



    { id: 2, x: 22, y: 97, text: "❬ Back", rotation: 0, scaleRotation: 0, rotationDirection: 1, url: "/" },
,
    { id: 5, x: 65, y: 9, text: "Experience", rotation: -55, scaleRotation: 0.06, rotationDirection: -1, url: "/pagina2" },

  ]);
  
  
  

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/exp20.png"
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
