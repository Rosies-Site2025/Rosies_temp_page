// app/service-areas/mission-viejo/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer'
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  title: "Commercial Cleaning Mission Viejo | Janitorial Services",
  description: "Top-rated commercial cleaning services in Mission Viejo, CA. Office cleaning, floor care, disinfection for 92691, 92692, 92694 areas. Women-owned, licensed & insured. Free quotes - (949) 687-8297",
  keywords: [
    'commercial cleaning Mission Viejo',
    'janitorial services Mission Viejo',
    'office cleaning Mission Viejo CA',
    'commercial cleaners Mission Viejo',
    'floor cleaning Mission Viejo',
    'disinfection services Mission Viejo',
    'retail cleaning Mission Viejo',
    'Mission Viejo cleaning company'
  ],
  openGraph: {
    title: "Commercial Cleaning Mission Viejo | Rosie's Janitorial",
    description: 'Professional commercial cleaning in Mission Viejo. Women-owned, licensed & insured. Free quotes!',
    url: 'https://rosiesjanitorialoc.com/service-areas/mission-viejo',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/mission-viejo',
  },
};

export default function MissionViejoPage() {
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
      "name": "Mission Viejo",
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": "California"
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$$"
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif-bold text-cyan-900 mb-6">
                Commercial Cleaning in <span className="text-cyan-600">Mission Viejo</span>
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Trusted janitorial services for Mission Viejo businesses. Women-owned, licensed & insured. Serving all Mission Viejo zip codes with professional commercial cleaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+19496878297"
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors"
                >
                  Call (949) 687-8297
                </a>
                <Link
                  href="/#contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-cyan-600 hover:bg-cyan-50 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Mission Viejo */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Why Mission Viejo Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/local.png"
      alt="Local Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">15+ Years Local</h3>
                <p className="text-cyan-600">
                  Serving Mission Viejo since 2009. Deep understanding of local business needs from The Shops to Kaleidoscope.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/licensed.png"
      alt="Licensed Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Fully Insured</h3>
                <p className="text-cyan-600">
                  Licensed, bonded, and insured. Background-checked staff you can trust in your Mission Viejo facility.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/woman.png"
      alt="Women-Owned Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl text-cyan-900 font-semibold mb-3">Women-Owned</h3>
                <p className="text-cyan-600">
                  Proud women-owned business serving our Mission Viejo community with exceptional care and attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Mission Viejo */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center  mb-12">
              Complete Cleaning Solutions for Mission Viejo
            </h2>
            <div className="grid md:grid-cols-2 text-center text-cyan-900 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Office Cleaning",
                  description: "Comprehensive cleaning for Mission Viejo professional offices, business parks, and corporate centers.",
                  icon: (
    <img
      src="/icons_dana/corporate.png"
      alt="Corporate Cleaning Icon"
      className="w-28 h-28 object-contain mx-auto "
    />
  )
                },
                {
                  title: "Floor Care & Maintenance",
                  description: "Expert carpet cleaning, VCT stripping and waxing, tile & grout cleaning, and hard surface care.",
                  icon: (
    <img
      src="/icons_dana/polisher.png"
      alt="Carpet cleaning and Floor Care"
      className="w-28 h-28 object-contain mx-auto"
    />
  )
                },
                {
                  title: "Medical Facility Cleaning",
                  description: "OSHA and HIPAA-compliant cleaning for medical offices, dental practices, and healthcare facilities.",
                  icon: (
    <img
      src="/icons_dana/medical-office.png"
      alt="Medical Facility Cleaning Icon"
      className="w-28 h-28 object-contain mx-auto"
    />
  )
                },
                {
                  title: "Retail & Shopping Centers",
                  description: "Professional cleaning for Mission Viejo retail locations, stores, and shopping centers.",
                  icon: (
    <img
      src="/icons_dana/shopping.png"
      alt="Retail & Shopping Centers Icon"
      className="w-28 h-28 object-contain mx-auto"
    />
  )
                },
                {
                  title: "Day Porter Services",
                  description: "On-site daytime maintenance staff for continuous cleaning and facility support.",
                  icon: (
    <img
      src="/icons_dana/day-porter.png"
      alt="Day Porter Services Icon"
      className="w-28 h-28 object-contain mx-auto"
    />
  )
                },
                {
                  title: "Eco-Friendly Cleaning",
                  description: "Green cleaning products and sustainable practices for environmentally conscious businesses.",
                  icon: (
    <img
      src="/icons_dana/eco.png"
      alt="Eco-Friendly Cleaning Icon"
      className="w-28 h-28 object-contain mx-auto"
    />
  )
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-cyan-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Viejo Areas Served */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-8">
              Serving All Mission Viejo Areas
            </h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-cyan-600 mb-6">
                We provide commercial cleaning throughout Mission Viejo including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-cyan-900">
                <div>Lake Mission Viejo</div>
                <div>The Shops at Mission Viejo</div>
                <div>Kaleidoscope Center</div>
                <div>Oso Creek</div>
                <div>Crown Valley</div>
                <div>92691, 92692, 92694 areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Industries We Serve in Mission Viejo
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/corporate.png"
      alt="Corporate Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <div>
                  <h3 className="font-semibold text-cyan-900 mb-2">Corporate Offices</h3>
                  <p className="text-cyan-600 text-sm">Professional buildings, business parks, and corporate centers</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/medical-office.png"
      alt="Healthcare Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <div>
                  <h3 className="font-semibold text-cyan-900 mb-2">Medical & Dental</h3>
                  <p className="text-cyan-600 text-sm">Healthcare facilities requiring specialized cleaning protocols</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/shopping.png"
      alt="Shopping Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <div>
                  <h3 className="font-semibold text-cyan-900 mb-2">Retail Stores</h3>
                  <p className="text-cyan-600 text-sm">Shopping centers, boutiques, and retail locations</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/silverware.png"
      alt="Silverware Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <div>
                  <h3 className="font-semibold text-cyan-900 mb-2">Restaurants & Hospitality</h3>
                  <p className="text-cyan-600 text-sm">Dining establishments and hospitality venues</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Partner with Mission Viejo's Most Trusted Cleaning Company
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Free, no-obligation quotes. Same-day response guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19496878297"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-100 transition-colors"
              >
                Call (949) 687-8297
              </a>
              <Link
                href="/#contact"
                className="bg-cyan-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-900 transition-colors"
              >
                Request Free Quote
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
            <span>Mission Viejo</span>
          </nav>
        </div>
        <Footer />
      </div>
    </>
  );
}