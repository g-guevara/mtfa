"use client";
import { useRouter } from "next/navigation";
import "./GridOverlayEdu.css";

export default function TextOverlay({ texts }) {
  const router = useRouter();

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
              router.push(url);
            }
          }}
        >
          {text}
        </button>
      ))}
    </>
  );
}
