// components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const [isMobileServiceAreasOpen, setIsMobileServiceAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    // Service Areas handled separately with dropdown
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-cyan-700 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:949-687-8297" className="flex items-center gap-2 hover:text-black transition-colors">
                <Phone size={14} />
                <span>(949) 687-8297</span>
              </a>
              <a href="mailto:contact@rosiesjanitorialoc.com" className="hidden sm:flex items-center gap-2 hover:text-black transition-colors">
                <Mail size={14} />
                <span>contact@rosiesjanitorialoc.com</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              <span className="font-medium">Women-Owned Business</span> • Serving Orange County, CA
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyan-100 shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/rosies_logo.png"
                alt="Rosie's Janitorial Logo"
                width={70}
                height={70}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-cyan-900">Rosie's Janitorial</h1>
                <p className="text-xs text-cyan-600">Professional Commercial Cleaning</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cyan-700 hover:text-cyan-600 font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              {/* Service Areas Dropdown - Desktop */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServiceAreasOpen(true)}
                onMouseLeave={() => setIsServiceAreasOpen(false)}
              >
                <button 
                  className="text-cyan-700 hover:text-cyan-600 font-medium transition-colors flex items-center gap-1 relative group"
                >
                  Service Areas
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-600 ${isServiceAreasOpen ? 'rotate-180' : ''}`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 group-hover:w-full transition-all duration-300" />
                </button>

                {/* Dropdown Menu */}
                {isServiceAreasOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 border border-cyan-100">
                    <Link 
                      href="/service-areas"
                      className="block px-4 py-2 text-sm text-cyan-900 hover:bg-cyan-50 hover:text-cyan-600 font-semibold border-b border-cyan-100"
                    >
                      View All Service Areas
                    </Link>
                    <div className="max-h-96 overflow-y-auto">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          className="block px-4 py-2 text-sm text-cyan-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-cyan-700 hover:text-cyan-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-cyan-200">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-cyan-700 hover:text-cyan-600 font-medium transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Service Areas - Mobile */}
                <div>
                  <button
                    onClick={() => setIsMobileServiceAreasOpen(!isMobileServiceAreasOpen)}
                    className="w-full text-left text-cyan-700 hover:text-cyan-600 font-medium transition-colors py-2 flex items-center justify-between"
                  >
                    Service Areas
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${isMobileServiceAreasOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isMobileServiceAreasOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        href="/service-areas"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-cyan-900 hover:text-cyan-600 font-semibold py-2 border-b border-cyan-100"
                      >
                        View All Areas
                      </Link>
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-cyan-700 hover:text-cyan-600 py-1"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-all text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}