import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InteractiveSkillsBoard from "./InteractiveSkillsBoard";

export function SkillsCard({ isDark }: { isDark: boolean }) {
  // Define badge class for translucency
  const badgeClass = isDark
    ? "bg-white/10 text-white/80"
    : "bg-black/10 text-black/80";
  return (
    <Card
      className={`h-full flex flex-col rounded-bl-3xl border-2 border-t-0 transition-colors duration-300 ${
        isDark ? "bg-black/70 border-white/20" : "bg-white/50 border-black/20"
      }`}
    >
      <CardHeader className="px-3 py-2 md:px-6 md:py-4">
        <CardTitle
          className={`text-lg md:text-xl font-light transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
        >
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="p-1 md:p-0 md:h-full"> {/* Responsive padding for CardContent */}
        <InteractiveSkillsBoard isDark={isDark} badgeClass={badgeClass} />
      </CardContent>
    </Card>
  );
} 
