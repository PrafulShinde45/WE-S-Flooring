'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
  X,
} from 'lucide-react';

// Hero parallax effect
const useParallax = (value: number) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1], [0, -value]);
};

export default function ProductsServices() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsServicesContent />
    </Suspense>
  );
}

interface Service {
  title: string;
  description: string;
  icon: any;
  image: string;
  slug: string;
}

// Service data
const services: Service[] = [
  {
    title: 'Self-Leveling Epoxy Flooring System',
    description: 'Seamless, self-leveling epoxy for smooth, durable surfaces in industrial and commercial spaces. Ideal for warehouses, factories, and showrooms. Self-leveling epoxy flooring refers to a special type of epoxy resin, one which, as the name implies, can actually level itself, essentially making your floor self-healing. Epoxy flooring over your current concrete floor, and as the epoxy spreads out, it fills in any cracks or chips in your concrete floor, leaving you with a level surface with no sign of damage or wear.',
    icon: Droplets,
    image: '/Epoxy%20flooring2.jpg',
    slug: 'self-leveling-epoxy-flooring-system',
  },
  {
    title: 'Decorative Flooring System',
    description: 'Aesthetic and functional decorative flooring solutions for modern interiors. Custom designs for residential and commercial applications.',
    icon: Paintbrush,
    image: '/dfs.jpg',
    slug: 'decorative-flooring-system',
  },
  {
    title: 'Epoxy Resurfacing / Floor Repair Service',
    description: 'Expert epoxy resurfacing and repair to restore damaged flooring. Quick and efficient solutions for cracks, chips, and wear.',
    icon: Hammer,
    image: '/ers.jpg',
    slug: 'epoxy-resurfacing-floor-repair',
  },
  {
    title: 'PU Concrete Flooring',
    description: 'Durable polyurethane concrete for high-traffic industrial areas. Provides excellent abrasion resistance and chemical protection.',
    icon: Shield,
    image: '/pcf1.jpg',
    slug: 'pu-concrete-flooring',
  },
  {
    title: 'Antistatic Flooring System',
    description: 'Electrostatic discharge protection for sensitive environments. Essential for electronics manufacturing and data centers.',
    icon: Zap,
    image: '/afs.jpg',
    slug: 'antistatic-flooring-system',
  },
  {
    title: 'Micro Topping',
    description: 'High-performance micro topping for smooth, durable surfaces. Ideal for refinishing and leveling existing floors.',
    icon: CheckCircle,
    image: '/mt.jpg',
    slug: 'micro-topping',
  },
  {
    title: 'Industrial & Commercial Wall Coating',
    description: 'Protective and aesthetic wall coatings for industrial spaces. Resistant to impacts, chemicals, and easy to clean.',
    icon: Building,
    image: '/Pwc.jpg',
    slug: 'industrial-commercial-wall-coating',
  },
  {
    title: 'Sealant Application Services',
    description: 'Professional sealant application for enhanced durability and protection. Seals joints and prevents water ingress.',
    icon: Sparkles,
    image: '/sas.jpg',
    slug: 'sealant-application-services',
  },
  {
    title: 'Waterproofing',
    description: 'Advanced waterproofing solutions to protect floors from moisture and water damage. Ideal for wet areas and basements.',
    icon: Droplets,
    image: '/Waterproofing.jpg',
    slug: 'waterproofing',
  },
  {
    title: 'Sinage Marking',
    description: 'Custom signage and marking services for clear navigation and safety. Durable and compliant with industry standards.',
    icon: CheckCircle,
    image: '/sm1.jpg',
    slug: 'sinage-marking',
  },
  {
    title: 'EPU Flooring System',
    description: 'High-performance epoxy polyurethane flooring for durability and aesthetics. Smooth finish with excellent adhesion.',
    icon: Paintbrush,
    image: '/EPU.jpg',
    slug: 'epu-flooring-system',
  },
  {
    title: 'PU Dust Proof Staircase Coating',
    description: 'Dust-proof polyurethane coatings for staircases to ensure safety and cleanliness. Non-slip and easy maintenance.',
    icon: Shield,
    image: '/staircasePU.avif',
    slug: 'pu-dust-proof-staircase-coating',
  },
  {
    title: 'PU Car Park Coating',
    description: 'Robust polyurethane coatings for car parks to withstand heavy traffic. UV resistant and fast curing.',
    icon: Car,
    image: '/pcp.jpg',
    slug: 'pu-car-park-coating',
  },
  {
    title: 'PU Waterproof Coating',
    description: 'Waterproof polyurethane coatings for superior moisture resistance. Flexible and long-lasting protection.',
    icon: Droplets,
    image: '/puc2.jpg',
    slug: 'pu-waterproof-coating',
  },
  {
    title: 'Food Grade Epoxy Flooring',
    description: 'Hygienic, food-safe epoxy flooring for kitchens and food processing areas. NSF certified and seamless.',
    icon: Sparkles,
    image: '/fef.jpg',
    slug: 'food-grade-epoxy-flooring',
  },
  {
    title: 'Densification Polished Concrete',
    description: 'Densified and polished concrete for a sleek, low-maintenance finish. Eco-friendly and cost-effective.',
    icon: Hammer,
    image: '/Dpc.jpg',
    slug: 'densification-polished-concrete',
  },
  {
    title: 'Cementious Self leveling Underlay',
    description: 'Cementitious self-leveling underlay for even, stable flooring preparation. Fast drying and high strength.',
    icon: Droplets,
    image: '/csu.jpg',
    slug: 'cementious-self-leveling-underlay',
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
    'Self-Leveling Epoxy Flooring System',
    'Decorative Flooring System',
    'PU Concrete Flooring',
    'Antistatic Flooring System',
    'Line Marking / Safety Marker',
    'Industrial & Commercial Wall Coating',
    'Sealant Application Services',
    'Waterproofing',
    'Sinage Marking',
    'PU Wallcoating',
    'PU Dust Proof Staircase Coating',
    'PU Car Park Coating',
    'PU Waterproof Coating',
    'Food Grade Epoxy Flooring',
    'Densification Polished Concrete',
    'Cementious Self leveling Underlay',
  ],
  Repairs: ['Epoxy Resurfacing / Floor Repair Service'],
  Maintenance: ['Densification Polished Concrete'],
};

function ProductsServicesContent() {
  const [activeTab, setActiveTab] = useState('Installations');
  const [selectedProduct, setSelectedProduct] = useState<Service | null>(null);
  const [filteredServices, setFilteredServices] = useState<Service[]>(services);
  const y = useParallax(0.5);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Handle search from URL params
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      const filtered = services.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  }, [searchParams]);

  const openModal = (product: Service) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="/sign-neon-light-illuminated-inside.jpg"
            alt="Flooring background"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </motion.div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Superior Flooring Solutions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Excellence in every step.
          </motion.p>
          <motion.button
           className="inline-block bg-[#e13403] text-white px-8 py-3 rounded-lg text-lg font-semibold border-2 border-[#e13403] hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Products
          </motion.button>
        </div>
      </section>

      {/* Specialized Services */}
      <section id="services" className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-16"
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
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-beige/50 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                onClick={() => window.location.href = `/products/${service.slug}`}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full mx-4 p-6 relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-brown mb-4">
              {selectedProduct.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {selectedProduct.description}
            </p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
}
