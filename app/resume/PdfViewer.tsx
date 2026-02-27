'use client';

import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const fileRef = useRef<{ data: Uint8Array } | null>(null);
  const width = Math.min(800, window.innerWidth - 32);

  useEffect(() => {
    fetch('/api/resume')
      .then((res) => res.arrayBuffer())
      .then((buf) => {
        fileRef.current = { data: new Uint8Array(buf) };
        setLoaded(true);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <p className='text-red-400 py-12'>
        Failed to load PDF.{' '}
        <a href='/resume.pdf' download className='underline'>
          Download instead
        </a>
      </p>
    );
  }

  if (!loaded) {
    return <p className='text-text-body py-12'>Loading resume...</p>;
  }

  return (
    <Document
      file={fileRef.current}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      className='flex flex-col items-center gap-8'
    >
      {Array.from({ length: numPages }, (_, i) => (
        <Page
          key={i + 1}
          pageNumber={i + 1}
          width={width}
          className='shadow-lg rounded-lg overflow-hidden'
        />
      ))}
    </Document>
  );
}
