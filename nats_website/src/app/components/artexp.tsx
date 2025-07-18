"use client";
import { useState } from "react";

const cards = [
  {
    title: "Collage Art",
    description: "blah  blah blah blah",
    image: "/images/services/image-1.jpg",
    bgColor: "#fd8e65",
    textColor: "#ffffff",
  },
  {
    title: "Painting",
    description: " blah blah blah blah",
    image: "/images/services/image-2.jpg",
    bgColor: "#fea168",
    textColor: "#ffffff",
  },
  {
    title: "Dance",
    description: "blah blah blah blah",
    image: "/images/services/image-3.jpg",
    bgColor: "#efbd27",
    textColor: "#ffffff",
  },
  {
    title: "Photography",
    description: "Blah blah blah blah",
    image: "/images/services/image-3.jpg",
    bgColor: "#febc4c",
    textColor: "#ffffff",
  },
  {
    title: "Arts and Crafts",
    description: "blah blah blah blah",
    image: "/images/services/image-3.jpg",
    bgColor: "#fdd246",
    textColor: "#ffffff",
  },
];

const ArtExp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const currentCard = cards[currentIndex];

return (
    <section className="h-[65vh] flex flex-col items-center justify-center px-10">
      <h2 className="h-font text-[clamp(32px,6vw,64px)] font-bold mb-8 text-center">
          Artistic Expression
        </h2>
      <div
        className="w-full h-full p-6 lg:p-8 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between"
        style={{
          backgroundColor: currentCard.bgColor,
          color: currentCard.textColor,
        }}
      >
        <div className="flex flex-row justify-between mb-8 lg:mb-12">
          <h3 className="text-[clamp(48px,7vw,144px)] font-semibold tracking-tight leading-none">
            {currentCard.title}
          </h3>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between h-[calc(100%-100px)] w-full">
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-6/12">
            <p className="text-[clamp(18px,2vw,40px)] font-semibold leading-tight">
              {currentCard.description}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons BELOW the box */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevCard}
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-xl"
        >
          ←
        </button>
        <button
          onClick={nextCard}
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-xl"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ArtExp;
