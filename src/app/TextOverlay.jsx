"use client";
import "./GridOverlay.css";

export default function TextOverlay({ texts }) {
  return (
    <>
      {texts.map(({ id, x, y, text, rotation, url }) => (
        <button
          key={id}
          className="text-overlay"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            cursor: "pointer",
          }}
          onClick={() => {
            if (url) {
              window.open(url, "_blank");
            }
          }}
        >
          {text}
        </button>
      ))}
    </>
  );
}
