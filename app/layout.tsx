import type { Metadata } from 'next';
import { Inter, Pacifico } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-signature',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.tonmoykhan.site'),
  title: 'Md. Tonmoy Khan | Frontend Developer',
  description:
    'Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, TypeScript, and modern design systems.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Web Developer',
    'Md. Tonmoy Khan',
  ],
  authors: [{ name: 'Md. Tonmoy Khan' }],
  creator: 'Md. Tonmoy Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.tonmoykhan.site',
    siteName: 'Md. Tonmoy Khan | Portfolio',
    title: 'Md. Tonmoy Khan | Frontend Developer',
    description:
      'Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, TypeScript, and modern design systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Md. Tonmoy Khan - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Tonmoy Khan | Frontend Developer',
    description:
      'Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, TypeScript, and modern design systems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${pacifico.variable} font-sans text-page-text bg-page-bg antialiased selection:bg-selection-bg selection:text-selection-text bg-grid`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
