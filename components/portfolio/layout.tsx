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
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 h-full w-full">
          <div className="h-full w-full overflow-auto rounded-2xl"><WorkExperienceCard isDark={isDark} /></div>
          <div className="h-full w-full overflow-auto rounded-2xl"><AboutMeCard isDark={isDark} /></div>
          <div className="h-full w-full overflow-auto rounded-2xl"><SkillsCard isDark={isDark} /></div>
          <div className="h-full w-full overflow-auto rounded-2xl"><ProjectsCard isDark={isDark} /></div>
        </div>
        {/* Centered Theme Toggle Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  )
}
