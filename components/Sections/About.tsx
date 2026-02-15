import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id='about' className='mb-16 animate-enter delay-150'>
      <div className='rounded-2xl bg-surface-primary border border-border-subtle p-8 md:p-12'>
        <div className='flex flex-col md:flex-row gap-10 items-center'>
          {/* Image Container */}
          <div className='relative group shrink-0'>
            <div className='absolute -inset-1 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000'></div>
            <div className='relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border-strong bg-surface-elevated'>
              <Image
                src='/Md. Tonmoy Khan.webp'
                alt='Md. Tonmoy Khan Profile'
                fill
                sizes='288px'
                className='object-cover transition-all duration-700 scale-100 group-hover:scale-105'
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className='flex-1'>
            <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight text-text-title mb-6'>
              About Me
            </h2>
            <div className='space-y-4 text-base leading-relaxed text-text-body'>
              <p>
                Frontend Developer experienced in delivering production-ready
                applications for both remote and onsite teams. Worked with{' '}
                <span className='text-text-emphasis'>PotentialAI</span> and{' '}
                <span className='text-text-emphasis'>BulipeTech Ltd</span>,
                developing scalable, SEO-friendly, and performance-optimized web
                applications using{' '}
                <span className='text-text-emphasis'>
                  React.js, Next.js, and Tailwind CSS
                </span>
                .
              </p>
              <p>
                Strong background in{' '}
                <span className='text-text-emphasis'>API integration</span>,
                dashboard development, authentication systems, and responsive UI
                engineering. Comfortable collaborating in agile environments and
                translating business requirements into efficient, maintainable
                frontend solutions.
              </p>
              <p>
                Focused on writing{' '}
                <span className='text-text-emphasis'>clean architecture</span>,
                reusable components, and creating seamless digital experiences
                that drive engagement and measurable results. I also work for
                external clients as a{' '}
                <span className='text-text-emphasis'>freelance developer</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3 mt-6'>
              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-strong bg-surface-hover text-text-emphasis text-sm font-medium hover:bg-surface-elevated hover:border-border-strong transition-all'
              >
                <Icon icon='lucide:eye' width={16} />
                Resume
              </a>
              <a
                href='mailto:tonmoykhan1477@gmail.com'
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-strong bg-surface-hover text-text-emphasis text-sm font-medium hover:bg-surface-elevated hover:border-border-strong transition-all'
              >
                <Icon icon='lucide:mail' width={16} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
