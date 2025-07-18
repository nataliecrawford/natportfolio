"use client";
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform, motion, useMotionValueEvent, easeOut,  easeInOut, useInView } from "framer-motion";
import { useRef, useEffect, } from "react";
import { MotionValue, useMotionValue } from "framer-motion";
import Image from "next/image";


import { useMotionTemplate } from "framer-motion";




const cards = [
  {
    title: "929 Kitchen & Bar",
    description: "Worked as a server in a fast-paced restaurant environment.",
    tags: ["Restaurant Industry", "Server", "Multitasking"],
    image: "/images/services/image-1.jpg",
    bgColor: "#bf052b",
    textColor: "#821322",
  },
  {
    title: "MOA Korean BBQ",
    description: "Provided attentive service in a high-volume BBQ restaurant.",
    tags: ["Customer Service", "Teamwork", "Fast-Paced"],
    image: "/images/services/image-2.jpg",
    bgColor: "#db1f45",
    textColor: "#7c1a28",
  },
  {
    title: "Capgemini",
    description: "Intern, MS Azure Technology, Smart Herb Garden",
    tags: ["Full Stack", "Front End", "Consulting"],
    image: "/images/services/image-6.jpg",
    bgColor: "#0a5dd8",
    textColor: "#94e0fa",
  },
  {
    title: "1801 Grille",
    description: "Greeted and seated guests with a warm and welcoming demeanor.",
    tags: ["Host", "Upselling", "Teamwork"],
    image: "/images/services/image-3.jpg",
    bgColor: "#fc3f6f",
    textColor: "#7c1a28",
  },
  {
    title: "University of South Carolina",
    description: "Data Science Software Developer Research Assistant",
    tags: ["Data Science", "Research", "Python"],
    image: "/images/services/image-1.jpg",
    bgColor: "#1687e3",
    textColor: "#94e0fa",
  },
  {
    title: "Pelican's SnoBalls",
    description: "Managed cash register and served customers with care.",
    tags: ["Cashier", "Customer Service", "Attention to Detail"],
    image: "/images/services/image-4.jpg",
    bgColor: "#fe8ba6",
    textColor: "#7c1a28",
  },
  {
    title: "Dance Department",
    description: "Choreographed and taught dance routines to students.",
    tags: ["Instructor", "Choreography", "Leadership"],
    image: "/images/services/image-5.jpg",
    bgColor: "#feb9c7",
    textColor: "#7c1a28",
  },
];

interface AnimatedCardProps {
  card: typeof cards[number];
  index: number;
  scrollProgress: MotionValue<number>;
  totalCards: number;
}

const AnimatedCard = ({ card, index, scrollProgress, totalCards }: AnimatedCardProps) => {
  const cardHeight = 85; // vh

 

  const totalWeight = (totalCards * (totalCards + 1)) / 2;
  const startWeight = (index * (index + 1)) / 2;
  const endWeight = startWeight + index + 1;

  const segmentSize = 1 / totalCards;
  const segmentStart = index * segmentSize;
  const segmentEnd = (index + 1) * segmentSize;

  
  const easedScroll = useTransform(scrollProgress, [0, 1], [0, 1], { ease: easeInOut });

  // artificially widen per-card segment range
  const segmentPadding = 0; // widen each card’s scroll window

  const widenedStart = Math.max(segmentStart - segmentPadding, 0);
  const widenedEnd = Math.min(segmentEnd + segmentPadding, 1);
  

  const baseSpread = 100;
  let spreadDistance = 100;
  if (index!== 1){
    spreadDistance = baseSpread + index * 50;
  }
 

  const stackSpacing = 15;

  const y = useTransform(
    easedScroll,
    [widenedStart, widenedEnd],
    [`${index * spreadDistance}vh`, `${index * stackSpacing}vh`],
    { ease: easeInOut }
  );

  // scale stays same, optional: widen its range too
  const scale = useTransform(
    easedScroll,
    [widenedStart + 0.9 * (widenedEnd - widenedStart), widenedEnd],
    [1, 0.95],
    { ease: easeInOut }
  );
  


  return (
    <motion.div
      className="w-full absolute top-0 left-0 flex justify-center"
      style={{
        y,
        scale,
        zIndex: index+1, // Ensures proper stacking order
        height: `${cardHeight}vh`,
      }}
    >
      <div
        className="w-full h-full mx-4 p-6 lg:p-8 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundColor: card.bgColor,
          color: card.textColor,
        }}
      >
        <div className="flex flex-row justify-between mb-8 lg:mb-12">
          <h3 className="text-[clamp(48px,7vw,144px)] font-semibold tracking-tight leading-none">
            {card.title}
          </h3>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between h-[calc(100%-100px)] w-full">
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-6/12">
            <p className="text-[clamp(18px,2vw,40px)] font-semibold leading-tight">
              {card.description}
            </p>
            <ul className="flex flex-wrap gap-2 2xl:gap-3 w-full lg:w-10/12">
              {card.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="text-[clamp(14px,1.2vw,24px)] px-4 py-1.5 rounded-full bg-stone-50/70 font-semibold"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full lg:w-5/12 h-[250px] lg:h-[clamp(350px,25vw,600px)] rounded-lg lg:rounded-2xl overflow-hidden mb-4 lg:mb-0">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover object-center pointer-events-none"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};



const Exp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the ENTIRE section (not just viewport)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Debug scroll progress (optional)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest);
  });

  return (
    <section 
      ref={containerRef} 
      className="relative sticky top-0 h-[190vh] overflow-hidden"
       
    >
      {/* Header (fixed position) */}
      <h2 className="h-font left-0 w-full px-20 pb-6 text-center text-[clamp(32px,6vw,64px)] font-bold z-50">
        Work & Tech Experience
      </h2>

      {/* Cards container (full viewport height) */}
      <div className="sticky top-0 overflow-hidden"
        style={{
            height: `${cards.length * 1000}vh`,
          }}>
  
        {cards.map((card, i) => (
          <AnimatedCard
            key={i}
            card={card}
            index={i}
            scrollProgress={scrollYProgress}
            totalCards={cards.length}
          />
        ))}
      </div>
    </section>
  );
};


export default Exp;