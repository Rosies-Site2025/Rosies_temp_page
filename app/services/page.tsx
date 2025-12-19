'use client';

import { useRef } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  GiFloorPolisher,
  GiMagicBroom,
  GiShop,
} from "react-icons/gi";
import { MdOutlineCleanHands, MdOutlineCompost } from "react-icons/md";
import { PiBuildings } from "react-icons/pi";
import { motion } from 'framer-motion';

function ServiceCard({ service, index }: { service: any; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      id={service.id}
      className="grid lg:grid-cols-2 gap-12 items-center relative will-change-transform"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-transparent rounded-3xl -z-10" />

      {/* IMAGE */}
      <motion.div
        className={`relative ${isReversed ? 'lg:order-2' : ''}`}
        initial={{ x: isReversed ? 60 : -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent" />
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className={`${isReversed ? 'lg:order-1' : ''}`}
        initial={{ x: isReversed ? -60 : 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <service.icon className="text-cyan-900" size={40} />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4 relative inline-block">
          {service.title}
          <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </h2>

        <p className="text-lg text-cyan-600 mb-8 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-4 mb-8">
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <CheckCircle className="text-emerald-600 mt-1" size={22} />
              <span className="text-cyan-900">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
        >
          Get a Quote
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      id: 'office',
      icon: PiBuildings,
      title: "Office Cleaning",
      image: "/services/office_cleaning.png",
      description: "Comprehensive office cleaning services designed to create a healthy, productive workspace for your team.",
      features: [
        "Desk and workstation cleaning and sanitization",
        "Common area and break room maintenance",
        "Restroom deep cleaning and restocking",
        "Conference room setup and cleaning",
        "Reception area maintenance",
        "Waste removal and recycling"
      ]
    },
    {
      id: 'floor',
      icon: GiFloorPolisher,
      title: "Floor Care Services",
      image: "/icons_dana/floor-care.jpeg",
      description: "Professional floor maintenance to keep your surfaces looking their best and lasting longer.",
      features: [
        "Carpet cleaning and stain removal",
        "Hard floor stripping and waxing",
        "Floor buffing and polishing",
        "Tile and grout cleaning",
        "VCT maintenance",
        "Concrete floor care"
      ]
    },
    {
      id: 'disinfection',
      icon: MdOutlineCleanHands,
      title: "Disinfection Services",
      image: "/services/disinfection.png",
      description: "Hospital-grade disinfection services to protect your employees and customers from harmful pathogens.",
      features: [
        "EPA-approved disinfectants",
        "High-touch surface sanitization",
        "Electrostatic spraying available",
        "COVID-19 disinfection protocols",
        "Healthcare facility cleaning",
        "Regular sanitization schedules"
      ]
    },
    {
      id: 'porter',
      icon: GiMagicBroom,
      title: "Day Porter Services",
      image: "/services/day-porter.png",
      description: "On-site staff during business hours to maintain cleanliness and address needs as they arise.",
      features: [
        "Real-time cleaning response",
        "Restroom monitoring and maintenance",
        "Lobby and entrance upkeep",
        "Meeting room turnover",
        "Spill response",
        "Customer-facing area maintenance"
      ]
    },
    {
      id: 'retail',
      icon: GiShop,
      title: "Retail Cleaning",
      image: "/services/retail-cleaning.png",
      description: "Specialized cleaning for retail spaces that keeps your store inviting and customer-ready.",
      features: [
        "Sales floor maintenance",
        "Fitting room cleaning",
        "Display and fixture dusting",
        "Window and glass cleaning",
        "After-hours deep cleaning",
        "Customer restroom care"
      ]
    },
    {
      id: 'green',
      icon: MdOutlineCompost,
      title: "Green Cleaning",
      image: "/services/green-cleaning.png",
      description: "Eco-friendly cleaning solutions that are effective, safe, and better for the environment.",
      features: [
        "Non-toxic cleaning products",
        "Eco-friendly equipment",
        "Green cleaning certifications",
        "Sustainable practices",
        "Indoor air quality focus",
        "Environmentally responsible disposal"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-cyan-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
          Comprehensive commercial cleaning solutions tailored to your facility's unique needs
        </p>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
