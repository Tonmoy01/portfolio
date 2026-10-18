import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null) as Theme | null;
    const initialTheme: Theme = saved || 'system';
    setThemeState(initialTheme);

    const updateResolved = (t: Theme) => {
      let resolved: 'light' | 'dark';
      if (t === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        resolved = t;
      }
      setResolvedTheme(resolved);
      if (resolved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateResolved(initialTheme);

    const handleStorage = () => {
      const current = ((typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null) as Theme) || 'system';
      setThemeState(current);
      updateResolved(current);
    };

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMedia = () => {
      const current = ((typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null) as Theme) || 'system';
      if (current === 'system') {
        updateResolved('system');
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('theme-change', handleStorage);
    media.addEventListener('change', handleMedia);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('theme-change', handleStorage);
      media.removeEventListener('change', handleMedia);
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof localStorage !== 'undefined') {
      if (newTheme === 'system') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', newTheme);
      }
    }
    window.dispatchEvent(new Event('theme-change'));

    let resolved: 'light' | 'dark';
    if (newTheme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      resolved = newTheme;
    }
    setResolvedTheme(resolved);
    if (resolved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { theme, resolvedTheme, setTheme };
}
