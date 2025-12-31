// app/service-areas/irvine/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Commercial Cleaning Irvine CA | Office Janitorial Services",
  description: "Professional commercial cleaning services in Irvine, CA. Office cleaning, floor care, disinfection. Serving Irvine Business Complex, Spectrum, and all Irvine areas. Call (949) 687-8297",
  keywords: [
    'commercial cleaning Irvine',
    'janitorial services Irvine CA',
    'office cleaning Irvine',
    'Irvine commercial cleaners',
    'business cleaning Irvine',
    'office janitorial Irvine'
  ],
  openGraph: {
    title: "Commercial Cleaning Irvine CA | Rosie's Janitorial",
    description: 'Professional commercial cleaning in Irvine. Serving Spectrum, Business Complex, and all Irvine.',
    url: 'https://rosiesjanitorialoc.com/service-areas/irvine',
  },
  alternates: {
    canonical: 'https://www.rosiesjanitorialoc.com/service-areas/irvine',
  },
};

export default function IrvinePage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif-bold text-cyan-900 mb-6">
                Commercial Cleaning in <span className="text-violet-400">Irvine</span>
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Professional janitorial services for Irvine businesses. From Irvine Business Complex to Spectrum Center, we serve all Irvine areas. Women-owned, licensed and insured.
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
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-cyan-600 hover:bg-violet-50 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Why Irvine Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/corporate.png"
      alt="Corporate Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Corporate Expertise</h3>
                <p className="text-cyan-600">
                  Serving Irvine Business Complex, University Research Park, and corporate campuses with professional-grade cleaning standards.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/start-up.png"
      alt="start-up Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Tech-Friendly Service</h3>
                <p className="text-cyan-600">
                  Perfect for Irvine tech companies and startups. Modern methods, flexible schedules, and understanding of tech workplace needs.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/quality.png"
      alt="Quality Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Proven Quality</h3>
                <p className="text-cyan-600">
                  15+ years serving Orange County businesses. Licensed, insured, and trusted by Irvine companies across all industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-cyan-900 text-center mb-12">
              Complete Commercial Cleaning for Irvine
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/office.png"
      alt="Office Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900 text-center">Office Cleaning</h3>
                <p className="text-cyan-600 text-center">Daily office maintenance for Irvine corporate offices, professional buildings, and business parks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/polisher.png"
                    alt="Floor Care Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900 text-center">Floor Care</h3>
                <p className="text-cyan-600 text-center">Carpet cleaning, VCT maintenance, tile and grout care, and hard surface floor programs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/healthcare.png"
                    alt="Medical Facilities Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900 text-center">Medical Facilities</h3>
                <p className="text-cyan-600 text-center">OSHA-compliant cleaning for medical offices, dental practices, and healthcare facilities in Irvine.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/mall.png"
                    alt="Retail Cleaning Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900 text-center">Retail Cleaning</h3>
                <p className="text-cyan-600 text-center">Professional cleaning for Spectrum Center retail stores, boutiques, and shopping locations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/day-porter.png"
                    alt="Day Porter Services Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-cyan-900">Day Porter Services</h3>
                <p className="text-cyan-600 text-center">On-site staff for continuous maintenance in high-traffic Irvine office buildings and facilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/eco.png"
                    alt="Green Cleaning Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-cyan-900">Green Cleaning</h3>
                <p className="text-cyan-600 text-center">Eco-friendly cleaning solutions perfect for environmentally conscious Irvine businesses.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-cyan-900 text-center mb-8">
              Serving All Irvine Areas
            </h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-cyan-600 mb-6">
                We provide commercial cleaning throughout Irvine including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-cyan-700">
                <div>Irvine Business Complex</div>
                <div>Irvine Spectrum</div>
                <div>University Research Park</div>
                <div>Irvine Technology Center</div>
                <div>Airport Area</div>
                <div>Woodbridge</div>
                <div>Northwood</div>
                <div>Westpark</div>
                <div>Turtle Rock</div>
                <div>University Park</div>
                <div>All Irvine zip codes</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-cyan-900 text-center mb-12">
              Industries We Serve in Irvine
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/start-up.png"
      alt="start-up Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-900">Tech Companies</h3>
                  <p className="text-cyan-600 text-sm">Startups, software companies, and tech campuses throughout Irvine</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/healthcare.png"
                    alt="Healthcare Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-900 mb-2">Medical and Healthcare</h3>
                  <p className="text-cyan-600 text-sm">Medical offices, clinics, dental practices, and healthcare facilities</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/corporate.png"
                    alt="Corporate Offices Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-900">Corporate Offices</h3>
                  <p className="text-cyan-600 text-sm">Professional buildings, financial services, and business parks</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center items-center">
                  <img
                    src="/icons_dana/mall.png"
                    alt="Mall Icon"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-cyan-900">Retail and Shopping</h3>
                  <p className="text-cyan-600 text-sm ">Spectrum Center stores, boutiques, and retail locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Experience Professional Cleaning in Irvine
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Irvine businesses who trust us with their commercial cleaning needs. Free quotes, flexible scheduling, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19496878297"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-violet-100 transition-colors"
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
      </div>
    
      <Footer />
    </>
  );
}