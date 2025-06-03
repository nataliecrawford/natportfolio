"use client";
import { useState } from "react";
import NameTransition from "../app/components/name";
import Stamps from "../app/components/stamps";

export default function Home() {
  const [showStamps, setShowStamps] = useState(false);

  return (
     <div className="flex flex-col items-center">
      <NameTransition onComplete={() => setShowStamps(true)} />
      <div className={`transition-opacity duration-700 ${showStamps ? "opacity-100" : "opacity-0"}`}>
        <Stamps />
      </div>
    </div>
  );
}
