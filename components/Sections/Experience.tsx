interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  description: string | string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Engineer",
    period: "2022 — Present",
    company: "TechFlow Systems",
    description: [
      "Spearheaded the migration to Next.js 14, improving Core Web Vitals by 40%.",
      "Architected a shared design system consumed by 5 different product squads.",
      "Mentored junior developers and introduced automated E2E testing with Playwright.",
    ]
  },
  {
    title: "Frontend Developer",
    period: "2020 — 2022",
    company: "Creative Agency",
    description: [
      "Developed award-winning marketing sites for fintech clients using WebGL.",
      "Reduced bundle sizes by 35% through code splitting and tree shaking.",
    ]
  },
  {
    title: "Freelance Engineer",
    period: "2018 — 2020",
    company: "Self-Employed",
    description: "Delivered custom Shopify themes and React dashboards for early-stage startups."
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-32 animate-enter delay-400 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-100 sticky top-24">Experience</h2>
      </div>
      
      <div className="md:col-span-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group border-l border-zinc-800">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950 group-hover:bg-zinc-100 transition-colors duration-300"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">{exp.title}</h3>
              <span className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">{exp.period}</span>
            </div>
            <div className="mb-4 text-sm text-zinc-400 font-medium">{exp.company}</div>
            {Array.isArray(exp.description) ? (
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-zinc-500 marker:text-zinc-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-zinc-500">{exp.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

