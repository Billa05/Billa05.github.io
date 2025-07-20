import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { Badge } from "../ui/badge";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function ProjectsCard({ isDark }: { isDark: boolean }) {
  const projects = [
    {
      name: "HAVEN",
      stack: "Next.js, NextAuth, Shadcn UI, Tailwind, PostgreSQL, Python",
      github: "https://github.com/biresh-haven",
      bullets: [
        "Created an incident-tracking app with emoji-map UI and community upvoting",
      ],
    },
    {
      name: "FintechApp",
      stack: "React, Node.js, Tailwind, Hasura, GraphQL, MongoDB",
      github: "https://github.com/biresh-fintechapp",
      bullets: [
        "Developed a fintech app for secure transfers, deposits, and account management",
      ],
    },
    {
      name: "LabelInsight",
      stack: "FastAPI, RAG, LangChain, React, Python, MongoDB",
      github: "https://github.com/biresh-labelinsight",
      bullets: [
        "Built a barcode scanner app that checks claims vs. actual nutrition using RAG and LangChain",
      ],
    },
    {
      name: "LabelInsight",
      stack: "FastAPI, RAG, LangChain, Groq, React, Python, MongoDB",
      github: "https://github.com/biresh-labelinsight",
      bullets: [
        "Built a barcode scanner app that checks claims vs. actual nutrition using RAG and LangChain",
      ],
    },
    {
      name: "LabelInsight",
      stack: "FastAPI, RAG, LangChain, Groq, React, Python, MongoDB",
      github: "https://github.com/biresh-labelinsight",
      bullets: [
        "Built a barcode scanner app that checks claims vs. actual nutrition using RAG and LangChain",
      ],
    },
  ];
  return (
    <Card
      className={`h-[400px] md:h-full flex flex-col justify-center rounded-br-3xl border-2 border-t-0 border-l-0 transition-colors duration-300 overflow-hidden ${
        isDark ? "bg-black/70 border-white/20" : "bg-white/50 border-black/20"
      }`}
    >
      <CardHeader className="w-full px-3 py-2 md:px-6 md:py-4">
        <CardTitle
          className={`text-lg md:text-xl font-light text-left transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
        >
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center justify-center w-full h-full max-h-full overflow-hidden p-1 md:p-0">
        <div className="flex items-center justify-center w-full h-full">
          <ThreeDPhotoCarousel projects={projects} isDark={isDark} />
        </div>
      </CardContent>
    </Card>
  );
} 