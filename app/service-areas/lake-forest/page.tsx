// app/service-areas/lake-forest/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Corporate Cleaning Lake Forest CA | Business Park Janitorial Services",
  description: "Professional commercial cleaning for Lake Forest business parks and corporate facilities. Specialized in multi-tenant buildings, office complexes. Licensed, insured. Call (949) 687-8297 for service in 92630.",
  keywords: [
    'commercial cleaning Lake Forest',
    'Lake Forest janitorial services',
    'office cleaning Lake Forest CA',
    'business park cleaning Lake Forest',
    'corporate facility cleaning 92630',
    'Lake Forest office cleaners'
  ],
  openGraph: {
    title: "Corporate Cleaning Services Lake Forest | Rosie's Janitorial",
    description: 'Expert commercial cleaning for Lake Forest business parks and corporate facilities. Professional service for 92630 area.',
    url: 'https://rosiesjanitorialoc.com/service-areas/lake-forest',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/lake-forest',
  },
};

export default function LakeForestPage() {
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
      "name": "Lake Forest",
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-8xl md:text-6xl font-serif-bold text-cyan-900 mb-6">
                <span className="text-violet-400">Corporate Cleaning</span> for Lake Forest Business Parks
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Specialized janitorial services for Lake Forest's thriving business community. Expert care for multi-tenant buildings, office complexes, and corporate facilities throughout the 92630 area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+19496878297"
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors"
                >
                  Schedule Consultation
                </a>
                <Link
                  href="/#contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-cyan-600 hover:bg-violet-50 transition-colors"
                >
                  Request Site Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart for Corporate Facilities */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Built for Lake Forest's Corporate Environment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl shadow-md">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/tenant.png"
      alt="Multi-Tenant Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-2xl font-semibold text-center text-cyan-900 mb-4">Multi-Tenant Expertise</h3>
                <p className="text-cyan-600 text-center mb-4">
                  We understand the unique challenges of business parks and office complexes. Coordinating cleaning schedules across multiple tenants, maintaining common areas, and ensuring consistent quality throughout your property.
                </p>
                <ul className="space-y-2 text-cyan-600 text-center">
                  <li className="flex justify-center items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Flexible scheduling for different tenant needs</span>
                  </li>
                  <li className="flex justify-center items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Common area maintenance coordination</span>
                  </li>
                  <li className="flex justify-center items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Property manager communication protocols</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl shadow-md">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/quality.png"
      alt="Quality Assurance Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-2xl font-semibold text-center text-cyan-900 mb-4">Quality Assurance Programs</h3>
                <p className="text-cyan-600 text-center mb-4">
                  Corporate facilities demand consistency. Our quality control systems ensure every space meets professional standards, every single time. Regular inspections, detailed checklists, and accountability at every level.
                </p>
               <ul className="space-y-2 text-cyan-600 text-center">
  <li className="flex justify-center items-start gap-2">
    <span className="text-cyan-600 mt-1">•</span>
    <span>Site supervisor oversight on every shift</span>
  </li>

  <li className="flex justify-center items-start gap-2">
    <span className="text-cyan-600 mt-1">•</span>
    <span>Digital inspection reporting</span>
  </li>

  <li className="flex justify-center items-start gap-2">
    <span className="text-cyan-600 mt-1">•</span>
    <span>24/7 emergency response availability</span>
  </li>
</ul>

              </div>
            </div>
          </div>
        </section>

        {/* Services Tailored for Corporate */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-violet-400 text-center mb-12">
              Comprehensive Corporate Cleaning Solutions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-300">
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Building Lobbies & Common Areas</h3>
                <p className="text-cyan-600">
                  First impressions matter. We maintain pristine lobbies, hallways, elevators, and shared spaces that reflect your property's professional image. Daily touch-point cleaning, floor care, and attention to high-traffic areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-300">
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Executive Suites & Conference Rooms</h3>
                <p className="text-cyan-600">
                  White-glove service for your most important spaces. Thorough dusting, furniture polishing, glass cleaning, and careful attention to details that matter in professional settings. Flexible scheduling to avoid business disruption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-300">
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Commercial Floor Care Programs</h3>
                <p className="text-cyan-600">
                  Protect your flooring investment with professional maintenance. Carpet extraction and spot treatment, VCT stripping and waxing, tile and grout deep cleaning, and preventative maintenance programs designed for high-traffic corporate environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-300">
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Day Porter Services</h3>
                <p className="text-cyan-600">
                  On-site support during business hours. Immediate response to spills and issues, restroom monitoring and restocking, conference room turnover, and a professional presence that keeps your facility running smoothly all day long.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lake Forest Business Districts */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-8">
              Serving Lake Forest's Major Business Centers
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-cyan-900 text-lg">Key Locations:</h3>
                <ul className="space-y-2 text-violet-400">
                  <li>• Lake Forest Gateway</li>
                  <li>• El Toro Road Business Corridor</li>
                  <li>• Portola Center</li>
                  <li>• Bake Parkway Office Parks</li>
                  <li>• Foothill Ranch Business District</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-cyan-900 text-lg">Facility Types:</h3>
                <ul className="space-y-2 text-violet-400">
                  <li>• Class A Office Buildings</li>
                  <li>• Multi-Tenant Business Parks</li>
                  <li>• Medical Office Buildings</li>
                  <li>• Mixed-Use Developments</li>
                  <li>• Corporate Headquarters</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-bold text-violet-400">
              Complete coverage throughout the 92630 zip code
            </p>
          </div>
        </section>

        {/* Why Companies Choose Us */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Why Lake Forest Property Managers Partner With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/phone.png"
      alt="Phone Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Direct Access</h3>
                <p className="text-cyan-600">
                  Work directly with ownership and management. No call centers or automated systems. Personal attention to your property's needs.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/corporate.png"
      alt="Corporate Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Corporate Experience</h3>
                <p className="text-cyan-600">
                  15+ years serving commercial properties. We understand the standards and expectations of professional environments.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/licensed.png"
      alt="Licensed Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Fully Protected</h3>
                <p className="text-cyan-600">
                  Licensed, bonded, and insured with comprehensive coverage. Background-checked staff. Your property and tenants are protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Elevate Your Lake Forest Property
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can create a customized cleaning program for your facility. Free site assessments and competitive proposals with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19496878297"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-violet-50 transition-colors"
              >
                Call (949) 687-8297
              </a>
              <Link
                href="/#contact"
                className="bg-cyan-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-900 transition-colors"
              >
                Schedule Site Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="hidden max-w-6xl mx-auto px-4 py-8">
          <nav className="text-sm text-cyan-600">
            <Link href="/" className="hover:text-cyan-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-cyan-600">Service Areas</Link>
            <span className="mx-2">/</span>
            <span>Lake Forest</span>
          </nav>
        </div>
      </div>
      
      <Footer />
    </>
  );
}