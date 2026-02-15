import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className='min-h-[85vh] flex flex-col justify-center mb-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <div className='animate-enter'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-lg font-medium text-zinc-400 mb-8 w-fit'>
            <span className='relative flex h-1.5 w-1.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500'></span>
            </span>
            Available for new projects
          </div>

          <p className='text-emerald-400 text-lg font-medium mb-3'>
            Hey there!, I&apos;m-
          </p>

          <h1 className='text-5xl lg:text-[5rem] xl:text-[7.5rem] font-semibold tracking-tight text-white mb-6 leading-[1.05]'>
            Md. Tonmoy Khan
          </h1>

          <p className='text-lg text-zinc-400 max-w-xl leading-relaxed mb-10'>
            Frontend Developer passionate about building accessible,
            pixel-perfect user interfaces with React, Next.js, TypeScript, and
            modern design systems.
          </p>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              href='#projects'
              className='bg-zinc-100 text-zinc-950 px-6 py-3 rounded-lg font-medium text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]'
            >
              Explore Work
            </Link>
            <a
              href='https://github.com/tonmoykhan'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all'
            >
              <Icon icon='lucide:github' width={20} />
            </a>
            <a
              href='https://linkedin.com/in/tonmoykhan'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all'
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
              className='object-contain'
              priority
            />
          </div>
          <p className='text-sm text-zinc-600 italic mt-4'>
            - vibe coding broke me
          </p>
        </div>
      </div>
    </section>
  );
}
