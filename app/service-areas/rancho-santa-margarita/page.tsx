import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial Cleaning Rancho Santa Margarita | Janitorial Services",
  description: "Professional commercial cleaning services in Rancho Santa Margarita, CA. Office cleaning, floor care, disinfection. Women-owned, licensed & insured. Free quotes - (949) 687-8297",
  keywords: ['commercial cleaning Rancho Santa Margarita', 'janitorial services RSM', 'office cleaning Rancho Santa Margarita'],
  openGraph: {
    title: "Commercial Cleaning Rancho Santa Margarita | Rosie's Janitorial",
    description: 'Professional commercial cleaning in Rancho Santa Margarita. Women-owned, licensed & insured.',
    url: 'https://rosiesjanitorialoc.com/service-areas/rancho-santa-margarita',
  },
  alternates: { canonical: 'https://www.rosiesjanitorialoc.com/service-areas/rancho-santa-margarita' },
};

export default function RanchoSantaMargaritaPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Rancho Santa Margarita, CA</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Commercial Cleaning in Rancho Santa Margarita</h1>
              <p className="text-xl text-neutral-400 max-w-2xl mb-10">
                Trusted janitorial services for RSM businesses. Women-owned, licensed & insured. Serving the 92688 area.
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
                <h2 className="text-4xl text-neutral-900 leading-tight">Complete commercial cleaning for RSM businesses</h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: "Office Cleaning", desc: "Professional cleaning for offices and business centers." },
                    { title: "Floor Care", desc: "Carpet cleaning, tile maintenance, stripping and waxing." },
                    { title: "Medical Facilities", desc: "OSHA-compliant cleaning for healthcare practices." },
                    { title: "Retail Cleaning", desc: "Specialized cleaning for retail and shopping locations." },
                    { title: "Day Porter Services", desc: "On-site staff for continuous facility maintenance." },
                    { title: "Green Cleaning", desc: "Eco-friendly solutions for your business." }
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
              <h2 className="text-4xl text-neutral-900 leading-tight mb-10">Serving all Rancho Santa Margarita</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-neutral-700">
                {["RSM Town Center", "Dove Canyon", "Robinson Ranch", "Rancho Cielo", "Trabuco Canyon", "All 92688 areas"].map((area, i) => (
                  <div key={i} className="py-2">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Ready to get started?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Free quotes and professional service for RSM businesses.</p>
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
