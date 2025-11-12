'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  height?: string;
  enableSlider?: boolean;
}

export default function Hero({
  title = "Transform Your Space from the Ground Up.",
  subtitle = "Premium craftsmanship meets timeless style. Discover our collection of hardwood, vinyl, laminate, and marble flooring solutions.",
  buttonText = "Get a Free Quote",
  buttonHref = "#contact",
  backgroundImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop",
  height = "h-[28rem]", // Slightly taller than h-96 (448px)
  enableSlider = false,
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/IMG-20251111-WA0058[1].jpg",
    "/WhatsApp Image 2025-11-11 at 18.35.13_e98ca34b.jpg",
    "/Hero Home.jpg"
  ];

  useEffect(() => {
    if (enableSlider) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [enableSlider, images.length]);

  const currentImage = enableSlider ? images[currentImageIndex] : backgroundImage;

  return (
    <section id="home" className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <motion.div
        key={enableSlider ? currentImageIndex : 'static'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={currentImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={buttonHref}
            className="bg-[#e13403] text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#e13403] hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
