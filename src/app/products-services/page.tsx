'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Shield,
  Zap,
  Droplets,
  Paintbrush,
  Hammer,
  Sparkles,
  Building,
  Car,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Phone,
} from 'lucide-react';

// Hero parallax effect
const useParallax = (value: number) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1], [0, -value]);
};

// Service data
const services = [
  {
    title: 'PU Concrete',
    description: 'Durable polyurethane concrete for high-traffic industrial areas.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
  },
  {
    title: 'Floor Repair',
    description: 'Expert repair services to restore and strengthen flooring.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1600585153490-15d2c40b9e93?w=400&h=300&fit=crop',
  },
  {
    title: 'Anti Static Flooring (ESD)',
    description: 'Electrostatic discharge protection for sensitive environments.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  },
  {
    title: 'EPOXY Self Level Flooring',
    description: 'Seamless, self-leveling epoxy for smooth, durable surfaces.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    title: 'Roller Coating Flooring',
    description: 'High-quality roller-applied coatings for various applications.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1558618040-8e0c1a5e9b4a?w=400&h=300&fit=crop',
  },
  {
    title: 'Chemical Resistant Coating',
    description: 'Protective coatings resistant to harsh chemicals and spills.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
  },
  {
    title: 'Densification / Concrete Polishing',
    description: 'Enhance concrete with densification and polishing techniques.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
  },
  {
    title: 'Wall Coating',
    description: 'Protective and aesthetic wall coatings for industrial spaces.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1600585153490-15d2c40b9e93?w=400&h=300&fit=crop',
  },
  {
    title: 'Car Parking / Automotive Coating',
    description: 'Durable coatings for parking areas and automotive facilities.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Industry-grade Quality', desc: 'Premium materials and finishes.' },
  { icon: CheckCircle, title: 'Cost-effective & Durable', desc: 'Long-lasting solutions.' },
  { icon: Shield, title: 'Hygienic & Resistant', desc: 'Chemical and low-maintenance.' },
  { icon: Users, title: 'Experienced Professionals', desc: 'Skilled team for excellence.' },
];

const offerings = {
  Installations: [
    'PU Concrete',
    'EPOXY Self Level Flooring',
    'Roller Coating Flooring',
    'Chemical Resistant Coating',
    'Anti Static Flooring (ESD)',
    'Wall Coating',
    'Car Parking / Automotive Coating',
  ],
  Repairs: ['Floor Repair'],
  Maintenance: ['Densification / Concrete Polishing'],
};

export default function ProductsServices() {
  const [activeTab, setActiveTab] = useState('Installations');
  const y = useParallax(0.5);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
            alt="Flooring background"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </motion.div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Transforming Spaces with Superior Flooring Solutions
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            From industrial durability to elegant design, We’s Flooring delivers excellence at every step.
          </motion.p>
          <motion.button
            className="bg-gold text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Services <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>

      {/* About Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-brown mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Our Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We’s Flooring specializes in industrial and commercial flooring solutions, ensuring industry-standard compliance, timely delivery, and premium quality finishes. Our team delivers excellence in PU Concrete, Epoxy, Anti-Static, and more.
          </motion.p>
        </div>
      </section>

      {/* Specialized Services */}
      <section id="services" className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-brown mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Specialized Services
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-beige/50"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <service.icon className="text-gold w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown mb-2 group-hover:text-gold transition-colors flex items-center">
                    <service.icon className="mr-2 w-5 h-5 text-gold" />
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <button className="mt-4 text-gold hover:text-brown transition-colors font-medium flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-brown mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <item.icon className="w-16 h-16 mx-auto mb-4 text-gold" />
                <h3 className="text-xl font-semibold mb-2 text-brown">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-brown mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Offerings
          </motion.h2>
          <div className="flex justify-center mb-8">
            {Object.keys(offerings).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 mx-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab ? 'bg-gold text-brown shadow-lg' : 'bg-beige text-brown hover:bg-gold/20'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offerings[activeTab as keyof typeof offerings].map((service, index) => (
              <div key={index} className="bg-beige p-6 rounded-xl border border-beige/50 hover:border-gold/30 transition-colors">
                <h3 className="text-lg font-semibold text-brown mb-2">{service}</h3>
                <p className="text-gray-600">Professional {activeTab.toLowerCase()} services for {service.toLowerCase()}.</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-beige text-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need professional flooring solutions? Let’s get started today.
          </motion.h2>
          <motion.button
            className="bg-gold text-brown px-8 py-4 rounded-full font-semibold hover:bg-beige transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get a Quote <Phone className="ml-2" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </>
  );
}
