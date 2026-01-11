import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial Cleaning Irvine CA | Office Janitorial Services",
  description: "Professional commercial cleaning services in Irvine, CA. Office cleaning, floor care, disinfection. Serving Irvine Business Complex, Spectrum, and all Irvine areas. Call (949) 687-8297",
  keywords: ['commercial cleaning Irvine', 'janitorial services Irvine CA', 'office cleaning Irvine', 'Irvine commercial cleaners'],
  openGraph: {
    title: "Commercial Cleaning Irvine CA | Rosie's Janitorial",
    description: 'Professional commercial cleaning in Irvine. Serving Spectrum, Business Complex, and all Irvine.',
    url: 'https://rosiesjanitorialoc.com/service-areas/irvine',
  },
  alternates: { canonical: 'https://www.rosiesjanitorialoc.com/service-areas/irvine' },
};

export default function IrvinePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Irvine, CA</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Commercial Cleaning in Irvine</h1>
              <p className="text-xl text-neutral-400 max-w-2xl mb-10">
                Professional janitorial services for Irvine businesses. From Irvine Business Complex to Spectrum Center, we serve all Irvine areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+19496878297" className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors">
                  (949) 687-8297
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors">
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">What We Do</p>
                <h2 className="text-4xl text-neutral-900 leading-tight">Complete commercial cleaning for Irvine businesses</h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: "Office Cleaning", desc: "Daily office maintenance for corporate offices and business parks." },
                    { title: "Floor Care", desc: "Carpet cleaning, VCT maintenance, tile and grout, hard surface care." },
                    { title: "Medical Facilities", desc: "OSHA-compliant cleaning for medical and dental practices." },
                    { title: "Retail Cleaning", desc: "Professional cleaning for Spectrum stores and retail locations." },
                    { title: "Day Porter Services", desc: "On-site staff for continuous maintenance in high-traffic buildings." },
                    { title: "Green Cleaning", desc: "Eco-friendly solutions for environmentally conscious businesses." }
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

        {/* Areas */}
        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Areas We Serve</p>
              <h2 className="text-4xl text-neutral-900 leading-tight mb-10">Serving all Irvine neighborhoods</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-neutral-700">
                {["Irvine Business Complex", "Irvine Spectrum", "University Research Park", "Technology Center", "Airport Area", "Woodbridge", "Northwood", "Westpark", "Turtle Rock", "University Park", "All Irvine zip codes"].map((area, i) => (
                  <div key={i} className="py-2">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Ready to get started?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Free quotes, flexible scheduling, and professional service for Irvine businesses.</p>
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
