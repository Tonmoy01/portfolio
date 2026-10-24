export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  github?: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "potentialai",
    title: "PotentialAI",
    description: "Fastest App Agency",
    thumbnail: "/projects/potentialai.png",
    url: "https://potentialai.com",
    featured: true,
    tags: ["React", "GSAP"],
  },
  {
    id: "findherosection",
    title: "Find Hero Section",
    description: "Scroll-Driven Real Estate Landing Experience",
    thumbnail: "/projects/findherosection.png",
    url: "https://find-hero-section-eta.vercel.app/",
    github: "https://github.com/Tonmoy01/find-hero-section",
    tags: ["React", "GSAP", "Lenis", "Tailwind"],
  },
  {
    id: "terrarium",
    title: "Terrarium",
    description: "Handcrafted Terrarium Showcase & Canvas Scroll",
    thumbnail: "/projects/terrarium.png",
    url: "https://terrarium-manikganj-woad.vercel.app/",
    github: "https://github.com/Tonmoy01/Terrarium-Manikganj",
    tags: ["React", "TypeScript", "GSAP", "Canvas"],
  },
  {
    id: "pacepilot",
    title: "PacePilot",
    description: "AI Fitness Platform",
    thumbnail: "/projects/pacepilot.png",
    url: "https://pacepilot.tonmoykhan.site",
    tags: ["Next.js", "Shadcn UI"],
  },
  {
    id: "ivorymade",
    title: "IvoryMade",
    description: "Dental Prosthetics Management Platform",
    thumbnail: "/projects/ivorymade.png",
    url: "https://ivorymade.com",
    tags: ["React", "Dashboard"],
  },
  {
    id: "jobdaten",
    title: "Jobdaten",
    description: "Job Intelligence Platform",
    thumbnail: "/projects/jobdaten.png",
    url: "https://jobdaten.com",
    tags: ["React", "Data"],
  },
  {
    id: "lifebridgecare",
    title: "LifeBridge Care",
    description: "Healthcare Organization",
    thumbnail: "/projects/lifebridgecare.png",
    url: "https://lifebridgecare.org",
    tags: ["React", "Healthcare"],
  },
  {
    id: "conmataruba",
    title: "Conmat Aruba",
    description: "Fire-rated Door Systems",
    thumbnail: "/projects/conmataruba.png",
    url: "https://conmataruba.com",
    featured: true,
    tags: ["Corporate", "React"],
  },
  {
    id: "ktalklive",
    title: "K-Talk Live",
    description: "Speak Korean from Day One",
    thumbnail: "/projects/ktalklive.png",
    url: "https://ktalk.live",
    tags: ["Next.js", "Education"],
  },
];
