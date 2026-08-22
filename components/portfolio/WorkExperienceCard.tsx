import { ArrowUpRight, BookOpen, FileText } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LazyGitHubCalendar } from "@/components/portfolio/LazyGitHubCalendar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const experiences = [
  {
    company: "Summer of Bitcoin",
    role: "Software Engineer",
    period: "May 2026 to Present",
    stack: "Rust · Lightning · gRPC",
  },
  {
    company: "Nethermind",
    role: "Software Engineer Intern",
    period: "Jan to Apr 2026",
    stack: "DeFi · Multi-chain · Python",
  },
  {
    company: "Samsung R&D",
    role: "Research Intern · Part-time",
    period: "Sep 2025 to Apr 2026",
    stack: "PyTorch · DeepSpeed · FSDP",
  },
]

export function WorkExperienceCard() {
  return (
    <Card className="portfolio-panel flex h-full flex-col overflow-hidden rounded-[24px] border-0 text-black transition-colors duration-500 dark:text-white">
      <CardHeader className="space-y-0 px-5 pb-3 pt-5 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
        <div className="mb-3 flex items-center gap-3 text-black/50 dark:text-white/50">
          <span className="section-index">02 / Experience</span>
          <span className="hairline h-px w-10" />
        </div>
        <h2 className="text-2xl font-medium tracking-[-0.04em] sm:text-[1.75rem]">Where I&apos;ve worked</h2>
      </CardHeader>

      <CardContent className="grid min-h-0 flex-1 gap-5 px-5 pb-3 pt-2 sm:px-6 md:grid-cols-[0.78fr_1.22fr] lg:px-7">
        <ol className="flex flex-col justify-center">
          {experiences.map((experience, index) => (
            <li
              key={experience.company}
              className="group relative border-l border-black/12 pb-5 pl-5 last:border-transparent last:pb-0 dark:border-white/14"
            >
              <span className={`absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border transition-transform duration-300 group-hover:scale-150 ${index === 0 ? "border-black bg-black dark:border-white dark:bg-white" : "border-black/35 bg-[#e9e9e5] dark:border-white/35 dark:bg-[#151515]"}`} />
              <div className="mb-1 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-black/38 dark:text-white/38">
                <span>0{index + 1}</span>
                <span>{experience.period}</span>
              </div>
              <h3 className="text-sm font-medium leading-tight tracking-[-0.02em] sm:text-[15px]">{experience.company}</h3>
              <p className="mt-1 text-[11px] text-black/52 dark:text-white/52 sm:text-xs">{experience.role}</p>
              <p className="mt-1 font-mono text-[8px] tracking-[0.02em] text-black/35 dark:text-white/35">{experience.stack}</p>
            </li>
          ))}
        </ol>

        <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-black/10 bg-black/[0.025] p-3 dark:border-white/10 dark:bg-white/[0.035]">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/48 dark:text-white/48">GitHub activity</span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-black/38 dark:text-white/38">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
            </span>
          </div>
          <div className="min-w-0 overflow-x-auto overflow-y-hidden [scrollbar-color:rgba(127,127,127,0.35)_transparent] [scrollbar-width:thin]">
            <LazyGitHubCalendar />
          </div>
        </div>
      </CardContent>

      <div className="flex flex-wrap justify-end gap-2 px-5 pb-5 pt-2 sm:px-6 sm:pb-6 lg:px-7">
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-9 items-center gap-2 rounded-full border border-black/12 px-3.5 font-mono text-[10px] uppercase tracking-[0.08em] text-black/70 transition-all duration-300 hover:border-black/30 hover:bg-black hover:text-white dark:border-white/12 dark:text-white/70 dark:hover:border-white/30 dark:hover:bg-white dark:hover:text-black"
        >
          <FileText className="h-3.5 w-3.5" /> Resume
          <ArrowUpRight className="h-3 w-3 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label="Blog, coming soon"
                className="flex h-9 cursor-default items-center gap-2 rounded-full border border-black/12 px-3.5 font-mono text-[10px] uppercase tracking-[0.08em] text-black/70 transition-all duration-300 hover:border-black/30 hover:bg-black hover:text-white dark:border-white/12 dark:text-white/70 dark:hover:border-white/30 dark:hover:bg-white dark:hover:text-black"
              >
                <BookOpen className="h-3.5 w-3.5" /> Blog
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="rounded-full border-black/10 bg-black px-3 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-white dark:border-white/10 dark:bg-white dark:text-black"
            >
              Coming soon
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  )
}
