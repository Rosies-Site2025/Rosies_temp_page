// app/components/ContactSection.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
   FcTwoSmartphones,
   FcFeedback,
   FcAlarmClock,
   } from "react-icons/fc";
   import { FaMap } from "react-icons/fa6";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    website: '' // Honeypot field
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! We\'ll get back to you within 24 hours.' 
        });
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          service: '', 
          message: '',
          website: '' 
        });
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please call us directly at (949) 687-8297.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: FcTwoSmartphones,
      title: "Phone",
      content: "(949) 687-8297",
      link: "tel:949-687-8297",
      subtext: "Monday - Friday, 8am - 6pm"
    },
    {
      icon: FcFeedback,
      title: "Email",
      content: "info@rosiesjanitorialoc.com",
      link: "mailto:info@rosiesjanitorialoc.com",
      subtext: null
    },
    {
      icon: FaMap,
      title: "Service Area",
      content: "Orange County, California",
      link: null,
      subtext: null
    },
    {
      icon: FcAlarmClock,
      title: "Response Time",
      content: "Within 24 hours",
      link: null,
      subtext: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(167, 139, 250) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4"
            >
              Get Your{" "}
              <span className="relative inline-block">
                Free Quote
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-violet-600/50 -z-10"
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
              className="text-xl text-cyan-600"
            >
              Let's discuss how we can keep your facility spotless
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-cyan-900 mb-6"
              >
                Get In Touch
              </motion.h3>
              
              <div className="space-y-6 mb-8">
                {contactItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="text-cyan-600" size={24} />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-cyan-900 mb-1">{item.title}</p>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-cyan-600 hover:text-cyan-700 text-lg transition-colors break-all"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-cyan-600">{item.content}</p>
                      )}
                      {item.subtext && (
                        <p className="text-sm text-cyan-500 mt-1">{item.subtext}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 bg-cyan-50 rounded-xl border border-cyan-100"
              >
                <h4 className="font-semibold text-cyan-900 mb-2">Women-Owned Business</h4>
                <p className="text-sm text-cyan-700 leading-relaxed">
                  Rosie's Janitorial Services is proudly women-owned and committed to delivering 
                  exceptional commercial cleaning services with integrity and professionalism.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-cyan-50 rounded-2xl p-4 shadow-lg bg-no-repeat bg-center bg-[length:480px]"
              style={{ backgroundImage: "url('/rosies_logo.png')" }}
            >
              <div className="space-y-4">
                {/* Honeypot Field - Hidden from users, visible to bots */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-cyan-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full text-cyan-900 px-4 py-3 border border-violet-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-cyan-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full text-cyan-900 px-4 py-3 border border-violet-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-cyan-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full text-cyan-900 px-4 py-3 border border-violet-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <label className="block text-sm font-medium text-cyan-600 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full text-cyan-900 px-4 py-3 border border-violet-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-cyan-600 mb-1">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full text-cyan-900 px-4 py-3 border border-violet-200 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="office">Office Cleaning</option>
                    <option value="floor">Floor Care</option>
                    <option value="disinfection">Disinfection Services</option>
                    <option value="porter">Day Porter Services</option>
                    <option value="retail">Retail Cleaning</option>
                    <option value="green">Green Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  <label className="block text-sm font-medium text-cyan-600 mb-1">
                    Tell us about your needs *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full text-cyan-900 px-4 py-3 border border-violet-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all"
                    required
                  />
                </motion.div>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-cyan-50 text-cyan-800 border border-cyan-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-cyan-600 hover:bg-violet-300 disabled:bg-cyan-400 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl disabled:hover:scale-100 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Request Free Quote'}
                  </span>
                </motion.button>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-xs text-cyan-500 text-center"
                >
                  By submitting this form, you agree to be contacted by Rosie's Janitorial Services
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}