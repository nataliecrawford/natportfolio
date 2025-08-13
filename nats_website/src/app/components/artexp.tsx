"use client";
import { useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Collage Art",
    description: "Collage art has become one of my favorite ways to bring memories and inspiration together in a single, cohesive piece. Each collage is a blend of design, storytelling, and personal meaning. I enjoy arranging each element with attention to color and balance so that the final work not only looks beautiful but also tells a story. Click on each collage to see it up close and read about the inspiration behind it.",
    images: [
      { src: "/Collages/image1.jpg", caption: "Postcards", des: "While abroad, I collected one postcard from each place I visited. After returning to the US, I arranged them into a collage, giving extra prominence to destinations that were among my favorites, or where the postcards themselves stood out. The final piece serves as a visual summary of my travels, with space thoughtfully allocated to each location and intentional emphasis on my favorites." },
      { src: "/Collages/image2.JPG", caption: "Tickets", des: "While abroad, I saved every ticket from the activities I did and the transit I took. No matter what it was, from museum entries and train tickets to wristbands and movie tickets with friends, I kept it all. When I got home, I spread them all out on the floor like puzzle pieces, playing with colors, shapes, and fonts until they felt just right together. From my Guinness Storehouse ticket to my Live at Leeds music festival wristband, each piece found its place in a way that tells a visual story of my travels. Now, whenever I look at it, I can trace each memory through the design itself." },
      { src: "/Collages/image3.jpg", caption: "Photographs", des: "	During the covid 2020 lockdown, I found over 100 pictures on Pinterest and printed them out with the goal of creating wall decor. These images encapsulated my interests at the time. I laid them out on the floor first, placing images that matched in color schemes or vibes near each other. The final product was quite large, taking up a whole wall, and displayed subtle color associations that I had not planned. All I really did was lay them down one after another and in the process, I gained a greater appreciation for design, as well as insight into my eye for it. " },
    ],
    bgColor: "#fd8e65",
    textColor: "#ffffff",
  },
  {
    title: "Painting",
    description: "I’ve never had any formal training in painting, beyond the occasional grade school art class, but it’s become one of my favorite creative outlets. Many of my paintings have been created as heartfelt gifts, whether for family, friends, or special projects. Each piece reflects the personality or passions of its recipient. Click on each painting to view it in detail and read the story behind its creation.",
    images: [
      { src: "/painting/image1.JPG", caption: "Snowboarding on a Skateboard", des: "I created this painting as a birthday gift for my high school boyfriend, who loved both skateboarding and snowboarding. To combine his two passions, I painted a vivid snowboarding scene on the wooden deck of a skateboard, turning it into a unique piece of art that could be displayed and admired. " },
      { src: "/painting/image2.JPG", caption: "Pool Shark" , des: "My brother commissioned this piece, and I gave it to him as a Christmas gift. Working from an inspiration photograph he provided, I did my best to recreate the scene in my own style. Today, the painting hangs in the living room of his apartment, adding a playful and personal touch to the space. "},
      { src: "/painting/image3.JPG", caption: "Chicago Skyline", des: "My aunt commissioned this painting to add artwork to her living room. As one of my earlier pieces, it doesn’t fully reflect my current art style, but it was a meaningful project. She chose the color palette to coordinate with her space, and I incorporated those tones into this triptych of the Chicago skyline. " },
      { src: "/painting/image4.JPG", caption: "Juice WRLD", des: "This piece was inspired by my freshman-year college roommate’s love for Juice WRLD at the time. For her birthday, I wanted to add a personal touch to the gift, so I painted one of his albums for her. Using a vinyl record as an unconventional canvas, I recreated one of his album covers in acrylic, blending vivid color gradients with intricate detailing. The textured brushwork in the hair and the layered background were deliberate choices to bring depth and energy to the portrait. Despite it not necessarily fitting her decor aesthetic, I am proud of the work I put into this piece. " },
      { src: "/painting/image5.JPG", caption: "Records Painted on Records", des: "These pieces were personal projects created during a time when I was especially inspired by Harry Styles. Using vinyl records as my canvases, I painted interpretations of different album covers and related imagery. Featured here are Fine Line, Harry Styles, and Call Me By Your Name, each reimagined through bold colors and simplified, stylized forms. " }, 
      { src: "/painting/image6.JPG", caption: "Espresso Beans", des: "When I was working for a group of women starting their own coffee business, I wanted to gift them artwork for their shop and food truck. I created three pieces, each inspired by coffee culture, and this one, featuring espresso beans, is my favorite. The rich colors, detailed shading, and textured highlights capture the warmth and depth of a perfect roast." },
    ],
    bgColor: "#fea168",
    textColor: "#ffffff",
  },
  {
    title: "Photography",
    description: "Desipte never being officially trained in photography, " + 
    "I have always had a passion for capturing the world around me. " + 
    "I am particularly proud of my skill and creative eye within my photography. "+
    "Click on each picture to see a larger version and read the caption.",
    images: [
      { src: "/photography/image0.JPG", caption: "The Space Needle, Seattle Washington" , des: "	When I visited Seattle in the summer of 2025, I stopped by the Chihuly Garden and Glass Museum. There’s this one spot, right between the indoor and outdoor exhibits, where you can line up the glass sculptures with the Space Needle in the background. It’s the perfect photo moment. "},
      { src: "/photography/image1.JPG", caption: "Dusk over the Amalfi Coast", des: "While abroad, my friends and I stayed at a gorgeous Airbnb on the Amalfi Coast, with a porch view that was absolutely breathtaking. I snapped this photo just after we arrived, trying to capture that first “wow” moment." },
      { src: "/photography/image2.JPG", caption: "Perissa Beach, Santorini" , des: "When I was abroad, I took a solo trip to Santorini, exploring every corner of the island until I found myself at Perissa Beach, one of its famous black sand beaches. It was my first time seeing black sand, and with the sun shining and the waves rolling in, I couldn’t resist capturing the moment in a photo. "},
      { src: "/photography/image3.JPG", caption: "Parc de la Ciutadella", des: "While exploring Barcelona, my friends and I walked through the stunning Parc de la Ciutadella. In that moment, the light, the colors, and the scene aligned perfectly, and I captured this shot. The framing, the balance, and the subjects all came together in a way that still makes me proud every time I look at it. " },
      { src: "/photography/image4.JPG", caption: "Bempton Cliffs", des: "This idyllic spot was discovered during our quest to see a puffin. My friends and I made our way to Bempton Cliffs, a seabird sanctuary in the UK where puffins are often spotted. After walking from the town to the sanctuary, we explored the cliffs and, to our delight, eventually found one, therefore I say mission accomplished. The natural beauty of this place was unmatched." },
      { src: "/photography/image5.JPG", caption: "Chatsworth House", des: "After taking an English Country House module while abroad, and being a longtime fan of the 2005 Pride and Prejudice film, I knew Chatsworth House was a must-see for me. When my parents visited me and the UK, we toured the house inside and out, wandering through its grand rooms, sweeping grounds, and beautiful gardens. It met every expectation I had and exceeded them. " }, 
      { src: "/photography/image6.JPG", caption: "Chatsworth Gardens", des: "This view of the Chatsworth House garden blends the manicured labyrinth with the rolling hills of the English countryside. It’s a scene where nature and design meet in perfect harmony, capturing the timeless beauty and charm of the UK in a single frame. " },
      { src: "/photography/image7.JPG", caption: "A Farm in The Lake District", des: "While staying on a farm in the Lake District, we were walking back from the local pub after dinner when we came across a cluster of cows gathered at a gate. As I stopped to take their picture, I also managed to capture the sweeping countryside and a glowing sunset in the background. " },
      { src: "/photography/image8.JPG", caption: "Williams Brice Stadium", des: "Growing up in South Carolina and attending the University of South Carolina has made me a proud Gamecocks fan. While heading into a football game in the fall of 2024, I captured a great shot of the stadium." },
      { src: "/photography/image9.JPG", caption: "Vieux-Port de Marseille", des: "While traveling through the south of France, my friends and I spent a few days in Marseille. From this spot, I was able to capture both the vibrant street life and the stunning backdrop of the city’s harbor and hills in a single photograph. " },
      { src: "/photography/image10.JPG", caption: "Cassis", des: "The gateway to the Calanques in the south of France begins in the charming town of Cassis. While figuring out where to store our luggage before the hike, we wandered through the port, taking in its colorful facades, bobbing boats, and stunning seaside views. " },
      { src: "/photography/image11.JPG", caption: "Calanque de Port-Miou", des: "One of the most breathtaking places I visited while traveling was along the southern coast of France. The Parc National des Calanques offered some of the most stunning natural beauty I’ve ever seen. The first calanque we came across was wide, vast, and unforgettable." },
      { src: "/photography/image12.JPG", caption: "Calanque d'En-vau", des: "After one of the toughest hikes I’ve ever done, made even harder by our lack of preparation, my friend and I were greeted with this breathtaking view. It was the sight that gave us the motivation we needed to make the trek back. " },
      { src: "/photography/image13.JPG", caption: "Chihuly Garden and Glass" , des: "While visiting Seattle, we explored a museum showcasing the breathtaking glass art of Chihuly. Each piece was a vibrant explosion of color and form, capturing light in a way that turned glass into living art. "},
      { src: "/photography/image14.JPG", caption: "Japanese Gardens, Seattle Washington" , des: "Tucked in the heart of the city, the Japanese Garden at the Washington Park Arboretum offers a serene escape, where the bustle fades into stillness. The koi glide peacefully through the water, blissfully unaware of the world beyond their home. "},
    ],
    bgColor: "#febc4c",
    textColor: "#ffffff",
  },
  {
    title: "Arts and Crafts",
    description: "I’ve always enjoyed creating pieces by hand that combine creativity and design. I take pride in the detail, color coordination, and craftsmanship of my work. Click on each project to see a closer look and read more about the process and inspiration behind it.",
    images: [
       { src: "/aandc/image1.JPG", caption: "Bead Embroidery Lime", des: "With more free time presenting itself to me after graduation, I found a new hobby to fill the time, so that I spend less time on my phone or watching television.That’s when I discovered bead embroidery. I’ve been creating small, intricate figures that I plan to sew onto a bag, bringing them together into one cohesive piece. This one is a lime.  " },
       { src: "/aandc/image2.JPG", caption: "Bead Embroidery Flower", des: "With more free time presenting itself to me after graduation, I found a new hobby to fill the time, so that I spend less time on my phone or watching television.That’s when I discovered bead embroidery. I’ve been creating small, intricate figures that I plan to sew onto a bag, bringing them together into one cohesive piece. This one is a flower. " },
       { src: "/aandc/image3.jpg", caption: "Flower Frame for Diploma", des: "Many diploma frames are dark-toned and lack creativity, so I wanted mine to reflect my own design aesthetic. Inspired by an idea I found on Pinterest, I set out to create a floral-pressed frame. There were a few bumps along the way, like the flowers not staying in place between the acrylic slabs and shattering the first frame with a drill, but with the help of some superglue, I made it work. The final frame showcases my diploma in an artistic way that complements both my room’s color scheme and my school’s colors." },
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
