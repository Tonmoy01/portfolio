'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 left-0 right-0 transition-all duration-500 ease-in-out ${
        scrolled ? 'top-4 px-4' : 'top-0 px-0'
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? 'max-w-3xl rounded-full bg-zinc-900/90 backdrop-blur-lg border border-white/10 shadow-2xl'
            : 'max-w-full rounded-none bg-zinc-950/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div
          className={`container mx-auto px-6 py-5 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-16'
          }`}
        >
          <Link
            href='#'
            className='text-zinc-100 font-semibold tracking-tight text-2xl hover:text-white transition-colors flex items-center gap-2'
            style={{ fontFamily: 'var(--font-signature)' }}
          >
            TONMOY
          </Link>

          <div className='hidden md:flex items-center gap-8 text-lg font-medium'>
            <Link
              href='#about'
              className='hover:text-zinc-100 transition-colors'
            >
              About
            </Link>
            <Link
              href='#skills'
              className='hover:text-zinc-100 transition-colors'
            >
              Skills
            </Link>
            <Link
              href='#projects'
              className='hover:text-zinc-100 transition-colors'
            >
              Projects
            </Link>
            <Link
              href='#experience'
              className='hover:text-zinc-100 transition-colors'
            >
              Experience
            </Link>
          </div>

          <Link
            href='#hire-me'
            className='group flex items-center gap-2 text-lg text-zinc-950 bg-zinc-100 border border-transparent px-4 py-2 rounded-full hover:bg-white hover:scale-105 transition-all font-medium'
          >
            <span>Hire Me</span>
            <Icon
              icon='lucide:arrow-right'
              width={14}
              className='group-hover:translate-x-0.5 transition-transform'
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
