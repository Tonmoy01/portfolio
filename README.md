# Md. Tonmoy Khan | Portfolio

A modern, high-performance portfolio website migrated from Next.js to **Astro 5**, featuring React 19, TypeScript, and Tailwind CSS 4. Built with Astro Islands architecture for blazing-fast page loads (near-zero client JS by default), a server-side contact form with Resend, and Docker support for production deployment.

**Live:** [portfolio.tonmoykhan.site](https://portfolio.tonmoykhan.site)

## Project Structure

```
portfolio/
├── src/
│   ├── layouts/
│   │   └── Layout.astro         # Root layout with metadata, OG tags, fonts, theme script
│   ├── pages/
│   │   ├── index.astro          # Home page with all sections (Astro Islands)
│   │   ├── resume.astro         # Interactive resume viewer page
│   │   ├── robots.txt.ts        # Dynamic robots.txt endpoint
│   │   ├── sitemap.xml.ts       # Dynamic sitemap.xml endpoint
│   │   └── api/
│   │       ├── contact.ts       # Contact form API (Resend + rate limiting)
│   │       └── resume.ts        # PDF resume delivery API
│   ├── components/
│   │   ├── Navigation/
│   │   │   └── Navigation.tsx   # Fixed navigation bar (interactive island)
│   │   ├── Hero/
│   │   │   └── Hero.tsx         # Hero section with intro and CTA
│   │   ├── Sections/
│   │   │   ├── Stats.tsx        # Statistics section
│   │   │   ├── About.tsx        # About me section with profile image
│   │   │   ├── Skills.tsx       # Tech stack showcase with animated marquee
│   │   │   ├── Projects.tsx     # Portfolio projects (Bento grid layout)
│   │   │   ├── Experience.tsx   # Work experience timeline
│   │   │   ├── Education.tsx    # Education and certifications
│   │   │   └── HireMe.tsx       # Contact form (interactive island)
│   │   ├── Resume/
│   │   │   └── PdfViewer.tsx    # Client-only PDF reader component
│   │   └── ThemeToggle/
│   │       └── ThemeToggle.tsx  # Theme switcher (Light/Dark/System)
│   ├── data/
│   │   └── projects.ts          # Project portfolio data
│   ├── hooks/
│   │   └── useTheme.ts          # Theme state and local storage synchronization
│   └── styles/
│       └── globals.css          # Tailwind CSS 4, CSS theme variables, animations
├── public/                      # Static assets (images, icons, resume PDF)
├── astro.config.mjs             # Astro 5 configuration (Node adapter + React + Tailwind v4)
├── Dockerfile                   # Multi-stage production build (Node.js)
└── Dockerfile.bun               # Alternative Bun runtime build
```

## Tech Stack

- **Astro 5** - Islands architecture, server-rendered endpoints & static components
- **React 19** - Client-side interactive islands (`Navigation`, `HireMe`, `ThemeToggle`, `PdfViewer`)
- **TypeScript 5** - Strict mode
- **Tailwind CSS 4** - Utility-first styling with `@tailwindcss/vite`
- **Resend** - Transactional email API
- **@iconify/react** - Lucide icon set

## Features

- Near-zero client-side JavaScript overhead on static sections
- Dark / Light / System theme support with zero flash of unstyled theme
- Mobile-first responsive design
- Server-side contact form API with rate limiting (5 req/IP/hour)
- Smooth fade-in animations with staggered delays
- SEO optimized with OpenGraph and Twitter card metadata
- Dynamic sitemap and robots.txt generation
- Docker-ready with multi-stage builds

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Environment Variables

Create a `.env` or `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
CONTACT_TO_EMAIL=your-email@example.com
```

> Get your API key at [resend.com/api-keys](https://resend.com/api-keys). For production, verify your domain at [resend.com/domains](https://resend.com/domains).

### Installation & Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 --env-file .env portfolio
```

## API

### POST `/api/contact`

Sends an email through the contact form.

**Body:**

```json
{
  "from_name": "string",
  "from_email": "string",
  "subject": "string",
  "message": "string"
}
```

**Rate limit:** 5 requests per IP per hour.

## License

Built by Md. Tonmoy Khan with Astro, React, and Tailwind CSS.