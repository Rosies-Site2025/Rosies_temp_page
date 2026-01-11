'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceAreasSection() {
  const areas = [
    { name: "Irvine", slug: "irvine" },
    { name: "Mission Viejo", slug: "mission-viejo" },
    { name: "Laguna Niguel", slug: "laguna-niguel" },
    { name: "Lake Forest", slug: "lake-forest" },
    { name: "Rancho Santa Margarita", slug: "rancho-santa-margarita" },
    { name: "Aliso Viejo", slug: "aliso-viejo" },
    { name: "Laguna Hills", slug: "laguna-hills" },
    { name: "San Clemente", slug: "san-clemente" },
    { name: "Dana Point", slug: "dana-point" },
    { name: "San Juan Capistrano", slug: "san-juan-capistrano" },
  ];

  return (
    <section className="py-24 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Service Areas</p>
            <h2 className="text-4xl md:text-5xl text-neutral-900 leading-tight mb-6">
              Serving South Orange County
            </h2>
            <p className="text-neutral-600 mb-8">
              Local expertise, responsive service. We know these communities because we're part of them.
            </p>
            <Link 
              href="/service-areas"
              className="inline-flex items-center gap-2 text-neutral-900 font-semibold hover:gap-4 transition-all"
            >
              All Service Areas
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right - Area List */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-x-8">
              {areas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-center justify-between py-5 border-b border-neutral-300 hover:border-neutral-900 transition-colors"
                >
                  <span className="text-lg text-neutral-900 group-hover:translate-x-2 transition-transform">
                    {area.name}
                  </span>
                  <ArrowRight size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
