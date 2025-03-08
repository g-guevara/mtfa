"use client";
import "./GridOverlay.css";


export default function GridOverlay({ texts }) {
  const rows = 20;
  const cols = 20;

  // Mapeo de índices a enlaces específicos
  const linkMap = {
    2: "https://www.youtube.com",
    3: "https://www.youtube.com",
    4: "https://www.youtube.com",
    5: "https://www.youtube.com",
    77: "https://www.youtube.com",
    12: "https://www.youtube.com",
    8: "https://www.google.com",
    22: "https://www.google.com",
  };

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

        return (
          <button
            key={index}
            className="grid-cell"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              backgroundColor: linkMap[index] ? "#ffcc00" : "transparent", // Color opcional para ver cuáles tienen enlaces
            }}
            onClick={() => handleCellClick(index)}
          />
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
