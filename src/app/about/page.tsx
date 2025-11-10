'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Calendar, CheckCircle, Star, Award, Users, Shield, Wrench, Heart } from 'lucide-react';

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Crafting Floors That Define Spaces
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Where tradition meets innovation in the art of flooring excellence
          </p>
          <motion.button
            className="bg-gold text-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Story
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-beige via-amber-50 to-yellow-50 texture-wood relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                  alt="Craftsmanship in action"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-brown">
                Crafting Excellence Since 1995
              </h2>
              <blockquote className="text-xl italic text-gold font-medium border-l-4 border-gold pl-4 my-6">
                "Where every step tells a story of quality and craftsmanship."
              </blockquote>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over two decades of experience in the flooring industry, we have built our reputation on premium craftsmanship, attention to detail, and unwavering commitment to customer satisfaction. Our team of skilled artisans and designers work tirelessly to bring your vision to life, whether it's a cozy home renovation or a sophisticated commercial space.
              </p>
            </motion.div>
          </motion.div>
          <div className="flex justify-center gap-4 pt-8">
            <motion.div
              className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-brown font-semibold">25+ Years Experience</span>
            </motion.div>
            <motion.div
              className="glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-brown font-semibold">1000+ Projects Completed</span>
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
        </div>
      </section>
      
      {/* Our Story 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leaders, our journey is one of passion, precision, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop"
                  alt="Our workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-semibold text-brown">Founded in 1995</h3>
              <p className="text-gray-700 leading-relaxed">
                What began as a small family workshop has evolved into a premier flooring destination. Our founders, master craftsmen with decades of experience, envisioned a company that would redefine quality in the flooring industry.
              </p>
              <h3 className="text-3xl font-semibold text-brown">Legacy of Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue that legacy by combining traditional craftsmanship with cutting-edge techniques, ensuring every installation meets our uncompromising standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us 
      <section className="py-20 bg-gradient-to-br from-beige via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Why Choose Us</h2>
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
              { icon: Shield, title: 'Lifetime Warranty', desc: 'Comprehensive protection for your investment' },
              { icon: Users, title: 'Expert Team', desc: 'Certified professionals with 25+ years experience' },
              { icon: Heart, title: 'Customer First', desc: 'Your satisfaction is our ultimate goal' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold text-brown mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Expertise 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master craftsmen in every flooring category, delivering perfection in every installation.
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
              { name: 'Hardwood Flooring', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
              { name: 'Luxury Vinyl', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
              { name: 'Natural Stone', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&h=300&fit=crop' },
              { name: 'Laminate', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Our Clients Says</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers who trust us with their most important spaces.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { quote: "We S Flooring did a great job. They were very neat and kept to the time schedule. They were available to answer all of my questions. The finished floor looks beautiful! I would highly recommend We S flooring Pvt Ltd.", name: "Mr. Ashish Dighe", project: "Director, Sunteck, Pune", initials: "AD" },
              { quote: "My experience with We S flooring was exactly as I expected as they were very professional and efficient applicators. The floor looks exactly as promised and I would 100% recommend them and share their names.", name: "Mr. Padmanabh Kulkarni", project: "Chemsol Polymers", initials: "PK" },
              { quote: "We S flooring Pvt Ltd. worked as professionals, with expertise, and with good safety. We worked together and complete around 50000 sqft areas of epoxy flooring in Pune Projects. Our client and we are 100% satisfied with their service and method of execution.", name: "Vijay Navgire", project: "Director, TFI services LLP", initials: "VN" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-beige p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-brown font-bold text-lg mb-4">
                  {testimonial.initials}
                </div>
                <Star className="w-8 h-8 text-gold mb-4" />
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-brown">{testimonial.name}</p>
                  <p className="text-gold text-sm">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> 

      <Footer/>
    </div>
  );
}
