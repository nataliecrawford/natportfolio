"use client";
import { useState } from "react";

const projectCards = [
  {
    title: "LearnLink",
    description: "blah blah blah blah",
    bgColor: "#2e7432",
    textColor: "#96eb3c",
  },
  {
    title: "This Portfolio",
    description: "blah blah blah blah",
    bgColor: "#3d9940",
    textColor: "#caff91",
  },
  {
    title: "Camp System",
    description: "blah blah blah blah",
    bgColor: "#79c329",
    textColor: "#355d08",
  },
  
];

const Projects = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="h-font text-[clamp(32px,6vw,64px)] font-bold mb-8 text-center">
        Projects
      </h2>
      <div className="h-[65vh] flex flex-col lg:flex-row gap-10">
        {projectCards.map((card, index) => (
          <div
            key={index}
            className="flex-1 p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl"
            style={{
              backgroundColor: card.bgColor,
              color: card.textColor,
            }}
          >
            <h3 className="text-[clamp(24px,4vw,48px)] font-semibold tracking-tight leading-none mb-4">
              {card.title}
            </h3>
            <p className="text-[clamp(14px,2vw,24px)] font-medium leading-tight">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
