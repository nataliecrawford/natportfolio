"use client";
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform, motion, useMotionValueEvent, easeOut,  easeInOut, useInView } from "framer-motion";
import { useRef, useEffect,useState } from "react";
import { MotionValue, useMotionValue } from "framer-motion";
import Image from "next/image";


import { useMotionTemplate } from "framer-motion";




const cards = [
  {
    title: "929 Kitchen & Bar",
    description: "Server",
    des: "At 929 Kitchen and Bar, I served in a fast-paced, busy restaurant where I often balanced the needs of up to ten tables at once while managing customer needs and directing the flow of the dining experience. I worked to maintain both employee and customer satisfaction in a high-pressure environment, demonstrating strong multitasking skills and the ability to handle many responsibilities simultaneously.",
    tags: ["Restaurant Industry", "Server", "Multitasking", "Jan 2023 - Present"],
    images: ["/exp/929/image1.jpg", "/exp/929/image2.jpg", "/exp/929/image3.jpg"],
    photoCredit: "929 Kitchen & Bar Instagram",
    photoCreditUrl: "https://www.instagram.com/929kitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    bgColor: "#bf052b",
    bubColor: "#f5a3b0",
    textColor: "#6b0319",
  },
  {
    title: "MOA Korean BBQ",
    description: "Server",
    des: "I managed the unique responsibility of cooking for guests at their tables, often overseeing multiple grills at once in a fast-paced environment. This required careful attention to timing and detail to ensure food was prepared correctly, while simultaneously maintaining strong customer service and balancing the needs of several tables at the same time. The role sharpened my multitasking abilities, strengthened my ability to perform under pressure, and taught me how to create a positive experience.",
    tags: ["Customer Service", "Teamwork", "Fast-Paced", "Sep 2023 - Feb 2025"],
    images: ["/exp/MOA/image1.jpg", "/exp/MOA/image2.jpg", "/exp/MOA/image3.jpg"],
    photoCredit: "MOA Korean BBQ & Bar - Columbia Instagram",
    photoCreditUrl: "https://www.instagram.com/moakoreancola?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    bgColor: "#db1f45",
    bubColor: "#f5a3b0",
    textColor: "#7c1a28",
  },
  {
    title: "Capgemini",
    description: "Intern, MS Azure Technology, Smart Herb Garden",
    des: "I developed a cutting-edge Smart Herb Garden web application using React and Azure technologies, strengthening my skills in both Azure DevOps and Azure Cloud. In this role, I designed and assisted in building a user-friendly interface, created detailed UI mockups, and collaborated with cross-functional teams to ensure the seamless integration of features into the application.",
    tags: ["Full Stack", "Front End", "Consulting", "Mar 2023 - Jan 2024"],
    images: ["/exp/Cap/image1.webp", "/exp/Cap/image2.webp"],
    bgColor: "#0a5dd8",
    bubColor: "#0c459d",
    textColor: "#94e0fa",
  },
  {
    title: "USC CHAARG",
    description: "Treasurer",
    des: "I managed the organization’s budget and bank accounts while collaborating with the executive team and national organization to ensure smooth operations and strong member engagement. I successfully organized social events and hosted a well-attended Semi-Formal, showcasing my ability to handle financial responsibilities while creating meaningful experiences for members. In addition, I led small groups on a weekly basis, fostering community and encouraging member participation.",
    tags: ["Leadership", "Finance", "Organization", "May 2022 - Dec 2023"],
    images: ["/exp/CHAARG/image1.JPG", "/exp/CHAARG/image2.JPG", "/exp/CHAARG/image3.JPEG", "/exp/CHAARG/image4.jpg"],
    bgColor: "#d82d58",
    bubColor: "#f5a3b0",
    textColor: "#7c1a28",
  },
  {
    title: "1801 Grille",
    description: "Host",
    des: "I created a welcoming environment for guests by managing reservations, seating arrangements, and guest inquiries, while coordinating with staff to ensure a seamless dining experience. I maintained the cleanliness and ambiance of the front-of-house area and provided exceptional customer service to enhance overall guest satisfaction.",
    tags: ["Restaurant Industry", "Balance", "Planning", "Jun 2022 - Dec 2022"],
    images: ["/exp/1801/image1.jpeg", "/exp/1801/image2.jpg", "/exp/1801/image3.webp"],
    bgColor: "#fc3f6f",
    bubColor: "#f5a3b0",
    textColor: "#7c1a28",
  },
  {
    title: "University of South Carolina",
    description: "Data Science Software Developer Research Assistant",
    des: "I strengthened my programming skills in JavaScript and deepened my understanding of Python by developing innovative algorithms for topic modeling and data visualization projects. Working remotely, I maintained a consistent schedule, averaging 20 hours per week during the academic year and 31 hours per week during the summer, demonstrating both technical expertise and dedication to the role.",
    tags: ["Data Science", "Research", "Python", "Topic Modeling", "Feb 2022 - Aug 2022"],
    images: ["/exp/Research/image1.webp", "/exp/Research/image2.png", "/exp/Research/image3.png"],
    bgColor: "#1687e3",
    bubColor: "#0c459d",
    textColor: "#94e0fa",
  },
  {
    title: "Pelican's SnoBalls",
    description: "Snoballer",
    des: "I assisted in creating high-quality frozen treats while delivering excellent customer service in a fast-paced environment. I worked 20 hours per week during the school year and up to 50 hours per week in the summer, developing strong teamwork and communication skills while contributing to the overall success of the business and ensuring customer satisfaction.",
    tags: ["Cashier", "Customer Service", "Responsibility", "May 2020 - Aug 2022"],
    images: ["/exp/Pelicans/IMG_1376.JPG", "/exp/Pelicans/image2.JPG", "/exp/Pelicans/image3.jpg"],
    bgColor: "#fe8ba6",
    bubColor: "#fdc9d2",
    textColor: "#7c1a28",
  },
  {
    title: "Dance Department",
    description: "Dance Instructor Assistant",
    des: "I helped create an engaging and supportive environment for students by leading warm-ups, assisting in teaching choreography, and helping manage groups of children during class. In this role, I developed strong leadership and communication skills while balancing patience and enthusiasm to keep students motivated and focused. My contributions ensured that classes ran smoothly and that students had a positive and productive learning experience.",
    tags: ["Instructor", "Choreography", "Leadership", "Aug 2018 - May 2020"],
    images: ["/exp/DD/image1.jpg", "/exp/DD/image2.JPG", "/exp/DD/image3.jpg"],
    bgColor: "#feb9c7",
    bubColor: "#fe8ba6",
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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!card.images || card.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % card.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [card.images]);



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
             <p className="text-[clamp(18px,2vw,40px)] leading-tight">
              {card.des}
            </p>
            <ul className="flex flex-wrap gap-2 2xl:gap-3 w-full lg:w-10/12">
              {card.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="text-[clamp(13px,1.02vw,22px)] px-4 py-1.5 rounded-full font-semibold"
                  style={{backgroundColor: card.bubColor}}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full lg:w-5/12 h-[450px] lg:h-[clamp(400px,25vw,600px)] rounded-lg lg:rounded-2xl overflow-hidden mb-4 lg:mb-0">
            <Image
              src={card.images?.[currentImage] || "/fallback.jpg"}
              alt={`${card.title} Image`}
              fill
              className="object-cover object-center pointer-events-none transition-opacity duration-500"
            />
            {card.photoCredit && card.photoCreditUrl && (
              <p className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                <a
                  href={card.photoCreditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  {card.photoCredit}
                </a>
              </p>
            )}
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
      className="relative sticky top-0 h-[210vh] overflow-hidden my-15"
       
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