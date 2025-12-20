'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Ballpit from './Ballpit';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFor, setShowFor] = useState(true);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = [
    'offices.',
    'retail spaces.',
    'commercial facilities.',
    'medical offices.',
    'schools.',
    'warehouses.',
    'restaurants.',
    'gyms.',
    'hotels.',
    'event venues.',
    'industrial sites.',
    'across Orange County.',
  ];

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentWord(word.slice(0, currentWord.length + 1));
        if (currentWord === word) setTimeout(() => setIsDeleting(true), 1800);
      } else {
        setCurrentWord(word.slice(0, currentWord.length - 1));
        if (currentWord === '') {
          setIsDeleting(false);
          const next = (wordIndex + 1) % words.length;
          setWordIndex(next);
          setShowFor(next !== words.length - 1);
        }
      }
    }, isDeleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <section
      ref={heroRef}
      className="not-prose relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-cyan-50"
    >
      <div className="absolute inset-0 z-0">
        <Ballpit className="w-full h-full" count={120} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
            Women-Owned Professional Cleaning
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-cyan-900 mb-6">
            Commercial Cleaning
            <span
              className="block !text-violet-300"
              style={{ color: '#a78bfa' }}
            >
              You Can Trust
            </span>
          </h1>

          <p className="text-xl text-cyan-900 mb-8 min-h-[120px]">
            Professional janitorial services {showFor && 'for '}
            <span className="text-violet-300 font-semibold">
              {currentWord}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="block mt-2">
              Consistent quality, reliable service, exceptional results.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold shadow-lg flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </Link>

            <a
    href="tel:+19496878297"
    className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors"
  >
    Call Now{" "}
    <span className="pulse-number">(949) 687-8297</span>
  </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-cyan-900">
            {[
              'Licensed & Insured',
              'Women-Owned Business',
              '100% Satisfaction Guarantee',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
