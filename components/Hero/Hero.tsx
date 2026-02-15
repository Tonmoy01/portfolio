import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className='min-h-auto pt-16 md:min-h-[85vh] md:pt-0 flex flex-col justify-center mb-12 md:mb-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <div className='animate-enter'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-primary border border-border-primary text-lg font-medium text-text-body mb-4 md:mb-8 w-fit'>
            <span className='relative flex h-1.5 w-1.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500'></span>
            </span>
            Available for new projects
          </div>

          <p className='text-emerald-400 text-lg font-medium mb-3'>
            Hey there!, I&apos;m-
          </p>

          <h1 className='text-5xl lg:text-[5rem] xl:text-[7.5rem] font-semibold tracking-tight text-text-heading mb-6 leading-[1.05]'>
            Md. Tonmoy Khan
          </h1>

          <p className='text-lg text-text-body max-w-xl leading-relaxed mb-10'>
            Frontend Developer passionate about building accessible,
            pixel-perfect user interfaces with React, Next.js, TypeScript, and
            modern design systems.
          </p>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              href='#projects'
              className='bg-cta-bg text-cta-text px-6 py-3 rounded-lg font-medium text-sm hover:bg-cta-hover transition-all shadow-[0_0_20px_var(--color-cta-shadow)]'
            >
              Explore Work
            </Link>
            <a
              href='https://github.com/tonmoykhan'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-lg border border-border-primary text-text-body hover:text-text-heading hover:border-border-strong hover:bg-surface-elevated transition-all'
            >
              <Icon icon='lucide:github' width={20} />
            </a>
            <a
              href='https://linkedin.com/in/tonmoykhan'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-lg border border-border-primary text-text-body hover:text-text-heading hover:border-border-strong hover:bg-surface-elevated transition-all'
            >
              <Icon icon='lucide:linkedin' width={20} />
            </a>
          </div>
        </div>

        {/* Robot Image */}
        <div className='animate-enter delay-200 hidden lg:flex flex-col justify-center items-center'>
          <div className='relative w-full max-w-lg aspect-square'>
            <Image
              src='/deconstructed-robot-dark.cdf4ecdf.svg'
              alt='Deconstructed robot illustration'
              fill
              sizes='(max-width: 1024px) 0vw, 40vw'
              className='object-contain hero-robot'
              priority
            />
          </div>
          <p className='text-sm text-text-faint italic mt-4'>
            - vibe coding broke me
          </p>
        </div>
      </div>
    </section>
  );
}
