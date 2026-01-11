import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial Cleaning Mission Viejo | Janitorial Services",
  description: "Top-rated commercial cleaning services in Mission Viejo, CA. Office cleaning, floor care, disinfection for 92691, 92692, 92694 areas. Women-owned, licensed & insured. Free quotes - (949) 687-8297",
  keywords: ['commercial cleaning Mission Viejo', 'janitorial services Mission Viejo', 'office cleaning Mission Viejo CA'],
  openGraph: {
    title: "Commercial Cleaning Mission Viejo | Rosie's Janitorial",
    description: 'Professional commercial cleaning in Mission Viejo. Women-owned, licensed & insured.',
    url: 'https://rosiesjanitorialoc.com/service-areas/mission-viejo',
  },
  alternates: { canonical: 'https://www.rosiesjanitorialoc.com/service-areas/mission-viejo' },
};

export default function MissionViejoPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Mission Viejo, CA</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Commercial Cleaning in Mission Viejo</h1>
              <p className="text-xl text-neutral-400 max-w-2xl mb-10">
                Trusted janitorial services for Mission Viejo businesses. Women-owned, licensed & insured. Serving all Mission Viejo zip codes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+19496878297" className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors">(949) 687-8297</a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors">Get a Quote <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">What We Do</p>
                <h2 className="text-4xl text-neutral-900 leading-tight">Complete commercial cleaning for Mission Viejo</h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: "Office Cleaning", desc: "Comprehensive cleaning for professional offices and corporate centers." },
                    { title: "Floor Care & Maintenance", desc: "Carpet cleaning, VCT stripping and waxing, tile & grout cleaning." },
                    { title: "Medical Facility Cleaning", desc: "OSHA and HIPAA-compliant cleaning for medical and dental practices." },
                    { title: "Retail & Shopping Centers", desc: "Professional cleaning for retail locations and shopping centers." },
                    { title: "Day Porter Services", desc: "On-site daytime maintenance staff for continuous cleaning support." },
                    { title: "Eco-Friendly Cleaning", desc: "Green cleaning products for environmentally conscious businesses." }
                  ].map((s, i) => (
                    <div key={i} className="border-l-2 border-neutral-200 pl-6">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                      <p className="text-neutral-600 text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Areas We Serve</p>
              <h2 className="text-4xl text-neutral-900 leading-tight mb-10">Serving all Mission Viejo areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-neutral-700">
                {["Lake Mission Viejo", "The Shops at Mission Viejo", "Kaleidoscope Center", "Oso Creek", "Crown Valley", "92691 area", "92692 area", "92694 area"].map((area, i) => (
                  <div key={i} className="py-2">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Ready to get started?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Free quotes and same-day response for Mission Viejo businesses.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19496878297" className="px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors">Call (949) 687-8297</a>
              <Link href="/contact" className="px-8 py-4 border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors">Request Quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
