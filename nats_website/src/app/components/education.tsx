"use client";

import { useState } from "react";

const Education = () => {
  const [hovered, setHovered] = useState<"card1" | "card2" | null>(null);

  return (
    <div>
      <h2 className="h-font text-[clamp(32px,6vw,64px)] font-bold text-center">
        Education
      </h2>

      <div
        className="relative w-[90%] aspect-[17/10] rounded-xl bg-contain bg-center left-1/22"
        style={{ backgroundImage: "url('/educationmap.png')" }}
      >
        {/* Hover Zone 1 */}
        <div
          onMouseEnter={() => setHovered("card1")}
          onMouseLeave={() => setHovered(null)}
          className="absolute top-[32%] left-[24%] w-[30px] h-[130px] cursor-pointer"
        >
          {hovered === "card1" && (
            <div className="absolute top-[-160%] left-[-440%] w-75 p-4 bg-white border rounded-lg shadow-lg z-10">
              <h3 className="font-bold text-xl text-[#0f6fe8] mb-2 text-center">University of South Carolina</h3>
              <p className="text-m font-bold text-[#1db4f2] text-center">B.S. in Computer Science</p>
              <p className="text-m font-bold text-[#1db4f2] text-center">Minor in Data Science</p>
              <p className="text-m font-bold text-[#1db4f2] text-center">Summa Cum Laude</p>
              <p className="text-m font-bold text-[#1db4f2] text-center">Class of 2025</p>
            </div>
          )}
        </div>

        {/* Hover Zone 2 */}
        <div
          onMouseEnter={() => setHovered("card2")}
          onMouseLeave={() => setHovered(null)}
          className="absolute top-[20%] left-[45.5%] w-[35px] h-[130px] cursor-pointer"
        >
          {hovered === "card2" && (
            <div className="absolute top-[-100%] left-[-375%] w-75 p-4 bg-white border rounded-lg shadow-lg z-10">
             <h3 className="font-bold text-xl text-[#0f6fe8] mb-2 text-center">University of Leeds</h3>
              <p className="text-m font-bold text-[#1db4f2] text-center">Study Abroad Semester Spring 2024</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
