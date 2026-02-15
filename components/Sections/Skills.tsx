'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';

interface Skill {
  icon: string;
  darkIcon?: string;
  name: string;
}

const row1Skills: Skill[] = [
  { icon: 'devicon:html5', name: 'HTML' },
  { icon: 'devicon:css3', name: 'CSS' },
  { icon: 'devicon:javascript', name: 'JavaScript' },
  { icon: 'devicon:tailwindcss', name: 'Tailwind' },
  { icon: 'devicon:bootstrap', name: 'Bootstrap' },
  { icon: 'devicon:react', name: 'React' },
  { icon: 'skill-icons:nextjs-light', darkIcon: 'skill-icons:nextjs-dark', name: 'Next.js' },
];

const row2Skills: Skill[] = [
  { icon: 'devicon:nodejs', name: 'Node.js' },
  { icon: 'skill-icons:expressjs-light', darkIcon: 'skill-icons:expressjs-dark', name: 'Express' },
  { icon: 'devicon:mongodb', name: 'MongoDB' },
  { icon: 'devicon:jwt', name: 'JWT' },
  { icon: 'devicon:git', name: 'Git' },
  { icon: 'skill-icons:github-light', darkIcon: 'skill-icons:github-dark', name: 'GitHub' },
  { icon: 'devicon:vscode', name: 'VS Code' },
];

function SkillCard({ skill, isDark }: { skill: Skill; isDark: boolean }) {
  const iconName = isDark && skill.darkIcon ? skill.darkIcon : skill.icon;

  return (
    <div className='flex items-center gap-3 px-5 py-3 rounded-xl border border-border-primary bg-surface-card shrink-0'>
      <Icon icon={iconName} width={28} height={28} />
      <span className='text-sm font-medium text-text-secondary whitespace-nowrap'>
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
  isDark,
}: {
  skills: Skill[];
  direction: 'left' | 'right';
  isDark: boolean;
}) {
  const duplicated = [...skills, ...skills];

  return (
    <div className='group overflow-hidden marquee-fade'>
      <div
        className={`flex w-max gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
      >
        {duplicated.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} isDark={isDark} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <section id='skills' className='mb-32 animate-enter delay-200'>
      <h2 className='text-2xl font-medium tracking-tight text-text-title mb-8 flex items-center gap-2'>
        <Icon icon='lucide:cpu' width={20} className='text-text-muted' />
        Tech Stack
      </h2>

      <div className='space-y-4'>
        <MarqueeRow skills={row1Skills} direction='left' isDark={isDark} />
        <MarqueeRow skills={row2Skills} direction='right' isDark={isDark} />
      </div>
    </section>
  );
}
