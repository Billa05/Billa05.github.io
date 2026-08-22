"use client"

import { useState } from "react"
import { motion, type PanInfo } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight, GripHorizontal } from "lucide-react"

interface Project {
  name: string
  stack: string
  github: string
  bullets: string[]
}

function circularOffset(index: number, activeIndex: number, length: number) {
  let offset = index - activeIndex
  const midpoint = Math.floor(length / 2)

  if (offset > midpoint) offset -= length
  if (offset < -midpoint) offset += length
  return offset
}

function ThreeDPhotoCarousel({ projects, isDark }: { projects: Project[]; isDark: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 45 && Math.abs(info.velocity.x) < 350) return
    move(info.offset.x < 0 ? 1 : -1)
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative min-h-0 flex-1 [perspective:1200px]">
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {projects.map((project, index) => {
            const offset = circularOffset(index, activeIndex, projects.length)
            const distance = Math.abs(offset)
            const isActive = offset === 0
            const technologies = project.stack.split(",").map((technology) => technology.trim())

            return (
              <motion.article
                key={project.name}
                initial={false}
                animate={{
                  x: `${offset * 67}%`,
                  scale: isActive ? 1 : distance === 1 ? 0.84 : 0.7,
                  rotateY: offset * -16,
                  opacity: isActive ? 1 : distance === 1 ? 0.36 : 0,
                }}
                transition={{ type: "spring", stiffness: 230, damping: 28, mass: 0.8 }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleDragEnd}
                onClick={() => !isActive && setActiveIndex(index)}
                className={`absolute flex h-[245px] w-[min(76vw,330px)] flex-col overflow-hidden rounded-[22px] border p-5 sm:h-[255px] sm:w-[330px] ${isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} ${isDark ? "border-black/10 bg-[#efefeb] text-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.34)]" : "border-white/12 bg-[#121212] text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)]"}`}
                style={{
                  zIndex: 10 - distance,
                  transformStyle: "preserve-3d",
                  pointerEvents: distance > 1 ? "none" : "auto",
                }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className={`font-mono text-[9px] uppercase tracking-[0.16em] ${isDark ? "text-black/38" : "text-white/38"}`}>
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <GripHorizontal className={`h-4 w-4 ${isDark ? "text-black/25" : "text-white/25"}`} />
                </div>

                <div className="min-h-0 flex-1">
                  <h3 className="text-[1.65rem] font-semibold leading-none tracking-[-0.055em]">{project.name}</h3>
                  <p className={`mt-3 line-clamp-3 text-xs leading-relaxed ${isDark ? "text-black/58" : "text-white/58"}`}>
                    {project.bullets[0]}
                  </p>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-current/10 pt-3">
                  <div className="flex max-w-[235px] flex-wrap gap-1.5">
                    {technologies.slice(0, 4).map((technology) => (
                      <span key={technology} className={`rounded-full px-2 py-1 font-mono text-[8px] tracking-[-0.02em] ${isDark ? "bg-black/[0.06] text-black/55" : "bg-white/[0.08] text-white/55"}`}>
                        {technology}
                      </span>
                    ))}
                    {technologies.length > 4 && (
                      <span className={`rounded-full px-2 py-1 font-mono text-[8px] ${isDark ? "text-black/38" : "text-white/38"}`}>
                        +{technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-0.5 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pt-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/38 dark:text-white/38">
          Drag · click · explore
        </span>
        <div className="flex items-center gap-2">
          <span className="mr-1 font-mono text-[9px] tabular-nums text-black/42 dark:text-white/42">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous project"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/12 text-black/60 transition-colors hover:bg-black hover:text-white dark:border-white/12 dark:text-white/60 dark:hover:bg-white dark:hover:text-black"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next project"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/12 text-black/60 transition-colors hover:bg-black hover:text-white dark:border-white/12 dark:text-white/60 dark:hover:bg-white dark:hover:text-black"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { ThreeDPhotoCarousel }
