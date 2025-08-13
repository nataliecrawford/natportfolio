"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import PostcardModal from "../components/postcards"

type Stamp = {
  name: string;
  src: string;
};

const images = [
 { name: "Santorini", src:"/Stamps/Santorini.png"},
  {name: "Morocco", src: "/Stamps/Morocco.png"},
  {name: "Rome", src: "/Stamps/Rome.png"},
  {name: "Madrid", src: "/Stamps/Madrid.png"},
  {name: "London", src: "/Stamps/London.png"},
  {name: "Lisbon", src: "/Stamps/Lisbon.png"},
  {name: "Edinburgh", src: "/Stamps/Edinburgh.png"},
  {name: "Liverpool", src: "/Stamps/Liverpool.png"},
  {name: "Barcelona", src: "/Stamps/Barcelona.png"},
  {name: "Galway", src: "/Stamps/Galway.png"},
  {name: "Florence", src: "/Stamps/Florence.png"},
  {name: "Marseille", src:"/Stamps/Marseille.png"},
  {name: "Dublin", src:"/Stamps/Dublin.png"},
  {name: "Brussels", src: "/Stamps/Brussels.png"},
  {name: "Amalfi", src: "/Stamps/Amalfi.png"},
  {name: "Leeds", src: "/Stamps/Leeds.png"},
  {name: "Nice", src: "/Stamps/Nice.png"},
  {name: "Genoa", src: "/Stamps/Genoa.png"},
];

export default function StampsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const speed = 2.0;
  const [paused, setPaused] = useState(false);
  const frameId = useRef<number>(null);
  const [selectedStamp, setSelectedStamp] = useState<Stamp | null>(null);
  const stampRefs = useRef<(HTMLDivElement | null)[]>([]);


  type Rect = { top: number; left: number; width: number; height: number };
  const [startRect, setStartRect] = useState<Rect | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPostcard, setShowPostcard] = useState(false);
  const [clickedStampIndex, setClickedStampIndex] = useState<number | null>(null);
  const [stampOpacity, setStampOpacity] = useState(1);
  const postcardControls = useAnimation();
  const [postcardOpacity, setPostcardOpacity] = useState(0);
  const [readyToRevealOriginal, setReadyToRevealOriginal] = useState(false);


  useEffect(() => {
    const scroll = () => {
      if (!innerRef.current || !containerRef.current) return;

      const totalWidth = innerRef.current.scrollWidth / 3;
      x.current -= speed;

      if (Math.abs(x.current) >= totalWidth) {
        x.current = 0;
      }

      innerRef.current.style.transform = `translateX(${x.current}px)`;
      frameId.current = requestAnimationFrame(scroll);
    };

    if (!paused) {
      frameId.current = requestAnimationFrame(scroll);
    }

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [paused]);

    const [animationPhase, setAnimationPhase] = useState<number>(0); // 0 = not animating, 1 = scaling up, 2 = moving to final position

  const getPostcardTarget = () => {
    const maxHeight = window.innerHeight * 0.95;
    const width = maxHeight * (18 / 24);
    const top = window.innerHeight / 2 - maxHeight / 2;
    const left = window.innerWidth / 2 - width / 2;
    return { top, left, width, height: maxHeight };
  };

  const getFinalTarget = () => {
    // These values position the stamp in the top-right corner of the postcard
    // Adjust these percentages to match your desired position
    const stampPosition = {
      left: 0.82, // 85% from left edge of postcard (right side)
      top: 0.28   // 15% from top edge of postcard
    };

    // Calculate postcard dimensions (matches your modal's sizing logic)
    const maxViewportWidth = window.innerWidth * 0.9;
    const maxViewportHeight = window.innerHeight * 0.9;
    const postcardAspectRatio = 26 / 18; // From your modal's aspect ratio

    let postcardWidth = maxViewportWidth;
    let postcardHeight = postcardWidth / postcardAspectRatio;

    if (postcardHeight > maxViewportHeight) {
      postcardHeight = maxViewportHeight;
      postcardWidth = postcardHeight * postcardAspectRatio;
    }

    // Position the postcard centered
    const postcardLeft = (window.innerWidth - postcardWidth) / 2;
    const postcardTop = (window.innerHeight - postcardHeight) / 2;

    // Calculate stamp size (20% of postcard width)
    const stampWidth = postcardWidth * 0.23;
    const stampHeight = stampWidth * (24 / 18); // Maintain stamp aspect ratio

    return {
      left: postcardLeft + (postcardWidth * stampPosition.left) - (stampWidth / 2),
      top: postcardTop + (postcardHeight * stampPosition.top) - (stampHeight / 2),
      width: stampWidth,
      height: stampHeight
    };
  };

  const handleClick = (stamp: Stamp, index: number) => {
    const stampEl = stampRefs.current[index];
    const innerEl = innerRef.current;
    if (!stampEl || !innerEl) return;

    const rect = stampEl.getBoundingClientRect();
    const containerRect = containerRef.current!.getBoundingClientRect();

    // Get current translateX value
    const transformX = x.current;

    // Offset left relative to outer container + translate
    const correctedLeft = rect.left - containerRect.left - transformX;
    const correctedTop = rect.top;

    const aspectRatio = 18 / 24;
    const newWidth = rect.height * aspectRatio;

    console.log("rect.left", rect.left, "x.current", x.current);

    setStartRect({
      top: correctedTop,
      left: rect.left,
      width: newWidth,
      height: rect.height,
    });

    setSelectedStamp(stamp);
    setClickedStampIndex(index % images.length);
    setAnimationPhase(1);
    setIsAnimating(true);
    setStampOpacity(1);
    setPaused(true);
  };




  const handleCenterComplete = () => {
    setAnimationPhase(2);
    setShowPostcard(true);
    // Animate postcard opacity
    setPostcardOpacity(0);
    setTimeout(() => {
      setPostcardOpacity(1);
    }, 100); // Small delay to ensure state updates
  };


  const handleFinalComplete = () => {
    setIsAnimating(false);
    setStampOpacity(0);
  };

  const closeModal = async () => {
    // Start fade out animation for postcard
    setPostcardOpacity(0);
    setStampOpacity(1);
    
    // Wait for fade out to complete
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Start reverse animation for stamp
    setAnimationPhase(3); // New phase for reverse animation
    setIsAnimating(true);
    
    // Wait for stamp to return
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Reset all states
    setPaused(false);
    setSelectedStamp(null);
    setClickedStampIndex(null);
    setShowPostcard(false);
    setAnimationPhase(0);
    setIsAnimating(false);
  };

  
  const tripled = [...images, ...images, ...images];

  return (
    <div className="w-full">
      <div className="overflow-x-hidden py-0 mt-0" ref={containerRef}>
        <div
          ref={innerRef}
          className="w-max whitespace-nowrap flex gap-[clamp(px,1vw,16px)] pr-[clamp(8px,1vw,16px)]"
          style={{
            transform: `translateX(0px)`,
            transition: "transform 0s linear"
          }}
        >
          {tripled.map((stamp, i) => {
            // Check if this is the clicked stamp (considering the tripled array)
            const isAnimatingStamp = clickedStampIndex !== null &&
              (i % images.length === clickedStampIndex);

            const shouldHideOriginal = isAnimatingStamp &&
              (animationPhase === 1 || animationPhase === 2 || (animationPhase === 3 && !readyToRevealOriginal));

            
            return (
              <div
                key={i}
                className="slider-card p-1 hover:scale-105"
                ref={(el) => {
                  stampRefs.current[i] = el;
                }}
                onClick={(e) => handleClick(stamp, i)}
                style={{
                  opacity: shouldHideOriginal ? 0 : 1,
                  transform: isAnimatingStamp ? "scale(1)" : undefined,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: shouldHideOriginal ? 'none' : 'auto'
                }}
              >
                <div className="w-[clamp(280px,25vw,480px)] h-[clamp(320px,30vw,540px)] rounded-lg overflow-hidden relative select-none">
                  <img
                    alt={stamp.name}
                    src={stamp.src}
                    className="object-cover object-center pointer-events-none select-none w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
           {/* Floating Animation Image */}
      <AnimatePresence>
        {animationPhase > 0 && selectedStamp && (
          <>
            {/* First animation phase - scale up to center */}
            {animationPhase === 1 && (
              <motion.img
                key="center-animation"
                src={selectedStamp.src}
                initial={{
                  position: "fixed",
                  top: startRect!.top,
                  left: startRect!.left,
                  width: startRect!.width,
                  height: startRect!.height,
                }}
                animate={{
                  top: getPostcardTarget().top,
                  left: getPostcardTarget().left,
                  width: getPostcardTarget().width,
                  height: getPostcardTarget().height,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                exit={{ opacity: 0 }}
                style={{ position: "fixed", zIndex: 1000, borderRadius: "12px" }}
                onAnimationComplete={handleCenterComplete}
              />
            )}

            {/* Second animation phase - move to final position */}
            {animationPhase === 2 && (
              <motion.img
                key="final-animation"
                src={selectedStamp.src}
                initial={{
                  position: "fixed",
                  top: getPostcardTarget().top,
                  left: getPostcardTarget().left,
                  width: getPostcardTarget().width,
                  height: getPostcardTarget().height,
                }}
                animate={{
                  top: getFinalTarget().top,
                  left: getFinalTarget().left,
                  width: getFinalTarget().width,
                  height: getFinalTarget().height,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
                style={{ position: "fixed", zIndex: 1000, borderRadius: "12px", opacity: stampOpacity }}
                onAnimationComplete={handleFinalComplete}
              />
            )}

              {animationPhase === 3 && (
                <motion.img
                  key="return-animation"
                  src={selectedStamp.src}
                  initial={{
                    position: "fixed",
                    top: getFinalTarget().top,
                    left: getFinalTarget().left,
                    width: getFinalTarget().width,
                    height: getFinalTarget().height,
                  }}
                  animate={{
                    top: startRect!.top,
                    left: startRect!.left,
                    width: startRect!.width,
                    height: startRect!.height,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                  onAnimationStart={() => {
                    // Delay slightly before revealing the original
                    setTimeout(() => setReadyToRevealOriginal(true), 800); // ~200ms before end
                  }}
                  onAnimationComplete={() => {
                    setClickedStampIndex(null);
                    setAnimationPhase(0);
                    setIsAnimating(false);
                    setReadyToRevealOriginal(false); // reset for next time
                  }}
                  style={{
                    position: "fixed",
                    zIndex: 1000,
                    borderRadius: "12px",
                  }}
                />
              )}

          </>
        )}
      </AnimatePresence>


      {/* Postcard Modal */}
      
      {showPostcard && selectedStamp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: postcardOpacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PostcardModal
            postcardName={selectedStamp.name}
            onClose={closeModal}
          />
        </motion.div>
      )}
    </div>
  );
}