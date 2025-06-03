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
  "/Stamps/leeds.png"
];

const Stamps = () => {
  const tripled = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden w-full py-4">
      <div className="flex w-max animate-[seamlessScroll_40s_linear_infinite]">
        {tripled.map((src, idx) => (
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
