"use client"

import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { WorkExperienceCard } from "@/components/portfolio/WorkExperienceCard"
import { AboutMeCard } from "@/components/portfolio/AboutMeCard"
import { SkillsCard } from "@/components/portfolio/SkillsCard"
import { ProjectsCard } from "@/components/portfolio/ProjectsCard"
import { ThemeToggleButton } from "@/components/portfolio/ThemeToggleButton"

export default function PortfolioLayout() {
  const isMobile = useIsMobile()
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(!isMobile)
  }, [isMobile])

  const toggleTheme = () => {
    const switchTheme = () => setIsDark((prev) => !prev);
    if (!document.startViewTransition) return switchTheme();
    document.startViewTransition(switchTheme);
  }

  return (
    <div className="min-h-screen md:h-screen w-full max-w-full transition-colors duration-300 bg-transparent overflow-x-hidden">
      <div className="h-full w-full max-w-full relative p-1 sm:p-2 md:p-6 lg:p-8 box-border">
        {/* Main Container: Stack on mobile, grid on md+ */}
        <div className="flex flex-col gap-2 w-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 md:h-full">
          <div className="w-full max-w-full overflow-auto rounded-2xl order-2 md:order-1 md:h-full"><AboutMeCard isDark={isDark} /></div>
          <div className="w-full max-w-full overflow-auto rounded-2xl order-1 md:order-2 md:h-full"><WorkExperienceCard isDark={isDark} /></div>
          <div className="w-full max-w-full overflow-auto rounded-2xl order-3 md:order-3 md:h-full"><SkillsCard isDark={isDark} /></div>
          <div className="w-full max-w-full overflow-auto rounded-2xl order-4 md:order-4 md:h-full"><ProjectsCard isDark={isDark} /></div>
        </div>
        {/* Theme Toggle: Fixed top-right on mobile, centered on desktop */}
        <div className="fixed top-4 right-2 z-50 md:absolute md:top-1/2 md:left-1/2 md:right-auto md:-translate-x-1/2 md:-translate-y-1/2">
          <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  )
}
