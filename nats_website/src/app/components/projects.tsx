"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectCards = [
  { title: "LearnLink",           
    teaser: "LearnLink is a web-based platform built to make forming and managing study groups in large, fast-paced courses simple and effective. With smart matching, easy scheduling, and real-time communication, it helps students find the right peers, stay organized, and build community.",
    heading: "Senior Design Capstone & Honors Thesis Project",
    headingColor: "#caff91",
    details: "LearnLink is a web-based platform developed to simplify the process of forming and managing study groups in large, fast-paced college courses. It addresses common challenges such as finding compatible peers, coordinating schedules, and maintaining effective communication. By integrating intelligent matching algorithms, user-friendly scheduling tools, and streamlined communication features, LearnLink empowers students to take ownership of their academic success while fostering a stronger sense of community within their classes.",
    keyFeatures: 
    [
      "Match with individual students or groups based on classes and study habits",
      "Real-time messaging with notifications",
      "Weekly scheduler and calendar invites",
      "Profile customization with study preferences",
      "Centralized group and network management",
    ],
    learningOutcomes:" Building LearnLink pushed me to grow as a developer in both technical and creative ways. I learned how to design with React on the front end while building a Node.js backend to support it. I gained hands-on experience writing API callsand setting up a database to manage user and group data. One of the most challenging but rewarding parts was implementing live socket connections for the chat system, which taught me how to think about data in motion and ensure a seamless user experience. More than anything, this project taught me how to connect usability with technical problem-solving to create something both functional and engaging.",
    pdfUrl: "/HonorsThesis_NatalieCrawford.pdf",
    pdfDes: "Read My Thesis",
    siteUrl: "https://main.d1oermo53uhnfk.amplifyapp.com",
    siteDes: "Visit the Site",
    bgColor: "#2e7432", 
    textColor: "#96eb3c" 
  },
  { title: "This Portfolio",      
    teaser: "This portfolio is more than a website. It’s a reflection of my life, my travels, and a lifelong dedication to creativity. Built with Next.js, React, and Tailwind CSS, and brought to life with Framer Motion animations and custom Canva artwork, it showcases both my technical skills and my personal story. ",
    heading: "Self-Designed & Developed",
    headingColor: "#19591d",
    details: "Developing my portfolio website was both a creative and technical challenge that let me bring together many different parts of who I am. Built with Next.js and React and styled with Tailwind CSS, the site uses Framer Motion animations to give each section personality and flow. Beyond the code, I leaned into my creative side by designing the custom stamps, postcards, and illustrations in Canva, which gave the site its distinct visual identity.",
    details2: "This portfolio is not just my resume in website format. It’s a reflection of my life, my travels, and my lifelong dedication to creativity. By blending technical development with original artwork, I created something that not only showcases my skills but also tells my story in a way that feels authentic and personal.",
    keyFeatures: 
    [
      "Built with Next.js and React",
      "Styled using Tailwind CSS",
      "Animated with Framer Motion",
      "Custom artwork created in Canva",
      "Fully deployed as a live site",
    ],
    learningOutcomes:"Through this project, I discovered how much I enjoy blending creativity with development. I learned to use Tailwind CSS for efficient styling, Framer Motion for building animations that bring the site to life, and I gained confidence by deploying a live web application for the first time. Most importantly, I realized how rewarding it is to create something that reflects both my technical skills and my personal identity.",
    pdfUrl: "",
    pdfDes: "",
    siteUrl: "",
    siteDes: "",
    bgColor: "#3d9940", 
    textColor: "#caff91" 
  },
  { title: "Redesign of 25Live",  
    teaser: "We redesigned 25Live, the platform for student event scheduling, to make it clearer, simpler, and more consistent. By applying HCI principles and iterating through user feedback, we transformed a cluttered and confusing system into a streamlined, user-friendly prototype. ",
    heading: "HCI Design Alternatives Project",
    headingColor: "#bfeb92",
    details: "As part of a Human-Computer Interaction course, my team redesigned 25Live, the platform used by student organizations at USC to request and manage event spaces. The original interface was cluttered, inconsistent, and confusing for users, so we created a more usable prototype that addressed core design principle violations. Through multiple rounds of evaluation including questionnaires, cognitive walkthroughs, and heuristic analysis, we iteratively refined our design to better support student leaders while simplifying their workflows.",
    keyFeatures: 
    [
      "Broke down the overwhelming single form into clear multi-step pages",
      "Improved consistency by standardizing interactions (e.g., toggles for yes/no)",
      "Enhanced constraints to prevent invalid or unnecessary submissions",
      "Reduced clutter by eliminating redundant or irrelevant questions",
      "Added features like a home button, error prevention, and exit options for usability",
    ],
    learningOutcomes:"This project taught me how to apply HCI principles in practice, moving from critique to redesign. I gained experience designing with usability heuristics in mind, evaluating prototypes through structured methods, and iterating based on user feedback. It also reinforced the importance of balancing functionality with clarity, ensuring that every design choice reduces friction for the end user.",
    pdfUrl: "/CSCE 572 HCI Group 3 Final Report.pdf",
    pdfDes: "Read the Report",
    siteUrl: "",
    siteDes: "",
    bgColor: "#79c329", 
    textColor: "#355d08" 
  },
  { title: "Camp System",         
    teaser: "The Camp System started as a console app and was later expanded into an online prototype for managing campers, staff, and activities. Using JSON for data storage and exchange, it demonstrated how a simple backend-driven system could evolve into a more accessible web-based tool. ",
    heading: "Software Engineering Course Project",
    headingColor: "#3d9940",
    details: "In my Software Engineering class my sophomore year, my team and I were required to develop a project based on an idea presented to us by the Professor. Working in a collaborative team environment, we followed Agile and SCRUM methodologies to iteratively design and implement features. The Camp System project began as a console-based application that my team extended into an online prototype. The goal was to create a platform for managing camp operations, including handling camper information, scheduling, and activities. We built the prototype to demonstrate how the system could transition from a simple console app into a more scalable and accessible tool.",
    keyFeatures: 
    [
      "Managed camper and staff records",
      "Supported scheduling and activity organization",
      "Stored and exchanged data using JSON",
      "Demonstrated transition from console app to online prototype",
    ],
    learningOutcomes:"This project gave me hands-on experience working with JSON to store and transfer structured data, which strengthened my understanding of how information flows between a backend and an interface. I also gained practical insight into backend development, particularly in designing data structures and supporting features that connect storage with usability. These lessons gave me a stronger foundation for building applications that bridge backend logic with user experience.",
    pdfUrl: "/camp-system/index.html",
    pdfDes: "View the Prototype",
    siteUrl: "https://github.com/nataliecrawford/camp-system",
    siteDes: "View the Project on GitHub",
    bgColor: "#97d45a", 
    textColor: "#576b44" },
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
 return (
    <div className="p-4 max-w-7xl mx-auto my-15">
      <h2 className="h-font text-[clamp(32px,6vw,64px)] font-bold mb-8 text-center">Projects</h2>

      <div
        className="h-[80vh] flex flex-col lg:flex-row gap-6 lg:gap-10"
        onMouseLeave={() => setHovered(null)}
      >
        {projectCards.map((card, i) => {
          const expanded = hovered === i;

          const targetWidth =
            hovered === null ? `${100 / projectCards.length}%` : hovered === i ? "100%" : "0%";

          return (
            <motion.div
              key={i}
              className="rounded-xl lg:rounded-2xl shadow-xl overflow-hidden cursor-pointer flex focus:outline-none"
              role="button"
              tabIndex={0}
              aria-expanded={expanded}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onClick={() => setHovered(expanded ? null : i)}
              style={{ backgroundColor: card.bgColor, color: card.textColor }}
              animate={{ width: targetWidth, borderRadius: expanded ? 20 : 16 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              initial={false}
            >
              <div className="p-6 lg:p-8 flex flex-col w-full">
                <h3 className="text-[clamp(24px,4vw,48px)] font-semibold tracking-tight leading-none mb-3">
                  {card.title}
                </h3>

                <h4 className="text-2xl tracking-normal font-semibold leading-none mb-3"
                 style={{ color: card.headingColor }}>
                  {card.heading}
                </h4>

                {expanded && (card.pdfUrl || card.siteUrl) && (
                    <div className="shrink-0 flex gap-2">
                      {card.pdfUrl && (
                        <a
                          href={card.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg font-semibold border border-white/40 hover:bg-white/15 transition text-[clamp(12px,1.4vw,14px)]"
                          style={{ color: card.textColor }}
                        >
                          {card.pdfDes}
                        </a>
                      )}
                      {card.siteUrl && (
                        <a
                          href={card.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg font-semibold border border-white/40 hover:bg-white/15 transition text-[clamp(12px,1.4vw,14px)]"
                          style={{ color: card.textColor }}
                        >
                          {card.siteDes}
                        </a>
                      )}
                    </div>
                  )}

                {/* Collapsed → Teaser | Expanded → Details + Key Features + Learning */}
                <div className={`relative ${expanded ? "flex-1" : ""}`}>
                  <AnimatePresence mode="wait">
                    {!expanded ? (
                      <motion.p
                        key="teaser"
                        className="text-[clamp(14px,2vw,20px)] font-medium leading-relaxed"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22 }}
                      >
                        {card.teaser}
                      </motion.p>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="mt-2 h-[58vh] lg:h-[60vh] overflow-auto pr-1"
                      >
                        {/* Details */}
                        {card.details && (
                          <section className="mb-4">
                            <h4 className="text-[clamp(16px,2vw,22px)] font-semibold mb-1">Details</h4>
                            <p className="text-[clamp(14px,1.6vw,18px)] leading-relaxed mb-3">
                              {card.details}
                            </p>
                            <p className="text-[clamp(14px,1.6vw,18px)] leading-relaxed">
                              {card.details2}
                            </p>
                          </section>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                          {/* Key Features */}
                          {Array.isArray(card.keyFeatures) && card.keyFeatures.length > 0 && (
                            <section className="lg:col-span-1 rounded-xl bg-black/10 backdrop-blur-sm p-4">
                              <h5 className="text-[clamp(15px,1.8vw,20px)] font-semibold mb-2">
                                Key Features
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-[clamp(13px,1.4vw,17px)] leading-snug">
                                {card.keyFeatures.map((f, idx) => (
                                  <li key={idx}>{f}</li>
                                ))}
                              </ul>
                            </section>
                          )}

                          {/* What I Learned */}
                          {card.learningOutcomes && (
                            <section className="lg:col-span-2 rounded-xl bg-black/10 backdrop-blur-sm p-4">
                              <h5 className="text-[clamp(15px,1.8vw,20px)] font-semibold mb-2">
                                What I Learned
                              </h5>
                              <p className="text-[clamp(13px,1.4vw,17px)] leading-relaxed">
                                {card.learningOutcomes}
                              </p>
                            </section>
                          )}
                        </div>

                      
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


export default Projects;
