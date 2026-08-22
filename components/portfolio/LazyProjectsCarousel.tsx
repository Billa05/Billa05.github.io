"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { usePortfolioTheme } from "./ThemeShell"

interface Project {
  name: string
  stack: string
  github: string
  bullets: string[]
}

const ThreeDPhotoCarousel = dynamic(
  () => import("@/components/ui/3d-carousel").then((module) => module.ThreeDPhotoCarousel),
  { ssr: false }
)

export function LazyProjectsCarousel({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const { isDark } = usePortfolioTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container || !("IntersectionObserver" in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="flex h-full min-h-[280px] w-full items-center justify-center" aria-busy={!shouldLoad}>
      {shouldLoad ? (
        <ThreeDPhotoCarousel projects={projects} isDark={isDark} />
      ) : (
        <div className="h-[245px] w-[min(76vw,330px)] animate-pulse rounded-[22px] bg-black/[0.06] dark:bg-white/[0.06]" />
      )}
    </div>
  )
}
