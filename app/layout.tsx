// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { DM_Serif_Text } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--dm-serif-text",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rosiesjanitorialoc.com'),
  title: {
    default: "Commercial Cleaning Orange County | Rosie's Janitorial Services Rancho Santa Margarita",
    template: "%s | Rosie's Janitorial Services Orange County"
  },
  description: "Top-rated commercial cleaning services in Orange County, CA. Based in Rancho Santa Margarita, serving Irvine, Mission Viejo, Laguna Niguel & all OC cities. Women-owned, licensed & insured. Office cleaning, floor care, disinfection. Free quotes - call (949) 687-8297",
  keywords: [
    'commercial cleaning Orange County',
    'janitorial services Orange County',
    'commercial cleaning Rancho Santa Margarita',
    'office cleaning Orange County CA',
    'janitorial services Rancho Santa Margarita',
    'commercial cleaners near me',
    'office cleaning Irvine CA',
    'janitorial services Mission Viejo',
    'commercial cleaning Laguna Niguel',
    'janitors orange county',
    'electrostatic spraying orange county',
    'electrostatic disinfection orange county',
    'orange county electrostatic disinfection',
    'orange county commercial floor cleaning',
    'commercial floor cleaners oc',
    'commercial floor cleaning contractors oc',
    'weekly office cleaning checklist',
    'orange county electrostatic cleaning',
    'orange county commercial cleaning services near me',
    'orange county janitorial companies near me',
    'orange county janitorial services near me',
    'commercial floor cleaning companies orange county',
    'commercial floor cleaning companies oc',
    'janitorial service orange county',
    'office cleaning Lake Forest',
    'office cleaning services Orange County',
    'floor cleaning Orange County',
    'carpet cleaning commercial Orange County',
    'disinfection services Orange County',
    'day porter services Orange County',
    'retail cleaning Orange County',
    'green cleaning services Orange County',
    'medical office cleaning Orange County',
    'women-owned cleaning company Orange County',
    'licensed janitorial services Orange County',
    'insured commercial cleaners Orange County',
    'professional cleaning company OC',
    'commercial cleaning contractors Orange County',
    'commercial cleaning near me',
    'janitorial services near me',
    'office cleaners Orange County',
    'best commercial cleaning Orange County',
    'affordable janitorial services Orange County'
  ],
  authors: [{ name: "Rosie's Janitorial Services" }],
  creator: "Rosie's Janitorial Services",
  publisher: "Rosie's Janitorial Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rosiesjanitorialoc.com',
    siteName: "Rosie's Janitorial Services - Orange County Commercial Cleaning",
    title: "Commercial Cleaning Orange County | Rosie's Janitorial - Rancho Santa Margarita",
    description: 'Professional commercial cleaning in Orange County. Women-owned, licensed & insured. Serving RSM, Irvine, Mission Viejo, Laguna Niguel & all OC. Free quotes!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Rosie's Janitorial Services - Commercial Cleaning Orange County",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Commercial Cleaning Orange County | Rosie's Janitorial Services",
    description: 'Top-rated commercial cleaning in Orange County. Women-owned, licensed & insured. Serving all OC cities. Call (949) 687-8297',
    images: ['/og-image.jpg'],
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
  alternates: {
    canonical: 'https://www.rosiesjanitorialoc.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Rancho Santa Margarita',
    'geo.position': '33.640855;-117.603104',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rosie's Janitorial Services",
    "image": [
      "https://www.rosiesjanitorialoc.com/logo.jpg",
      "https://www.rosiesjanitorialoc.com/og-image.jpg"
    ],
    "@id": "https://www.rosiesjanitorialoc.com",
    "url": "https://www.rosiesjanitorialoc.com",
    "telephone": "+19496878297",
    "email": "info@rosiesjanitorialoc.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Orange County",
      "addressLocality": "Rancho Santa Margarita",
      "addressRegion": "CA",
      "postalCode": "92688",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.640855",
      "longitude": "-117.603104"
    },
    "areaServed": [
      { "@type": "City", "name": "Rancho Santa Margarita" },
      { "@type": "City", "name": "Irvine" },
      { "@type": "City", "name": "Mission Viejo" },
      { "@type": "City", "name": "Laguna Niguel" },
      { "@type": "City", "name": "Lake Forest" },
      { "@type": "City", "name": "Aliso Viejo" },
      { "@type": "City", "name": "Laguna Hills" },
      { "@type": "City", "name": "San Clemente" },
      { "@type": "City", "name": "Dana Point" },
      {
        "@type": "AdministrativeArea",
        "name": "Orange County",
        "@id": "https://en.wikipedia.org/wiki/Orange_County,_California"
      }
    ],
    "description": "Professional commercial cleaning services in Orange County, California. Women-owned janitorial company based in Rancho Santa Margarita, serving all Orange County cities with office cleaning, floor care, disinfection, and specialized cleaning services."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas in Orange County do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of Orange County including Rancho Santa Margarita, Irvine, Mission Viejo, Laguna Niguel, Lake Forest, Dana Point, San Clemente, and surrounding cities."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rosiesjanitorialoc.com"
      }
    ]
  };

  return (
    <html lang="en" className={dmSerif.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
