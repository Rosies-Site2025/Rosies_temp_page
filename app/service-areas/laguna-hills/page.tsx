// app/service-areas/laguna-hills/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Medical Office Cleaning Laguna Hills | Healthcare Facility Janitorial",
  description: "Specialized medical and healthcare facility cleaning in Laguna Hills. OSHA-compliant, infection control protocols. Serving 92653 medical offices, dental practices, clinics. Call (949) 687-8297",
  keywords: [
    'medical office cleaning Laguna Hills',
    'healthcare cleaning Laguna Hills CA',
    'dental office cleaning 92653',
    'commercial cleaning Laguna Hills',
    'janitorial services Laguna Hills',
    'clinic cleaning Laguna Hills'
  ],
  openGraph: {
    title: "Medical & Healthcare Cleaning Laguna Hills | Rosie's Janitorial",
    description: 'Specialized cleaning for Laguna Hills medical facilities. OSHA-compliant protocols, infection control expertise.',
    url: 'https://rosiesjanitorialoc.com/service-areas/laguna-hills',
  },
  alternates: {
    canonical: 'https://rosiesjanitorialoc.com/service-areas/laguna-hills',
  },
};

export default function LagunaHillsPage() {
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
      "name": "Laguna Hills",
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
              <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Healthcare Cleaning Specialists
              </div>
              <h1 className="text-8xl md:text-6xl font-serif-bold text-cyan-900 mb-6">
                <span className="text-violet-400">Medical Facility Cleaning</span> in Laguna Hills
              </h1>
              <p className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8">
                Trusted by Laguna Hills healthcare providers for infection-control focused cleaning. OSHA-compliant protocols, medical-grade disinfection, and staff trained in healthcare facility standards for the 92653 area.
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
                  Request Healthcare Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Expertise */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Healthcare Cleaning Expertise You Can Trust
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🦠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Infection Control</h3>
                <p className="text-cyan-600">
                  Hospital-grade disinfectants and EPA-registered products specifically chosen for healthcare environments. Proper dwell times and application methods that truly eliminate pathogens.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/safety.png"
      alt="Safety Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">OSHA Compliance</h3>
                <p className="text-cyan-600">
                  Staff trained in bloodborne pathogen protocols, proper PPE usage, and handling of biomedical waste. We understand and follow OSHA regulations for healthcare facilities.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                 <div className="flex justify-center items-center">
    <img
      src="/icons_dana/medical.png"
      alt="Medical Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-900">Medical Environment Training</h3>
                <p className="text-cyan-600">
                  Our teams understand the unique requirements of healthcare spaces—from patient safety to HIPAA privacy considerations. Specialized training for medical facility cleaning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare-Specific Services */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Comprehensive Medical Facility Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-300">
                <h3 className="text-xl text-cyan-900 font-semibold mb-3 flex items-center gap-2">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/dental.png"
      alt="Dental Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                  Medical & Dental Offices
                </h3>
                <ul className="space-y-2 text-cyan-600 ml-8">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Exam room disinfection between patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Waiting area sanitization and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Restroom deep cleaning and disinfection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Reception desk and high-touch surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Floor care appropriate for medical settings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-300">
                <h3 className="text-xl text-cyan-900 font-semibold mb-3 flex items-center gap-2">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/scientist.png"
      alt="Scientist Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                  Specialty Clinics & Practices
                </h3>
                <ul className="space-y-2 text-cyan-600 ml-8">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Physical therapy and rehabilitation centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Chiropractic offices and treatment rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Veterinary clinics and animal hospitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Urgent care and walk-in clinics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Lab and diagnostic centers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-300">
                <h3 className="text-xl font-semibold text-cyan-900 mb-3 flex items-center gap-2">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/wellness.png"
      alt="Wellness Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                  Wellness & Therapy Centers
                </h3>
                <ul className="space-y-2 text-cyan-600 ml-8">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Mental health counseling offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Massage therapy and spa facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Acupuncture clinics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Holistic health centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Senior care facilities and assisted living</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-300">
                <h3 className="text-xl font-semibold text-cyan-900 mb-3 flex items-center gap-2">
                  <div className="flex justify-center items-center">
    <img
      src="/icons_dana/medical-office.png"
      alt="Medical Office Icon"
      className="w-28 h-28 object-contain"
    />
  </div>
                  Medical Office Buildings
                </h3>
                <ul className="space-y-2 text-cyan-600 ml-8">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Multi-tenant healthcare complexes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Common area lobbies and corridors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Shared restrooms and break rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Elevator and stairwell maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-900 mt-1">•</span>
                    <span>Parking structure cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Special Healthcare Protocols */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif-bold text-violet-400 text-center mb-8">
              Our Healthcare Facility Protocols
            </h2>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-cyan-900 text-lg flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Patient Safety First
                  </h3>
                  <p className="text-cyan-700 text-sm mb-4">
                    Cleaning schedules that minimize patient exposure. Quiet operations, non-disruptive service, and awareness of occupied treatment areas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg text-cyan-900 flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Color-Coded Systems
                  </h3>
                  <p className="text-cyan-700 text-sm mb-4">
                    Separate cleaning tools and materials for different areas. Prevents cross-contamination between patient care areas and general spaces.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg text-cyan-900 flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Proper Product Selection
                  </h3>
                  <p className="text-cyan-700 text-sm mb-4">
                    EPA-registered disinfectants effective against healthcare-associated pathogens. Products approved for use in medical facilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg text-cyan-900 flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Documentation & Reporting
                  </h3>
                  <p className="text-cyan-700 text-sm mb-4">
                    Cleaning logs, service reports, and documentation to support your facility's compliance and quality assurance programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Laguna Hills Areas */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-violet-400 text-center mb-8">
              Serving Laguna Hills Healthcare Community
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
              <p className="text-center text-cyan-700 mb-6">
                We proudly serve medical facilities throughout Laguna Hills, including practices near:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-cyan-700">
                <div>
                  <h4 className="font-semibold text-cyan-900 mb-2">Medical Complexes:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Saddleback Memorial Medical Center area</li>
                    <li>• El Toro Road medical corridor</li>
                    <li>• Moulton Parkway practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-900 mb-2">Coverage:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• All of 92653 zip code</li>
                    <li>• Nearby Laguna Woods facilities</li>
                    <li>• Adjacent Mission Viejo locations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Healthcare Providers Choose Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif-bold text-cyan-900 text-center mb-12">
              Trusted by Healthcare Providers
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/specialized.png"
      alt="Specialized Training Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h4 className="font-semibold text-cyan-900 mb-2">Specialized Training</h4>
                <p className="text-sm text-cyan-600">Healthcare-specific protocols</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/HIPAA.png"
      alt="HIPAA Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h4 className="font-semibold text-cyan-900 mb-2">HIPAA Aware</h4>
                <p className="text-sm text-cyan-600">Respecting patient privacy</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/fast.png"
      alt="Fast Service Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h4 className="font-semibold text-cyan-900 mb-2">Reliable Service</h4>
                <p className="text-sm text-cyan-600">Never miss a scheduled clean</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center items-center">
    <img
      src="/icons_dana/phone.png"
      alt="Phone Icon"
      className="w-32 h-32 object-contain"
    />
  </div>
                <h4 className="font-semibold text-cyan-900 mb-2">Direct Communication</h4>
                <p className="text-sm text-cyan-600">Always available when needed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-6">
              Protect Your Patients and Staff
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the peace of mind that comes from professional healthcare facility cleaning. Free consultations and site assessments for Laguna Hills medical offices.
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
                Request Medical Facility Quote
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
            <span>Laguna Hills</span>
          </nav>
        </div>
      </div>
      
      <Footer />
    </>
  );
}