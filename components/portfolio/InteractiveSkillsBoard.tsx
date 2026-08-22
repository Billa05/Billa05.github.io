"use client"
import React, { useState, useRef, useCallback } from "react";
import DraggableSkillBadge, { Skill } from "./DraggableSkillBadge";
import { usePortfolioTheme } from "./ThemeShell";

interface InteractiveSkillsBoardProps {
  initialSkills?: Skill[];
}

const defaultSkills: Skill[] = [
  { id: "1", name: "Python", position: { x: 13, y: 0 }, color: "secondary" },
  { id: "2", name: "Rust", position: { x: 140, y: 0 }, color: "default" },
  { id: "3", name: "TypeScript", position: { x: 250, y: 0 }, color: "outline" },
  { id: "4", name: "JavaScript", position: { x: 405, y: 0 }, color: "secondary" },
  { id: "5", name: "C/C++", position: { x: 570, y: 0 }, color: "default" },
  { id: "6", name: "Solidity", position: { x: 700, y: 0 }, color: "outline" },

  { id: "7", name: "Bitcoin Lightning", position: { x: 10, y: 54 }, color: "secondary" },
  { id: "8", name: "LDK", position: { x: 195, y: 54 }, color: "default" },
  { id: "9", name: "gRPC", position: { x: 285, y: 54 }, color: "outline" },
  { id: "10", name: "Protobuf", position: { x: 380, y: 54 }, color: "secondary" },
  { id: "11", name: "EVM", position: { x: 510, y: 54 }, color: "default" },
  { id: "12", name: "ABI Encoding", position: { x: 600, y: 54 }, color: "outline" },
  { id: "13", name: "Multi-chain RPC", position: { x: 735, y: 54 }, color: "secondary" },

  { id: "14", name: "FastAPI", position: { x: 20, y: 108 }, color: "default" },
  { id: "15", name: "Node.js", position: { x: 135, y: 108 }, color: "outline" },
  { id: "16", name: "GraphQL", position: { x: 255, y: 108 }, color: "secondary" },
  { id: "17", name: "PostgreSQL", position: { x: 375, y: 108 }, color: "default" },
  { id: "18", name: "SQLite", position: { x: 520, y: 108 }, color: "outline" },
  { id: "19", name: "MongoDB", position: { x: 620, y: 108 }, color: "secondary" },

  { id: "20", name: "PyTorch", position: { x: 10, y: 168 }, color: "default" },
  { id: "21", name: "Hugging Face", position: { x: 125, y: 168 }, color: "outline" },
  { id: "22", name: "LoRA / PEFT", position: { x: 275, y: 168 }, color: "secondary" },
  { id: "23", name: "DeepSpeed", position: { x: 415, y: 168 }, color: "default" },
  { id: "24", name: "FSDP", position: { x: 550, y: 168 }, color: "outline" },
  { id: "25", name: "LangChain", position: { x: 645, y: 168 }, color: "secondary" },
  { id: "26", name: "Semantic Search", position: { x: 755, y: 168 }, color: "default" },

  { id: "27", name: "AWS", position: { x: 20, y: 230 }, color: "outline" },
  { id: "28", name: "Docker", position: { x: 115, y: 230 }, color: "secondary" },
  { id: "29", name: "Linux", position: { x: 225, y: 230 }, color: "default" },
  { id: "30", name: "CI/CD", position: { x: 320, y: 230 }, color: "outline" },
  { id: "31", name: "Observability", position: { x: 420, y: 230 }, color: "secondary" },
];

const InteractiveSkillsBoard: React.FC<InteractiveSkillsBoardProps> = ({ initialSkills = defaultSkills }) => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const { isDark } = usePortfolioTheme();

  const handlePositionChange = useCallback((id: string, position: { x: number; y: number }) => {
    setSkills((prev) => {
      const updated = prev.map((skill) => (skill.id === id ? { ...skill, position } : skill));
      return updated;
    });
  }, []);

  return (
    <div className="relative w-full md:h-full">
      <div className="flex flex-wrap gap-2 px-2 pb-3 pt-4 md:hidden">
        {skills.map((skill, index) => (
          <span
            key={skill.id}
            className="rounded-full border border-black/12 bg-black/[0.025] px-3 py-2 font-mono text-[10px] tracking-[-0.01em] text-black/68 dark:border-white/12 dark:bg-white/[0.04] dark:text-white/68"
          >
            <span className="mr-1.5 text-black/30 dark:text-white/30">{String(index + 1).padStart(2, "0")}</span>
            {skill.name}
          </span>
        ))}
      </div>
      <div
        ref={containerRef}
        className="relative hidden h-full min-h-0 w-full overflow-visible md:block"
      >
        {skills.map((skill) => (
          <DraggableSkillBadge
            key={skill.id}
            skill={skill}
            onPositionChange={handlePositionChange}
            containerRef={containerRef}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveSkillsBoard;
