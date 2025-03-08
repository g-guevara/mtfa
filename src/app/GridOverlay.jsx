"use client";
import "./GridOverlay.css";

export default function GridOverlay({ texts }) {
  const rows = 20;
  const cols = 20;
  const SHOW_NUMBERS = 1; // Cambia a 0 para ocultar los números

// Definir los enlaces agrupando los índices que llevan al mismo destino
const linkGroups = [
    { numbers: [21, 22, 41, 42, 43, 45], url: "https://www.youtube.com" },
    { numbers: [61, 62], url: "https://www.google.com" },
  ];
  
  // Convertir la estructura en un objeto `linkMap`
  const linkMap = Object.fromEntries(
    linkGroups.flatMap(({ numbers, url }) => numbers.map((num) => [num, url]))
  );
  
  // Manejar clics en la cuadrícula
  const handleCellClick = (index) => {
    const url = linkMap[index];
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="grid-overlay">
      {/* Cuadrícula interactiva con botones */}
      {Array.from({ length: rows * cols }, (_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = (col / (cols - 1)) * 100; // Coordenada X en porcentaje
        const y = (row / (rows - 1)) * 100; // Coordenada Y en porcentaje
        const hasLink = !!linkMap[index];

        return (
          <button
            key={index}
            className="grid-cell"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              backgroundColor: hasLink ? "#ffcc00" : "transparent", // Color opcional para ver cuáles tienen enlaces
              cursor: hasLink ? "pointer" : "default", // Cursor solo cambia en los que tienen link
              color: "red",
            }}
            onClick={() => handleCellClick(index)}
          >
            {SHOW_NUMBERS ? index : ""}
          </button>
        );
      })}

      {/* Texto posicionado dinámicamente */}
      {texts.map(({ id, x, y, text, rotation }) => (
        <button
          key={id}
          className="text-overlay"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          }}
          onClick={() => window.open("https://www.google.com", "_blank")}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
