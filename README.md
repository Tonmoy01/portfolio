# Md. Tonmoy Khan | Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features a dark-themed design, server-side contact form with Nodemailer, and Docker support for production deployment.

**Live:** [portfolio.tonmoykhan.site](https://portfolio.tonmoykhan.site)

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts  # Contact form API (Nodemailer + rate limiting)
│   ├── layout.tsx            # Root layout with metadata, OG tags, fonts
│   ├── page.tsx              # Home page with all sections
│   ├── globals.css           # Global styles, animations, custom CSS
│   ├── robots.ts             # Dynamic robots.txt
│   └── sitemap.ts            # Dynamic sitemap.xml
├── components/
│   ├── Navigation/
│   │   └── Navigation.tsx    # Fixed navigation bar
│   ├── Hero/
│   │   └── Hero.tsx          # Hero section with intro and CTA
│   ├── Sections/
│   │   ├── Stats.tsx         # Statistics section
│   │   ├── About.tsx         # About me section with profile image
│   │   ├── Skills.tsx        # Tech stack showcase
│   │   ├── Projects.tsx      # Portfolio projects (Bento grid layout)
│   │   ├── Experience.tsx    # Work experience timeline
│   │   ├── Education.tsx     # Education and certifications
│   │   └── HireMe.tsx        # Contact form (Client Component)
│   └── Footer/
│       └── Footer.tsx        # Footer with links
├── public/assets/            # Static assets (images, icons, OG image)
├── Dockerfile                # Multi-stage production build (Node.js)
└── Dockerfile.bun            # Alternative Bun runtime build
```

## Tech Stack

- **Next.js 16** - App Router, standalone output
- **React 19** - Server & Client Components
- **TypeScript 5** - Strict mode
- **Tailwind CSS 4** - Utility-first styling
- **Nodemailer** - Server-side email via Gmail SMTP
- **@iconify/react** - Lucide icon set

## Features

- Dark theme with zinc color palette
- Mobile-first responsive design
- Server Components by default, Client Components only where needed
- Server-side contact form API with rate limiting (5 req/IP/hour)
- Smooth fade-in animations with staggered delays
- SEO optimized with OpenGraph and Twitter card metadata
- Dynamic sitemap and robots.txt generation
- Docker-ready with multi-stage builds

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Environment Variables

Create a `.env.local` file in the project root:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

> Generate a Gmail App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 --env-file .env.local portfolio
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

Built by Md. Tonmoy Khan with Next.js and Tailwind CSS.