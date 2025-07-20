import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GitHubCalendar from "react-github-calendar";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen } from "lucide-react";

export function WorkExperienceCard({ isDark }: { isDark: boolean }) {
  const experiences = [
    {
      company: "Quetzalcoatl Pvt Ltd",
      role: "Full Stack Developer",
    },
    {
      company: "L&T Energy Hydrocarbon",
      role: "IT Intern",
    },
    {
      company: "Open Library",
      role: "OSS Contributor",
    },
  ];

  return (
    <Card
      className={`h-full rounded-tl-3xl border-2 transition-colors duration-300 ${
        isDark ? "bg-black/70 border-white/20" : "bg-white/50 border-black/20"
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`text-xl font-light transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
        >
          Work Experiences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-6 items-stretch">
          {/* Left: Timeline (1/3) */}
          <div className="w-1/3 min-w-[120px] flex flex-col justify-center">
            <div className="relative ml-4 pl-4 border-l transition-colors duration-300" style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>
              {experiences.map((exp, idx) => (
                <div key={exp.company} className="mb-8 last:mb-0 flex items-start gap-4">
                  {/* Timeline Dot */}
                  <span
                    className={`absolute -left-2 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      idx === 0
                        ? isDark
                          ? "border-white bg-white"
                          : "border-black bg-black"
                        : isDark
                        ? "border-white/40 bg-black"
                        : "border-black/40 bg-white"
                    }`}
                    style={{ top: `calc(${idx * 3.5}rem + 0.25rem)` }}
                  ></span>
                  <div className="flex flex-col">
                    <span className={`font-semibold text-base transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>{exp.company}</span>
                    <span className={`text-sm font-light transition-colors duration-300 ${isDark ? "text-white/70" : "text-black/70"}`}>{exp.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: GitHub Contribution Graph (2/3) */}
          <div className="w-2/3 flex flex-col items-center justify-center">
            <span className={`mb-2 text-sm font-semibold tracking-wide uppercase ${isDark ? "text-white/80" : "text-black/80"}`}>GitHub Contributions</span>
            
              <GitHubCalendar
                username="billa05"
                colorScheme={isDark ? "dark" : "light"}
                blockSize={13}
                blockMargin={4}
                fontSize={13}
                style={{ width: "100%", minHeight: 180 }}
                theme={isDark ? {
                  light: ["#222", "#444", "#666", "#888", "#fff"],
                  dark: ["#fff", "#bbb", "#888", "#444", "#222"],
                } : {
                  light: ["#eee", "#ccc", "#aaa", "#888", "#111"],
                  dark: ["#111", "#888", "#aaa", "#ccc", "#eee"],
                }}
              />
            
          </div>
        </div>
      </CardContent>
      {/* Action Buttons at the bottom */}
      <div className="flex justify-end gap-3 px-6 pb-6 mt-10">
        <Button
          variant="ghost"
          className={`transition-colors duration-300 px-4 py-2 rounded-md border backdrop-blur-md
            ${isDark
              ? "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              : "bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50"}
          `}
          asChild
        >
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <FileText className="mr-2" /> Resume
          </a>
        </Button>
        <Button
          variant="ghost"
          className={`transition-colors duration-300 px-4 py-2 rounded-md border backdrop-blur-md
            ${isDark
              ? "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              : "bg-black/10 border-black/30 text-black hover:bg-black/20 hover:border-black/50"}
          `}
        >
          <BookOpen className="mr-2" /> Blog
        </Button>
      </div>
    </Card>
  );
} 