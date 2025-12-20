// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from "next/image";

export default function AboutSection() {
  const values = [
    {
      image: "/icons_dana/hearthand.png",
      title: "Reliable & Trustworthy",
      description: "Background-checked professionals you can trust in your facility"
    },
    {
      image: "/icons_dana/quality.png",
      title: "Quality Excellence",
      description: "Consistent, high-quality service with attention to every detail"
    },
    {
      image: "/icons_dana/customer.png",
      title: "Customer First",
      description: "Your satisfaction is our priority, always"
    },
    {
      image: "/icons_dana/custom.png",
      title: "Customized Solutions",
      description: "Tailored cleaning plans that fit your specific needs"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const badges = [
    { text: "Licensed & Insured", image: "/icons_dana/licensed.png", alt: "Licensed & Insured" },
    { text: "Women-Owned Business", image: "/icons_dana/woman.png", alt: "Women-Owned Business" },
    { text: "Eco-Friendly Products", image: "/icons_dana/eco.png", alt: "Eco-Friendly Products" }
  ];

  const paragraphs = [
    "Rosie's Janitorial Services is a proud women-owned business dedicated to providing exceptional commercial cleaning services throughout Orange County, California. With over 15 years of experience, we've built our reputation on reliability, quality, and personalized service.",
    "We understand that a clean workspace is essential for productivity, health, and making the right impression on your clients. That's why we go beyond basic cleaning—we create customized solutions that meet the unique needs of each facility we serve.",
    "Our team of trained, background-checked professionals uses industry-leading techniques and eco-friendly products to deliver consistently outstanding results. When you choose Rosie's, you're choosing a partner who truly cares about your facility and your business."
  ];

  return (
    <section className="py-20 bg-[#bae6fd] relative overflow-hidden">
      {/* Ambient background glows */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image - slides from left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <motion.img 
                  src="/rosies_logo.png" 
                  alt="Rosie's Janitorial Services Team"
                  className="w-full h-96 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23e5e7eb" width="600" height="400"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ETeam Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              {/* Accent Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 cyan-600 rounded-2xl -z-10" />
            </motion.div>

            {/* Content - slides from right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-4"
              >
                <IoInformationCircleOutline size={16} />
                <span>About Us</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-center text-cyan-900 mb-6"
              >
                Your Trusted Partner in{" "}
                <span className="relative inline-block">
                  Commercial Cleaning
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-violet-400/50 -z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </motion.h2>

              <div className="space-y-4 text-cyan-600 text-center leading-relaxed">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Certification Badges - pop in sequentially */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="px-4 py-4 bg-cyan-50 border border-cyan-200 rounded-lg text-sm font-medium text-cyan-800 flex flex-col items-center"
                  >
                    {badge.text}
                    <img src={badge.image} alt={badge.alt} className="w-16 h-16 mt-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Grid - cascade animation */}
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-cyan-900 text-center mb-12"
            >
              Our Core{" "}
              <span className="relative inline-block">
                Values
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-violet-400/50 -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                    whileHover={{ 
                      backgroundColor: "rgb(8, 145, 178)",
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={28}
                      height={28}
                      className="text-cyan-600 group-hover:text-white transition-colors object-contain"
                    />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-cyan-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-cyan-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats - with flowing gradient and scale animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgb(8,145,178) 0%, rgb(167, 139, 250) 100%)',
                  'linear-gradient(135deg, rgb(14,116,144) 0%, rgb(8,145,178) 100%)',
                  'linear-gradient(135deg, rgb(167, 139, 250) 0%, rgb(14,116,144) 100%)'
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center text-white"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-cyan-100 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}