// app/service-areas/san-juan-capistrano/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "San Juan Capistrano Commercial Cleaning | Small Business Janitorial",
  description: "Professional cleaning for San Juan Capistrano businesses. Historic downtown specialists, small business focus. Serving 92675, 92693. Reliable, personalized service. Call (949) 687-8297",
  keywords: [
    'commercial cleaning San Juan Capistrano',
    'San Juan Capistrano janitorial services',
    'downtown San Juan Capistrano cleaning',
    'small business cleaning 92675',
    'office cleaning San Juan Capistrano',
    'historic district cleaning'
  ],
  openGraph: {
    title: "San Juan Capistrano Commercial Cleaning | Rosie's Janitorial",
    description: 'Caring for San Juan Capistrano businesses. Historic downtown specialists, personalized service.',
    url: 'https://rosiesjanitorialoc.com/service-areas/san-juan-capistrano',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/san-juan-capistrano',
  },
};

export default function SanJuanCapistranoPage() {
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
      "name": "San Juan Capistrano",
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
              <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6">
                Commercial Cleaning in <span className="text-cyan-600">San Juan Capistrano</span>
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Caring for San Juan Capistrano's unique business community with personalized janitorial services. From historic downtown to modern business centers, we're committed to helping local businesses thrive. Serving 92675 and 92693.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="tel:+19496878297"
    className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors"
  >
    Call Now{" "}
    <span className="pulse-number">(949) 687-8297</span>
  </a>

  <Link
    href="/#contact"
    className="bg-cyan-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-900 transition-colors"
  >
    Get Your Free Quote
  </Link>
</div>

            </div>
          </div>
        </section>

        {/* Small Business Focus */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-900 text-center mb-12">
              Supporting San Juan Capistrano's Small Business Community
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/hearthand.png"
      alt="Heart and Hand Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Personal Relationships</h3>
                <p className="text-cyan-600">
                  We're not a national chain. Like you, we're a local small business that understands the challenges and rewards of serving your community. We treat your business like our own.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/cost.png"
      alt="Cost Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Fair Pricing</h3>
                <p className="text-cyan-600">
                  No hidden fees or corporate markups. Straightforward pricing that respects small business budgets while delivering professional-quality service you can count on.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/flexible.png"
      alt="Flexible Icon"
      className="w-36 h-36 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Flexible Service</h3>
                <p className="text-cyan-600">
                  Need to adjust your schedule? Growing and need more service? Scaling back during slow season? We work with you, adapting our service as your business needs change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historic Downtown Expertise */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white-50 to-cyan-50 p-8 md:p-12 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-900 mb-6 text-center">
                Caring for Historic Downtown Businesses
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
  <img
    src="/icons_dana/historic.png"
    alt="Historic Icon"
    className="w-36 h-36 object-contain mx-auto mb-4"
  />

  <h3 className="text-xl font-semibold text-cyan-900 mb-3">
    Respect for Historic Spaces
  </h3>

  <p className="text-cyan-700 mb-4">
    Downtown San Juan Capistrano's historic buildings require special care. We understand how to clean and maintain older structures, vintage fixtures, and character features that make your space unique.
  </p>

  <ul className="space-y-2 text-cyan-600 text-sm text-center max-w-md mx-auto">
    <li>• Gentle cleaning methods for older surfaces</li>
    <li>• Care around antique fixtures and features</li>
    <li>• Understanding of historic building materials</li>
    <li>• Preservation-minded approach</li>
  </ul>
</div>

                <div className="text-center">
  <img
    src="/icons_dana/local.png"
    alt="Local Icon"
    className="w-36 h-36 object-contain mx-auto mb-4"
  />

  <h3 className="text-xl font-semibold text-cyan-900 mb-3">
    Supporting Local Character
  </h3>

  <p className="text-cyan-700 mb-4">
    The charm of downtown SJC lies in its unique shops, galleries, and restaurants. We help preserve that character while keeping your space clean, welcoming, and health-code compliant.
  </p>

  <ul className="space-y-2 text-cyan-600 text-sm text-center max-w-md mx-auto">
    <li>• Maintaining the warm, inviting atmosphere</li>
    <li>• Careful attention to display areas</li>
    <li>• Supporting your brand presentation</li>
    <li>• Understanding tourism-driven business cycles</li>
  </ul>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* Services for Different Business Types */}
       <section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-cyan-900 text-center mb-12">
      Services for Every Type of Business
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Retail */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="/icons_dana/shopping.png"
          alt="Retail Icon"
          className="w-36 h-36 object-contain mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-cyan-900 mb-3">
          Retail & Specialty Shops
        </h3>

        <p className="text-cyan-600 mb-4">
          Antique stores, galleries, boutiques, gift shops, and specialty retail throughout downtown and beyond.
        </p>

        <ul className="text-sm text-cyan-600 space-y-1 text-center max-w-sm mx-auto">
          <li>• Daily floor sweeping and mopping</li>
          <li>• Display case and shelf dusting</li>
          <li>• Window cleaning for curb appeal</li>
          <li>• Restroom maintenance</li>
          <li>• After-hours service available</li>
        </ul>
      </div>

      {/* Offices */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="/icons_dana/office.png"
          alt="Office Icon"
          className="w-36 h-36 object-contain mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-cyan-900 mb-3">
          Professional Offices
        </h3>

        <p className="text-cyan-600 mb-4">
          Law offices, real estate, financial services, medical practices, and business services.
        </p>

        <ul className="text-sm text-cyan-600 space-y-1 text-center max-w-sm mx-auto">
          <li>• Daily office cleaning</li>
          <li>• Conference room maintenance</li>
          <li>• Reception area care</li>
          <li>• Carpet and floor programs</li>
          <li>• Supply restocking</li>
        </ul>
      </div>

      {/* Restaurants */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="/icons_dana/wine.png"
          alt="Wine Icon"
          className="w-36 h-36 object-contain mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-cyan-900 mb-3">
          Restaurants & Wineries
        </h3>

        <p className="text-cyan-600 mb-4">
          Dining establishments, cafes, wine tasting rooms, and food service businesses.
        </p>

        <ul className="text-sm text-cyan-600 space-y-1 text-center max-w-sm mx-auto">
          <li>• Dining area deep cleaning</li>
          <li>• Bar and counter sanitization</li>
          <li>• Patio furniture cleaning</li>
          <li>• Restroom deep cleaning</li>
          <li>• Kitchen support cleaning</li>
        </ul>
      </div>

      {/* Service Businesses */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="/icons_dana/salon.png"
          alt="Salon Icon"
          className="w-36 h-36 object-contain mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-cyan-900 mb-3">
          Service Businesses
        </h3>

        <p className="text-cyan-600 mb-4">
          Salons, spas, fitness studios, and personal service establishments.
        </p>

        <ul className="text-sm text-cyan-600 space-y-1 text-center max-w-sm mx-auto">
          <li>• High-touch surface sanitization</li>
          <li>• Equipment and tool area cleaning</li>
          <li>• Waiting area maintenance</li>
          <li>• Locker room cleaning</li>
          <li>• Mirror and glass polishing</li>
        </ul>
      </div>

      {/* Historic Venues */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="/icons_dana/museum.png"
          alt="Museum Icon"
          className="w-36 h-36 object-contain mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-cyan-900 mb-3">
          Historic Venues & Event Spaces
        </h3>

        <p className="text-cyan-600 mb-4">
          Event venues, galleries, museums, and historic buildings open to the public.
        </p>

        <ul className="text-sm text-cyan-600 space-y-1 text-center max-w-sm mx-auto">
          <li>• Pre and post-event cleaning</li>
          <li>• Gentle care for historic features</li>
          <li>• Visitor area maintenance</li>
          <li>• Flexible event-based scheduling</li>
          <li>• Emergency cleanup services</li>
        </ul>
      </div>

      {/* Hospitality */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
       <img
          src="/icons_dana/hotel.png"
          alt="Hotel Icon"
          className="w-36 h-36 object-contain mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-cyan-900 mb-3">
          Hospitality
        </h3>

        <p className="text-cyan-600 mb-4">
          Inns, B&Bs, small hotels, and vacation rentals serving visitors to SJC.
        </p>

        <ul className="text-sm text-cyan-600 space-y-1 text-center max-w-sm mx-auto">
          <li>• Common area maintenance</li>
          <li>• Lobby and reception cleaning</li>
          <li>• Dining area support</li>
          <li>• Exterior entrance care</li>
          <li>• Flexible scheduling options</li>
        </ul>
      </div>
    </div>
  </div>
</section>


        {/* San Juan Capistrano Areas */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-900 text-center mb-8">
              Serving All of San Juan Capistrano
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-cyan-900 text-center text-lg">Historic Downtown & Los Rios:</h3>
                  <ul className="text-sm text-cyan-700 text-center space-y-1">
                    <li>• Downtown historic district</li>
                    <li>• Los Rios Street businesses</li>
                    <li>• Mission area establishments</li>
                    <li>• Camino Capistrano corridor</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-cyan-900 text-center text-lg">Modern Business Areas:</h3>
                  <ul className="text-sm text-cyan-700 text-center space-y-1">
                    <li>• Rancho Mission Viejo</li>
                    <li>• Business park locations</li>
                    <li>• Ortega Highway businesses</li>
                    <li>• All 92675 & 92693 areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Commitment */}
        <section
  className="py-16 px-4 bg-center bg-cover"
  style={{ backgroundImage: "url('/images/community-bg.jpg')" }}
>
  <div className="max-w-4xl mx-auto">
    <div className="bg-gradient-to-br from-white-100 to-cyan-100 text-cyan-900 p-8 md:p-12 rounded-2xl shadow-xl text-center">
      <h2 className="text-3xl font-serif-bold mb-6">
        Women-Owned, Community-Focused
      </h2>

      <p className="text-lg opacity-90 text-cyan-600 mb-8">
        As a women-owned small business ourselves, we understand what it takes to
        succeed in our community. We're committed to providing reliable,
        affordable, quality service that helps other small businesses thrive.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-center">
        <div>
          <h3 className="font-semibold mb-3">Our Promise</h3>
          <ul className="space-y-2 text-sm text-cyan-600 opacity-90">
            <li>✓ Always on time, every time</li>
            <li>✓ Consistent quality you can trust</li>
            <li>✓ Direct communication with ownership</li>
            <li>✓ Fair pricing, no surprises</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Your Benefits</h3>
          <ul className="space-y-2 text-sm text-cyan-600 opacity-90">
            <li>✓ Licensed, bonded & insured</li>
            <li>✓ Background-checked staff</li>
            <li>✓ Eco-friendly options available</li>
            <li>✓ 15+ years serving Orange County</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Let's Grow Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the San Juan Capistrano businesses who trust us with their cleaning needs. Free quotes, flexible service, and a partner who cares about your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="tel:+19496878297"
    className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-100 transition-colors"
  >
    Call Now{" "}
    <span className="pulse-number">(949) 687-8297</span>
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
            <span>San Juan Capistrano</span>
          </nav>
        </div>
      </div>
      
      <Footer />
    </>
  );
}