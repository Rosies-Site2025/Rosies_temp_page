import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Service Areas | Commercial Cleaning Orange County",
  description: "Professional commercial cleaning services throughout Orange County, CA. Serving Irvine, Mission Viejo, Lake Forest, and more. Call (949) 687-8297",
};

export default function ServiceAreasPage() {
  const areas = [
    { name: "Irvine", slug: "irvine", desc: "Serving Business Complex, Spectrum, and all Irvine areas" },
    { name: "Mission Viejo", slug: "mission-viejo", desc: "Covering 92691, 92692, and 92694 zip codes" },
    { name: "Laguna Niguel", slug: "laguna-niguel", desc: "Crown Valley, Aliso Creek, and surrounding areas" },
    { name: "Lake Forest", slug: "lake-forest", desc: "Foothill Ranch to Civic Center and beyond" },
    { name: "Rancho Santa Margarita", slug: "rancho-santa-margarita", desc: "RSM Town Center and all 92688 areas" },
    { name: "Aliso Viejo", slug: "aliso-viejo", desc: "Town Center, Pacific Park, and 92656 area" },
    { name: "Laguna Hills", slug: "laguna-hills", desc: "Saddleback Valley and Nellie Gail Ranch" },
    { name: "San Clemente", slug: "san-clemente", desc: "Downtown, Talega, and Forster Ranch" },
    { name: "Dana Point", slug: "dana-point", desc: "Harbor, Monarch Beach, and Lantern Village" },
    { name: "San Juan Capistrano", slug: "san-juan-capistrano", desc: "Historic Downtown and Los Rios District" },
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Service Areas</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Serving Orange County</h1>
              <p className="text-xl text-neutral-400 max-w-2xl">
                Professional commercial cleaning services throughout South Orange County. Local expertise, responsive service.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {areas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group grid md:grid-cols-12 gap-6 py-8 border-b border-neutral-200 hover:border-neutral-900 transition-colors"
                >
                  <div className="md:col-span-1 text-neutral-400 font-mono text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="text-2xl font-semibold text-neutral-900 group-hover:translate-x-2 transition-transform">
                      {area.name}
                    </h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-neutral-600">{area.desc}</p>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ArrowRight size={20} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Don't see your city?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">We serve all of Orange County. Contact us to discuss your location.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19496878297" className="px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors">Call (949) 687-8297</a>
              <Link href="/contact" className="px-8 py-4 border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
