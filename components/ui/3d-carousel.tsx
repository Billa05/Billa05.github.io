"use client"

import { memo, useEffect, useLayoutEffect, useState } from "react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  cubicBezier,
} from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(defaultValue)
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    const handler = () => setMatches(matchMedia.matches)
    handler()
    matchMedia.addEventListener("change", handler)
    return () => matchMedia.removeEventListener("change", handler)
  }, [query])
  return matches
}

const duration = 0.15
const transition = { duration, ease: cubicBezier(0.32, 0.72, 0, 1) }

const Carousel = memo(
  ({
    controls,
    projects,
    isCarouselActive,
    isDark,
  }: {
    controls: any
    projects: { name: string; stack: string; github: string; bullets: string[] }[]
    isCarouselActive: boolean
    isDark: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 800 : 1300
    const faceCount = projects.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-transparent overflow-hidden"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
          minWidth: isScreenSizeSm ? 320 : undefined,
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          dragConstraints={isScreenSizeSm ? { left: -cylinderWidth / 2, right: cylinderWidth / 2 } : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {projects.map((project, i) => (
            <motion.div
              key={`key-${project.name}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-1 md:p-2"
              style={{
                width: isScreenSizeSm ? `180px` : `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <Card className={`w-full max-w-[180px] md:max-w-[260px] flex flex-col justify-between overflow-hidden border rounded-xl ${isDark ? "border-black/20 bg-white/60" : "border-white/30 bg-black/40"}`}>
                <CardHeader className="p-2 md:p-4 pb-1 md:pb-2">
                  <CardTitle
                    className={`text-base md:text-lg font-semibold truncate transition-colors ${isDark ? "text-black hover:text-blue-600" : "text-white hover:text-blue-400"}`}
                    title={project.name}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full truncate"
                    >
                      {project.name}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-2 md:p-4 pt-1 md:pt-2 flex flex-col justify-between">
                  <div className="mb-1 md:mb-2 flex flex-wrap gap-1">
                    {project.stack.split(",").map((skill, idx) => (
                      <Badge key={idx} className={`mb-1 ${isDark ? "bg-black/10 text-black/80" : "bg-white/10 text-white/80"}`}>{skill.trim()}</Badge>
                    ))}
                  </div>
                  <ul className="mb-1 md:mb-2 list-disc pl-4 text-[10px] md:text-xs space-y-1 max-h-[40px] md:max-h-[70px] overflow-y-auto">
                    {project.bullets && project.bullets.map((bullet, idx) => (
                      <li key={idx} className={isDark ? "text-black/80" : "text-white/80"}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel({ projects, isDark }: { projects: { name: string; stack: string; github: string; bullets: string[] }[], isDark: boolean }) {
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  return (
    <motion.div layout className="relative">
      <div className="relative h-[500px] md:h-[300px] w-full overflow-hidden">
        <Carousel
          controls={controls}
          projects={projects}
          isCarouselActive={isCarouselActive}
          isDark={isDark}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
