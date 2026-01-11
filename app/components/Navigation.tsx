'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServiceAreasOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServiceAreasOpen(false), 150);
  };

  const serviceAreas = [
    { name: "Rancho Santa Margarita", slug: "rancho-santa-margarita" },
    { name: "Irvine", slug: "irvine" },
    { name: "Mission Viejo", slug: "mission-viejo" },
    { name: "Laguna Niguel", slug: "laguna-niguel" },
    { name: "Lake Forest", slug: "lake-forest" },
    { name: "Aliso Viejo", slug: "aliso-viejo" },
    { name: "Laguna Hills", slug: "laguna-hills" },
    { name: "San Clemente", slug: "san-clemente" },
    { name: "Dana Point", slug: "dana-point" },
    { name: "San Juan Capistrano", slug: "san-juan-capistrano" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-neutral-200' : 'bg-neutral-950'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isScrolled ? "/rosies_logo.png" : "/rosies-white-logo.png"}
              alt="Rosie's Janitorial"
              width={144}
              height={144}
              className="w-36 h-36 object-contain"
            />
            <div className={isScrolled ? 'text-neutral-900' : 'text-white'}>
              <div className="font-bold text-lg leading-tight">Rosie's Janitorial</div>
              <div className="text-xs opacity-60">Commercial Cleaning</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['/', '/about', '/services', '/contact'].map((href, i) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {['Home', 'About', 'Services', 'Contact'][i]}
              </Link>
            ))}

            {/* Service Areas Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-300 hover:text-white'
              }`}>
                Areas
                <ChevronDown size={14} className={`transition-transform ${isServiceAreasOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServiceAreasOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-56"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white border border-neutral-200 shadow-xl py-2">
                    <Link href="/service-areas" className="block px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 border-b border-neutral-100">
                      All Service Areas
                    </Link>
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="tel:+19496878297"
              className={`text-sm font-semibold px-5 py-2.5 transition-colors ${
                isScrolled 
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                  : 'bg-white text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              (949) 687-8297
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/service-areas', label: 'Service Areas' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-neutral-900 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+19496878297"
              className="block bg-neutral-900 text-white text-center font-semibold py-3 mt-4"
            >
              (949) 687-8297
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
