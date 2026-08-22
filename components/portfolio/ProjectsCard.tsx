import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LazyProjectsCarousel } from "@/components/portfolio/LazyProjectsCarousel";

export function ProjectsCard() {
  const projects = [
    {
      name: "defi-skills",
      stack: "Python, FastAPI, DeFi, EVM, Multi-chain",
      github: "https://github.com/NethermindEth/defi-skills",
      bullets: [
        "An auditable transaction engine supporting 54 actions across 14 protocol playbooks and 6 EVM chains.",
      ],
    },
    {
      name: "Outreach",
      stack: "FastAPI, Next.js, Crawl4AI, GenAI, AWS",
      github: "https://github.com/Billa05/Outreach",
      bullets: [
        "An AI lead-discovery platform spanning query planning, geo-targeted crawling, semantic search, and predictive scoring.",
      ],
    },
    {
      name: "SplitLoRA",
      stack: "PyTorch, DeepSpeed, FSDP, LoRA, Hugging Face",
      github: "https://github.com/Billa05/SplitLora",
      bullets: [
        "A distributed fine-tuning architecture for heterogeneous CPU, GPU, and multi-device topologies.",
      ],
    },
    {
      name: "LDK Server",
      stack: "Rust, Bitcoin, Lightning, Protobuf, CLI",
      github: "https://github.com/lightningdevkit/ldk-server/pull/223",
      bullets: [
        "Contributed application-defined payment metadata across Protobuf APIs, core conversions, CLI tooling, and end-to-end tests.",
      ],
    },
    {
      name: "Stable Channels",
      stack: "Rust, LDK Node, Bitcoin, Lightning, Multi-platform",
      github: "https://github.com/Billa05/stable-channels",
      bullets: [
        "A self-custodial wallet that keeps a portion of users’ bitcoin at a stable dollar value using overcollateralized Lightning channels.",
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
