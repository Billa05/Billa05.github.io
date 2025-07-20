"use client"
import React, { useState, useRef, useCallback } from "react";
import DraggableSkillBadge, { Skill } from "./DraggableSkillBadge";
import { Card } from "@/components/ui/card";

interface InteractiveSkillsBoardProps {
  initialSkills?: Skill[];
  isDark?: boolean;
  badgeClass?: string;
}

const defaultSkills: Skill[] = [
  { id: "1", name: "Python", position: { x: 13, y: 0 }, color: "secondary" },
  { id: "2", name: "C/C++", position: { x: 790, y: 0 }, color: "default" },
  { id: "3", name: "JavaScript", position: { x: 125, y: 43 }, color: "outline" },
  { id: "4", name: "TypeScript", position: { x: 218, y: 1 }, color: "secondary" },
  { id: "5", name: "Solidity", position: { x: 721, y: 48.5 }, color: "default" },
  { id: "7", name: "C#", position: { x: 54, y: 85.5 }, color: "secondary" },

  { id: "8", name: "React", position: { x: 169, y: 120.5 }, color: "default" },
  { id: "9", name: "Next.js", position: { x: 260, y: 70 }, color: "outline" },
  { id: "10", name: "Tailwind CSS", position: { x: 397, y: 0 }, color: "secondary" },
  { id: "11", name: "Node.js", position: { x: 369, y: 73.5 }, color: "default" },
  { id: "12", name: "Express", position: { x: 596, y: 27 }, color: "outline" },
  { id: "13", name: "Flask", position: { x: 10, y: 148 }, color: "secondary" },
  { id: "14", name: "FastAPI", position: { x: 132, y: 196.5 }, color: "default" },
  { id: "15", name: "ASP.NET Core", position: { x: 348, y: 138.5 }, color: "outline" },

  { id: "16", name: "MongoDB", position: { x: 490, y: 110 }, color: "secondary" },
  { id: "17", name: "SQL Server", position: { x: 566, y: 169 }, color: "default" },
  { id: "18", name: "JWT", position: { x: 600, y: 81.5 }, color: "outline" },
  { id: "19", name: "REST APIs", position: { x: 12, y: 231.5 }, color: "secondary" },
  { id: "20", name: "Docker", position: { x: 480, y: 50.5 }, color: "default" },
  { id: "21", name: "CI/CD", position: { x: 260, y: 170 }, color: "outline" },
  { id: "22", name: "GitHub Actions", position: { x: 403, y: 209 }, color: "secondary" },
  { id: "23", name: "Azure AI", position: { x: 549, y: 268 }, color: "default" },
  { id: "24", name: "GCP", position: { x: 783, y: 197.5 }, color: "outline" },

  { id: "28", name: "Selenium", position: { x: 279, y: 238.5 }, color: "secondary" },
  { id: "29", name: "Entity Framework Core", position: { x: 702, y: 126.5 }, color: "default" },
  { id: "30", name: "Remix", position: { x: 779, y: 293 }, color: "outline" },
  { id: "31", name: "LangChain", position: { x: 36, y: 306.5 }, color: "secondary" },
  { id: "33", name: "IPFS", position: { x: 165, y: 279 }, color: "outline" },
  { id: "34", name: "Web3.js", position: { x: 273, y: 309.5 }, color: "secondary" },
  { id: "35", name: "Ethers.js", position: { x: 405, y: 287.5 }, color: "default" },
  { id: "36", name: "Hardhat", position: { x: 657, y: 240.5 }, color: "outline" },
];

const InteractiveSkillsBoard: React.FC<InteractiveSkillsBoardProps> = ({ initialSkills = defaultSkills, isDark = false, badgeClass = "" }) => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const handlePositionChange = useCallback((id: string, position: { x: number; y: number }) => {
    setSkills((prev) => {
      const updated = prev.map((skill) => (skill.id === id ? { ...skill, position } : skill));
      // Uncomment to log all skills' positions in order for debugging or future use:
      // console.log("Skill positions:", updated.map(s => ({ name: s.name, position: s.position })));
      return updated;
    });
  }, []);

  const handleRemoveSkill = useCallback((id: string) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  }, []);

  return (
    <Card className="relative bg-transparent border-0 shadow-none h-full w-full p-0">
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{ height: "100%" }} // Ensure it fills the parent
      >
        {skills.map((skill) => (
          <DraggableSkillBadge
            key={skill.id}
            skill={skill}
            onPositionChange={handlePositionChange}
            containerRef={containerRef}
            isDark={isDark}
            badgeClass={badgeClass}
          />
        ))}
      </div>
    </Card>
  );
};

export default InteractiveSkillsBoard; 