"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./GridOverlay.css";

export default function TextOverlay({ texts }) {
  const router = useRouter();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const originalAspectRatio = 3280 / 4720;
      const currentAspectRatio = window.innerWidth / window.innerHeight;

      let newScale = currentAspectRatio / originalAspectRatio;
      newScale = Math.min(newScale, 3);
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
      {texts.map(({ id, x, y, text, rotation, scaleRotation, rotationDirection, url, isInput }) => {
        const adjustedRotation = rotation + (1 - scaleFactor) * scaleRotation * rotationDirection * 200;

        return isInput ? (
          <input
            key={id}
            type="text"
            defaultValue={text}
            className="text-overlay-input"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${adjustedRotation}deg)`,
            }}
            onClick={(e) => e.stopPropagation()} 
            onChange={(e) => console.log("Nuevo valor:", e.target.value)} 
            autoFocus
          />
        ) : (
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
