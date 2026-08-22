import { Card, CardContent, CardHeader } from "@/components/ui/card"
import InteractiveSkillsBoard from "./InteractiveSkillsBoard"

export function SkillsCard() {
  return (
    <Card className="portfolio-panel flex h-full min-h-[420px] flex-col overflow-hidden rounded-[24px] border-0 text-black transition-colors duration-500 dark:text-white md:min-h-0">
      <CardHeader className="space-y-0 px-5 pb-2 pt-5 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
        <div className="mb-3 flex items-center gap-3 text-black/50 dark:text-white/50">
          <span className="section-index">04 / Toolkit</span>
          <span className="hairline h-px w-10" />
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] sm:inline">Drag to rearrange</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-[-0.04em] sm:text-[1.75rem]">Tools I reach for</h2>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/38 dark:text-white/38">31 capabilities</span>
        </div>
      </CardHeader>
      <CardContent className="min-h-0 flex-1 p-2 pt-0 sm:p-3 sm:pt-0">
        <InteractiveSkillsBoard />
      </CardContent>
    </Card>
  )
}
