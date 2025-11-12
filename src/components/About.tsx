'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="p-8 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={aboutVariants}
        >
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={aboutVariants}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative h-96 w-full max-w-lg rounded-lg overflow-hidden shadow-2xl mx-auto">
                <Image
                  src="/wall coating_edited.avif"
                  alt="Flooring solutions showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-brown">
                About Us
              </h2>
              <blockquote className="text-xl italic text-gold font-medium border-l-4 border-gold pl-4 my-6">
                "Where every step tells a story of quality and craftsmanship."
              </blockquote>
              <p className="text-lg text-gray-700 leading-relaxed">
                We began our journey in the year 2020, with an aim of becoming a successful Business, later the running wheel of time taught us to aim higher. Now We aspire to become a leader in the coating industry then spread Across different locations across India. Located in PUNE, since Its inception WE S FLOORING PVT LTD of the company Has been providing matchless service to its clients While adhering strictly to the quality and the delivery timelines WE S FLOORING PVT LTD has become the synonym For bestFlooring solution Provider in the Vicinity of PUNE.
              </p>
              <h3 className="text-2xl font-semibold text-brown">History</h3>
              <p className="text-gray-700 leading-relaxed">
                WE S FLOORING PVT LTD was founded in 2020 in Pune, India, specializing in floor coatings and polishing. With a commitment to scientific innovation and quality craftsmanship, we have grown to provide comprehensive flooring solutions, serving clients across the region with unmatched expertise and dedication.
              </p>
              <h3 className="text-2xl font-semibold text-brown">Why Us</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer expert craftsmanship in floor polishing, coatings, and maintenance, using premium, durable materials sourced from trusted suppliers. Our certified professionals receive ongoing training and experience, backed by comprehensive warranties and after-sales support. We provide free consultations and customized project planning, along with eco-friendly practices and sustainable flooring options.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
