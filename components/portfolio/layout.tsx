"use client"

import { useState } from "react"
import { WorkExperienceCard } from "@/components/portfolio/WorkExperienceCard"
import { AboutMeCard } from "@/components/portfolio/AboutMeCard"
import { SkillsCard } from "@/components/portfolio/SkillsCard"
import { ProjectsCard } from "@/components/portfolio/ProjectsCard"
import { ThemeToggleButton } from "@/components/portfolio/ThemeToggleButton"

export default function PortfolioLayout() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="h-screen w-screen transition-colors duration-300 bg-transparent">
      <div className="h-full w-full relative p-2 sm:p-3 md:p-6 lg:p-8 box-border">
        {/* Main Container: Stack on mobile, grid on md+ */}
        <div className="flex flex-col gap-3 w-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 md:h-full">
          <div className="w-full overflow-auto rounded-2xl md:h-full"><WorkExperienceCard isDark={isDark} /></div>
          <div className="w-full overflow-auto rounded-2xl md:h-full"><AboutMeCard isDark={isDark} /></div>
          <div className="w-full overflow-auto rounded-2xl md:h-full"><SkillsCard isDark={isDark} /></div>
          <div className="w-full overflow-auto rounded-2xl md:h-full"><ProjectsCard isDark={isDark} /></div>
        </div>
        {/* Theme Toggle: Fixed top-right on mobile, centered on desktop */}
        <div className="fixed top-4 right-4 z-50 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  )
}
