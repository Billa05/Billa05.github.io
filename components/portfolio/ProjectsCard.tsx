import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LazyProjectsCarousel } from "@/components/portfolio/LazyProjectsCarousel";

export function ProjectsCard() {
  const projects = [
    {
      name: "HAVEN",
      stack: "Next.js, NextAuth, Shadcn UI, Tailwind, PostgreSQL, Python",
      github: "https://github.com/Billa05/Haven",
      bullets: [
        "Created an incident-tracking app with emoji-map UI and community upvoting",
      ],
    },
    {
      name: "FintechApp",
      stack: "React, Node.js, Tailwind, Hasura, GraphQL, MongoDB",
      github: "https://github.com/Billa05/FintechApp",
      bullets: [
        "Developed a fintech app for secure transfers, deposits, and account management",
      ],
    },
    {
      name: "LabelInsight",
      stack: "FastAPI, RAG, LangChain, React, Python, MongoDB",
      github: "https://github.com/Billa05/LabelInsight",
      bullets: [
        "Built a barcode scanner app that checks claims vs. actual nutrition using RAG and LangChain",
      ],
    },
    {
      name: "Nexus",
      stack: "Next.js, Solidity, Hardhat, Ethers.js, IPFS, Docker, Three.js, GSAP",
      github: "https://github.com/Billa05/nexus",
      bullets: [
        "Built a decentralized research platform with NFT-based contribution tracking and IPFS storage",
      ],
    },
    {
      name: "PrusaSlicer CLI Docker Workflow",
      stack: "Docker, Bash, Python, PrusaSlicer CLI, G-code, GCP",
      github: "https://github.com/Billa05/prusaslicer-cli-docker",
      bullets: [
        "Streamlined 3D model slicing using PrusaSlicer CLI in a fully containerized Docker workflow",
      ],
    },
    
  ];
  return (
    <Card
      className="portfolio-panel flex h-[440px] flex-col overflow-hidden rounded-[24px] border-0 text-black transition-colors duration-500 dark:text-white md:h-full"
    >
      <CardHeader className="w-full space-y-0 px-5 pb-1 pt-5 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
        <div className="mb-3 flex items-center gap-3 text-black/50 dark:text-white/50">
          <span className="section-index">03 / Selected work</span>
          <span className="hairline h-px w-10" />
          <span className="font-mono text-[9px] uppercase tracking-[0.12em]">05 projects</span>
        </div>
        <h2 className="text-2xl font-medium tracking-[-0.04em] sm:text-[1.75rem]">Things I&apos;ve built</h2>
      </CardHeader>
      <CardContent className="flex min-h-0 w-full flex-1 flex-col items-center justify-center overflow-hidden p-0">
        <div className="flex items-center justify-center w-full h-full">
          <LazyProjectsCarousel projects={projects} />
        </div>
      </CardContent>
    </Card>
  );
}
