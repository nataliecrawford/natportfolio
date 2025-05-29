"use client";

import { useEffect, useState } from "react";

const NameTransition = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 h-screen relative overflow-hidden">
      <h1 className="hidden">Natalie Crawford</h1>

      {/* Name animation block */}
      <div
        className={`absolute flex flex-col sm:flex-row items-center justify-center sm:justify-between transition-all duration-[2000ms] ease-in-out will-change-transform 
        ${loaded ? "top-0 left-10 text-[10vw] gap-x-8" : "top-1/2 left-1/2 text-xl -translate-x-1/2 -translate-y-1/2 gap-x-2"} 
        ${loaded ? "" : "transform"}`}
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
