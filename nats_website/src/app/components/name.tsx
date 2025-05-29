"use client";

import { useEffect, useState } from "react";

const NameTransition = () => {
  const [hasScaled, setHasScaled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setHasScaled(true);
    }, 800); // start scale after 0.4s

    const moveTimer = setTimeout(() => {
      setHasMoved(true);
    }, 2200); // move after scaling finishes (~1s later)

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(moveTimer);
    };
  }, []);

  return (
    <div className="px-4 h-screen relative overflow-hidden">
      <h1 className="hidden">Natalie Crawford</h1>

      {/* Name animation block */}
      <div
        className={`absolute flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-x-1 transition-all duration-[1000ms] ease-in-out will-change-transform
       ${hasMoved
            ? "text-[10vw] gap-x-8 top-0 left-1/2 -translate-x-1/2"
            : hasScaled
            ? "text-[10vw] gap-x-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "text-[4vw] gap-x-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}

        `}
        
      >
        {/* First name */}
        <div className="overflow-hidden -mb-3 sm:mb-0">
          <p className="pointer-events-none font-bold font-lilita">
            NATALIE 
          </p>
        </div>

        {/* Last name */}
        <div className="overflow-hidden">
          <p className="pointer-events-none font-bold font-lilita">
            CRAWFORD
          </p>
        </div>
      </div>
    </div>
  );
};

export default NameTransition;
