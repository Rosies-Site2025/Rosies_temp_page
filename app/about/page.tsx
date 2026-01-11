import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | Rosie's Janitorial Services",
  description: "Women-owned commercial cleaning company serving Orange County since 2009. Licensed, insured, and committed to excellence. Learn our story.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">About Us</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Family values, professional results</h1>
              <p className="text-xl text-neutral-400 max-w-2xl">
                Founded in 2009, we've grown from a small family operation into one of Orange County's most trusted commercial cleaning companies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl text-neutral-900 leading-tight mb-6">Our Story</h2>
                <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                  <p>
                    Rosie's Janitorial started with a simple belief: businesses deserve cleaning 
                    services they can actually count on. Too many companies were left frustrated 
                    by unreliable cleaners who cut corners or didn't show up at all.
                  </p>
                  <p>
                    We built our company on accountability. Every member of our team is 
                    background-checked, professionally trained, and invested in doing the job 
                    right. When you hire us, you get the same crew every visit—people who know 
                    your space and take pride in maintaining it.
                  </p>
                  <p>
                    Today, we serve hundreds of Orange County businesses, from small offices 
                    to large corporate facilities. We're still family-owned, still women-operated, 
                    and still committed to the same standards that built our reputation.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-950 text-white p-12">
                <h3 className="text-2xl mb-8">By the numbers</h3>
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

        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl text-neutral-900 leading-tight mb-12">What sets us apart</h2>
              <div className="space-y-8">
                {[
                  { title: "Women-Owned", desc: "Certified women-owned business bringing a unique perspective to commercial cleaning." },
                  { title: "Licensed & Insured", desc: "Fully licensed California contractor with $2M liability coverage." },
                  { title: "Background-Checked Staff", desc: "Every team member passes thorough background verification." },
                  { title: "Consistent Crews", desc: "Same team every visit—they know your space and your expectations." },
                  { title: "Satisfaction Guarantee", desc: "Not happy? We'll make it right or your money back." },
                ].map((item, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-4 pb-8 border-b border-neutral-300">
                    <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                    <p className="md:col-span-2 text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Ready to work with us?</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Get a free quote and see the difference professional cleaning makes.</p>
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
