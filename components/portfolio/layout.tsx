import { WorkExperienceCard } from "@/components/portfolio/WorkExperienceCard"
import { AboutMeCard } from "@/components/portfolio/AboutMeCard"
import { SkillsCard } from "@/components/portfolio/SkillsCard"
import { ProjectsCard } from "@/components/portfolio/ProjectsCard"
import { ThemeShell } from "@/components/portfolio/ThemeShell"

export default function PortfolioLayout() {
  return (
    <ThemeShell>
      <div className="portfolio-grid flex w-full flex-col gap-3 md:grid md:h-full md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] md:grid-rows-2 md:gap-3">
        <div className="order-1 w-full min-w-0 md:h-full"><AboutMeCard /></div>
        <div className="order-2 w-full min-w-0 md:h-full"><WorkExperienceCard /></div>
        <div className="order-4 w-full min-w-0 md:order-3 md:h-full"><SkillsCard /></div>
        <div className="order-3 w-full min-w-0 md:order-4 md:h-full"><ProjectsCard /></div>
      </div>
    </ThemeShell>
  )
}
