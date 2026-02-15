'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed z-50 left-0 right-0 transition-all duration-500 ease-in-out ${
        scrolled ? 'top-4 px-4' : 'top-0 px-0'
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? 'max-w-3xl rounded-full bg-nav-scrolled backdrop-blur-lg border border-nav-border-scrolled shadow-2xl'
            : 'max-w-full rounded-none bg-nav-top backdrop-blur-md border-b border-nav-border-top'
        }`}
      >
        <div
          className={`container mx-auto px-6 py-5 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-16'
          }`}
        >
          <Link
            href='#'
            className='text-text-title font-semibold tracking-tight text-2xl hover:text-text-heading transition-colors flex items-center gap-2'
            style={{ fontFamily: 'var(--font-signature)' }}
          >
            TONMOY
          </Link>

          <div className='hidden md:flex items-center gap-8 text-lg font-medium'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='hover:text-text-title transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='flex items-center gap-3'>
            <div className='hidden md:block'>
              <ThemeToggle />
            </div>
            <Link
              href='#hire-me'
              className='hidden md:flex group items-center gap-2 text-lg text-cta-text bg-cta-bg border border-transparent px-4 py-2 rounded-full hover:bg-cta-hover hover:scale-105 transition-all font-medium'
            >
              <span>Hire Me</span>
              <Icon
                icon='lucide:arrow-right'
                width={14}
                className='group-hover:translate-x-0.5 transition-transform'
              />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-border-primary text-text-muted hover:text-text-heading hover:border-border-strong hover:bg-surface-hover transition-all cursor-pointer'
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls='mobile-menu'
            >
              <div className='w-5 h-4 relative flex flex-col justify-between'>
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    menuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden='true'
      />

      {/* Mobile Menu Panel */}
      <div
        id='mobile-menu'
        className={`absolute right-4 z-50 md:hidden transition-all duration-300 ease-in-out origin-top-right ${
          scrolled ? 'top-20' : 'top-18'
        } ${
          menuOpen
            ? 'opacity-100 scale-100 visible'
            : 'opacity-0 scale-95 invisible pointer-events-none'
        }`}
        role='dialog'
        aria-modal='true'
        aria-label='Navigation menu'
      >
        <div className='w-56 bg-surface-elevated border border-border-primary rounded-2xl shadow-2xl overflow-hidden'>
          <div className='flex flex-col py-3'>
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`px-6 py-3 text-base font-medium text-text-body hover:text-text-heading hover:bg-surface-hover transition-all ${
                  menuOpen ? 'mobile-menu-link-enter' : 'opacity-0'
                }`}
                style={{
                  animationDelay: menuOpen ? `${50 + index * 60}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='border-t border-border-primary px-6 py-4 flex flex-col gap-3'>
            <div
              className={`flex items-center gap-2 ${
                menuOpen ? 'mobile-menu-link-enter' : 'opacity-0'
              }`}
              style={{ animationDelay: menuOpen ? '300ms' : '0ms' }}
            >
              <ThemeToggle />
            </div>

            <Link
              href='#hire-me'
              onClick={closeMenu}
              className={`group flex items-center justify-center gap-2 text-sm text-cta-text bg-cta-bg border border-transparent px-4 py-2.5 rounded-full hover:bg-cta-hover transition-all font-medium ${
                menuOpen ? 'mobile-menu-link-enter' : 'opacity-0'
              }`}
              style={{ animationDelay: menuOpen ? '360ms' : '0ms' }}
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
      </div>
    </nav>
  );
}
