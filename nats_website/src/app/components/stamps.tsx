"use client";

import { useEffect, useRef } from "react";

const images = [
  "/Stamps/Santorini.png",
  "/Stamps/Rome.png",
  "/Stamps/Marrakesh.png",
  "/Stamps/Madrid.png",
  "/Stamps/London.png",
  "/Stamps/lisbon.png",
  "/Stamps/Edinburgh.png",
  "/Stamps/liverpool.png",
  "/Stamps/Barcelona.png",
  "/Stamps/galway.png",
  "/Stamps/Florence.png",
  "/Stamps/England.png",
  "/Stamps/dublin.png",
  "/Stamps/Brussels.png",
  "/Stamps/Amalfi.png",
  "/Stamps/leeds.png"
];

export default function StampsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const speed = 2.0;

  useEffect(() => {
    let frameId: number;

    const scroll = () => {
      if (!innerRef.current || !containerRef.current) return;

      const totalWidth = innerRef.current.scrollWidth / 3; // Only scroll 1 set's width
      x.current -= speed;

      if (Math.abs(x.current) >= totalWidth) {
        x.current = 0;
      }

      innerRef.current.style.transform = `translateX(${x.current}px)`;
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const tripled = [...images, ...images, ...images];

  return (
    <div className="overflow-x-hidden py-0 mt-0" ref={containerRef}>
      <div
        ref={innerRef}
        className="w-max whitespace-nowrap flex gap-[clamp(px,1vw,16px)] pr-[clamp(8px,1vw,16px)]"
        style={{
          transform: `translateX(0px)`,
          transition: "transform 0s linear"
        }}
      >
        {tripled.map((src, i) => (
          <div
            key={i}
            className="slider-card p-1 hover:scale-105"
            style={{
              opacity: 1,
              transform: "none"
            }}
          >
            <div className="w-[clamp(280px,25vw,480px)] h-[clamp(320px,30vw,540px)] rounded-lg overflow-hidden relative select-none">
              <img
                alt={`Stamp ${i + 1}`}
                src={src}
                className="object-cover object-center pointer-events-none select-none w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
