import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://portfolio.tonmoykhan.site/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
