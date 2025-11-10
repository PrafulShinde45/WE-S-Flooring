'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowDown, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sidhivinayak Fertilizer',
    location: 'Pune',
    description: 'Food and Pharma Company has successfully completed PU Wall Coating and PU Roll-on Coating with Coving/Skirting wall-to-floor integration.',
    image: '/wall coating_edited.avif',
  },
  {
    id: 2,
    title: 'RNK - ALFA LAVEL',
    location: 'Pune',
    description: '3-stage densification and polishing completed for 5000 sqm area in the new building.',
    image: '/floor polishing.avif',
  },
  {
    id: 3,
    title: 'Suntech Hightech',
    location: 'Pune',
    description: 'Completed Epoxy Self-Level Flooring over 1000 sqm in the new warehouse area.',
    image: '/sunteck.avif',
  },
  {
    id: 4,
    title: 'CIPY - DAICEC',
    location: 'BKC (Mumbai)',
    description: 'Special traffic coating and car park flooring application completed on behalf of the manufacturer at DAICEC Bandra Kurla Complex, over 10,000 sqm.',
    image: '/CAR PARK 3.avif',
  },
  {
    id: 5,
    title: 'PIPL - Infosys Ltd',
    location: 'Hinjewadi Pune',
    description: '500-micron PU Roller Coating applied to staircases and frequent movement areas (15 floors × 4 staircases).',
    image: '/staircase PU.avif',
  },
  {
    id: 6,
    title: 'Chemsol - Wexford Pharma',
    location: 'Karnataka',
    description: 'Cipothane SL 1000 Chemical Resistant Flooring with floor-to-wall coving system completed in 2020 in Karnataka region.',
    image: '/98ffb219-930d-4ca9-9a8c-914e59590234_JPG.avif',
  },
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

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Parallax for hero
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1], [0, -50]);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <Image
            src="/wall coating_edited.avif"
            alt="Projects hero background"
            fill
            className="object-cover opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Completed Projects
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Delivering excellence, one floor at a time.
          </motion.p>
          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ArrowDown className="w-8 h-8 mx-auto text-gold" />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-black mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Project Showcase
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="cursor-pointer group relative"
                variants={imageVariants}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-96 w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gold mb-2 text-sm">{project.location}</p>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                  </motion.div>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-lg font-semibold text-black mb-1">{project.title}</h3>
                  <p className="text-gold text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{selectedProject.title}</h3>
                <p className="text-gold text-lg mb-4">{selectedProject.location}</p>
                <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
