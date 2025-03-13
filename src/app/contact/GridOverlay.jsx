"use client";

import { useRouter } from "next/navigation";
import "./GridOverlay.css";
import TextOverlay from "./TextOverlay";

export default function GridOverlay({ texts }) {
  const router = useRouter();
  const rows = 20;
  const cols = 20;
  const SHOW_NUMBERS = 0; 

  const linkGroups = [
    { numbers: [360, 361], url: "/" },

    { numbers: [231, 232,251,252], url:"https://www.linkedin.com/in/guillermo-guevara-585267294/"},
  ];

  const linkMap = Object.fromEntries(
    linkGroups.flatMap(({ numbers, url }) => numbers.map((num) => [num, url]))
  );

  const handleCellClick = (index) => {
    const url = linkMap[index];
    if (url) {
      router.push(url);
    }
  };

  return (
    <div className="grid-overlay">
      {Array.from({ length: rows * cols }, (_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = (col / (cols - 1)) * 100;
        const y = (row / (rows - 1)) * 100;
        const hasLink = !!linkMap[index];

        return (
          <button
            key={index}
            className="grid-cell"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              cursor: hasLink ? "pointer" : "default",
              color: "red",
            }}
            onClick={() => handleCellClick(index)}
          >
            {SHOW_NUMBERS ? index : ""}
          </button>
        );
      })}

      <TextOverlay texts={texts} />
    </div>
  );
}
