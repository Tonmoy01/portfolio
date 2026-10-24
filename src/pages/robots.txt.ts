import type { APIRoute } from 'astro';
import { generateRobots } from 'react-ssr-seo-toolkit';
import { SITE_URL } from '@/config/seo';

export const GET: APIRoute = async () => {
  const robots = generateRobots({
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  });

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
