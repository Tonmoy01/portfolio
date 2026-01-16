# Personal Portfolio - Alex Dev

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This project showcases a senior frontend engineer's work, skills, and experience with a beautiful dark-themed design.

## Project Structure

```
personal-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata and font configuration
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles, animations, and custom CSS
├── components/
│   ├── Navigation/
│   │   └── Navigation.tsx  # Fixed navigation bar
│   ├── Hero/
│   │   └── Hero.tsx        # Hero section with intro and CTA
│   ├── Sections/
│   │   ├── Stats.tsx       # Statistics section
│   │   ├── About.tsx       # About me section with profile image
│   │   ├── Skills.tsx      # Tech stack showcase
│   │   ├── Projects.tsx    # Portfolio projects (Bento grid layout)
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Education.tsx   # Education and certifications
│   │   └── HireMe.tsx      # Contact form (Client Component)
│   └── Footer/
│       └── Footer.tsx      # Footer with links
└── public/
    └── assets/             # Static assets (images, icons, etc.)
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **@iconify/react** - Icon library (Lucide icons)

## Features

- 🎨 **Modern Design** - Dark theme with zinc color palette
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance** - Server Components by default for optimal performance
- 🎭 **Animations** - Smooth fade-in animations with staggered delays
- 🔍 **SEO Optimized** - Proper metadata and semantic HTML
- ♿ **Accessible** - Semantic HTML and proper ARIA attributes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Custom Styles

All custom styles are located in `app/globals.css`, which includes:

- Custom animations (`fade-in-up` with delay classes)
- Custom scrollbar styling
- Grid background pattern
- Font configuration

The project uses Tailwind CSS for all component styling. Custom CSS is only used where Tailwind cannot accurately reproduce the original design (animations, scrollbar, background patterns).

## Component Architecture

- **Server Components** - All components are Server Components by default for optimal performance
- **Client Components** - Only the HireMe form uses `"use client"` for form interactivity
- **Component Organization** - Components are organized by feature/group in the `/components` directory

## Assets

Static assets should be placed in `/public/assets`. Currently, the project uses an external image from Unsplash for the profile picture. To use local images, download them and place them in `/public/assets`, then update the image paths in the components.

## Development

- Edit pages in `app/page.tsx`
- Add new components in `components/`
- Update global styles in `app/globals.css`
- Modify metadata in `app/layout.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Alex Dev. Built with Tailwind & Next.js.
# portfolio
