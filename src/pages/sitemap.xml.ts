import type { APIRoute } from 'astro';
import { generateSitemap } from 'react-ssr-seo-toolkit';
import { SITE_URL } from '@/config/seo';

export const GET: APIRoute = async () => {
  const sitemap = generateSitemap({
    baseUrl: SITE_URL,
    routes: [
      {
        path: '/',
        priority: 1.0,
        changefreq: 'monthly',
      },
      {
        path: '/resume',
        priority: 0.8,
        changefreq: 'monthly',
      },
    ],
  });

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
