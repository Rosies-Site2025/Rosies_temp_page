// app/components/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { GiFloorPolisher, GiMagicBroom, GiShop } from "react-icons/gi";
import { MdOutlineCleanHands, MdOutlineCompost } from "react-icons/md";
import { PiBuildings } from "react-icons/pi";

export default function ServicesSection() {
  const services = [
    {
      icon: PiBuildings,
      title: "Office Cleaning",
      description: "Complete office maintenance including desks, common areas, restrooms, and break rooms.",
      image: "/services/office_cleaning.png"
    },
    {
      icon: GiFloorPolisher,
      title: "Floor Care",
      description: "Professional carpet cleaning, hard floor maintenance, stripping, waxing, and buffing.",
      image: "/icons_dana/floor-care.jpeg"
    },
    {
      icon: MdOutlineCleanHands,
      title: "Disinfection Services",
      description: "Hospital-grade disinfection for high-touch surfaces and comprehensive facility sanitization.",
      image: "/services/disinfection.png"
    },
    {
      icon: GiMagicBroom,
      title: "Day Porter Services",
      description: "On-site maintenance staff for continuous cleaning throughout business hours.",
      image: "/services/day-porter.png"
    },
    {
      icon: GiShop,
      title: "Retail Cleaning",
      description: "Customer-facing area maintenance to keep your retail space spotless and inviting.",
      image: "/services/retail-cleaning.png"
    },
    {
      icon: MdOutlineCompost,
      title: "Green Cleaning",
      description: "Eco-friendly cleaning solutions that are safe for your team and the environment.",
      image: "/services/green-cleaning.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(8,145,178) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4"
          >
            Our{" "}
            <span className="relative inline-block">
              Services
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-2 bg-violet-400/50 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-cyan-600 max-w-2xl mx-auto"
          >
            Comprehensive commercial cleaning solutions tailored to your facility's unique needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-xl border-2 border-violet-300 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-cyan-100">
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <motion.div 
                  className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4 shadow-md"
                  whileHover={{ 
                    backgroundColor: "rgb(8, 145, 178)",
                    scale: 1.1,
                    rotate: 360
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ color: "white" }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="text-cyan-600" size={32} />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-cyan-900 mb-2 transition-colors"
                  whileHover={{ color: "rgb(8, 145, 178)" }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-cyan-600 group-hover:text-cyan-700 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a 
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-violet-200 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}