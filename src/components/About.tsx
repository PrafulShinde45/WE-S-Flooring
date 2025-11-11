'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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

export default function About({ isFullPage = false }: { isFullPage?: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/wall coating_edited.avif",
    "/floor polishing.avif",
    "/CAR PARK 3.avif"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gold/20 p-8 lg:p-12"
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
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={images[currentImageIndex]}
                  alt="Craftsmanship in action"
                  fill
                  className="object-cover"
                />
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-gold' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
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
              {isFullPage && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-brown">Our Story</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Founded in 1995 by master craftsmen with a passion for perfection, We's Flooring began as a small family business dedicated to transforming spaces through exceptional flooring solutions. What started as a local operation has grown into a trusted name in premium flooring, serving residential and commercial clients across the region.
                  </p>
                  <h3 className="text-2xl font-semibold text-brown">Our Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe that great flooring is the foundation of every beautiful space. Our commitment goes beyond installation – we provide comprehensive consultation, expert craftsmanship, and ongoing support to ensure your flooring investment lasts for generations.
                  </p>
                  <h3 className="text-2xl font-semibold text-brown">Why Choose Us</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Over 25 years of proven expertise in all flooring types</li>
                    <li>Premium materials sourced from trusted suppliers worldwide</li>
                    <li>Certified installers with ongoing training and certification</li>
                    <li>Comprehensive warranty and maintenance programs</li>
                    <li>Free consultations and detailed project planning</li>
                    <li>Eco-friendly options and sustainable practices</li>
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gold/20 p-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-center gap-4">
            <motion.div
              className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-brown font-semibold">Since 2020</span>
            </motion.div>
            <motion.div
              className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-brown font-semibold">Multiple Projects Completed</span>
            </motion.div>
            <motion.div
              className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-5 h-5 text-gold" />
              <span className="text-brown font-semibold">Premium Materials Only</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
