'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    { name: "Irvine", slug: "irvine" },
    { name: "Mission Viejo", slug: "mission-viejo" },
    { name: "Laguna Niguel", slug: "laguna-niguel" },
    { name: "Lake Forest", slug: "lake-forest" },
    { name: "Aliso Viejo", slug: "aliso-viejo" },
  ];

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/rosies-white-logo.png"
                alt="Rosie's Janitorial"
                width={144}
                height={144}
                className="w-36 h-36 object-contain"
              />
              <div>
                <div className="font-bold text-lg">Rosie's Janitorial</div>
                <div className="text-xs text-neutral-500">Commercial Cleaning</div>
              </div>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Women-owned commercial cleaning company serving Orange County businesses since 2009. 
              Licensed, insured, and committed to excellence.
            </p>
            <a 
              href="tel:+19496878297" 
              className="text-2xl font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              (949) 687-8297
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">Company</h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">Service Areas</h4>
            <div className="space-y-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {area.name}
                </Link>
              ))}
              <Link href="/service-areas" className="block text-white font-medium mt-4">
                All Areas
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            {currentYear} Rosie's Janitorial Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
