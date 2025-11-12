'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';


import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Shield,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Hero
        title="Contact Us"
        subtitle="Crafting perfection from the ground up. Tell us about your space."
        backgroundImage="/telephone-612061_1280.jpg"
        height="h-[70vh]"
      />
      <div className="min-h-screen bg-white">

      {/* Contact form section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 mt-12">
        <div className="relative bg-gradient-to-br from-marble/40 via-white to-marble/60">
          {/* subtle textures */}
          <div className="absolute inset-0 texture-marble opacity-40 pointer-events-none" />
          <div className="relative z-10 py-12 px-4 sm:px-8 lg:px-12">
            <motion.div
              className="max-w-xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-black mb-2"
                variants={itemVariants}
              >
                Tell us about your project
              </motion.h2>
              <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
                We’ll get back within 1 business day. Prefer to call?
                <a href="tel:+919356860035" className="text-[#e13403] font-semibold ml-2">
                  +91 93568 60035
                </a>
              </motion.p>



              {/* Form card */}
              <motion.form
                className="glass rounded-2xl bg-white/40 border border-white/50 shadow-2xl p-6 space-y-4"
                variants={itemVariants}
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Name */}
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#e13403]/70">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 placeholder-gray-500 text-brown border border-white/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold shadow-md"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#e13403]/70">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 placeholder-gray-500 text-brown border border-white/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold shadow-md"
                    required
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#e13403]/70">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 placeholder-gray-500 text-brown border border-white/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold shadow-md"
                    required
                  />
                </div>
                {/* Subject */}
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#e13403]/70">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 placeholder-gray-500 text-brown border border-white/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold shadow-md"
                    required
                  />
                </div>
                {/* Message */}
                <div className="relative">
                  <div className="absolute top-3 left-3 text-[#e13403]/70">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    placeholder="Tell us about your space, timelines, and goals"
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 placeholder-gray-500 text-brown border border-white/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold shadow-md"
                    required
                  />
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#e13403] to-[#e13403]text-[#e13403] font-semibold py-3 shadow-lg hover:shadow-2xl transition-all"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-[#e13403]/60 mix-blend-overlay animate-[shimmer_2.5s_linear_infinite]" />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>
              </motion.form>


            </motion.div>
          </div>
        </div>
        {/* Map and contact details section */}
        <div className="relative bg-white flex items-center">
          <div className="absolute inset-0 texture-marble opacity-40 pointer-events-none" />
          <div className="relative z-10 py-12 px-4 sm:px-8 lg:px-12 w-full">
            <motion.div
              className="max-w-xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-black mb-8"
                variants={itemVariants}
              >
                Find Us
              </motion.h2>

              {/* Map */}
              <motion.div
                className="mb-8 rounded-2xl overflow-hidden border-2 border-[#e13403]/30 shadow-2xl relative"
                variants={itemVariants}
              >
                <div className="absolute inset-0 pointer-events-none texture-wood opacity-20" />
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.868035630902!2d-73.989!3d40.741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzI3LjYiTiA3M8KwNTknMjAuNCJX!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* Contact details */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    Icon: Phone,
                    title: 'Call us',
                    text: '+91 93568 60035',
                    href: 'tel:+919356860035',
                  },
                  {
                    Icon: Mail,
                    title: 'Email',
                    text: 'flooringwes@gmail.com',
                    href: 'mailto:flooringwes@gmail.com',
                  },
                  {
                    Icon: MapPin,
                    title: 'Location',
                    text: 'WE S FLOORING PVT LTD.,Rimzim Bungalow, Near Unique Classes, Old Sangavi, Pune - 411027',
                    href: 'https://maps.google.com',
                  },
                ].map(({ Icon, title, text, href }, i) => (
                  <motion.a
                    key={title}
                    href={href}
                    className="block group rounded-xl bg-white/60 backdrop-blur-md border border-white/40 p-5 shadow-lg hover:shadow-2xl transition-all"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 text-brown flex items-center justify-center shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-black">{title}</div>
                        <div className="text-gray-700">{text}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
    </>
  );
}


