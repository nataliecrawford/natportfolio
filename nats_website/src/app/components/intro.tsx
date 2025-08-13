"use client";
import { useState, useEffect } from "react";

const Intro = () => {
  const phrases = [
    "Front-End Engineer",
    "Web Developer",
    "Artistic Creator",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-font flex justify-between items-center w-full py-2 px-6 text-xl sm:text-2xl md:text-3xl font-semibold">
      <span className="text-left">Creative Individual</span>
      <span className="text-right transition-all duration-500">
        {phrases[currentPhrase]}
      </span>
    </div>
  );
}

export default Intro;
