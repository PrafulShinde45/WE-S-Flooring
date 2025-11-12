'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star, Truck } from 'lucide-react';

const aboutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function About() {

  return (
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="p-4 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={aboutVariants}
        >
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              variants={aboutVariants}
            >
            <motion.div variants={itemVariants} className="space-y-6">
              <div 
                className="relative h-90 w-full max-w-lg overflow-hidden shadow-2xl mx-auto" 
                style={{
                  clipPath: 'polygon(10% 0%, 0% 20%, 0% 80%, 10% 100%, 70% 100%, 100% 80%, 100% 40%, 90% 20%, 100% 0%)',
                  borderRadius: '20px'
                }}
              >
                <Image
                  src="/WhatsApp Image 2025-11-11 at 18.35.13_e98ca34b.jpg"
                  alt="Flooring solutions showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                About Us
              </h2>
              <blockquote className="text-xl italic text-gray-500 font-medium border-l-4 border-red-500 pl-4 my-6">
                "Where every step tells a story of quality and craftsmanship."
              </blockquote>
              <p className="text-lg text-black leading-relaxed">
                We began our journey in the year 2020, with an aim of becoming a successful Business, later the running wheel of time taught us to aim higher. Now We aspire to become a leader in the coating industry then spread Across different locations across India. Located in PUNE, since Its inception WE S FLOORING PVT LTD of the company Has been providing matchless service to its clients While adhering strictly to the quality and the delivery timelines WE S FLOORING PVT LTD has become the synonym For bestFlooring solution Provider in the Vicinity of PUNE.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
