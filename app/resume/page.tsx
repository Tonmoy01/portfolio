'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Icon } from '@iconify/react';

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

export default function ResumePage() {
  return (
    <div className='min-h-screen bg-page-bg'>
      {/* Top Bar */}
      <div className='sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b border-border-primary bg-surface-primary/80 backdrop-blur-sm'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-primary text-text-body hover:text-text-heading hover:border-border-strong hover:bg-surface-elevated transition-all text-sm font-medium'
        >
          <Icon icon='lucide:arrow-left' width={18} />
          Back
        </Link>
        <a
          href='/resume.pdf'
          download
          className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cta-bg text-cta-text hover:bg-cta-hover transition-all text-sm font-medium shadow-[0_0_20px_var(--color-cta-shadow)]'
        >
          <Icon icon='lucide:download' width={18} />
          Download
        </a>
      </div>

      {/* PDF Content */}
      <div className='flex justify-center py-8'>
        <PdfViewer />
      </div>
    </div>
  );
}
