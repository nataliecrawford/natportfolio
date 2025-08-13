"use client";

import { useEffect, useState } from "react";

// -- Types
type Skill = { name: string; bg: string; text: string };

type SkillsProps = {
  skills?: Skill[];                 // optional; defaults to ALL_SKILLS below
  randomize?: boolean;              // shuffle on client to avoid SSR mismatch
  className?: string;               // wrapper classes
  size?: "xs" | "sm" | "base" | "lg";      // quick size presets
  gapClassName?: string;            // spacing between tags
};

// -- Local skills data (kept in this file)
const ALL_SKILLS: Skill[] = [
  { name: "React", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Java", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Python", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Javascript", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Swift", bg: "#fdc9d2", text: "#db1f45" },
  { name: "HTML", bg: "#fdc9d2", text: "#db1f45" },
  { name: "CSS", bg: "#fdc9d2", text: "#db1f45" },
  { name: "SQL", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Git", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Json", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Node.js", bg: "#fdc9d2", text: "#db1f45" },
  { name: "R", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Apache HIVE and Pig", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Hadoop", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Prolog", bg: "#fdc9d2", text: "#db1f45" },
  { name: "C++", bg: "#fdc9d2", text: "#db1f45" },
  { name: "TypeScript", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Next.js", bg: "#fdc9d2", text: "#db1f45" },
  { name: "Tailwind CSS", bg: "#fdc9d2", text: "#db1f45" },

  { name: "Microsoft Office", bg: "#83dff1", text: "#0a5dd8" },
  { name: "Eclipse", bg: "#83dff1", text: "#0a5dd8" },
  { name: "Bluejay", bg: "#83dff1", text: "#0a5dd8" },
  { name: "XCode", bg: "#83dff1", text: "#0a5dd8" },
  { name: "PyCharm", bg: "#83dff1", text: "#0a5dd8" },
  { name: "VS Code", bg: "#83dff1", text: "#0a5dd8" },
  { name: "Github", bg: "#83dff1", text: "#0a5dd8" },
  { name: "Slack", bg: "#83dff1", text: "#0a5dd8" },

  { name: "Agile Methodologies", bg: "#c5dfaa", text: "#2e7432" },
  { name: "SCRUM", bg: "#c5dfaa", text: "#2e7432" },

  { name: "PostgreSQL", bg: "#ffc564", text: "#946f00" },
  { name: "Networks", bg: "#ffc564", text: "#946f00" },

  { name: "UX/UI Design", bg: "#FFF3E0", text: "#f07033" },
  { name: "Framer Motion", bg: "#FFF3E0", text: "#f07033" },
  { name: "Figma", bg: "#FFF3E0", text: "#f07033" },

  { name: "Data Visualizations", bg: "#b0ebf6", text: "#1db4f2" },
];

// -- Utils
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// -- Component
export default function Skills({
  skills = ALL_SKILLS,
  randomize = true,
  className = "",
  size = "lg",
  gapClassName = "gap-2",
}: SkillsProps) {
  const [list, setList] = useState<Skill[] | null>(null);

  useEffect(() => {
    setList(randomize ? shuffle(skills) : skills);
  }, [skills, randomize]);

  if (!list) return null;

  const sizeStyles =
    size === "lg"
      ? "text-lg px-2 py-2"
      : size === "base"
      ? "text-base px-3 py-1.5"
      : "text-lg px-2.5 py-1";

  return (
    <div className={`flex flex-wrap px-10 py-10 ${gapClassName} ${className}`}>
      {list.map((skill) => (
        <span
          key={skill.name}
          style={{ backgroundColor: skill.bg, color: skill.text }}
          className={`${sizeStyles} rounded-full font-normal shadow-sm transition px-4`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
}
