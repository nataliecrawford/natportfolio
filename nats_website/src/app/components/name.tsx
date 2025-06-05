"use client";

import { useEffect, useState } from "react";

const NameTransition = ({ onComplete }: { onComplete?: () => void }) =>{
  const [hasScaled, setHasScaled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setHasScaled(true);
    }, 800); // start scale after 0.4s

    const moveTimer = setTimeout(() => {
      setHasMoved(true);
     
    }, 2500); // move after scaling finishes (~1s later)

    const doneTimer = setTimeout(() => {
      setIsDone(true);
       if (onComplete) {
        onComplete();
      }
    }, 3500); // mark as done after moving (~1s later)

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(moveTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out flex justify-center
        ${isDone ? "min-h-[200px]" : "h-screen"}
      `}
    >
      <h1 className="hidden">Natalie Crawford</h1>

      <div
        className={`absolute transition-all duration-[1000ms] ease-in-out will-change-transform flex flex-col sm:flex-row items-center gap-x-1
          ${hasMoved
            ? "top-0 text-[10vw] gap-x-8 translate-x-[-50%] left-1/2"
            : hasScaled
            ? "top-1/2 text-[10vw] gap-x-8 translate-x-[-50%] translate-y-[-50%] left-1/2"
            : "top-1/2 text-[4vw] gap-x-4 translate-x-[-50%] translate-y-[-50%] left-1/2"}
        `}
      >
        <div className="overflow-hidden -mb-3 sm:mb-0">
          <p className="pointer-events-none font-bold font-lilita">NATALIE</p>
        </div>
        <div className="overflow-hidden">
          <p className="pointer-events-none font-bold font-lilita">CRAWFORD</p>
        </div>
      </div>
    </div>
  );
};

export default NameTransition;
