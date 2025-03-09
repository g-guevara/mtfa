"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./GridOverlay.css";

export default function TextOverlay({ texts }) {
  const router = useRouter();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const originalAspectRatio = 3280 / 4720; // Relación de aspecto original
      const currentAspectRatio = window.innerWidth / window.innerHeight;
      
      // Ajustamos `scaleFactor` sin un límite superior para que siempre cambie
      let newScale = currentAspectRatio / originalAspectRatio;
      newScale = Math.min(newScale, 3); // Limitamos solo el mínimo para evitar valores negativos
      setScaleFactor(newScale);
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div className="text-overlay-container">
      {texts.map(({ id, x, y, text, rotation, scaleRotation, rotationDirection, url }) => {
        // **Ahora `scaleFactor` siempre afecta la rotación**
        const adjustedRotation = rotation + (1 - scaleFactor) * scaleRotation * rotationDirection * 200; 

        // Depuración: Ver los valores en consola
        console.log(`Texto: ${text} | Rotación original: ${rotation} | Ajustada: ${adjustedRotation} | ScaleFactor: ${scaleFactor}`);

        return (
          <button
            key={id}
            className="text-overlay"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${adjustedRotation}deg)`,
              cursor: "pointer",
            }}
            onClick={() => {
              if (url) {
                router.push(url);
              }
            }}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}
