import { Icon } from "@iconify/react";

const skills = [
  { icon: "lucide:atom", color: "text-blue-400", title: "React & Next.js", desc: "Server Components, Suspense" },
  { icon: "lucide:code-2", color: "text-blue-500", title: "TypeScript", desc: "Strict Typing, Generics" },
  { icon: "lucide:paint-brush", color: "text-cyan-400", title: "Tailwind CSS", desc: "Design Systems, Animation" },
  { icon: "lucide:server", color: "text-green-400", title: "Node.js", desc: "Postgres, Prisma, API" },
  { icon: "lucide:cloud", color: "text-orange-400", title: "AWS & Vercel", desc: "CI/CD, Serverless" },
  { icon: "lucide:database", color: "text-purple-400", title: "State Mgmt", desc: "Zustand, Redux, TanStack" },
  { icon: "lucide:test-tube", color: "text-pink-400", title: "Testing", desc: "Jest, Cypress, Playwright" },
  { icon: "lucide:figma", color: "text-yellow-400", title: "Tools", desc: "Figma, Git, Docker" },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-32 animate-enter delay-200">
      <h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-2">
        <Icon icon="lucide:cpu" width={20} className="text-zinc-500" />
        Tech Stack
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all group">
            <Icon icon={skill.icon} width={24} className={`${skill.color} mb-3 group-hover:scale-110 transition-transform`} />
            <h3 className="text-sm font-medium text-zinc-200">{skill.title}</h3>
            <p className="text-xs text-zinc-500 mt-1">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

