'use client';

import { useRef } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PiOrangeBold } from "react-icons/pi";


export default function ServiceAreasSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const featuredCities = [
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

  const additionalCities = [
    "Anaheim", "Santa Ana", "Huntington Beach", "Garden Grove",
    "Orange", "Fullerton", "Costa Mesa", "Westminster",
    "Newport Beach", "Buena Park", "Tustin", "Yorba Linda",
    "La Habra", "Fountain Valley", "Placentia",
    "Cypress", "Brea", "Stanton",
    "Laguna Beach", "Seal Beach"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(6 182 212) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium mb-4"
            >
              <PiOrangeBold size={16} color="#f97316" />
              <span>Proudly Serving Orange County</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4"
            >
              Service{" "}
              <span className="relative inline-block">
                Areas
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-violet-400/50 -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
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
              Professional commercial cleaning services throughout Orange County, California
            </motion.p>
          </div>

          {/* Map - Enhanced with scale entrance and animated gradient overlay */}
          <motion.div 
            ref={mapRef}
            style={{ scale: mapScale, opacity: mapOpacity }}
            className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(168,85,247,0.2) 100%)',
                  'linear-gradient(90deg, rgba(168,85,247,0.2) 0%, rgba(6,182,212,0.2) 50%, rgba(59,130,246,0.2) 100%)',
                  'linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(168,85,247,0.2) 50%, rgba(6,182,212,0.2) 100%)',
                  'linear-gradient(90deg, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(168,85,247,0.2) 100%)'
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d307461.8235604839!2d-117.71857857585647!3d33.717375143232125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc925c54d5f7cf%3A0xdea6c3618ff0d607!2sOrange%20County%2C%20CA%2C%20USA!5e0!3m2!1sen!2smx!4v1764742339220!5m2!1sen!2smx"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Featured Cities - CLICKABLE with stagger animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-full blur-3xl -z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <h3 className="text-2xl font-bold text-cyan-900 mb-3 text-center relative z-10">
              Featured Service Areas
            </h3>
            <p className="text-center text-cyan-600 mb-8 text-sm relative z-10">
              Click any city to learn more about our services in your area
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
              {featuredCities.map((city, index) => (
                <motion.a
                  key={index}
                  href={`/service-areas/${city.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-2 text-cyan-700 hover:text-cyan-600 transition-all group p-3 rounded-lg hover:bg-cyan-50 border-2 border-transparent hover:border-cyan-200 hover:shadow-lg cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="text-emerald-600 flex-shrink-0" size={18} />
                  </motion.div>
                  <span className="text-sm font-medium">{city.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Additional Cities with cascade animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-cyan-900 mb-8 text-center">
              Additional Cities We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalCities.map((city, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-2 text-cyan-700 hover:text-cyan-600 transition-colors group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="text-emerald-600 flex-shrink-0" size={18} />
                  </motion.div>
                  <span className="text-sm font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA with bouncing MapPin and flowing gradient */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgb(167, 139, 250) 0%, rgb(59,130,246) 50%, rgb(8,145,178) 100%)',
                  'linear-gradient(135deg, rgb(59,130,246) 0%, rgb(167, 139, 250) 50%, rgb(59,130,246) 100%)',
                  'linear-gradient(135deg, rgb(8,145,178) 0%, rgb(59,130,246) 50%, rgb(167, 139, 250) 100%)'
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="mx-auto mb-4" size={48} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Can't Find Your City?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                We serve all of Orange County! If your city isn't listed, don't worry—we'd love to discuss 
                how we can help keep your facility spotless.
              </p>
              <motion.a 
                href="tel:949-687-8297"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-violet-100 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Call Us: (949) 687-8297
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}