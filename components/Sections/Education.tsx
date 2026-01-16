import { Icon } from "@iconify/react";

const educationItems = [
  {
    icon: "lucide:graduation-cap",
    period: "2014 — 2018",
    title: "BS Computer Science",
    institution: "University of Technology",
  },
  {
    icon: "lucide:award",
    period: "2023",
    title: "Full Stack Certification",
    institution: "Frontend Masters",
  },
];

export default function Education() {
  return (
    <section id="education" className="mb-32 animate-enter delay-500 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-100">Education</h2>
      </div>
      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educationItems.map((item, index) => (
          <div key={index} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <Icon icon={item.icon} width={20} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              <span className="text-xs font-mono text-zinc-500">{item.period}</span>
            </div>
            <h3 className="text-sm font-medium text-zinc-200">{item.title}</h3>
            <p className="text-xs text-zinc-500 mt-1">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

