"use client"
import React, { useState, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { X, Move } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

export interface Skill {
  id: string;
  name: string;
  position: Position;
  color: "default" | "secondary" | "destructive" | "outline";
}

interface DraggableSkillBadgeProps {
  skill: Skill;
  onPositionChange: (id: string, position: Position) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  isDark?: boolean;
  badgeClass?: string;
}

const DraggableSkillBadge: React.FC<DraggableSkillBadgeProps> = ({
  skill,
  onPositionChange,
  containerRef,
  isDark = false,
  badgeClass = "",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!badgeRef.current || !containerRef.current) return;
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - badgeRect.left,
        y: e.clientY - badgeRect.top,
      });
      setIsDragging(true);
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newX = e.clientX - containerRect.left - dragOffset.x;
        const newY = e.clientY - containerRect.top - dragOffset.y;
        const maxX = containerRect.width - 120;
        const maxY = containerRect.height - 32;
        const clampedX = Math.max(0, Math.min(newX, maxX));
        const clampedY = Math.max(0, Math.min(newY, maxY));
        onPositionChange(skill.id, { x: clampedX, y: clampedY });
      };
      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [skill.id, onPositionChange, dragOffset, containerRef]
  );

  return (
    <div
      ref={badgeRef}
      className={`absolute cursor-move select-none transition-transform ${isDragging ? "scale-105 z-50" : "z-10"}`}
      style={{
        left: skill.position.x,
        top: skill.position.y,
        transform: isDragging ? "rotate(5deg)" : "rotate(0deg)",
      }}
      onMouseDown={handleMouseDown}
    >
      <Badge
        variant={skill.color}
        className={`group relative px-4 py-2 text-sm font-medium bg-transparent shadow-none border transition-all duration-200 flex items-center gap-1 ${isDragging ? "ring-2 ring-primary ring-offset-2" : ""} ${isDark ? "border-white/40 text-white" : "border-black/40 text-black"} ${badgeClass}`}
        style={{ backgroundColor: isDark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)" }}
      >
        <Move className={`w-3 h-3 mr-1 opacity-60 ${isDark ? "text-white" : "text-black"}`} />
        {skill.name}
      </Badge>
    </div>
  );
};

export default DraggableSkillBadge; 