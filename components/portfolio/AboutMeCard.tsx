import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutMeCard({ isDark }: { isDark: boolean }) {
  const bioPoints = [
    "I’m a tech enthusiast who loves building meaningful projects — from full-stack apps to blockchain-based platforms that solve real-world problems.",
    "Skilled in web development, cloud tools, and automation, I enjoy working across the stack — whether it's backend logic, Docker setups, or smart integrations.",
    "Always exploring, I’m deeply curious about privacy, decentralization, and creating systems that are secure, scalable, and impactful.",
    "Quietly ambitious, I value thoughtful execution, continuous learning, and using technology to make a difference in people’s lives."
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Billa05",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/biresh-biswas-95992527b/",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "http://x.com/Biresh_Biswas/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:workinguse5@gmail.com",
    },
  ];

  return (
    <Card
      className={`h-full rounded-tr-3xl border-2 border-l-0 transition-colors duration-300 ${
        isDark ? "bg-black/70 border-white/20" : "bg-white/50 border-black/20"
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`text-xl font-light transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
        >
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Bio Points */}
        <div className="space-y-4 md:space-y-5 mb-8 md:mb-12">
          {bioPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2 md:gap-3">
              <Badge
                className={`mt-1 shrink-0 rounded-full px-2 py-1 text-xs font-medium transition-colors duration-300 ${
                  isDark ? "bg-white/10 text-white border-white/20" : "bg-black/10 text-black border-black/20"
                }`}
                variant="outline"
              >
                <ArrowRight className={`w-3 h-3 ${isDark ? "text-white/80" : "text-black/80"}`} />
              </Badge>
              <span className={`text-xs md:text-sm font-light transition-colors duration-300 ${isDark ? "text-white/90" : "text-black/90"}`}>{point}</span>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div>
          <h3
            className={`text-xs md:text-sm font-light mb-3 md:mb-1 transition-colors duration-300 ${
              isDark ? "text-white/70" : "text-black/70"
            }`}
          >
            socials
          </h3>
          <div className="flex flex-wrap gap-2 md:space-x-3 md:gap-0">
            {socials.map(({ icon: Icon, label, href }, idx) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-8 md:w-12 rounded border transition-colors duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${isDark ? "border-white/20 focus:ring-white/40 hover:bg-white/10 hover:text-black" : "border-black/20 focus:ring-black/40 hover:bg-black/10 hover:text-white"}
                `}
              >
                <Icon className={`w-4 h-4 transition-colors duration-300 ${isDark ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 