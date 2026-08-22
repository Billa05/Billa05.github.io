import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Billa05" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/biresh-biswas-95992527b/" },
  { icon: Twitter, label: "X", href: "https://x.com/Biresh_Biswas/" },
  { icon: Mail, label: "Email", href: "mailto:workinguse5@gmail.com" },
]

export function AboutMeCard() {
  return (
    <Card className="portfolio-panel group relative flex h-full flex-col overflow-hidden rounded-[24px] border-0 text-black transition-colors duration-500 dark:text-white">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-black/[0.06] dark:border-white/[0.06]" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-black/[0.08] dark:border-white/[0.08]" />

      <CardHeader className="relative space-y-0 px-5 pb-3 pt-5 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
        <div className="mb-5 flex items-center gap-3 text-black/50 dark:text-white/50">
          <span className="section-index">01 / Profile</span>
          <span className="hairline h-px w-10" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Chennai · India</span>
        </div>

        <h1 className="max-w-2xl text-[clamp(2rem,3.2vw,3.75rem)] font-medium leading-[0.94] tracking-[-0.055em]">
          Biresh Biswas
        </h1>
        <p className="mt-3 max-w-2xl text-base font-normal leading-snug tracking-[-0.02em] text-black/65 dark:text-white/65 sm:text-lg lg:text-xl">
          Building useful systems across web, AI, cloud, and onchain technology.
        </p>
      </CardHeader>

      <CardContent className="relative flex flex-1 flex-col justify-between px-5 pb-5 pt-3 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
        <div className="grid max-w-3xl gap-3 text-[13px] leading-relaxed text-black/68 dark:text-white/68 sm:grid-cols-2 sm:gap-8 sm:text-sm">
          <p>
            I&apos;m a 20-year-old B.Tech student at VIT Chennai, interested in thoughtful engineering that creates real-world impact.
          </p>
          <p>
            I work across full-stack products, backend systems, automation, and decentralized platforms—with care for both logic and experience.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-black/10 pt-4 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-black/45 dark:text-white/45 sm:max-w-[250px]">
            Thoughtful execution · Continuous learning · Real-world impact
          </p>
          <nav aria-label="Social links" className="flex flex-wrap gap-2 sm:flex-nowrap">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex h-9 items-center gap-2 rounded-full border border-black/12 bg-black/[0.025] px-3 font-mono text-[10px] uppercase tracking-[0.08em] text-black/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/30 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:border-white/12 dark:bg-white/[0.04] dark:text-white/70 dark:hover:border-white/30 dark:hover:bg-white dark:hover:text-black dark:focus-visible:ring-white"
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-40 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ))}
          </nav>
        </div>
      </CardContent>
    </Card>
  )
}
