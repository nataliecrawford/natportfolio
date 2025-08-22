"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectCards = [
  { title: "LearnLink",           
    teaser: "blah ",
    details: "blah blah blah blah",
    bgColor: "#2e7432", 
    textColor: "#96eb3c" 
  },
  { title: "This Portfolio",      
    teaser: "blah ",
    details: "blah blah blah blah",
    bgColor: "#3d9940", 
    textColor: "#caff91" 
  },
  { title: "Redesign of 25Live",  
    teaser: "blah ",
    details: "blah blah blah blah",
    bgColor: "#79c329", 
    textColor: "#355d08" 
  },
  { title: "Camp System",         
    teaser: "blah ",
    details: "blah blah blah blah",
    bgColor: "#97d45a", 
    textColor: "#576b44" },
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="p-4 max-w-7xl mx-auto my-15">
      <h2 className="h-font text-[clamp(32px,6vw,64px)] font-bold mb-8 text-center">
        Projects
      </h2>

    
      <div
        className="h-[80vh] flex flex-col lg:flex-row gap-6 lg:gap-10"
        onMouseLeave={() => setHovered(null)}
      >
        {projectCards.map((card, i) => {
          const expanded = hovered === i;
          // Compute target width for desktop
          const targetWidth =
            hovered === null
              ? `${100 / projectCards.length}%`      // idle: equal widths
              : hovered === i
              ? "100%"                                // hovered: full width
              : "0%";                                 // others: collapse

          return (
            <motion.div
              key={i}
              className="rounded-xl lg:rounded-2xl shadow-xl overflow-hidden cursor-pointer flex"
              style={{ backgroundColor: card.bgColor, color: card.textColor }}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              tabIndex={0}
              aria-expanded={expanded}
              animate={{ width: targetWidth, borderRadius: expanded ? 20 : 16 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              initial={false}
            >
              <div className="p-6 lg:p-8 flex flex-col justify-center w-full">
                <h3 className="text-[clamp(24px,4vw,48px)] font-semibold tracking-tight leading-none mb-3">
                  {card.title}
                </h3>

                {/* Blurb swap: teaser when condensed, details when expanded */}
                <div className="relative min-h-[2.5rem]">
                  <AnimatePresence mode="wait">
                    {!expanded ? (
                      <motion.p
                        key="teaser"
                        className="text-[clamp(14px,2vw,20px)] font-medium leading-tight"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22 }}
                      >
                        {card.teaser}
                      </motion.p>
                    ) : (
                      <motion.p
                        key="details"
                        className="text-[clamp(14px,2vw,24px)] font-medium leading-tight"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22, delay: 0.05 }}
                      >
                        {card.details}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
