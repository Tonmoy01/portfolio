'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className='p-2 rounded-full border border-border-primary text-text-muted'
        aria-label='Toggle theme'
      >
        <div className='w-5 h-5' />
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const iconName =
    theme === 'system'
      ? 'lucide:monitor'
      : resolvedTheme === 'dark'
        ? 'lucide:moon'
        : 'lucide:sun';

  const label =
    theme === 'system'
      ? 'System theme'
      : resolvedTheme === 'dark'
        ? 'Dark mode'
        : 'Light mode';

  return (
    <button
      onClick={cycleTheme}
      className='p-2 rounded-full border border-border-primary text-text-muted hover:text-text-heading hover:border-border-strong hover:bg-surface-hover transition-all cursor-pointer'
      aria-label={label}
      title={label}
    >
      <Icon icon={iconName} width={20} />
    </button>
  );
}
