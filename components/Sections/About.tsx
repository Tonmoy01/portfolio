/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id='about' className='mb-32 animate-enter delay-150'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Image Container */}
        <div className='relative group'>
          <div className='absolute -inset-1 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000'></div>
          <div className='relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-square md:aspect-4/5'>
            <img
              src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
              alt='Tonmoy Khan Profile'
              className='object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105'
            />

            {/* Overlay Tag */}
            <div className='absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 p-3 rounded-lg flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                </span>
                <span className='text-md font-medium text-zinc-300'>
                  Bangladesh
                </span>
              </div>
              <Icon
                icon='lucide:map-pin'
                width={12}
                className='text-zinc-500'
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className='text-2xl font-medium tracking-tight text-zinc-100 mb-6 flex items-center gap-2'>
            <Icon icon='lucide:user' width={20} className='text-zinc-500' />
            About Me
          </h2>
          <div className='space-y-4 text-sm leading-relaxed text-zinc-400'>
            <p>
              <span className='text-zinc-200 font-medium'>
                Hi, I&apos;m Tonmoy Khan.
              </span>{' '}
              A passionate Frontend Developer from Bangladesh with a love for
              creating beautiful, functional web experiences. I&apos;ve been
              obsessed with the intersection of{' '}
              <span className='text-zinc-200'>design engineering</span> and
              performance.
            </p>
            <p>
              I don&apos;t just write code; I craft experiences. I believe that
              the best software feels invisible—it just works. My philosophy
              centers on{' '}
              <span className='text-zinc-200'>user-centric design</span>, where
              every interaction is intentional and every pixel serves a purpose.
            </p>
            <p>
              Currently, I&apos;m diving deep into{' '}
              <span className='text-zinc-200'>Next.js</span>, React Server
              Components, and modern web technologies. When I&apos;m not pushing
              pixels or building projects, you can find me:
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6'>
              <div className='flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group/item'>
                <Icon
                  icon='lucide:coffee'
                  width={16}
                  className='text-zinc-500 group-hover/item:text-indigo-400 transition-colors'
                />
                <span className='text-xs font-medium'>Brewing Coffee</span>
              </div>
              <div className='flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group/item'>
                <Icon
                  icon='lucide:camera'
                  width={16}
                  className='text-zinc-500 group-hover/item:text-indigo-400 transition-colors'
                />
                <span className='text-xs font-medium'>Film Photography</span>
              </div>
              <div className='flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group/item'>
                <Icon
                  icon='lucide:book'
                  width={16}
                  className='text-zinc-500 group-hover/item:text-indigo-400 transition-colors'
                />
                <span className='text-xs font-medium'>Reading Sci-Fi</span>
              </div>
              <div className='flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group/item'>
                <Icon
                  icon='lucide:code-2'
                  width={16}
                  className='text-zinc-500 group-hover/item:text-indigo-400 transition-colors'
                />
                <span className='text-xs font-medium'>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
