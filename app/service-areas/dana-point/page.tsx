// app/service-areas/dana-point/page.tsx
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function DanaPointPage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
        <WaveHeroSection />
        <WaterfrontSpecialistsSection />
        <BusinessSolutionsSection />
        <CoverageSection />
        <FeaturesSection />
        <CTASection />
        
        <div className="hidden max-w-6xl mx-auto px-4 py-8">
          <nav className="text-sm text-cyan-600">
            <Link href="/" className="hover:text-cyan-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-cyan-600">Service Areas</Link>
            <span className="mx-2">/</span>
            <span>Dana Point</span>
          </nav>
        </div>
      </div>
      
      <Footer />
    </>
  );
}


function WaveHeroSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40
  });

  const backgroundY = useTransform(springProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={containerRef} className="pt-32 pb-16 px-4 relative overflow-hidden min-h-[70vh]">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 blur-3xl transform scale-150"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif-bold text-cyan-900 mb-6"
          >
            <span className="text-cyan-600">Dana Point Harbor</span> Commercial Cleaning
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-cyan-600 max-w-3xl mx-auto mb-8"
          >
            Specialized janitorial services for Dana Point waterfront business community. From harbor restaurants to Dana Point Headlands, we understand the unique needs of coastal commerce. Professional cleaning for the 92629 area.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+19496878297"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors shadow-lg"
            >
              Call (949) 687-8297
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#contact"
                className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-cyan-600 hover:bg-cyan-50 transition-colors shadow-lg"
              >
                Request Quote
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


function WaterfrontSpecialistsSection() {
  const waterfrontCards = [
    {
      imageSrc: "/icons_dana/anchor.png",
      imageAlt: "Anchor Icon",
      title: "Harbor Environment Expertise",
      description: "The marina environment demands specialized cleaning knowledge. Salt spray, humidity, and unique foot traffic patterns require different approaches than standard commercial cleaning.",
      features: [
        "Marine-grade cleaning products and methods",
        "Moisture and humidity management",
        "Sand and sea debris removal systems",
        "Outdoor area maintenance expertise"
      ],
      slideFrom: "left"
    },
    {
      imageSrc: "/icons_dana/platter.png",
      imageAlt: "Platter Icon",
      title: "Hospitality Focus",
      description: "Dana Point thrives on tourism and hospitality. We help restaurants, hotels, and entertainment venues maintain the impeccable standards that keep visitors coming back and reviews glowing.",
      features: [
        "High-volume customer area cleaning",
        "Flexible scheduling around business hours",
        "Emergency spill and mess response",
        "Event preparation and cleanup"
      ],
      slideFrom: "right"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-serif-bold text-cyan-600 text-center mb-12"
        >
          Waterfront Business Cleaning Specialists
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {waterfrontCards.map((card, idx) => (
            <WaterfrontCard key={idx} card={card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WaterfrontCard({ card, index }: any) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    [card.slideFrom === "left" ? -100 : 100, 0]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="mb-4 flex justify-center">
        <motion.img
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={card.imageSrc}
          alt={card.imageAlt}
          className="w-32 h-32 object-contain"
        />
      </div>
      
      <h3 className="text-2xl text-cyan-900 text-center font-semibold mb-4">
        {card.title}
      </h3>
      
      <p className="text-cyan-700 text-center mb-4">
        {card.description}
      </p>
      
      <ul className="space-y-2 text-cyan-600">
        {card.features.map((feature: string, idx: number) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (idx * 0.1), duration: 0.4 }}
            className="flex justify-center items-start gap-2"
          >
            <span className="text-cyan-600">•</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}


function BusinessSolutionsSection() {
  const businessSolutions = [
    {
      imageSrc: "/icons_dana/silverware.png",
      imageAlt: "Silverware Icon",
      title: "Waterfront Restaurants and Dining",
      description: "Dana Point restaurants face unique challenges: high volume, outdoor seating, ocean views requiring pristine windows. We specialize in dining establishment cleaning that keeps your space inviting.",
      categories: [
        {
          title: "Dining Areas:",
          items: [
            "Table and seating sanitization",
            "Floor cleaning and maintenance",
            "Window and glass polishing",
            "Bar area deep cleaning"
          ]
        },
        {
          title: "Support Spaces:",
          items: [
            "Restroom deep cleaning",
            "Entry and waiting areas",
            "Outdoor patio maintenance",
            "Kitchen support cleaning"
          ]
        }
      ]
    },
    {
      imageSrc: "/icons_dana/hotel.png",
      imageAlt: "Hotel Icon",
      title: "Hotels and Vacation Rentals",
      description: "Supporting Dana Point hospitality industry with reliable, thorough cleaning. Common area maintenance, lobby upkeep, and support for your housekeeping operations.",
      items: [
        "Lobby and reception areas",
        "Hallways and corridors",
        "Pool deck and patio areas",
        "Fitness center sanitization",
        "Meeting room setup and cleaning",
        "Parking and entrance maintenance"
      ]
    },
    {
      imageSrc: "/icons_dana/shopping.png",
      imageAlt: "Shopping Icon",
      title: "Retail and Marina Shops",
      description: "Boutiques, surf shops, galleries, and specialty stores throughout Dana Point Harbor and surrounding areas. We keep your retail space welcoming for locals and tourists.",
      items: [
        "Daily floor care and maintenance",
        "Display and shelf dusting",
        "Entrance and storefront cleaning",
        "Fitting room sanitization",
        "Backroom organization support"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-cyan-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-serif-bold text-cyan-900 text-center mb-12"
        >
          Cleaning Solutions for Every Waterfront Business
        </motion.h2>

        <div className="space-y-6">
          {businessSolutions.map((business, idx) => (
            <BusinessSolutionCard key={idx} business={business} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessSolutionCard({ business, index }: any) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-600 hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ 
            rotate: [0, 5, -5, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center flex-shrink-0"
        >
          <img
            src={business.imageSrc}
            alt={business.imageAlt}
            className="w-28 h-28 object-contain"
          />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-2xl text-cyan-900 font-semibold mb-3">
            {business.title}
          </h3>
          <p className="text-cyan-600 mb-4">
            {business.description}
          </p>

          {business.categories ? (
            <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-600">
              {business.categories.map((category: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.4 }}
                >
                  <strong>{category.title}</strong>
                  <ul className="ml-4 mt-1 text-cyan-900 space-y-1">
                    {category.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ) : (
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-cyan-900">
              {business.items.map((item: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.05), duration: 0.3 }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}


function CoverageSection() {
  const locations = {
    harborAndWaterfront: [
      "Dana Point Harbor businesses",
      "Marina Village shops and restaurants",
      "Waterfront walkway establishments",
      "Harbor-adjacent hotels and inns"
    ],
    cityCenterAndHeadlands: [
      "Pacific Coast Highway businesses",
      "Dana Point Headlands area",
      "Monarch Beach businesses",
      "Lantern Village district"
    ]
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif text-cyan-900 text-center mb-8"
        >
          Complete Dana Point Coverage
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyan-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="font-semibold text-cyan-900 mb-3 text-lg">
              Harbor and Waterfront:
            </h3>
            <ul className="space-y-2 text-cyan-700">
              {locations.harborAndWaterfront.map((location, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.2 + (idx * 0.1),
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-start gap-2"
                >
                  <span className="text-cyan-600 mt-1">📍</span>
                  <span>{location}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cyan-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="font-semibold text-cyan-900 mb-3 text-lg">
              City Center and Headlands:
            </h3>
            <ul className="space-y-2 text-cyan-700">
              {locations.cityCenterAndHeadlands.map((location, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.4 + (idx * 0.1),
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-start gap-2"
                >
                  <span className="text-cyan-600 mt-1">📍</span>
                  <span>{location}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-bold mt-8 text-cyan-900 text-xl"
        >
          Serving all of Dana Point - 92629
        </motion.p>
      </div>
    </section>
  );
}


function FeaturesSection() {
  const features = [
    {
      imageSrc: "/icons_dana/wave.png",
      imageAlt: "Wave Icon",
      title: "Coastal Expertise",
      description: "Understanding unique waterfront cleaning needs"
    },
    {
      imageSrc: "/icons_dana/watch.png",
      imageAlt: "Watch Icon",
      title: "Flexible Hours",
      description: "Working around your business schedule"
    },
    {
      imageSrc: "/icons_dana/eco.png",
      imageAlt: "Eco Icon",
      title: "Eco-Friendly",
      description: "Green products protecting our ocean"
    },
    {
      imageSrc: "/icons_dana/fast.png",
      imageAlt: "Fast Icon",
      title: "Quick Response",
      description: "Emergency cleaning when you need it"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif text-cyan-900 text-center mb-12"
        >
          What Sets Us Apart
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FloatingFeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingFeatureCard({ feature, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{ 
        opacity: { delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 },
        y: { duration: 2 + (index * 0.3), repeat: Infinity, ease: "easeInOut", delay: index * 0.15 + 0.6 }
      }}
      className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500"
    >
      <motion.div
        whileHover={{ 
          rotate: [0, -5, 5, -5, 0],
          scale: 1.2
        }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mb-4"
      >
        <img
          src={feature.imageSrc}
          alt={feature.imageAlt}
          className="w-32 h-32 object-contain"
        />
      </motion.div>
      <h3 className="font-semibold text-cyan-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-cyan-600">{feature.description}</p>
    </motion.div>
  );
}


function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-600 to-cyan-700 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 20px"
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-6 text-white"
        >
          Make Your Dana Point Business Shine
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-8 text-white"
        >
          Whether you are at the harbor or on the headlands, we are ready to help your business look its best. Free quotes for all Dana Point commercial spaces.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="tel:+19496878297"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-100 transition-colors shadow-xl"
          >
            Call (949) 687-8297
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/#contact"
              className="inline-block bg-cyan-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-900 transition-colors shadow-xl"
            >
              Request Free Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}