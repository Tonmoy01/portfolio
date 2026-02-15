import { Icon } from "@iconify/react";

const educationItems = [
  {
    icon: "lucide:graduation-cap",
    period: "2018 — 2021",
    title: "BSc in Computer Science & Engineering",
    institution: "European University of Bangladesh",
  },
  {
    icon: "lucide:graduation-cap",
    period: "2014 — 2018",
    title: "Diploma in Computer Technology",
    institution: "National Polytechnic Institute, Manikganj",
  },
  {
    icon: "lucide:graduation-cap",
    period: "2013",
    title: "Secondary School Certificate (SSC)",
    institution: "Manikganj Technical School and College",
  },
];

export default function Education() {
  return (
    <section id="education" className="mb-32 animate-enter delay-500 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <h2 className="text-2xl font-medium tracking-tight text-text-title">Education</h2>
      </div>
      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educationItems.map((item, index) => (
          <div key={index} className="p-6 rounded-xl border border-border-primary bg-surface-tertiary hover:bg-surface-secondary hover:border-border-strong transition-all duration-300 group hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <Icon icon={item.icon} width={20} className="text-text-muted group-hover:text-text-secondary transition-colors" />
              <span className="text-base font-mono text-text-muted">{item.period}</span>
            </div>
            <h3 className="text-lg font-medium text-text-emphasis">{item.title}</h3>
            <p className="text-base text-text-muted mt-1">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
