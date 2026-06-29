export interface ProjectItem {
  title: string;
  category: string;
  status: 'In Progress' | 'Planned' | 'Active' | 'Completed';
  description: string;
  techTags: string[];
  image: string;
  documentUrl?: string;
}

export const upcomingProjects: ProjectItem[] = [
  {
    title: "HERMES AI ASSISTANT",
    category: "AI / Automation",
    status: "In Progress",
    description: "An AI-powered agent orchestrator for file manipulation, document analysis, media processing, and function calling using local models.",
    techTags: ["Python", "Ollama", "LLMs", "Automation"],
    image: "/assets/portfolio/projects/hermes.png",
    documentUrl: "/project/hermes"
  },
  {
    title: "HOME AQUA",
    category: "Entrepreneurship",
    status: "Active",
    description: "A custom aquascaping brand specializing in designing and setting up natural planted freshwater aquariums for residential and commercial spaces.",
    techTags: ["Aquascaping", "Business Strategy", "Sales", "Botany"],
    image: "/assets/portfolio/projects/home-aqua.png",
    documentUrl: "/project/home-aqua"
  },
  {
    title: "SPIRULINA CULTURE SYSTEM",
    category: "Research / Sustainability",
    status: "Completed",
    description: "Developed and built an indoor microalgae cultivation setup producing up to 202g/day of fresh Spirulina biomass sustainably.",
    techTags: ["Microalgae", "Biomass Production", "Sustainability", "Bioreactors"],
    image: "/assets/portfolio/projects/spirulina.png",
    documentUrl: "/project/spirulina"
  },
  {
    title: "FLOWERHORN BREEDING",
    category: "Aquaculture",
    status: "Completed",
    description: "An ornamental fish farming project successfully pairing and breeding multiple generations of high-quality Flowerhorn cichlids cost-effectively.",
    techTags: ["Fish Breeding", "Genetics Selection", "Water Chemistry", "Feed Formulation"],
    image: "/assets/portfolio/projects/flowerhorn.png",
    documentUrl: "/project/flowerhorn"
  },
  {
    title: "AI INFLUENCER STUDIO",
    category: "AI / Creative Marketing",
    status: "Active",
    description: "Generating highly aesthetic virtual model content and testing visual engagement models on social media platforms.",
    techTags: ["Stable Diffusion", "Midjourney", "Image Generation", "Growth Hacking"],
    image: "/assets/portfolio/projects/ai-influencer.png",
    documentUrl: "/project/influencer-studio"
  }
];
