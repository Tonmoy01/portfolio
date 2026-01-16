import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Md. Tonmoy Khan | Frontend Developer',
  description:
    'Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, TypeScript, and modern design systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} font-sans text-zinc-400 bg-zinc-950 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 bg-grid`}
      >
        {children}
      </body>
    </html>
  );
}
