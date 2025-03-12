"use client";

import Image from "next/image";
import { useState } from "react";
import GridOverlay from "./GridOverlay";
import "./Home.css";
import React from "react";

export default function HomeContent() {
  // Estado con los textos y sus posiciones, ahora con rutas internas
  const [texts, setTexts] = useState([
    { id: 1, x: 3, y: 26, text: "Soft", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/education" },
    { id: 13, x: 85, y: 20.5, text: "Robotics", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "/education" },
    //{ id: 332, x: 92, y: 63.5, text: "Assisted two magistrates in the preparation of their thesis, and optimization and maintenance of the photovoltaic plant, working with suppliers and professors.", rotation: 0, scaleRotation: 0, rotationDirection: -1, url: "" },
    { 
      id: 333, 
      x: 92, 
      y: 63.5, 
      text: [
        "- research",
        "- providers",
        "- passionate",
        "- Interest in other areas",
        "- Easy learner",
        "- Empathy",
        "- Continuous learning"
      ].map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < 6 && <br />}
        </React.Fragment>
      )), 
      rotation: 0, 
      scaleRotation: 0, 
      rotationDirection: -1, 
      url: ""
    },



    { 
      id: 334, 
      x: 75, 
      y: 63.5, 
      text: [
        "- Arduino",
        "- Rasberri pi",
        "- C++"
      ].map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < 6 && <br />}
        </React.Fragment>
      )), 
      rotation: 0, 
      scaleRotation: 0, 
      rotationDirection: -1, 
      url: ""
    },


    
    {
      id: 335,
      x: 42,
      y: 33.5,
      text: [
        "- Express.js",
        "- Next.js",
        "- JavaScript",
        "- TypeScript",
        "- Tailwindcss",
        "- CSS",
        "- Java",
        "- Node.js",
        "- Figma",
        "- WordPress"
      ].map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < 9 && <br />}
        </React.Fragment>
      )),
      rotation: 0,
      scaleRotation: 0,
      rotationDirection: -1,
      url: ""
    },

    {
      id: 336,
      x: 28,
      y:53.5,
      text: [
        "- Azure",
        "- AWS",
        "- MongoDB",
        "- NoSQL",
        "- SQL"
      ].map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < 4 && <br />}
        </React.Fragment>
      )),
      rotation: 0,
      scaleRotation: 0,
      rotationDirection: -1,
      url: ""
    },

    {
      id: 338,
      x: 12,
      y: 39,
      text: [
        "- Data Structures",
        "- TensorFlow",
        "- Python",
        "- Swift",
        "- Java",
        "- Git",
        "- R"
      ].map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < 6 && <br />}
        </React.Fragment>
      )),
      rotation: 0,
      scaleRotation: 0,
      rotationDirection: -1,
      url: ""
    },


    { id: 2, x: 22, y: 96, text: "❬ Back", rotation: 0, scaleRotation: 0, rotationDirection: 1, url: "/" },
    { id: 3, x: 69.5, y:24, text: "Web Dev", rotation: -84., scaleRotation: 0.06, rotationDirection: -1, url: "/pagina2" },
    { id: 23, x: 19, y:64, text: "Cloud", rotation: -84., scaleRotation: 0.06, rotationDirection: -1, url: "/pagina2" },

    { id: 4, x: 98.5, y: 49, text: "Overall", rotation: 90, scaleRotation: 0, rotationDirection: -1, url: "/pagina2" },
    { id: 9, x: 65, y: 80, text: "Skills", rotation: 90, scaleRotation: 0, rotationDirection: -1, url: "/skills" },

  ]);
  
  
  

  return (
    <div className="full-screen-container">
      <div className="image-wrapper">
        {/* Imagen de fondo */}
        <Image
          src="/sk2.png"
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
