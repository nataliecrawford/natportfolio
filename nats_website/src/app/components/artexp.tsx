"use client";
import { useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Collage Art",
    description: "blah blah blah blah",
    images: [
      { src: "/Collages/image1.jpg", caption: "Postcards", des: " " },
      { src: "/Collages/image2.JPG", caption: "Tickets", des: " " },
      { src: "/Collages/image3.jpg", caption: "Photographs", des: " " },
    ],
    bgColor: "#fd8e65",
    textColor: "#ffffff",
  },
  {
    title: "Painting",
    description: "blah blah blah blah",
    images: [
      { src: "/painting/image1.JPG", caption: "Snowboarding on a Skateboard", des: "A beautiful sunset over the Aegean Sea." },
      { src: "/painting/image2.JPG", caption: "Pool Shark" , des: " "},
      { src: "/painting/image3.JPG", caption: "Chicago Skyline", des: " " },
      { src: "/painting/image4.JPG", caption: "Juice WRLD", des: " " },
      { src: "/painting/image5.JPG", caption: "Records Painted on Records", des: " " }, 
      { src: "/painting/image6.JPG", caption: "Espresso Beans", des: " " },
    ],
    bgColor: "#fea168",
    textColor: "#ffffff",
  },
  {
    title: "Photography",
    description: "Desipte never being formally trained in photography, " + 
    "I have always had a passion for capturing the world around me. " + 
    "I am particularly proud of my skill and creative eye within my photography. "+
    "Click on each picture to see a larger version and read the caption.",
    images: [
      { src: "/photography/image0.JPG", caption: "The Space Needle, Seattle Washington" , des: " "},
      { src: "/photography/image1.JPG", caption: "Dusk over the Amalfi Coast", des: "A beautiful sunset over the Aegean Sea." },
      { src: "/photography/image2.JPG", caption: "Perissa Beach, Santorini" , des: " "},
      { src: "/photography/image3.JPG", caption: "Parc de la Ciutadella", des: " " },
      { src: "/photography/image4.JPG", caption: "Bempton Cliffs", des: " " },
      { src: "/photography/image5.JPG", caption: "Chatsworth House", des: " " }, 
      { src: "/photography/image6.JPG", caption: "Chatsworth Gardens", des: " " },
      { src: "/photography/image7.JPG", caption: "A Farm in The Lake District", des: " " },
      { src: "/photography/image8.JPG", caption: "Willams Brice Stadium", des: " " },
      { src: "/photography/image9.JPG", caption: "Vieux-Port de Marseille", des: " " },
      { src: "/photography/image10.JPG", caption: "Cassis", des: " " },
      { src: "/photography/image11.JPG", caption: "Calanque de Port-Miou", des: " " },
      { src: "/photography/image12.JPG", caption: "Calanque d'En-vau", des: " " },
      { src: "/photography/image13.JPG", caption: "Chihuly Garden and Glass" , des: " "},
      { src: "/photography/image14.JPG", caption: "Japanese Gardens, Seattle Washington" , des: " "},
    ],
    bgColor: "#febc4c",
    textColor: "#ffffff",
  },
  {
    title: "Arts and Crafts",
    description: "blah blah blah blah",
    images: [
       { src: "/aandc/image1.JPG", caption: "Bead Embroidery Lime", des: " " },
       { src: "/aandc/image2.JPG", caption: "Bead Embroidery Flower", des: " " },
       { src: "/aandc/image3.jpg", caption: "Flower Frame for Diploma", des: " " },
    ],
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

  const [modalImage, setModalImage] = useState<{ src: string; caption: string; des: string; } | null>(null);

  const openModal = (img: { src: string; caption: string; des: string; }) => setModalImage(img);
  const closeModal = () => setModalImage(null);


return (
    <section className="h-[95vh] flex flex-col items-center justify-center px-10 my-15">
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
       <div className="flex flex-col lg:flex-row h-full w-full gap-8">
        {/* Left: Title and Description */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start gap-6">
          <h3 className="text-[clamp(48px,7vw,144px)] font-semibold tracking-tight leading-none">
            {currentCard.title}
          </h3>
          <p className="text-[clamp(18px,2vw,40px)] font-semibold leading-tight">
            {currentCard.description}
          </p>
        </div>

        {/* Right: Full-height collage */}
        {currentCard.images && (
          <div className="w-full lg:w-7/12 max-h-[600px] overflow-y-auto pr-2 px-15">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentCard.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openModal(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
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

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal box container */}
          <div
            className="relative rounded-2xl shadow-2xl flex flex-col lg:flex-row w-full max-w-[65vw] h-[90vh] overflow-hidden"
            style={{ backgroundColor: "#faaa77" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-800 text-4xl font-bold z-50 hover:opacity-80"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Left: Image section - takes up ~65% */}
            <div className="relative w-full lg:w-[65%] h-full flex items-center justify-center">
              <div className="relative w-full h-[95%]">
              <Image
                src={modalImage.src}
                alt={modalImage.caption}
                fill
                className="object-contain rounded-l-2xl"
              />
              </div>
            </div>

            {/* Right: Description */}
            <div className="w-full lg:w-[35%] h-full p-6 overflow-y-auto text-black flex flex-col justify-center">
              <h3 className="h-font text-2xl font-semibold mb-4">{modalImage.caption}</h3>
              <p className="bio-font text-lg leading-relaxed">{modalImage.des}</p>
            </div>
          </div>
        </div>
      )}




    </section>

    
  );
};

export default ArtExp;
