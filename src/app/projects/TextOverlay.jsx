"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import "./GridOverlay.css";

export default function TextOverlay({ texts }) {
  const router = useRouter();
  const [scaleFactor, setScaleFactor] = useState(1);
  const [viewportData, setViewportData] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    orientation: "portrait"
  });

  // Clasificar el tipo de texto basado en su longitud
  const getTextClass = (text) => {
    if (!text) return "small-text";
    if (text.length > 100) return "long-text";
    if (text.length < 20) return "small-text";
    return "";
  };

  // Función para ajustar posicionamiento dinámicamente
  const getAdjustedPosition = useCallback((x, y, textLength, textId) => {
    const { width, isMobile, orientation } = viewportData;
    let adjustedX = x;
    let adjustedY = y;

    // Ajustes específicos para ciertas situaciones
    if (isMobile) {
      // Evitar que textos largos se salgan de la pantalla
      if (textLength > 100) {
        // Ajuste para textos cerca de los bordes
        if (x < 20) adjustedX = Math.min(30, x + 10);
        if (x > 80) adjustedX = Math.max(70, x - 10);
        
        // En modo landscape, ajustar posición vertical
        if (orientation === "landscape") {
          if (y < 20) adjustedY = Math.min(30, y + 10);
          if (y > 80) adjustedY = Math.max(70, y - 10);
        }
      }
      
      // Casos específicos por ID si es necesario
      if (textId === 23 || textId === 32) {
        // Ajustes específicos para los textos largos que mencionaste
        adjustedY = Math.min(85, y + 5);
      }
    }

    return { x: adjustedX, y: adjustedY };
  }, [viewportData]);

  // Detectar cambios en la ventana
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width <= 768;
      const orientation = width > height ? "landscape" : "portrait";
      
      // Cálculo del scaleFactor
      const originalAspectRatio = 3280 / 4720;
      const currentAspectRatio = width / height;
      let newScale = currentAspectRatio / originalAspectRatio;
      newScale = Math.min(newScale, 3);
      
      setScaleFactor(newScale);
      setViewportData({
        width,
        height,
        isMobile,
        orientation
      });
    };

    // Llamada inicial y listener
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="text-overlay-container">
      {texts.map(({ id, x, y, text, rotation, scaleRotation, rotationDirection, url }) => {
        // Calcular rotación adaptativa
        const adjustedRotation = rotation + (1 - scaleFactor) * scaleRotation * rotationDirection * 200;
        
        // Determinar clase según longitud de texto
        const textClass = getTextClass(text);
        
        // Ajustar posición basado en tipo de dispositivo
        const { x: adjustedX, y: adjustedY } = getAdjustedPosition(x, y, text?.length || 0, id);

        return (
          <button
            key={id}
            className={`text-overlay ${textClass}`}
            style={{
              left: `${adjustedX}%`,
              top: `${adjustedY}%`,
              transform: `translate(-50%, -50%) rotate(${adjustedRotation}deg)`,
              cursor: url ? "pointer" : "default",
            }}
            onClick={() => {
              if (url) {
                router.push(url);
              }
            }}
            aria-label={text}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}