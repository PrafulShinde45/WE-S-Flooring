'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const reviewsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const reviewVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const reviews = [
  {
    name: 'Mr. Ashish Dighe',
    role: 'Director, Sunteck, Pune',
    initials: 'AD',
    review: 'We S Flooring did a great job. They were very neat and kept to the time schedule. They were available to answer all of my questions. The finished floor looks beautiful! I would highly recommend We S flooring Pvt Ltd.',
    rating: 5,
  },
  {
    name: 'Mr. Padmanabh Kulkarni',
    role: 'Chemsol Polymers',
    initials: 'PK',
    review: 'My experience with We S flooring was exactly as I expected as they were very professional and efficient applicators. The floor looks exactly as promised and I would 100% recommend them and share their names.',
    rating: 5,
  },
  {
    name: 'Vijay Navgire',
    role: 'Director, TFI services LLP',
    initials: 'VN',
    review: 'We S flooring Pvt Ltd. worked as professionals, with expertise, and with good safety. We worked together and complete around 50000 sqft areas of epoxy flooring in Pune Projects. Our client and we are 100% satisfied with their service and method of execution.',
    rating: 5,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-brown mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clients Says
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Don't just take our word for it. Hear from homeowners, designers, and architects who trust us with their flooring projects.
        </motion.p>

        <div className="relative">
          <motion.div
            key={currentIndex}
            className="max-w-4xl mx-auto"
            variants={reviewsVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 glass">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-brown font-bold text-xl">
                    {reviews[currentIndex].initials}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                    "{reviews[currentIndex].review}"
                  </blockquote>
                  <div>
                    <cite className="font-semibold text-brown text-lg">{reviews[currentIndex].name}</cite>
                    <p className="text-gray-600">{reviews[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
