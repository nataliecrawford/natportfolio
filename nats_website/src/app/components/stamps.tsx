"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {name: "LakeDist", src: "/Stamps/LakeDist.png"},
  {name: "Marseille", src:"/Stamps/Marseille.png"},
  {name: "Dublin", src:"/Stamps/Dublin.png"},
  {name: "Brussels", src: "/Stamps/Brussels.png"},
  {name: "Amalfi", src: "/Stamps/Amalfi.png"},
  {name: "Leeds", src: "/Stamps/Leeds.png"},
  {name: "Nice", src: "/Stamps/Nice.png"},
  {name: "Genoa", src: "/Stamps/Genoa.png"},
  {name: "Cinque", src: "/Stamps/Cinque.png"},
  {name: "York", src: "/Stamps/York.png"},
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
  const [stampAspectRatio, setStampAspectRatio] = useState<number | null>(null);
  const [showPostcard, setShowPostcard] = useState(false);
  const [clickedStampIndex, setClickedStampIndex] = useState<number | null>(null);
  const [stampOpacity, setStampOpacity] = useState(1);
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
    const width = maxHeight * (stampAspectRatio ?? (18 / 24));
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
    console.log("ASPECT:::: ", stampAspectRatio);
    const stampHeight = stampWidth * (1/(stampAspectRatio ?? (18 / 24))); // Maintain stamp aspect ratio

    return {
      left: postcardLeft + (postcardWidth * stampPosition.left) - (stampWidth / 2),
      top: postcardTop + (postcardHeight * stampPosition.top) - (stampHeight / 2) + 1,
      width: stampWidth,
      height: stampHeight
    };

  };
  // 2) Capture the exact rect from the inner box, not the padded .slider-card
  const handleClick = (stamp: Stamp, index: number) => {
    const cardEl = stampRefs.current[index];
    if (!cardEl || !innerRef.current || !containerRef.current) return;

    const wrapEl = cardEl.querySelector('.stamp-wrap') as HTMLDivElement | null;
    if (!wrapEl) return;

    // rect of the *visual* box (no padding)
    const rect = wrapEl.getBoundingClientRect();
    const aspectRatio = rect.width / rect.height; // ← This is the original AR

    // store the current strip transform so return uses the same frame of reference
    const transformXAtClick = x.current;

    setStartRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,          // <- use the real width
      height: rect.height,
      // optional: store transform too if you want to assert it hasn't changed
      // @ts-ignore
      transformX: transformXAtClick,
    });

    setStampAspectRatio(aspectRatio);
    setSelectedStamp(stamp);
    setClickedStampIndex(index);  // store the *exact* index, not modulo
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
    setStampOpacity(0);
    setIsAnimating(false);
  };

  const closeModal = async () => {
   
    setShowPostcard(false);
    setStampOpacity(1);
    // Wait for fade out to complete
    await new Promise(resolve => setTimeout(resolve, 200));
    setStampOpacity(1);
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
            const isAnimatingStamp =
                selectedStamp && stamp.name === selectedStamp.name || clickedStampIndex !== null && i === clickedStampIndex && isAnimating;

            const shouldHideOriginal = isAnimatingStamp && 
              (animationPhase === 1 || animationPhase === 2 || (animationPhase === 3 && !readyToRevealOriginal));

            
            return (
              <div
                key={i}
                className="slider-card p-1 hover:scale-105"
                ref={(el) => {
                  stampRefs.current[i] = el;
                }}
                onClick={() => handleClick(stamp, i)}
                style={{
                  opacity: shouldHideOriginal ? 0 : 1,
                  transform: "scale(1)",
                  transition: 'opacity 0.3s ease',
                  pointerEvents: shouldHideOriginal ? 'none' : 'auto'
                }}
              >
                <div className="stamp-wrap w-[clamp(280px,25vw,480px)] h-[clamp(320px,30vw,540px)] rounded-lg overflow-hidden relative select-none">
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
                className="object-cover object-center select-none pointer-events-none"
                style={{ position: "fixed", zIndex: 1000, borderRadius: "12px" }}
                onAnimationComplete={handleCenterComplete}
                draggable={false}
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
                className="object-cover object-center select-none pointer-events-none"
                style={{ position: "fixed", zIndex: 1000, borderRadius: "12px", opacity:stampOpacity}}
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
                    zIndex: 1001,
                  }}
                  animate={{
                    top: startRect!.top,
                    left: startRect!.left,
                    width: startRect!.width,
                    height: startRect!.height,
                    transition: { duration: 0.8, ease: "easeInOut" },
                    zIndex: 1001,
                  }}
                  
                  onAnimationStart={() => { // Delay slightly before revealing the original 
                    setTimeout(() => setReadyToRevealOriginal(true), 620); // ~200ms before end 
                  }}
                  onAnimationComplete={() => {
                    setClickedStampIndex(null);
                    setAnimationPhase(0);
                    setIsAnimating(false);
                    setReadyToRevealOriginal(false); // reset for next time
                  }}
                  className="object-cover object-center select-none pointer-events-none"
                  style={{
                    position: "fixed",
                    zIndex: 1001,                 // below the postcard (which will be 1000+)
                    borderRadius: "12px",
                    willChange: "top,left,width,height,opacity,transform",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                    opacity:stampOpacity
                  }}

                />
              )}

          </>
        )}
      </AnimatePresence>


      {/* Postcard Modal */}
      
      {showPostcard && selectedStamp && (
        <motion.div
         style={{ zIndex: 999, position: "fixed", inset: 0 }}
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