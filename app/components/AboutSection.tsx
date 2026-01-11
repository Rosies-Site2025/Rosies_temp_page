'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl text-neutral-900 leading-tight mb-6">
              Family values, professional results
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Founded in 2009, Rosie's Janitorial has grown from a small family operation into 
              one of Orange County's most trusted commercial cleaning companies. We're still 
              family-owned, still women-operated, and still committed to the same standards 
              that built our reputation.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              Every member of our team is background-checked, trained, and invested in delivering 
              exceptional results. When you hire us, you get consistency—the same faces, the same 
              quality, every single visit.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-neutral-900 font-semibold hover:gap-4 transition-all"
            >
              Our Full Story
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="bg-neutral-950 text-white p-12">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <div className="text-5xl font-bold mb-2">2009</div>
                <div className="text-neutral-400">Founded</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-neutral-400">Clients Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-neutral-400">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24hr</div>
                <div className="text-neutral-400">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
