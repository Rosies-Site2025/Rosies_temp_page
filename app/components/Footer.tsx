// components/Footer.tsx
'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, } from 'lucide-react';
import Link from 'next/link';
import { FaHandsBubbles } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Office Cleaning', href: '/services#office' },
    { name: 'Floor Care', href: '/services#floor' },
    { name: 'Disinfection Services', href: '/services#disinfection' },
    { name: 'Day Porter Services', href: '/services#porter' },
    { name: 'Retail Cleaning', href: '/services#retail' },
    { name: 'Green Cleaning', href: '/services#green' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-cyan-900 text-cyan-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
  <div className="relative w-10 h-10">
    {/* Glow effect - outer layer */}
    <div className="absolute inset-0 bg-cyan-600 rounded-full blur-md opacity-50"></div>
    {/* Main circle with logo */}
    <div className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg">
      <img 
        src="/rosies_logo.png" 
        alt="Rosie's Janitorial Logo" 
        className="w-19 h-19 object-contain"
      />
    </div>
  </div>
  <span className="text-xl font-bold text-white">Rosie's Janitorial</span>
</div>
      
            <p className="text-sm text-white mb-4">
              Professional commercial cleaning services you can trust. 
              Women-owned, locally operated in Orange County, CA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 text-white bg-gray-800 hover:bg-[#1d4ed8] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 text-white hover:bg-[#E1306C] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-white" />
                <a href="tel:949-687-8297" className="hover:text-white transition-colors">
                  (949) 687-8297
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-white" />
                <a href="mailto:contact@rosiesjanitorialoc.com" className="hover:text-white transition-colors break-all">
                  contact@rosiesjanitorialoc.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-white" />
                <span>Serving Orange County, California</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyan-800">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-600/20 border border-cyan-600/30 rounded-full text-xs text-white">
                <FaHandsBubbles size={12} />
                <span>Women-Owned Business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between text-white items-center gap-4 text-sm">
            <p>&copy; {currentYear} Rosie's Janitorial Services, LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}