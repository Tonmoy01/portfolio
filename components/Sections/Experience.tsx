interface ExperienceItem {
  title: string;
  period?: string;
  company: string;
  description: string | string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    period: 'Sep 2025 — Present',
    company: 'PotentialAI · Remote (South Korea)',
    description: [
      'Build and maintain customer-facing web applications using React.js and Next.js in a fully remote, cross-functional team.',
      'Integrate RESTful APIs and optimize data-fetching strategies for performance and SEO.',
      'Develop responsive, accessible UI components with Tailwind CSS following a design-system-first approach.',
      'Collaborate with backend and product teams across time zones to ship features on tight sprint cycles.',
    ],
  },
  {
    title: 'Frontend Engineer',
    period: 'Mar 2025 — Aug 2025',
    company: 'BulipeTech · Onsite (Mohakhali, Dhaka)',
    description: [
      'Developed scalable frontend modules for internal dashboards and client-facing products using React.js and Next.js.',
      'Implemented JWT-based authentication flows and role-based access control on the frontend.',
      'Worked closely with UI/UX designers to translate Figma mockups into pixel-perfect, responsive interfaces.',
      'Improved page load performance through code splitting, lazy loading, and image optimization techniques.',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    description:
      'Delivered custom React and Next.js web applications for clients, including landing pages, dashboards, and e-commerce solutions tailored to business needs.',
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='mb-32 animate-enter delay-400 grid grid-cols-1 md:grid-cols-12 gap-10'
    >
      <div className='md:col-span-4'>
        <h2 className='text-2xl font-medium tracking-tight text-text-title sticky top-24'>
          Experience
        </h2>
      </div>

      <div className='md:col-span-8 space-y-12'>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className='relative pl-8 group border-l border-border-primary'
          >
            <div className='absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border-primary border border-border-dot group-hover:bg-text-title transition-colors duration-300'></div>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
              <h3 className='text-lg font-semibold text-text-emphasis group-hover:text-text-heading transition-colors'>
                {exp.title}
              </h3>
              {exp.period && (
                <span className='text-sm font-mono text-text-muted bg-surface-elevated border border-border-primary px-2 py-1 rounded'>
                  {exp.period}
                </span>
              )}
            </div>
            <div className='mb-4 text-base text-text-body font-medium'>
              {exp.company}
            </div>
            {Array.isArray(exp.description) ? (
              <ul className='list-disc list-outside ml-4 space-y-2 text-base text-text-muted marker:text-marker'>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className='text-base text-text-muted'>{exp.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
