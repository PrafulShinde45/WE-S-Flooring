'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Hero from '@/components/Hero';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

interface GalleryItem {
  id: number;
  name: string;
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
    image: '/staircasePU.avif',
  },
  {
    id: 6,
    title: 'Chemsol - Wexford Pharma',
    location: 'Karnataka',
    description: 'Cipothane SL 1000 Chemical Resistant Flooring with floor-to-wall coving system completed in 2020 in Karnataka region.',
    image: '/98ffb219-930d-4ca9-9a8c-914e59590234_JPG.avif',
  },
];

const galleryItems: GalleryItem[] = [
  { id: 1, name: 'Epoxy Flooring', image: '/Epoxy flooring.jpg' },
  { id: 2, name: 'Epoxy Flooring 1', image: '/Epoxy flooring 1.jpg' },
  { id: 3, name: 'Epoxy Flooring 2', image: '/Epoxy flooring2.jpg' },
  { id: 5, name: 'PU Concrete Flooring', image: '/pcf.jpg' },
  { id: 6, name: 'PU Concrete Flooring 1', image: '/pcf1.jpg' },
  { id: 7, name: 'PU Concrete Flooring 2', image: '/pcf2.jpg' },
  { id: 8, name: 'PU Concrete Flooring 3', image: '/pcf3.jpg' },
  { id: 9, name: 'Antistatic Flooring', image: '/afs.jpg' },
  { id: 10, name: 'Antistatic Flooring 1', image: '/afs1.jpg' },
  { id: 13, name: 'Decorative Flooring', image: '/decof.jpg' },
  { id: 49, name: 'Decorative Flooring 1', image: '/dfs1.jpg' },
  { id: 50, name: 'Decorative Flooring 2', image: '/dfs2.jpg' },
  { id: 51, name: 'Decorative Flooring 3', image: '/dfs3.jpg' },
  { id: 14, name: 'Densification Polished Concrete', image: '/Densification  polished concrete.jpg' },
  { id: 16, name: 'Densification Polished Concrete', image: '/DPC2.jpg' },
  { id: 17, name: 'EPU Flooring', image: '/EPU.jpg' },
  { id: 18, name: 'EPU Flooring 1', image: '/epu1.jpg' },
  { id: 19, name: 'EPU Flooring 2', image: '/epu2.jpg' },
  { id: 20, name: 'Food Grade Epoxy Flooring', image: '/fef.jpg' },
  { id: 21, name: 'Food Grade Epoxy Flooring 1', image: '/fef1.jpg' },
  { id: 22, name: 'Food Grade Epoxy Flooring 2', image: '/fef2.jpg' },
  { id: 23, name: 'Micro Topping', image: '/mt.jpg' },
  { id: 24, name: 'Micro Topping 2', image: '/mt2.jpg' },
  { id: 25, name: 'Micro Topping 3', image: '/mt3.jpg' },
  { id: 26, name: 'PU Car Park Coating', image: '/pcp.jpg' },
  { id: 27, name: 'PU Car Park Coating 1', image: '/pcp1.jpg' },
  { id: 28, name: 'PU Car Park Coating 2', image: '/pcp2.jpg' },
  { id: 29, name: 'PU Dust Proof Coating', image: '/staircasePU.avif' },
  { id: 30, name: 'PU Wall Coating', image: '/PU wallcoating.jpg' },
  { id: 31, name: 'PU Waterproof Coating', image: '/puc.jpg' },
  { id: 32, name: 'PU Waterproof Coating 1', image: '/puc1.jpg' },
  { id: 33, name: 'PU Waterproof Coating 2', image: '/puc2.jpg' },
  { id: 34, name: 'PU Waterproof Coating 3', image: '/puc3.jpg' },
  { id: 35, name: 'Sealant Application', image: '/sas.jpg' },
  { id: 36, name: 'Sealant Application 1', image: '/sas1.jpg' },
  { id: 37, name: 'Sealant Application 2', image: '/sas2.jpg' },
  { id: 38, name: 'Sealant Application 3', image: '/sas3.jpg' },
  { id: 39, name: 'Sinage Marking', image: '/Sinage marking.jpg' },
  { id: 40, name: 'Sinage Marking 1', image: '/Sinage marking1.jpg' },
  { id: 41, name: 'Sinage Marking 2', image: '/sm1.jpg' },
  { id: 42, name: 'Sinage Marking 3', image: '/sm2.jpg' },
  { id: 43, name: 'Sinage Marking 4', image: '/sm3.jpg' },
  { id: 44, name: 'Waterproofing', image: '/Waterproofing.jpg' },
  { id: 45, name: 'Cementitious Self Leveling Underlay', image: '/csu.jpg' },
  { id: 46, name: 'Cementitious Self Leveling Underlay 1', image: '/csu1.jpg' },
  { id: 47, name: 'Cementitious Self Leveling Underlay 2', image: '/csu2.jpg' },
  { id: 48, name: 'Cementitious Self Leveling Underlay 3', image: '/csu3.jpg' },

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
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <Navbar />
      <Hero
        title="Our Completed Projects"
        subtitle="Delivering excellence, one floor at a time."
        backgroundImage="/IMG-20251111-WA0058[1].jpg"
        height="h-[70vh]"
        enableSlider={false}
      />

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
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
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
                    <p className="text-[#e13403] mb-2 text-sm">{project.location}</p>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                  </motion.div>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-lg font-semibold text-black mb-1">{project.title}</h3>
                  <p className="text-[#e13403] text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-black mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryItems.reduce((rows: GalleryItem[][], item, index) => {
              if (index % 2 === 0) {
                rows.push([item]);
              } else {
                rows[rows.length - 1].push(item);
              }
              return rows;
            }, []).map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="grid grid-cols-2 gap-4"
                variants={imageVariants}
              >
                {row.map((item) => (
                  <motion.div
                    key={item.id}
                    className="cursor-pointer group relative"
                    variants={imageVariants}
                    onClick={() => setSelectedGalleryItem(item)}
                  >
                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border-2 border-gray-200 shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <p className="text-sm font-semibold text-center px-2">{item.name}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-full max-h-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryItem(null)}
          >
            <motion.div
              className="relative max-w-full max-h-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.name}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedGalleryItem(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
