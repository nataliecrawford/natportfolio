"use client";
import { useState } from "react";
import NameTransition from "../app/components/name";
import Stamps from "../app/components/stamps";
import Exp from "../app/components/experience";
import ArtExp from "./components/artexp";
import Education from "./components/education";
import Projects from "./components/projects";
import Intro from "./components/intro";
import Bio from "./components/bio";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
     <div className="flex flex-col items-center  overflow-x-hidden">
      <NameTransition onComplete={() => setShowInfo(true)} />
      <div
        className={`transition-opacity duration-700 w-full flex flex-col items-center ${
          showInfo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Intro />
        <Stamps />
        <Bio/>

         <div className="mt-8 w-full">
          <ArtExp />
        </div>
        <div className="mt-8 w-full">
          <Projects />
        </div>
        <div className="mt-8 w-full">
          <Exp />
        </div>
        <div className="mt-8 w-full">
          <Education />
        </div>
      </div>
    </div>
  );
}
