'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 min-h-[85vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-20 lg:py-32 lg:pr-16">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-6">
              Women-Owned Since 2009
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8">
              Commercial Cleaning
              <span className="block text-neutral-400">Done Right</span>
            </h1>
            
            <p className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-lg">
              Professional janitorial services for Orange County businesses. 
              Reliable, thorough, and trusted by hundreds of local companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+19496878297"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors"
              >
                (949) 687-8297
              </a>
            </div>
          </div>

          {/* Right - Stats/Credentials */}
          <div className="hidden lg:flex flex-col justify-center border-l border-neutral-800 pl-16">
            <div className="space-y-12">
              <div>
                <div className="text-6xl font-bold text-white mb-2">15+</div>
                <div className="text-neutral-400 uppercase tracking-wider text-sm">Years in Business</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-white mb-2">500+</div>
                <div className="text-neutral-400 uppercase tracking-wider text-sm">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-white mb-2">100%</div>
                <div className="text-neutral-400 uppercase tracking-wider text-sm">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center py-6 gap-6 text-sm text-neutral-400">
            <span>Licensed & Insured</span>
            <span>Background-Checked Staff</span>
            <span>Eco-Friendly Options</span>
            <span>Serving All of Orange County</span>
          </div>
        </div>
      </div>
    </section>
  );
}
