import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function ProjectsCard({ isDark }: { isDark: boolean }) {
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