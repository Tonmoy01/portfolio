import { Icon } from '@iconify/react';

interface Skill {
  icon: string;
  name: string;
}

const row1Skills: Skill[] = [
  { icon: 'devicon:html5', name: 'HTML' },
  { icon: 'devicon:css3', name: 'CSS' },
  { icon: 'devicon:javascript', name: 'JavaScript' },
  { icon: 'devicon:tailwindcss', name: 'Tailwind' },
  { icon: 'devicon:bootstrap', name: 'Bootstrap' },
  { icon: 'devicon:react', name: 'React' },
  { icon: 'skill-icons:nextjs-dark', name: 'Next.js' },
];

const row2Skills: Skill[] = [
  { icon: 'devicon:nodejs', name: 'Node.js' },
  { icon: 'skill-icons:expressjs-dark', name: 'Express' },
  { icon: 'devicon:mongodb', name: 'MongoDB' },
  { icon: 'devicon:jwt', name: 'JWT' },
  { icon: 'devicon:git', name: 'Git' },
  { icon: 'skill-icons:github-dark', name: 'GitHub' },
  { icon: 'devicon:vscode', name: 'VS Code' },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className='flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 shrink-0'>
      <Icon icon={skill.icon} width={28} height={28} />
      <span className='text-sm font-medium text-zinc-300 whitespace-nowrap'>
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: Skill[];
  direction: 'left' | 'right';
}) {
  const duplicated = [...skills, ...skills];

  return (
    <div className='group overflow-hidden marquee-fade'>
      <div
        className={`flex w-max gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
      >
        {duplicated.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id='skills' className='mb-32 animate-enter delay-200'>
      <h2 className='text-2xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-2'>
        <Icon icon='lucide:cpu' width={20} className='text-zinc-500' />
        Tech Stack
      </h2>

      <div className='space-y-4'>
        <MarqueeRow skills={row1Skills} direction='left' />
        <MarqueeRow skills={row2Skills} direction='right' />
      </div>
    </section>
  );
}
