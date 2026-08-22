"use client"
import React, { useState, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Move } from "lucide-react";

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
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!badgeRef.current || !containerRef.current) return;
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const nextDragOffset = {
        x: e.clientX - badgeRect.left,
        y: e.clientY - badgeRect.top,
      };
      setIsDragging(true);
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newX = e.clientX - containerRect.left - nextDragOffset.x;
        const newY = e.clientY - containerRect.top - nextDragOffset.y;
        const maxX = containerRect.width - (badgeRef.current?.offsetWidth ?? 120);
        const maxY = containerRect.height - (badgeRef.current?.offsetHeight ?? 32);
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
    [skill.id, onPositionChange, containerRef]
  );

  // Touch support for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!badgeRef.current || !containerRef.current) return;
      const touch = e.touches[0];
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const nextDragOffset = {
        x: touch.clientX - badgeRect.left,
        y: touch.clientY - badgeRect.top,
      };
      setIsDragging(true);
      const handleTouchMove = (e: TouchEvent) => {
        if (!containerRef.current) return;
        const touch = e.touches[0];
        const containerRect = containerRef.current.getBoundingClientRect();
        const newX = touch.clientX - containerRect.left - nextDragOffset.x;
        const newY = touch.clientY - containerRect.top - nextDragOffset.y;
        const maxX = containerRect.width - (badgeRef.current?.offsetWidth ?? 120);
        const maxY = containerRect.height - (badgeRef.current?.offsetHeight ?? 32);
        const clampedX = Math.max(0, Math.min(newX, maxX));
        const clampedY = Math.max(0, Math.min(newY, maxY));
        onPositionChange(skill.id, { x: clampedX, y: clampedY });
      };
      const handleTouchEnd = () => {
        setIsDragging(false);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    },
    [skill.id, onPositionChange, containerRef]
  );

  return (
    <div
      ref={badgeRef}
      className={`absolute cursor-move select-none transition-transform duration-200 ${isDragging ? "z-50 scale-105" : "z-10 hover:-translate-y-0.5"}`}
      style={{
        left: skill.position.x,
        top: skill.position.y,
        transform: isDragging ? "rotate(2deg)" : "rotate(0deg)",
        touchAction: "none"
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <Badge
        variant={skill.color}
        className={`group relative flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium tracking-[-0.01em] shadow-none backdrop-blur-md transition-all duration-200 ${isDragging ? "ring-1 ring-current ring-offset-2" : ""} ${isDark ? "border-white/16 text-white/74" : "border-black/16 text-black/74"} ${badgeClass}`}
        style={{ backgroundColor: isDark ? "rgba(10,10,10,0.74)" : "rgba(244,244,240,0.74)" }}
      >
        <Move className={`h-3 w-3 opacity-35 ${isDark ? "text-white" : "text-black"}`} />
        {skill.name}
      </Badge>
    </div>
  );
};

export default DraggableSkillBadge;
