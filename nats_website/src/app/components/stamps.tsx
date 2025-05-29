"use client";

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
];

const Stamps = () => {
  return (
    <div className="relative overflow-hidden w-full py-4">
      <div className="flex animate-seamless-scroll gap-4">
        {/* Duplicate TWICE to ensure smooth scroll even at full end */}
        {[...images, ...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`stamp ${idx}`}
            className="h-[400px] w-auto object-contain"
            />

        ))}
      </div>
    </div>
  );
};

export default Stamps;
