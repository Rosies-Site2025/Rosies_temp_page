import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Rosie's Janitorial",
  description: "Professional commercial cleaning services: office cleaning, floor care, medical facility cleaning, retail cleaning, and more. Serving Orange County.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Office Cleaning",
      desc: "Complete office maintenance including workstations, common areas, restrooms, and break rooms. Daily, weekly, or custom schedules available.",
      details: ["Desk and surface cleaning", "Restroom sanitization", "Break room maintenance", "Trash removal", "Vacuum and mopping"]
    },
    {
      title: "Floor Care",
      desc: "Professional floor maintenance for all surface types. Keep your floors looking their best with our comprehensive care programs.",
      details: ["Carpet cleaning and extraction", "VCT stripping and waxing", "Tile and grout cleaning", "Hard surface buffing", "Concrete polishing"]
    },
    {
      title: "Medical Facility Cleaning",
      desc: "OSHA and HIPAA-compliant cleaning for healthcare environments. Specialized protocols for medical offices, dental practices, and clinics.",
      details: ["Hospital-grade disinfection", "Biohazard protocols", "Exam room cleaning", "Waiting area maintenance", "Compliance documentation"]
    },
    {
      title: "Retail Cleaning",
      desc: "Keep your customer-facing spaces spotless and inviting. We understand retail's unique needs and scheduling requirements.",
      details: ["Store front cleaning", "Display area dusting", "Fitting room maintenance", "Back room organization", "After-hours service"]
    },
    {
      title: "Day Porter Services",
      desc: "On-site staff for continuous maintenance throughout business hours. Ideal for high-traffic facilities requiring constant attention.",
      details: ["Real-time cleaning", "Restroom monitoring", "Common area upkeep", "Spill response", "Lobby maintenance"]
    },
    {
      title: "Green Cleaning",
      desc: "Eco-friendly cleaning solutions that are safe for your team, customers, and the environment without compromising effectiveness.",
      details: ["EPA-approved products", "Reduced chemical exposure", "Sustainable practices", "LEED compliance support", "Green certification"]
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Our Services</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Commercial cleaning solutions</h1>
              <p className="text-xl text-neutral-400 max-w-2xl">
                Comprehensive cleaning services tailored to your facility's needs. Professional results, every time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 py-16 border-b border-neutral-200">
                  <div>
                    <span className="text-neutral-400 font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="text-3xl font-semibold text-neutral-900 mt-2 mb-4">{service.title}</h2>
                    <p className="text-neutral-600 text-lg leading-relaxed">{service.desc}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Includes</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Need a custom solution?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Every facility is different. Let's discuss your specific cleaning requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19496878297" className="px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors">Call (949) 687-8297</a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors">Get a Quote <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
