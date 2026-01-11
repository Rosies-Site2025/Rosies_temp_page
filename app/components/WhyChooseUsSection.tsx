'use client';

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Why Rosie's</p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              A cleaning company that 
              <span className="text-neutral-500"> actually shows up</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10">
              After 15 years serving Orange County, we've learned that reliability matters most. 
              No excuses, no surprises. Just consistent, thorough cleaning from people who take 
              pride in their work.
            </p>

            <div className="space-y-6">
              {[
                "Same crew every visit - they know your space",
                "Owner-operated with direct accountability",
                "Flexible scheduling that works for you",
                "100% satisfaction guarantee on every clean"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-px h-6 bg-white mt-1" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Credentials */}
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l border-neutral-800 pl-8">
              <div className="text-5xl font-bold mb-3">Licensed</div>
              <p className="text-neutral-500 text-sm">Fully licensed contractor in California</p>
            </div>
            <div className="border-l border-neutral-800 pl-8">
              <div className="text-5xl font-bold mb-3">Insured</div>
              <p className="text-neutral-500 text-sm">$2M liability coverage protects you</p>
            </div>
            <div className="border-l border-neutral-800 pl-8">
              <div className="text-5xl font-bold mb-3">Bonded</div>
              <p className="text-neutral-500 text-sm">Your property is fully protected</p>
            </div>
            <div className="border-l border-neutral-800 pl-8">
              <div className="text-5xl font-bold mb-3">Verified</div>
              <p className="text-neutral-500 text-sm">Background-checked employees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
