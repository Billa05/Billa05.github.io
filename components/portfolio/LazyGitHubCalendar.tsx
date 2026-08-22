"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { usePortfolioTheme } from "./ThemeShell"

const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false })

export function LazyGitHubCalendar() {
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
    <div ref={containerRef} className="min-h-[100px] w-full" aria-busy={!shouldLoad}>
      {shouldLoad ? (
        <GitHubCalendar
          username="billa05"
          colorScheme={isDark ? "dark" : "light"}
          blockSize={9}
          blockMargin={3}
          fontSize={9}
          style={{ width: "100%", minWidth: 300 }}
          theme={isDark ? {
            light: ["#222", "#444", "#666", "#888", "#fff"],
            dark: ["#fff", "#bbb", "#888", "#444", "#222"],
          } : {
            light: ["#eee", "#ccc", "#aaa", "#888", "#111"],
            dark: ["#111", "#888", "#aaa", "#ccc", "#eee"],
          }}
        />
      ) : (
        <div className="h-[100px] w-full animate-pulse rounded-xl bg-black/[0.05] dark:bg-white/[0.05]" />
      )}
    </div>
  )
}
