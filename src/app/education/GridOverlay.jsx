"use client";
import { useRouter } from "next/navigation";
import "./GridOverlay.css";
import TextOverlay from "./TextOverlay";

export default function GridOverlay({ texts }) {
  const router = useRouter();
  const rows = 20;
  const cols = 20;
  const SHOW_NUMBERS = 2; // Cambia a 0 para ocultar los números

  // Definir los enlaces agrupando los índices que llevan al mismo destino
  const linkGroups = [
    { numbers: [0,1,2,20,21,22,40,41,42,43,60,61,62,63,80,81,82,83,84,100,101,102,103,104,105,106,107,120,121,122,123,124,125,126,127,140,141,142,143,144,145,146,147,160,161,162,163,164,165,166,167,180,181,182,183,184,185,186,187,200,201,202,203,204,205,206,207,225,226,227], url: "/education" },
    { numbers: [260,261,262,263,264,280,281,282,283,284,300,301,302,303,304,320,321,322,323,324,325,340,341,342,343,344,345,360,361,362,363,364,365,366], url: "/pagina2" },
    { numbers: [4,5,6,7,8,9,10,24,25,26,27,28,29,45,46,47,48], url: "/pagina3" },
    { numbers: [13,14,32,33,34,51,52,53,54,71,72,73,74,89,90,91,92,93,94,109,110,111,112,113,114,129,130,131,132,149,150,151,152,169,170,171,172,189,190,191,192,209,210,211,212,229,230,231,232], url: "/pagina4" },
    { numbers: [287,288,289,290,289,291,292,307,308,309,310,311,312,328,329,330,331,332,348,349,350,351,352,368,369,370,371,372], url: "/pagina5" },
    { numbers: [16,17,18,36,37,38,56,57,58,76,77,78,96,97,98,116,117,118,136,137,138,157,158,178,198], url: "/pagina6" },
    { numbers: [154,155,174,175,194,195,196,214,215,216,234,235,236,237,254,255,256,257,258,274,275,276,277,278,294,295,296,297,298,314,315,316,317,318,334,335,336,337,338,354,355,356,357,358,374,375,376,377,378], url: "/pagina7" },
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
