// app/service-areas/laguna-niguel/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation'

export const metadata: Metadata = {
  title: "Commercial Cleaning Laguna Niguel | Janitorial Services",
  description: "Professional commercial cleaning services in Laguna Niguel, CA. Office cleaning, floor care, disinfection. Women-owned, licensed & insured. Serving all Laguna Niguel businesses. Free quotes - (949) 687-8297",
  keywords: [
    'commercial cleaning Laguna Niguel',
    'janitorial services Laguna Niguel',
    'office cleaning Laguna Niguel CA',
    'commercial cleaners Laguna Niguel',
    'floor cleaning Laguna Niguel',
    'disinfection services Laguna Niguel',
    'retail cleaning Laguna Niguel'
  ],
  openGraph: {
    title: "Commercial Cleaning Laguna Niguel | Rosie's Janitorial",
    description: 'Professional commercial cleaning in Laguna Niguel. Women-owned, licensed & insured. Free quotes!',
    url: 'https://rosiesjanitorialoc.com/service-areas/laguna-niguel',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/laguna-niguel',
  },
};

export default function LagunaNiguelPage() {
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
      "name": "Laguna Niguel",
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
              <h1 className="text-5xl md:text-7xl font-serif-bold text-cyan-900 mb-6">
                Commercial Cleaning in <span className="text-cyan-600">Laguna Niguel</span>
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Professional janitorial services for Laguna Niguel businesses. Women-owned, licensed & insured. Serving the 92677 area with exceptional commercial cleaning.
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

        {/* Why Choose Us for Laguna Niguel */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Why Laguna Niguel Businesses Trust Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/local.png"
      alt="Local Expertise Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl text-cyan-900 font-semibold mb-3">Local Expertise</h3>
                <p className="text-cyan-600">
                  Serving Laguna Niguel since 2009. We understand the unique needs of local businesses from Crown Valley to Aliso Creek.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/fast.png"
      alt="Fast Response Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl text-cyan-900 font-semibold mb-3">Fast Response</h3>
                <p className="text-cyan-600">
                  Quick turnaround for quotes and service. We're just minutes away, ready to serve your Laguna Niguel location.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/quality.png"
      alt="Proven Quality Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl text-cyan-900 font-semibold mb-3">Proven Quality</h3>
                <p className="text-cyan-600">
                  5-star rated with 47+ reviews. Trusted by Laguna Niguel offices, retail stores, and medical facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Laguna Niguel */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Our Services in Laguna Niguel
            </h2>
            <div className="grid md:grid-cols-2 text-cyan-900 lg:grid-cols-3 gap-6">
              {[
                {
  title: "Office Cleaning",
  description: "Daily, weekly, or monthly cleaning for Laguna Niguel offices and professional buildings.",
  icon: (
    <img
      src="/icons_dana/office.png"
      alt="Office Cleaning"
      className="w-28 h-28 object-contain"
    />
  )
},
                {
                  title: "Floor Care",
                  description: "Carpet cleaning, tile & grout, stripping, waxing, and buffing services.",
                  icon: (
    <img
      src="/icons_dana/polisher.png"
      alt="Carpet cleaning and Floor Care"
      className="w-28 h-28 object-contain"
    />
  )
                },
                {
                  title: "Disinfection Services",
                  description: "Hospital-grade disinfection and sanitization for high-touch areas.",
                  icon: (
    <img
      src="/icons_dana/virus.png"
      alt="Disinfection Services"
      className="w-28 h-28 object-contain"
    />
  )
                },
                {
                  title: "Retail Cleaning",
                  description: "Specialized cleaning for Laguna Niguel retail stores and shopping centers.",
                  icon: (
    <img
      src="/icons_dana/shopping.png"
      alt="Retail Cleaning"
      className="w-28 h-28 object-contain"
    />
  )
                },
                {
                  title: "Medical Office Cleaning",
                  description: "OSHA-compliant cleaning for medical and dental offices.",
                  icon: (
    <img
      src="/icons_dana/safety.png"
      alt="Medical Office Cleaning"
      className="w-28 h-28 object-contain"
    />
  )
                },
                {
                  title: "Green Cleaning",
                  description: "Eco-friendly cleaning solutions safe for your staff and customers.",
                  icon: (
    <img
      src="/icons_dana/eco.png"
      alt="Green Cleaning"
      className="w-28 h-28 object-contain"
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

        {/* Areas We Serve in Laguna Niguel */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-8">
              Neighborhoods We Serve
            </h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-cyan-600 mb-6">
                We provide commercial cleaning services throughout Laguna Niguel including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-cyan-900">
                <div>Crown Valley</div>
                <div>Aliso Creek</div>
                <div>Beacon Hill</div>
                <div>Bear Brand Ranch</div>
                <div>Laguna Niguel Regional Park</div>
                <div>And all 92677 areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Ready to Experience the Best Commercial Cleaning in Laguna Niguel?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free quote today. No obligation, no pressure.
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
            <span>Laguna Niguel</span>
          </nav>
        </div>
      <Footer />
      </div>
    </>
  );
}