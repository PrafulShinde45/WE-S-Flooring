'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

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
  return (
    <div className="min-h-screen bg-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
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

      <About />

      {/* Client Testimonials */}


      <Footer/>
    </div>
  );
}
