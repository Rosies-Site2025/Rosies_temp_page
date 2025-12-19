// app/service-areas/san-clemente/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Commercial Cleaning San Clemente | Coastal Business Janitorial Services",
  description: "Coastal commercial cleaning for San Clemente businesses. Retail, restaurants, offices in 92672, 92673, 92674. Flexible scheduling, eco-friendly options. Women-owned. Call (949) 687-8297",
  keywords: [
    'commercial cleaning San Clemente',
    'San Clemente janitorial services',
    'office cleaning San Clemente CA',
    'retail cleaning San Clemente',
    'restaurant cleaning 92672',
    'San Clemente business cleaning'
  ],
  openGraph: {
    title: "Coastal Commercial Cleaning San Clemente | Rosie's Janitorial",
    description: 'Professional cleaning for San Clemente businesses. Retail, restaurants, offices. Coastal-friendly service.',
    url: 'https://rosiesjanitorialoc.com/service-areas/san-clemente',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/san-clemente',
  },
};

export default function SanClementePage() {
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
      "name": "San Clemente",
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6">
                Commercial Cleaning for <span className="text-cyan-600">San Clemente</span> Businesses
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Professional janitorial services for San Clemente's vibrant business community. From beachside retail to downtown offices, we keep your coastal business looking its best. Serving 92672, 92673, and 92674.
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
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Coastal Business Needs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-900 text-center mb-12">
              Understanding San Clemente's Unique Environment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/wave.png"
      alt="Wave Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-2xl font-semibold text-center text-cyan-900 mb-4">Coastal Conditions</h3>
                <p className="text-cyan-700 text-center mb-4">
                  Salt air, sand tracking, and humidity present unique cleaning challenges. We use specialized products and techniques that protect surfaces from coastal wear while delivering spotless results.
                </p>
                <ul className="space-y-2 text-cyan-600 text-center text-sm">
                  <li>• Salt-resistant cleaning methods</li>
                  <li>• Sand removal systems</li>
                  <li>• Humidity-appropriate products</li>
                  <li>• Outdoor furniture and fixture care</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/tourism.png"
      alt="Tourism Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-2xl font-semibold text-center text-cyan-900 mb-4">Tourism & Retail Focus</h3>
                <p className="text-cyan-700 text-center mb-4">
                  San Clemente thrives on tourism and local business. We help you maintain the pristine appearance that attracts visitors and keeps locals coming back, with flexible scheduling around your peak seasons.
                </p>
                <ul className="space-y-2 text-cyan-600 text-center text-sm">
                  <li>• High-season intensified service</li>
                  <li>• Window and glass expertise</li>
                  <li>• Entrance and entryway focus</li>
                  <li>• Customer-facing area priorities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types We Serve */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-900 text-center mb-4">
              Serving San Clemente's Diverse Business Mix
            </h2>
            <p className="text-center text-cyan-600 mb-12 max-w-2xl mx-auto">
              From Del Mar to North Beach, we clean every type of commercial space
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/shopping.png"
      alt="Shopping Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-center text-cyan-900 mb-3">Retail Stores</h3>
                <p className="text-cyan-600 text-center mb-3">
                  Boutiques, surf shops, gift stores, and specialty retail throughout downtown and Del Mar.
                </p>
                <ul className="text-sm text-cyan-600 text-center space-y-1">
                  <li>• Storefront window cleaning</li>
                  <li>• High-traffic floor maintenance</li>
                  <li>• Fitting room sanitization</li>
                  <li>• Display case cleaning</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/silverware.png"
      alt="Silverware Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-center text-cyan-900 mb-3">Restaurants & Cafes</h3>
                <p className="text-cyan-600 text-center mb-3">
                  Dining establishments, quick-service restaurants, coffee shops, and bars.
                </p>
                <ul className="text-sm text-cyan-600 text-center space-y-1">
                  <li>• Dining area deep cleaning</li>
                  <li>• Kitchen facility support</li>
                  <li>• Patio furniture maintenance</li>
                  <li>• Grease and grime removal</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/corporate.png"
      alt="Corporate Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-center text-cyan-900 mb-3">Professional Offices</h3>
                <p className="text-cyan-600 text-center mb-3">
                  Real estate offices, financial services, legal practices, and business services.
                </p>
                <ul className="text-sm text-cyan-600 text-center space-y-1">
                  <li>• Daily office maintenance</li>
                  <li>• Conference room cleaning</li>
                  <li>• Reception area care</li>
                  <li>• Carpet and floor programs</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/gym.png"
      alt="Gym Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-center text-cyan-900 mb-3">Fitness & Wellness</h3>
                <p className="text-cyan-600 text-center mb-3">
                  Gyms, yoga studios, pilates centers, and wellness facilities.
                </p>
                <ul className="text-sm text-cyan-600 text-center space-y-1">
                  <li>• Equipment sanitization</li>
                  <li>• Locker room deep cleaning</li>
                  <li>• Mat and floor disinfection</li>
                  <li>• Shower facility maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/salon.png"
      alt="Salon Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-center text-cyan-900 mb-3">Salons & Spas</h3>
                <p className="text-cyan-600 text-center mb-3">
                  Hair salons, nail salons, day spas, and personal care businesses.
                </p>
                <ul className="text-sm text-cyan-600 text-center space-y-1">
                  <li>• Treatment room sanitization</li>
                  <li>• Mirror and glass polishing</li>
                  <li>• Floor hair removal</li>
                  <li>• Waiting area maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/hotel.png"
      alt="Hotel Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold  text-center text-cyan-900 mb-3">Hospitality</h3>
                <p className="text-cyan-600 text-center mb-3">
                  Hotels, motels, vacation rentals, and B&Bs serving San Clemente visitors.
                </p>
                <ul className="text-sm text-cyan-600 text-center space-y-1">
                  <li>• Lobby and common areas</li>
                  <li>• Turnover cleaning support</li>
                  <li>• Pool and deck areas</li>
                  <li>• Emergency response available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* San Clemente Locations */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-900 text-center mb-8">
              Complete San Clemente Coverage
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-cyan-900 mb-3">Downtown & Del Mar</h3>
                <p className="text-sm text-cyan-700">
                  Avenida Del Mar, El Camino Real, downtown business district, pier plaza area
                </p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-cyan-900 mb-3">North Beach & Pier</h3>
                <p className="text-sm text-cyan-700">
                  North Beach businesses, pier area shops, beachfront establishments
                </p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-cyan-900 mb-3">Talega & Forster Ranch</h3>
                <p className="text-sm text-cyan-700">
                  Talega Town Center, Forster Ranch businesses, residential area retail
                </p>
              </div>
            </div>
            <p className="text-center mt-8 font-bold text-cyan-600">
              Serving all San Clemente zip codes: 92672, 92673, 92674
            </p>
          </div>
        </section>

        {/* Flexible Service */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-serif mb-6 text-center">
                Flexible Scheduling for Your Business Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
  <img
    src="/icons_dana/early.png"
    alt="Early Morning Icon"
    className="w-36 h-36 object-contain mb-4"
  />
  <h3 className="font-semibold mb-2">
    Early Morning Service
  </h3>
  <p className="text-sm opacity-90">
    Before your doors open, we've already cleaned. Perfect for retail and restaurants.
  </p>
</div>

                <div className="flex flex-col items-center text-center">
  <img
    src="/icons_dana/day&night.png"
    alt="Day & Night Icon"
    className="w-36 h-36 object-contain mb-4"
  />
  <h3 className="font-semibold mb-2">
    Evening & Night Cleaning
  </h3>
  <p className="text-sm opacity-90">
    After-hours service for offices and businesses that want minimal disruption.
  </p>
</div>

                <div className="flex flex-col items-center text-center">
  <img
    src="/icons_dana/season.png"
    alt="Season Icon"
    className="w-36 h-36 object-contain mb-4"
  />
  <h3 className="font-semibold mb-2">
    Seasonal Adjustments
  </h3>
  <p className="text-sm opacity-90">
    Increased service during busy tourist season, scaled back during slower months.
  </p>
</div>

                <div>
                  <div className="flex flex-col items-center text-center">
  <img
    src="/icons_dana/emergency_response.png"
    alt="Emergency Response Icon"
    className="w-36 h-36 object-contain mb-4"
  />

  <h3 className="font-semibold mb-2">
    Emergency Response
  </h3>

  <p className="text-sm opacity-90">
    Unexpected mess or spill? We're available for same-day emergency cleaning.
  </p>
</div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Keep Your San Clemente Business Shining
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're on Del Mar or in Talega, we're ready to help your business look its absolute best. Free quotes, flexible terms, and exceptional service.
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
                Get Your Free Quote
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
            <span>San Clemente</span>
          </nav>
        </div>
      </div>
      
      <Footer />
    </>
  );
}