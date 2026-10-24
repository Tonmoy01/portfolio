import {
  createSEOConfig,
  createPersonSchema,
  createWebsiteSchema,
  composeSchemas,
  safeJsonLdSerialize,
} from "react-ssr-seo-toolkit";

export const SITE_URL = "https://tonmoykhan.site";

export const siteConfig = createSEOConfig({
  title: "Md. Tonmoy Khan | Frontend Developer",
  titleTemplate: "%s | Md. Tonmoy Khan",
  description:
    "Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, Next.js, TypeScript, and modern design systems.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    siteName: "Md. Tonmoy Khan | Portfolio",
    title: "Md. Tonmoy Khan | Frontend Developer",
    description:
      "Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, Next.js, TypeScript, and modern design systems.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Md. Tonmoy Khan | Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Tonmoy Khan | Frontend Developer",
    description:
      "Frontend Developer focused on building accessible, pixel-perfect user interfaces with React, Next.js, TypeScript, and modern design systems.",
    image: `${SITE_URL}/og-image.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
});

export const personSchema = createPersonSchema({
  name: "Md. Tonmoy Khan",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  image: `${SITE_URL}/tonmoy.jpeg`,
  email: "mdtonmoykhan65@gmail.com",
  telephone: "+8801777671455",
  address: {
    addressLocality: "Khilkhet, Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://github.com/Tonmoy01",
    "https://www.linkedin.com/in/mdtonmoykhan/",
  ],
  description:
    "Results-driven Frontend Developer with experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript.",
});

export const websiteSchema = createWebsiteSchema({
  name: "Md. Tonmoy Khan | Portfolio",
  url: SITE_URL,
  description:
    "Personal portfolio of Md. Tonmoy Khan - Frontend Developer specializing in React.js, Next.js, and TypeScript.",
});

export const structuredData = safeJsonLdSerialize(
  composeSchemas(personSchema, websiteSchema)
);
