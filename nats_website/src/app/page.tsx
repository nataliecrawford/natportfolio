"use client";
import { useState } from "react";
import NameTransition from "../app/components/name";
import Stamps from "../app/components/stamps";
import Navbar from "./components/navbar";

export default function Home() {
  const [showStamps, setShowStamps] = useState(false);

  return (
     <div className="flex flex-col items-center">
      <NameTransition onComplete={() => setShowStamps(true)} />
      <div
        className={`transition-opacity duration-700 ${
          showStamps ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Stamps />

        
      </div>
      <div className="mt-8 w-full">
        <Navbar />
      </div>
    </div>
  );
}
