import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md'>
      <div className='max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between'>
        <Link
          href='#'
          className='text-zinc-100 font-semibold tracking-tight text-lg hover:text-white transition-colors flex items-center gap-2'
        >
          <div className='w-5 h-5 bg-zinc-100 rounded-sm'></div>
          TONMOY.DEV
        </Link>

        <div className='hidden md:flex items-center gap-8 text-lg font-medium'>
          <Link href='#about' className='hover:text-zinc-100 transition-colors'>
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
    </nav>
  );
}
