// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { DM_Serif_Text } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--dm-serif-text",
  display: 'swap', // Better performance
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rosiesjanitorialoc.com'),
  title: {
    default: "Commercial Cleaning Orange County | Rosie's Janitorial Services Rancho Santa Margarita",
    template: "%s | Rosie's Janitorial Services Orange County"
  },
  description: "Top-rated commercial cleaning services in Orange County, CA. Based in Rancho Santa Margarita, serving Irvine, Mission Viejo, Laguna Niguel & all OC cities. Women-owned, licensed & insured. Office cleaning, floor care, disinfection. Free quotes - call (949) 687-8297",
  keywords: [
    // Location-specific keywords (HIGH PRIORITY)
    'commercial cleaning Orange County',
    'janitorial services Orange County',
    'commercial cleaning Rancho Santa Margarita',
    'office cleaning Orange County CA',
    'janitorial services Rancho Santa Margarita',
    'commercial cleaners near me',
    'office cleaning Irvine CA',
    'janitorial services Mission Viejo',
    'commercial cleaning Laguna Niguel',
    'office cleaning Lake Forest',
    
    // Service-specific keywords
    'office cleaning services Orange County',
    'floor cleaning Orange County',
    'carpet cleaning commercial Orange County',
    'disinfection services Orange County',
    'day porter services Orange County',
    'retail cleaning Orange County',
    'green cleaning services Orange County',
    'medical office cleaning Orange County',
    
    // Business type keywords
    'women-owned cleaning company Orange County',
    'licensed janitorial services Orange County',
    'insured commercial cleaners Orange County',
    'professional cleaning company OC',
    'commercial cleaning contractors Orange County',
    
    // Intent-based keywords
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
    url: 'https://rosiesjanitorialoc.com',
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
    canonical: 'https://rosiesjanitorialoc.com',
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code from Google Search Console
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
      "https://rosiesjanitorialoc.com/logo.jpg",
      "https://rosiesjanitorialoc.com/og-image.jpg"
    ],
    "@id": "https://rosiesjanitorialoc.com",
    "url": "https://rosiesjanitorialoc.com",
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
      {
        "@type": "City",
        "name": "Rancho Santa Margarita",
        "@id": "https://en.wikipedia.org/wiki/Rancho_Santa_Margarita,_California"
      },
      {
        "@type": "City",
        "name": "Irvine"
      },
      {
        "@type": "City",
        "name": "Mission Viejo"
      },
      {
        "@type": "City",
        "name": "Laguna Niguel"
      },
      {
        "@type": "City",
        "name": "Lake Forest"
      },
      {
        "@type": "City",
        "name": "Aliso Viejo"
      },
      {
        "@type": "City",
        "name": "Laguna Hills"
      },
      {
        "@type": "City",
        "name": "San Clemente"
      },
      {
        "@type": "City",
        "name": "Dana Point"
      },
      {
        "@type": "City",
        "name": "San Juan Capistrano"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Orange County",
        "@id": "https://en.wikipedia.org/wiki/Orange_County,_California"
      }
    ],
    "description": "Professional commercial cleaning services in Orange County, California. Women-owned janitorial company based in Rancho Santa Margarita, serving all Orange County cities with office cleaning, floor care, disinfection, and specialized cleaning services.",
    "slogan": "Commercial Cleaning You Can Trust",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/rosiesjanitorial",
      "https://www.instagram.com/rosiesjanitorial"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Cleaning Services",
            "description": "Professional office cleaning and maintenance for commercial facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Care Services",
            "description": "Carpet cleaning, hard floor maintenance, stripping, waxing, and buffing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Disinfection Services",
            "description": "Hospital-grade disinfection and sanitization services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Day Porter Services",
            "description": "On-site maintenance staff for continuous cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Cleaning",
            "description": "Commercial cleaning services for retail spaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Green Cleaning",
            "description": "Eco-friendly commercial cleaning solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47",
      "bestRating": "5"
    },
    "founder": {
      "@type": "Person",
      "name": "Rosie"
    },
    "foundingDate": "2009",
    "paymentAccepted": "Check, ACH",
    "currenciesAccepted": "USD",
    "knowsAbout": [
      "Commercial Cleaning",
      "Janitorial Services",
      "Office Cleaning",
      "Floor Care",
      "Disinfection Services",
      "Green Cleaning"
    ]
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
      },
      {
        "@type": "Question",
        "name": "What commercial cleaning services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide office cleaning, floor care, disinfection services, retail cleaning, green cleaning, and day porter services."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Rosie's Janitorial Services is fully licensed and insured in California."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a free quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a free quote by calling (949) 687-8297 or using our website contact form."
        }
      },
      {
        "@type": "Question",
        "name": "What are your business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible scheduling to accommodate your business needs, including after-hours, evening, and weekend cleaning services to minimize disruption to your operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use eco-friendly cleaning products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer green cleaning services using environmentally friendly, non-toxic cleaning products that are safe for your employees and the environment."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I schedule commercial cleaning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cleaning frequency depends on your business type and foot traffic. We offer daily, weekly, bi-weekly, and monthly cleaning schedules customized to your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide cleaning supplies and equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we bring all necessary cleaning supplies, equipment, and products. Our team arrives fully equipped to handle all your cleaning needs."
        }
      },
      {
        "@type": "Question",
        "name": "Are your cleaning staff background checked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our cleaning professionals undergo thorough background checks and are trained to maintain the highest standards of service and security."
        }
      },
      {
        "@type": "Question",
        "name": "What types of businesses do you clean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve a wide range of commercial properties including offices, medical facilities, retail stores, schools, gyms, restaurants, and industrial buildings throughout Orange County."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer one-time deep cleaning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide one-time deep cleaning services for special occasions, post-construction cleanup, move-in/move-out cleaning, and seasonal deep cleans in addition to our regular maintenance programs."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your office cleaning service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our office cleaning includes dusting, vacuuming, mopping, trash removal, restroom sanitization, break room cleaning, window cleaning, and disinfection of high-touch surfaces."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical cleaning session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cleaning time varies based on the size of your facility and services requested. During your consultation, we'll provide an estimated timeframe tailored to your specific property."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency cleaning services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide emergency cleaning services for urgent situations such as spills, accidents, or unexpected events that require immediate attention."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept various payment methods including checks, credit cards, and ACH bank transfers for your convenience."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rosiesjanitorialoc.com"
      }
    ]
  };

  return (
    <html lang="en" className={dmSerif.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme */}
        <meta name="theme-color" content="#0891b2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}