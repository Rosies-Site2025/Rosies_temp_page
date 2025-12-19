// app/service-areas/page.tsx
'use client';

import { useRef } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ServiceAreasPage() {
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* ENHANCED HERO - Parallax + Gradient Overlay */}
      <section ref={heroRef} className="relative pt-48 pb-48 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-[url('/icons_dana/bg_serviceshero.png')]"
        />
        
        {/* Gradient Overlay - Animated */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-cyan-900/60 via-cyan-800/40 to-transparent"
        />

        {/* Animated Dots Pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Orange County's{" "}
                <span className="relative inline-block">
                  Premier
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-4 bg-cyan-400/50 -z-10 blur-sm"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </span>
                {" "}Cleaning Service
              </motion.h1>

              <motion.p 
                className="text-2xl text-white/90 mb-10 drop-shadow-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional commercial cleaning across South Orange County
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                
              
                  <a
    href="tel:+19496878297"
    className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors"
  >
    Call Now{" "}
    <span className="pulse-number">(949) 687-8297</span>
  </a>
               
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ENHANCED SERVICE AREAS SECTION */}
      <EnhancedServiceAreasSection />
      
      <Footer />
    </main>
  );
}


function EnhancedServiceAreasSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Service areas data
  const serviceAreas = [
    {
      name: "Rancho Santa Margarita",
      slug: "rancho-santa-margarita",
      zip: "92688",
      description: "Comprehensive cleaning for RSM's business districts",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Mission Viejo",
      slug: "mission-viejo",
      zip: "92691, 92692, 92694",
      description: "Serving all Mission Viejo commercial properties",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Aliso Viejo",
      slug: "aliso-viejo",
      zip: "92656",
      description: "Modern cleaning for Aliso Viejo's tech corridor",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Dana Point",
      slug: "dana-point",
      zip: "92629",
      description: "Harbor and waterfront business cleaning",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Laguna Niguel",
      slug: "laguna-niguel",
      zip: "92677",
      description: "Professional services for Laguna Niguel businesses",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "San Juan Capistrano",
      slug: "san-juan-capistrano",
      zip: "92675, 92693",
      description: "Historic downtown and business park cleaning",
      color: "from-rose-500 to-orange-500"
    },
    {
      name: "Ladera Ranch",
      slug: "ladera-ranch",
      zip: "92694",
      description: "Growing community, trusted cleaning partner",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "San Clemente",
      slug: "san-clemente",
      zip: "92672, 92673, 92674",
      description: "Coastal business cleaning excellence",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="py-24 bg-gradient-to-b from-white via-cyan-50/30 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured{" "}
            <span className="relative inline-block">
              Service Areas
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-cyan-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional commercial cleaning services throughout South Orange County
          </motion.p>
        </motion.div>

        {/* Service Areas Grid - ANIMATED CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceAreas.map((area, index) => (
            <ServiceAreaCard key={area.slug} area={area} index={index} />
          ))}
        </div>

        {/* MAP SECTION - ENHANCED */}
        <InteractiveMapSection mapRef={mapRef} />
      </div>
    </motion.section>
  );
}


function ServiceAreaCard({ area, index }: { area: any; index: number }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const cardY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.3], [index % 2 === 0 ? -3 : 3, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: cardY, opacity: cardOpacity, rotate: cardRotate }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/service-areas/${area.slug}`}>
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
        >
          {/* Gradient Background - Reveals on Hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Animated Border Gradient */}
          <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
            <div className="absolute inset-[2px] bg-white rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative p-8">
            {/* Icon */}
            <motion.div
              className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="text-cyan-600" size={28} />
            </motion.div>

            {/* City Name */}
            <h3 className="text-2xl font-bold text-cyan-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
              {area.name}
            </h3>

            {/* Zip Code */}
            <p className="text-sm text-cyan-500 font-mono mb-3">{area.zip}</p>

            {/* Description */}
            <p className="text-cyan-700 mb-4 leading-relaxed">
              {area.description}
            </p>

            {/* Arrow - Slides in on Hover */}
            <motion.div
              className="flex items-center gap-2 text-cyan-600 font-semibold"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <span>Learn More</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}


function InteractiveMapSection({ mapRef }: { mapRef: any }) {
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"],
  });

  const mapScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={mapRef}
      style={{ scale: mapScale, opacity: mapOpacity }}
      className="relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold text-cyan-900 mb-4">
          Our Coverage Map
        </h3>
        <p className="text-lg text-cyan-600">
          Serving businesses across South Orange County
        </p>
      </motion.div>

      {/* Map Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[600px]"
      >
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d307461.8235604839!2d-117.71857857585647!3d33.717375143232125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc925c54d5f7cf%3A0xdea6c3618ff0d607!2sOrange%20County%2C%20CA%2C%20USA!5e0!3m2!1sen!2smx!4v1764742339220!5m2!1sen!2smx"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-white/70 backdrop-blur-sm p-8">
          <MapPin className="mb-4 text-cyan-600" size={64} />
          <h4 className="text-2xl font-bold text-cyan-900 mb-6">
            Interactive Service Map
          </h4>

          <div className="flex gap-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-cyan-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
      >
        {[
          { label: "Cities Served", value: "8+" },
          { label: "Zip Codes", value: "15+" },
          { label: "Happy Clients", value: "200+" },
          { label: "Years Experience", value: "15+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-cyan-700 mb-2">
              {stat.value}
            </div>
            <div className="text-cyan-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
