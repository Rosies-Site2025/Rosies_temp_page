'use client';

import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';


// ========================================
// PAGE
// ========================================
export default function RanchoSantaMargaritaPage() {
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
      "name": "Rancho Santa Margarita",
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

      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-cyan-100">

        {/* HERO */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-8xl mx-auto text-center">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Hometown
            </div>
            <h1 className="text-5xl md:text-6xl font-serif-bold text-cyan-900 mb-6">
              Rancho Santa Margarita's <span className="text-cyan-600">Local Cleaning Experts</span>
            </h1>
            <p className="text-xl text-cyan-900 max-w-3xl mx-auto mb-8">
              Based right here in RSM since 2009. We're your neighbors, committed to keeping our community's businesses spotless. Women-owned, family-operated, and dedicated to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19496878297"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors"
              >
                Call Now
              </a>
              <Link
                href="/#contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* WHY LOCAL */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-600 text-center mb-12">
              Why RSM Businesses Choose Their Local Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏠",
                  title: "We're Your Neighbors",
                  text: "Based in RSM, we live and work in this community. Your success is our community's success. We understand local businesses because we are one."
                },
                {
                  icon: "⚡",
                  title: "Always Available",
                  text: "Being local means we can respond quickly to any needs. Emergency cleaning? Last-minute requests? We're just minutes away, ready to help."
                },
                {
                  icon: "🤝",
                  title: "Personal Service",
                  text: "Work directly with the owner. No call centers, no corporate bureaucracy. Just honest, reliable service from people who care about RSM."
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-100 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl text-cyan-900 font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cyan-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <ComprehensiveServicesSection />

        {/* AREAS */}
        <LocalRSMAreasSection />

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-cyan-900 font-bold font-serif mb-6">
              Ready to Work with Your Local RSM Team?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the difference of working with a local, family-owned business that truly cares about our community. Free quotes, flexible scheduling, and exceptional service guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19496878297"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-100 transition-colors shadow-lg"
              >
                Call Us Today: (949) 687-8297
              </a>
              <Link
                href="/#contact"
                className="bg-cyan-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-900 transition-colors"
              >
                Request Your Free Quote
              </Link>
            </div>
            <p className="mt-6 text-cyan-300 text-sm opacity-75">
              Proudly serving our hometown since 2009 • Same-day quotes • Flexible scheduling
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

// ========================================
// SERVICES (EMOJI ICONS)
// ========================================
function ComprehensiveServicesSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Complete Commercial Cleaning Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From small offices to large facilities, we provide comprehensive cleaning services tailored to RSM businesses
          </p>
        </div>

        <div className="space-y-16">
          <ServiceBlock
            icon="🧹"
            title="Daily Office Maintenance"
            description="Professional daily cleaning that keeps your workspace pristine and productive"
            features={[
              "Trash removal and recycling management",
              "Restroom cleaning and restocking",
              "Break room and kitchen sanitization",
              "Dusting and surface wiping",
              "Vacuuming and mopping"
            ]}
          />

          <ServiceBlock
            icon="🧼"
            title="Specialized Services"
            description="Expert solutions for unique cleaning challenges and deep maintenance"
            features={[
              "Deep carpet cleaning and extraction",
              "Hard floor stripping, waxing, and buffing",
              "Window cleaning (interior and exterior)",
              "Post-construction cleanup",
              "Eco-friendly green cleaning options"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ icon, title, description, features }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50 rounded-3xl p-10 shadow-lg"
    >
      <div className="flex items-center gap-6 mb-6">
        <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-3xl">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      </div>

      <p className="text-lg text-slate-600 mb-8">{description}</p>

      <ul className="grid sm:grid-cols-2 gap-4">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-3 text-slate-700">
            <span className="font-bold text-cyan-600">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ========================================
// AREAS
// ========================================
function LocalRSMAreasSection() {
  const neighborhoods = [
    { name: "Robinson Ranch", zone: "North", businesses: "Professional Offices" },
    { name: "Dove Canyon", zone: "East", businesses: "Retail & Commercial" },
    { name: "Trabuco Highlands", zone: "Central", businesses: "Shopping Centers" },
    { name: "Rancho Cielo", zone: "West", businesses: "Medical Facilities" },
    { name: "Santa Margarita Village", zone: "South", businesses: "Retail & Dining" },
    { name: "All 92688 areas", zone: "Complete", businesses: "Full Coverage", featured: true }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Serving Every Corner of RSM
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We know Rancho Santa Margarita inside and out. From the business districts to neighborhood shopping centers, we serve:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl p-8 shadow-lg ${
                area.featured
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-50 text-slate-900'
              }`}
            >
              <div className="text-sm font-semibold mb-3">
                {area.zone} RSM
              </div>
              <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
              <p className="text-sm opacity-90">{area.businesses}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
