"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlay from "./GridOverlay";
import "./Home.css";
import React from "react";

export default function HomeContent() {


  // comfind
  // uai app






  // Estado con los textos y sus posiciones, ahora con rutas internas
  const [texts, setTexts] = useState([
    { id: 1, x: 20, y: 13, text: "Sensitive Foods",rotation: -27, scaleRotation: 0.06, rotationDirection: -1, url: "/" },
    { id: 1222, x: 20.5, y: 62, text: "- Systematically test, record, and analyze reactions to foods and procesed foods, enabling  to pinpoint specific reactions to certain ingredients through comparative trials and data-driven insights.", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    { id: 12122, x: 9.8, y: 70, text:  [<b key="App">App</b>], rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },



    { id: 123, x: 85, y: 88, text: "Nasa Lunar Loo Challenge",rotation: -47, scaleRotation: 0.06, rotationDirection: -1, url: "/" },

    { id: 13, x: 85, y: 20, text: "DoctQR",rotation: -36, scaleRotation: 0.06, rotationDirection: -1, url: "/" },
    { id: 122, x: 78.5, y: 9, text: "- Printed QR code that fits in wallet cards and provides basic medical info. ", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    { id: 132122, x: 70.8, y: 13.8 , text:  [<b key="App">Web page</b>], rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },



    { id: 9399, x: 55.5, y: 74, text: "OPAS", rotation: 79, scaleRotation: 0.06, rotationDirection: 1, url: "/projects" },
    { id: 122333, x: 56.5, y: 89, text: "- SmartWatch to control oncological patients with direct comunication with medical support. Member of the 3rth place of the challenge Prototypes UAI. ", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    
    { id: 93939, x: 28, y: 22, text: "PassPay", rotation: 99, scaleRotation: 0.06, rotationDirection: 1, url: "/projects" },
    { id: 1223333, x: 46.5, y: 6, text: "- UWB sistem that enables seamless access, control and fare payment for public transportation. ",rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/" },

    { id: 2, x: 22, y: 96, text: "❬ Back", rotation: 0, scaleRotation: 0, rotationDirection: 1, url: "/" },
    { id: 999, x: 87.7, y: 50, text: "Projects", rotation: 55, scaleRotation: 0.06, rotationDirection: 1, url: "/projects" },

  ]);
  
  
  

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/pr9.png"
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
