'use client';

import { motion } from 'framer-motion';
import { LuHandshake, LuMedal } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { RiCalendarScheduleLine, RiUserStarLine } from "react-icons/ri";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: LuHandshake,
      title: "Reliable & Consistent",
      description: "Show up on time, every time. Consistent quality you can depend on for years to come."
    },
    {
      icon: GrCertificate,
      title: "Trained Professionals",
      description: "Background-checked, trained staff committed to excellence and your facility's security."
    },
    {
      icon: AiOutlineSolution,
      title: "Custom Solutions",
      description: "Flexible scheduling and services tailored to your specific facility needs and budget."
    },
    {
      icon: LuMedal,
      title: "Quality Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee on every service."
    },
    {
      icon: RiCalendarScheduleLine,
      title: "Flexible Scheduling",
      description: "Day, night, or weekend service available to minimize disruption to your business."
    },
    {
      icon: RiUserStarLine,
      title: "Industry Experience",
      description: "Over 15 years serving Orange County with proven expertise across all industries."
    }
  ];

  const badges = [
    "Fully Licensed",
    "Fully Insured",
    "Women-Owned Certified",
    "Background Checked Staff"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background ambient glows */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"
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
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
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
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4"
          >
            Why Choose{" "}
            <span className="relative inline-block">
              Rosie's?
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
            More than just cleaning—we're your partner in creating healthy, productive workspaces
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4 shadow-md"
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
                  <benefit.icon className="text-cyan-600" size={28} />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-cyan-900 mb-2 transition-colors"
                whileHover={{ color: "rgb(8, 145, 178)" }}
              >
                {benefit.title}
              </motion.h3>
              <p className="text-cyan-600 group-hover:text-cyan-700 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner with flowing gradient */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  'linear-gradient(135deg, rgb(6,182,212) 0%, rgb(59,130,246) 100%)',
                  'linear-gradient(135deg, rgb(59,130,246) 0%, rgb(6,182,212) 100%)',
                  'linear-gradient(135deg, rgb(6,182,212) 0%, rgb(59,130,246) 100%)'
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-2xl font-bold text-cyan-900 mb-4"
              >
                Licensed, Insured, and Ready to Serve
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-cyan-600 mb-6"
              >
                As a fully licensed and insured women-owned business, we bring professionalism, 
                reliability, and peace of mind to every job.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-lg text-sm font-medium text-cyan-800"
                  >
                    <span className="text-emerald-600">✓</span> {badge}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}