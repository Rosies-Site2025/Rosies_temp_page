'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Office Cleaning",
      description: "Complete office maintenance including desks, common areas, restrooms, and break rooms.",
      image: "/services/office_cleaning.png"
    },
    {
      title: "Floor Care",
      description: "Professional carpet cleaning, hard floor maintenance, stripping, waxing, and buffing.",
      image: "/services/floor-care.png"
    },
    {
      title: "Disinfection Services",
      description: "Hospital-grade disinfection for high-touch surfaces and comprehensive facility sanitization.",
      image: "/services/disinfection.png"
    },
    {
      title: "Day Porter Services",
      description: "On-site maintenance staff for continuous cleaning throughout business hours.",
      image: "/services/day-porter.png"
    },
    {
      title: "Retail Cleaning",
      description: "Customer-facing area maintenance to keep your retail space spotless and inviting.",
      image: "/services/retail-cleaning.png"
    },
    {
      title: "Green Cleaning",
      description: "Eco-friendly cleaning solutions that are safe for your team and the environment.",
      image: "/services/green-cleaning.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl text-neutral-900 leading-tight mb-6">
            Comprehensive cleaning solutions for every facility
          </h2>
          <p className="text-lg text-neutral-600">
            From daily office maintenance to specialized floor care, we deliver consistent, 
            professional results that keep your business looking its best.
          </p>
        </div>

        {/* Services List */}
        <div className="border-t border-neutral-200">
          {services.map((service, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-12 gap-8 py-10 border-b border-neutral-200 group"
            >
              <div className="md:col-span-1 text-neutral-400 font-mono text-sm">
                0{index + 1}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-3">
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-between items-center">
          <p className="text-neutral-500">Need a custom cleaning solution?</p>
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-neutral-900 font-semibold hover:gap-4 transition-all"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
