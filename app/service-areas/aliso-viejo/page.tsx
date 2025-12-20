// app/service-areas/aliso-viejo/page.tsx
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { motion, useScroll, useTransform } from 'motion/react';

// ========================================
// ⚠️ METADATA MOVED TO LAYOUT.TSX
// ========================================
// Since this is now 'use client', move the metadata export to:
// app/service-areas/aliso-viejo/layout.tsx
//
// Copy this to layout.tsx:
/*
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Modern Office Cleaning Aliso Viejo | Tech-Friendly Janitorial Services",
  description: "Commercial cleaning for Aliso Viejo's innovative business community. Flexible schedules, eco-friendly products, tech-industry expertise. Serving 92656. Women-owned. Call (949) 687-8297",
  keywords: [
    'commercial cleaning Aliso Viejo',
    'office cleaning Aliso Viejo CA',
    'janitorial services Aliso Viejo',
    'Aliso Viejo business cleaning',
    'tech office cleaning 92656',
    'modern office cleaners Aliso Viejo'
  ],
  openGraph: {
    title: "Modern Commercial Cleaning Aliso Viejo | Rosie's Janitorial",
    description: 'Flexible, eco-friendly commercial cleaning for Aliso Viejo businesses. Perfect for tech companies and modern offices.',
    url: 'https://rosiesjanitorialoc.com/service-areas/aliso-viejo',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/aliso-viejo',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
*/

export default function AlisoViejoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rosie's Janitorial Services",
      "telephone": "+19496878297",
      "url": "https://rosiesjanitorialoc.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Aliso Viejo",
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": "California"
      }
    }
  };

  return (
    <>
      <Navigation />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
        {/* ========================================
            HERO SECTION - Enhanced with fade-in
            NOTE: All original content preserved
            ======================================== */}
        <HeroSection />

        {/* ========================================
            MODERN WORKPLACE SECTION - Enhanced
            NOTE: All 6 cards with original images
            UPDATE: To change images, edit imageSrc in modernWorkplaceCards array
            ======================================== */}
        <ModernWorkplaceSection />

        {/* ========================================
            BUSINESS TYPES SECTION - Enhanced
            NOTE: All 4 service types preserved
            UPDATE: To change images, edit imageSrc in businessTypes array
            ======================================== */}
        <BusinessTypesSection />

        {/* ========================================
            ALISO VIEJO LOCATIONS - Enhanced
            NOTE: All original locations preserved
            ======================================== */}
        <AlisoViejoLocationsSection />

        {/* ========================================
            WHY CHOOSE US - Enhanced
            NOTE: All original content preserved
            ======================================== */}
        <WhyChooseUsSection />

        {/* ========================================
            CTA SECTION - Enhanced
            NOTE: All original CTAs preserved
            ======================================== */}
        <CTASection />

        {/* ========================================
            BREADCRUMBS - UNCHANGED
            ⚠️ DO NOT MODIFY THIS SECTION
            ======================================== */}
        <div className="hidden max-w-6xl mx-auto px-4 py-8">
          <nav className="text-sm text-cyan-600">
            <Link href="/" className="hover:text-cyan-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-cyan-600">Service Areas</Link>
            <span className="mx-2">/</span>
            <span>Aliso Viejo</span>
          </nav>
        </div>
      </div>
      
      <Footer />
    </>
  );
}


// ========================================
// HERO SECTION COMPONENT
// ========================================
function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-8xl md:text-7xl font-serif-bold text-cyan-900 mb-6">
            Commercial Cleaning for <span className="text-violet-400">Modern Aliso Viejo Businesses</span>
          </h1>
          <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
            Flexible, eco-conscious janitorial services designed for today's workplace. Supporting Aliso Viejo's innovative companies with cleaning solutions that adapt to your schedule, values, and space.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+19496878297"
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
            >
              Get Started: (949) 687-8297
            </a>
            <Link
              href="/#contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-cyan-600 hover:bg-violet-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
            >
              Custom Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


// ========================================
// MODERN WORKPLACE SECTION COMPONENT
// NOTE: Update images here if needed
// ========================================
function ModernWorkplaceSection() {
  // ⚠️ UPDATE IMAGES HERE
  const modernWorkplaceCards = [
    {
      imageSrc: "/icons_dana/eco.png",
      imageAlt: "Eco Icon",
      title: "Eco-Friendly First",
      description: "Green cleaning isn't just an option—it's our standard. EPA-approved products, sustainable practices, and methods that protect your team's health and our environment."
    },
    {
      imageSrc: "/icons_dana/watch.png",
      imageAlt: "Watch Icon",
      title: "Flexible Scheduling",
      description: "Evening cleanings, early morning service, or working around your hybrid schedule. We adapt to your team's hours, not the other way around."
    },
    {
      imageSrc: "/icons_dana/tech-savvy.png",
      imageAlt: "Tech-Savvy Icon",
      title: "Tech-Savvy Service",
      description: "Understanding open floor plans, collaborative spaces, and tech equipment. We know how to clean around servers, sensitive equipment, and modern office layouts."
    },
    {
      imageSrc: "/icons_dana/privacy.png",
      imageAlt: "Privacy Icon",
      title: "Privacy & Security",
      description: "Background-checked teams, signed NDAs available, and respect for confidential workspaces. Your business security is our priority."
    },
    {
      imageSrc: "/icons_dana/phone.png",
      imageAlt: "Phone Icon",
      title: "Easy Communication",
      description: "Quick response times, direct contact with your account manager, and digital reporting. Modern service for modern businesses."
    },
    {
      imageSrc: "/icons_dana/custom.png",
      imageAlt: "custom Icon",
      title: "Customizable Service",
      description: "Growing startup or established company—we scale with you. Add or reduce services as your needs change."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 182 212) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif-bold text-cyan-900 mb-4">
            Cleaning Solutions for the Modern Workplace
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernWorkplaceCards.map((card, idx) => (
            <FeatureCard
              key={idx}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ imageSrc, imageAlt, title, description, delay }: any) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay }}
      className="group p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-cyan-200"
    >
      <div className="flex justify-center items-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-32 h-32 object-contain"
        />
      </div>
      <h3 className="text-xl text-center text-cyan-900 font-semibold mb-3">
        {title}
      </h3>
      <p className="text-cyan-600 text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}


// ========================================
// BUSINESS TYPES SECTION COMPONENT
// NOTE: Update images here if needed
// ========================================
function BusinessTypesSection() {
  // ⚠️ UPDATE IMAGES HERE
  const businessTypes = [
    {
      imageSrc: "/icons_dana/start-up.png",
      imageAlt: "Start-Up Icon",
      title: "Tech & Creative Spaces",
      subtitle: "Startups, Software Companies, Creative Agencies",
      features: [
        "Open floor plan cleaning without disruption",
        "Careful attention around expensive equipment",
        "Kitchen and break area deep cleaning",
        "Flexible scheduling for unconventional hours"
      ]
    },
    {
      imageSrc: "/icons_dana/hotel.png",
      imageAlt: "Hotel Icon",
      title: "Professional Offices",
      subtitle: "Corporate Offices, Financial Services, Consulting",
      features: [
        "Executive suite white-glove service",
        "Conference room turnover and setup",
        "Reception area first-impression maintenance",
        "Regular floor care programs"
      ]
    },
    {
      imageSrc: "/icons_dana/healthcare.png",
      imageAlt: "Healthcare Icon",
      title: "Healthcare Facilities",
      subtitle: "Medical Offices, Dental Practices, Therapy Centers",
      features: [
        "OSHA-compliant disinfection protocols",
        "Waiting room and exam room sanitization",
        "Medical-grade cleaning solutions",
        "After-hours service to avoid patient disruption"
      ]
    },
    {
      imageSrc: "/icons_dana/shopping.png",
      imageAlt: "Shopping Icon",
      title: "Retail & Service",
      subtitle: "Shops, Salons, Fitness Studios, Restaurants",
      features: [
        "Customer-facing area priority cleaning",
        "High-touch surface sanitization",
        "Window and glass cleaning for storefronts",
        "Early morning or late evening service"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif-bold text-cyan-900 mb-4">
            Tailored for Aliso Viejo's Business Mix
          </h2>
          <p className="text-center text-cyan-600 max-w-2xl mx-auto text-lg">
            From tech startups to established corporations, we serve Aliso Viejo's diverse business community
          </p>
        </motion.div>

        {/* Business Type Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {businessTypes.map((business, idx) => (
            <BusinessTypeCard
              key={idx}
              business={business}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Business Type Card Component
function BusinessTypeCard({ business, delay }: any) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0.9]);
  const x = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      transition={{ delay }}
      className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-cyan-200"
    >
      {/* Header with Icon */}
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-cyan-100 p-3 rounded-xl group-hover:bg-cyan-200 transition-colors duration-300">
          <div className="flex justify-center items-center transform group-hover:scale-110 transition-transform duration-500">
            <img
              src={business.imageSrc}
              alt={business.imageAlt}
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-cyan-900 font-semibold mb-2">
            {business.title}
          </h3>
          <p className="text-sm text-cyan-500">
            {business.subtitle}
          </p>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3">
        {business.features.map((feature: string, idx: number) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + (idx * 0.1), duration: 0.4 }}
            className="flex items-start gap-3 text-cyan-600 group/item"
          >
            <span className="text-cyan-600 mt-1 flex-shrink-0 text-lg group-hover/item:scale-125 transition-transform">✓</span>
            <span className="leading-relaxed">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}


// ========================================
// ALISO VIEJO LOCATIONS SECTION
// ========================================
function AlisoViejoLocationsSection() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ opacity, y }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif text-violet-400 text-center mb-8">
            Serving All of Aliso Viejo
          </h2>
          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 p-10 rounded-2xl max-w-3xl mx-auto shadow-xl border-2 border-cyan-100">
            <p className="text-center text-cyan-700 mb-6 text-lg">
              Comprehensive commercial cleaning throughout the 92656 area, including:
            </p>
            <div className="grid grid-cols-2 gap-6 text-cyan-700">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
              >
                <div className="font-semibold mb-3 text-cyan-900 text-lg">Business Districts:</div>
                <ul className="text-sm space-y-2">
                  <li>Aliso Viejo Town Center</li>
                  <li>Pacific Park</li>
                  <li>Aliso Creek Road Corridor</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
              >
                <div className="font-semibold mb-3 text-cyan-900 text-lg">Near:</div>
                <ul className="text-sm space-y-2">
                  <li>The Shops at Aliso Viejo</li>
                  <li>Soka University area</li>
                  <li>Wood Canyon neighborhoods</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// ========================================
// WHY CHOOSE US SECTION
// ========================================
function WhyChooseUsSection() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          style={{ opacity, scale }}
          className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl text-white font-serif mb-6 text-center">
            The Women-Owned Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-white mb-3 text-lg">Our Values:</h3>
              <ul className="space-y-2 opacity-90">
                <li>✓ Attention to detail</li>
                <li>✓ Clear communication</li>
                <li>✓ Reliability you can count on</li>
                <li>✓ Fair, competitive pricing</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold mb-3 text-white text-lg">Your Benefits:</h3>
              <ul className="space-y-2 opacity-90">
                <li>✓ 15+ years in business</li>
                <li>✓ Licensed, bonded & insured</li>
                <li>✓ Background-checked staff</li>
                <li>✓ Satisfaction guaranteed</li>
              </ul>
            </motion.div>
          </div>
          <p className="text-center text-lg opacity-95">
            Supporting Aliso Viejo businesses with professional cleaning services they can trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


// ========================================
// CTA SECTION
// ========================================
function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif mb-6">
            Ready to Experience Better Cleaning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a cleaning program that fits your business, your schedule, and your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+19496878297"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-violet-50 transition-colors shadow-lg"
            >
              Call (949) 687-8297
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/#contact"
                className="inline-block bg-cyan-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-900 transition-colors"
              >
                Get Custom Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

