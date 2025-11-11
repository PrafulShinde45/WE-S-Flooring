'use client';

import { motion } from 'framer-motion';

const industries = [
  { name: 'Power', description: 'Electrical & Power Systems', color: 'from-red-400 to-orange-400', bgColor: 'bg-red-50' },
  { name: 'Electronics & IT', description: 'Technology Solutions', color: 'from-blue-400 to-purple-400', bgColor: 'bg-blue-50' },
  { name: 'Pharma & Food', description: 'Healthcare & Food Processing', color: 'from-green-400 to-teal-400', bgColor: 'bg-green-50' },
  { name: 'Chemical & Fertilizer', description: 'Industrial Chemicals', color: 'from-yellow-400 to-orange-400', bgColor: 'bg-yellow-50' },
  { name: 'Airport', description: 'Aviation Infrastructure', color: 'from-indigo-400 to-blue-400', bgColor: 'bg-indigo-50' },
  { name: 'Automotives', description: 'Vehicle Manufacturing', color: 'from-gray-400 to-slate-400', bgColor: 'bg-gray-50' },
  { name: 'Paper & Packaging', description: 'Manufacturing Industry', color: 'from-emerald-400 to-green-400', bgColor: 'bg-emerald-50' },
  { name: 'Engineering', description: 'Engineering Services', color: 'from-cyan-400 to-blue-400', bgColor: 'bg-cyan-50' },
  { name: 'Commercial', description: 'Business Spaces', color: 'from-rose-400 to-pink-400', bgColor: 'bg-rose-50' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

export default function Industries() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-brown mb-6">
            Industries We
            <span className="block text-gold">Cover</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering specialized flooring solutions across diverse industries with precision and expertise
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              className={`group relative ${industry.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white font-bold text-lg">
                  {industry.name.charAt(0)}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-brown mb-2 group-hover:text-gold transition-colors">
                {industry.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>

              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We customize solutions for any sector.
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brown/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Custom Solution
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
