"use client";

import { useState } from "react";
import TechExp from "./techexp";
import OtherExp from "./otherexp";
import Projects from "./projects";
import Certifications from "./certs";


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("techexp");

  const renderTabContent = () => {
    switch (activeTab) {
      case "techexp":
        return <TechExp />;
      case "otherexp":
        return <OtherExp />;
      case "projects":
        return <Projects />;
      case "certs":
        return <Certifications />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="left-0 w-full z-10 ">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
           <ul className="flex w-full font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl
 font-bold">
                {[
                    { key: "techexp", label: "Tech Experience" },
                    { key: "otherexp", label: "Other Experience" },
                    { key: "projects", label: "Projects" },
                    { key: "certs", label: "Certifications" },
                ].map(({ key, label }) => (
                    <li key={key} className="flex-1">
                    <button
                        onClick={() => setActiveTab(key)}
                        style={{
                            backgroundColor: activeTab === key ? 'var(--eight)' : '',
                            color: 'var(--five)',
                             textShadow: `
                                2px 0 var(--seven),
                                -2px 0 var(--seven),
                                0 2px var(--seven),
                                0 -2px var(--seven),
                                2px 2px var(--seven),
                                -2px -2px var(--seven),
                                2px -2px var(--seven),
                                -2px 2px var(--seven)
                            `
                        }}
                        className={` w-full text-center px-3 py-2 transition-colors duration-200 tracking-wide ${
                        activeTab === key
                            ? "text-white"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {label}
                    </button>
                    </li>
                ))}
                </ul>


          </div>
        </div>
      </nav>

      <div className="">{renderTabContent()}</div>
    </>
  );
};

export default Navbar;
