'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Calendar, CheckCircle, Star, Award, Users, Shield, Wrench, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/CAR PARK 3.avif",
    "/IMG-20251111-WA0058[1].jpg",
    "/WhatsApp Image 2025-11-11 at 18.35.13_e98ca34b.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/parking-lot.jpg"
            alt="Premium flooring craftsmanship"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Crafting with purpose
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Where tradition meets innovation in the art of flooring excellence
          </p>

        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gold/20 p-8 lg:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={images[currentImageIndex]}
                    alt="Craftsmanship in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  About Us
                </h2>
                <blockquote className="text-xl italic text-gray-400 font-medium border-l-4 border-[#e13403] pl-4 my-6">
                  "Where every step tells a story of quality and craftsmanship."
                </blockquote>
                <p className="text-lg text-black leading-relaxed">
                  We began our journey in the year 2020, with an aim of becoming a successful Business, later the running wheel of time taught us to aim higher. Now We aspire to become a leader in the coating industry then spread Across different locations across India. Located in PUNE, since Its inception WE S FLOORING PVT LTD of the company Has been providing matchless service to its clients While adhering strictly to the quality and the delivery timelines WE S FLOORING PVT LTD has become the synonym For bestFlooring solution Provider in the Vicinity of PUNE.
                </p>
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
                <Calendar className="w-5 h-5 text-[#e13403]" />
                <span className="text-black font-semibold">Since 2020</span>
              </motion.div>
              <motion.div
                className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="w-5 h-5 text-[#e13403]" />
                <span className="text-black font-semibold">Multiple Projects Completed</span>
              </motion.div>
              <motion.div
                className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-5 h-5 text-[#e13403]" />
                <span className="text-black font-semibold">Premium Materials Only</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Vision & Mission</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Driving excellence in the flooring industry with innovation, quality, and customer-centric solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <motion.div
                  className="w-16 h-16 bg-[#e13403] rounded-full flex items-center justify-center mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                <p className="text-black leading-relaxed">
                  To become a leader in the coating industry and expand across different locations in India. We aspire to be a world-class service provider, continuously pushing boundaries and setting new standards of excellence in flooring solutions.
                </p>
                <p className="text-black leading-relaxed mt-4">
                  Founded in 2020, our journey began with a commitment to success. Today, we believe even the sky is not the limit for achievers, and we're determined to reach new heights in our industry.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <motion.div
                  className="w-16 h-16 bg-[#e13403] rounded-full flex items-center justify-center mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-black leading-relaxed">
                  To provide matchless service to our clients while adhering strictly to quality standards and delivery timelines. We are committed to becoming the synonym for the best flooring solution provider in Pune and beyond.
                </p>
                <p className="text-black leading-relaxed mt-4">
                  Our endless potential and continuous efforts in meeting client requirements with best-in-line products drive our success. We render cost-effective after-sales and consultancy services to ensure all client queries are addressed timely.
                </p>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us*/} 
      <section className="py-20 bg-gradient-to-br from-beige via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes from true expertise and dedication to perfection.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Only the finest materials and craftsmanship' },
              { icon: Wrench, title: 'Custom Solutions', desc: 'Tailored flooring solutions for every space' },
              { icon: Users, title: 'Expert Team', desc: 'Certified professionals with 25+ years experience' },
              { icon: Heart, title: 'Customer First', desc: 'Your satisfaction is our ultimate goal' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-12 h-12 text-[#e13403] mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     

     

      {/* Client Testimonials */}
      

      <Footer/>
    </div>
  );
}
