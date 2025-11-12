'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const services = [
  {
    title: 'Hardwood Flooring',
    description: 'Timeless elegance with premium oak, maple, and walnut options. Perfect for creating warm, inviting spaces.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
  },
  {
    title: 'Vinyl Flooring',
    description: 'Durable, water-resistant, and stylish. Ideal for high-traffic areas with realistic wood and stone looks.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  },
  {
    title: 'Laminate Flooring',
    description: 'Affordable luxury with scratch-resistant surfaces. Easy to install and maintain.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d87?w=400&h=300&fit=crop',
  },
  {
    title: 'Marble Flooring',
    description: 'Sophisticated stone surfaces that add prestige and value to any room.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    title: 'Tile Flooring',
    description: 'Versatile ceramic and porcelain options for kitchens, bathrooms, and outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1558618048-7e1e3b4a6d8e?w=400&h=300&fit=crop',
  },
  {
    title: 'Carpet Flooring',
    description: 'Soft, comfortable underfoot with excellent sound absorption. Perfect for bedrooms and living areas.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Flooring Solutions
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our premium collection of flooring materials, each chosen for its quality, durability, and aesthetic appeal.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-beige rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group glass"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/products-services"
            className="inline-block bg-gold text-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gold/90 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
