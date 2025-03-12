"use client";
import { useRouter } from "next/navigation";
import "./GridOverlay.css";
import TextOverlay from "./TextOverlay";

export default function GridOverlay({ texts }) {
  const router = useRouter();
  const rows = 20;
  const cols = 20;
  const SHOW_NUMBERS = 0; // Cambia a 0 para ocultar los números

  // Definir los enlaces agrupando los índices que llevan al mismo destino
  const linkGroups = [
    { numbers: [363,364], url: "/" },

  ];

  // Convertir la estructura en un objeto `linkMap`
  const linkMap = Object.fromEntries(
    linkGroups.flatMap(({ numbers, url }) => numbers.map((num) => [num, url]))
  );

  // Manejar clics en la cuadrícula
  const handleCellClick = (index) => {
    const url = linkMap[index];
    if (url) {
      router.push(url); // Redirige internamente
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
              cursor: hasLink ? "pointer" : "default",
              // backgroundColor: hasLink ? "#ffcc00" : "transparent",
              color: "red",

            }}
            onClick={() => handleCellClick(index)}
          >
            {SHOW_NUMBERS ? index : ""}
          </button>
        );
      })}

      {/* Componente de textos superpuestos */}
      <TextOverlay texts={texts} />
    </div>
  );
}
