

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
// Simple Navbar for Product Pages
function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-black">
              <Image src="/logo.png" alt="Logo" width={60} height={50} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-black text-base font-medium">
              About
            </Link>
            <Link href="/products-services" className="text-black text-base font-medium">
              Products
            </Link>
            <Link href="/industries" className="text-black text-base font-medium">
              Industries
            </Link>
            <Link href="/projects" className="text-black text-base font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-black text-base font-medium">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#e13403] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 bg-[#e13403] text-white rounded-r-lg hover:bg-[#d12d02] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {/* Mobile Search */}
            <div className="px-2 pt-2">
              <form onSubmit={handleSearch} className="flex">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e13403] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e13403] text-white p-1 rounded hover:bg-[#d12d02] transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2">
              <Link href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                About
              </Link>
              <Link href="/products-services" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                Products & Services
              </Link>
              <Link href="/industries" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                Industries
              </Link>
              <Link href="/projects" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
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
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Product data (same as in products-services page)
const products = [
  {
    slug: 'self-leveling-epoxy-flooring-system',
    title: 'Self-Leveling Epoxy Flooring System',
    category: 'Epoxy Flooring',
    description: 'Seamless, self-leveling epoxy for smooth, durable surfaces in industrial and commercial spaces. Ideal for warehouses, factories, and showrooms. Self-leveling epoxy flooring refers to a special type of epoxy resin, one which, as the name implies, can actually level itself, essentially making your floor self-healing. Epoxy flooring over your current concrete floor, and as the epoxy spreads out, it fills in any cracks or chips in your concrete floor, leaving you with a level surface with no sign of damage or wear.',
    shortDescription: '.',
    images: ['/Epoxy%20flooring.jpg', '/Epoxy%20flooring%201.jpg', '/Epoxy%20flooring%203.jpg', '/Epoxy%20flooring2.jpg'],
    features: [
      'Seamless and smooth finish',
      'High durability and wear resistance',
      'Easy to clean and maintain',
      'Chemical resistant',
      'Available in various colors',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Durability', desc: 'Withstands heavy industrial use' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern, clean appearance' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High chemical resistance' }
    ],
    applications: [
      { name: 'Warehouses', icon: Building },
      { name: 'Factories', icon: Hammer },
      { name: 'Showrooms', icon: Paintbrush },
      { name: 'Commercial Spaces', icon: Users }
    ]
  },
  {
    slug: 'decorative-flooring-system',
    title: 'Decorative Flooring System',
    category: 'Decorative Flooring',
    description: 'Aesthetic and functional decorative flooring solutions for modern interiors. Custom designs for residential and commercial applications.',
    shortDescription: 'Transform spaces with stunning decorative flooring that combines beauty and functionality.',
    images: ['/decorative-flooring-system.avif', '/floor polishing.avif'],
    features: [
      'Custom design options',
      'High aesthetic appeal',
      'Durable surface',
      'Easy maintenance',
      'Color variety',
      'Pattern flexibility',
      'Seamless finish',
      'Scratch resistant',
      'UV protection',
      'Moisture resistant',
      'Professional finish',
      'Long-lasting',
      'Eco-friendly materials',
      'Quick installation',
      'Cost-effective'
    ],
    specifications: {
      'Thickness': '1-3mm',
      'Drying Time': '12-24 hours',
      'Coverage': '1kg per 2-3 sqm',
      'Colors': 'Unlimited options',
      'Application': 'Roller/Squeegee',
      'Warranty': '3 years'
    },
    benefits: [
      { icon: Paintbrush, title: 'Design', desc: 'Customizable aesthetics' },
      { icon: Shield, title: 'Protection', desc: 'Durable and protective' },
      { icon: Sparkles, title: 'Elegance', desc: 'Premium appearance' },
      { icon: CheckCircle, title: 'Quality', desc: 'High-grade materials' }
    ],
    applications: [
      { name: 'Residential', icon: Building },
      { name: 'Commercial', icon: Users },
      { name: 'Hotels', icon: Star },
      { name: 'Offices', icon: Building }
    ]
  },
  {
    slug: 'epoxy-resurfacing-floor-repair',
    title: 'Epoxy Resurfacing / Floor Repair Service',
    category: 'Floor Repair',
    description: 'Self-leveling epoxy flooring refers to a special type o',
    shortDescription: 'Restore and renew your floors with our professional epoxy repair services.',
    images: ['/epoxy-resurfacing-floor-repair.avif'],
    features: [
      'Crack repair',
      'Chip restoration',
      'Surface leveling',
      'Color matching',
      'Quick drying',
      'Durable finish',
      'Cost-effective',
      'Professional service',
      'Minimal disruption',
      'Long-lasting results'
    ],
    specifications: {
      'Repair Type': 'Surface restoration',
      'Drying Time': '4-8 hours',
      'Coverage': 'Varies by damage',
      'Colors': 'Matching available',
      'Application': 'Professional',
      'Warranty': '2 years'
    },
    benefits: [
      { icon: Hammer, title: 'Restoration', desc: 'Brings floors back to life' },
      { icon: Zap, title: 'Speed', desc: 'Fast repair process' },
      { icon: Shield, title: 'Protection', desc: 'Enhanced durability' },
      { icon: CheckCircle, title: 'Quality', desc: 'Professional results' }
    ],
    applications: [
      { name: 'Warehouses', icon: Building },
      { name: 'Garages', icon: Car },
      { name: 'Commercial', icon: Users },
      { name: 'Industrial', icon: Hammer }
    ]
  },
  {
    slug: 'pu-concrete-flooring',
    title: 'PU Concrete Flooring',
    category: 'Polyurethane Flooring',
    description: 'Durable polyurethane concrete for high-traffic industrial areas. Provides excellent abrasion resistance and chemical protection.',
    shortDescription: 'Robust PU concrete flooring for industrial applications.',
    images: ['/pcf1.jpg','/pcf.jpg','/pcf2.jpg','/pcf3.jpg'],
    features: [
      'High abrasion resistance',
      'Chemical protection',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless and smooth finish',
      'Easy to clean and maintain',
      'Chemical resistant'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Durability', desc: 'Withstands heavy industrial use' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern, clean appearance' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High chemical resistance' }
    ],
    applications: [
      { name: 'Warehouses', icon: Building },
      { name: 'Factories', icon: Hammer },
      { name: 'Showrooms', icon: Paintbrush },
      { name: 'Commercial Spaces', icon: Users }
    ]
  },
  {
    slug: 'antistatic-flooring-system',
    title: 'Antistatic Flooring System',
    category: 'Specialty Flooring',
    description: 'Electrostatic discharge protection for sensitive environments. Essential for electronics manufacturing and data centers.',
    shortDescription: 'Antistatic flooring for sensitive electronic environments.',
    images: ['/EPU.jpg'],
    features: [
      'Electrostatic discharge protection',
      'High durability and wear resistance',
      'Easy to clean and maintain',
      'Chemical resistant',
      'Available in various colors',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Durability', desc: 'Withstands heavy industrial use' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern, clean appearance' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High chemical resistance' }
    ],
    applications: [
      { name: 'Electronics Manufacturing', icon: Building },
      { name: 'Data Centers', icon: Building },
      { name: 'Laboratories', icon: Building },
      { name: 'Hospitals', icon: Users }
    ]
  },
  {
    slug: 'line-marking-safety-marker',
    title: 'Line Marking Safety Marker',
    category: 'Safety Solutions',
    description: 'Precision line marking for safety and organization in facilities. Color-coded markings for aisles, zones, and hazards.',
    shortDescription: 'Precision line marking for safety and organization.',
    images: ['/Sinage marking.jpg'],
    features: [
      'Precision line marking',
      'Color-coded safety markings',
      'High visibility',
      'Durable and long-lasting',
      'Quick application',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable designs',
      'Anti-slip options available',
      'Environmentally friendly',
      'Cost-effective',
      'Professional installation',
      'Warranty included',
      'Easy to clean and maintain'
    ],
    specifications: {
      'Type': 'Line marking',
      'Drying Time': '4-8 hours',
      'Coverage': 'Varies by area',
      'Colors': 'High visibility colors',
      'Application': 'Professional',
      'Warranty': '2 years'
    },
    benefits: [
      { icon: Shield, title: 'Safety', desc: 'Enhances workplace safety' },
      { icon: CheckCircle, title: 'Organization', desc: 'Clear zone identification' },
      { icon: Zap, title: 'Efficiency', desc: 'Quick and easy application' },
      { icon: Award, title: 'Compliance', desc: 'Meets industry standards' }
    ],
    applications: [
      { name: 'Warehouses', icon: Building },
      { name: 'Factories', icon: Hammer },
      { name: 'Parking Lots', icon: Car },
      { name: 'Commercial Spaces', icon: Users }
    ]
  },
  {
    slug: 'industrial-commercial-wall-coating',
    title: 'Industrial & Commercial Wall Coating',
    category: 'Wall Coatings',
    description: 'Protective and aesthetic wall coatings for industrial spaces. Resistant to impacts, chemicals, and easy to clean.',
    shortDescription: 'Protective wall coatings for industrial and commercial spaces.',
    images: ['/PU wallcoating.jpg'],
    features: [
      'Impact resistant',
      'Chemical protection',
      'Easy to clean',
      'Durable surface',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to walls',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless finish'
    ],
    specifications: {
      'Thickness': '1-3mm',
      'Drying Time': '12-24 hours',
      'Coverage': '1kg per 2-3 sqm',
      'Colors': 'Multiple options',
      'Application': 'Roller/Spray',
      'Warranty': '3 years'
    },
    benefits: [
      { icon: Shield, title: 'Protection', desc: 'Resistant to impacts and chemicals' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern, clean appearance' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High durability' }
    ],
    applications: [
      { name: 'Factories', icon: Hammer },
      { name: 'Warehouses', icon: Building },
      { name: 'Commercial Spaces', icon: Users },
      { name: 'Food Processing Areas', icon: Building }
    ]
  },
  {
    slug: 'sealant-application-services',
    title: 'Sealant Application Services',
    category: 'Sealant Services',
    description: 'Professional sealant application for enhanced durability and protection. Seals joints and prevents water ingress.',
    shortDescription: 'Professional sealant application for enhanced durability.',
    images: ['/sealant-application-services.avif'],
    features: [
      'Joint sealing',
      'Water ingress prevention',
      'Enhanced durability',
      'Quick drying',
      'Durable finish',
      'Cost-effective',
      'Professional service',
      'Minimal disruption',
      'Long-lasting results',
      'Environmentally friendly',
      'Easy to clean and maintain',
      'Chemical resistant',
      'UV stable',
      'Customizable',
      'Warranty included'
    ],
    specifications: {
      'Type': 'Sealant application',
      'Drying Time': '4-8 hours',
      'Coverage': 'Varies by area',
      'Colors': 'Transparent',
      'Application': 'Professional',
      'Warranty': '2 years'
    },
    benefits: [
      { icon: Shield, title: 'Protection', desc: 'Prevents water ingress' },
      { icon: Zap, title: 'Speed', desc: 'Fast application process' },
      { icon: CheckCircle, title: 'Quality', desc: 'Professional results' },
      { icon: Award, title: 'Durability', desc: 'Long-lasting protection' }
    ],
    applications: [
      { name: 'Floors', icon: Building },
      { name: 'Walls', icon: Building },
      { name: 'Joints', icon: Hammer },
      { name: 'Industrial Areas', icon: Building }
    ]
  },
  {
    slug: 'waterproofing',
    title: 'Waterproofing',
    category: 'Waterproofing Solutions',
    description: 'Advanced waterproofing solutions to protect floors from moisture and water damage. Ideal for wet areas and basements.',
    shortDescription: 'Advanced waterproofing for floors and wet areas.',
    images: ['/Waterproofing.jpg','/wp1.jpg','/Waterproofing.jpg','/wp.jpg'],
    features: [
      'Moisture protection',
      'Water damage prevention',
      'Durable surface',
      'Easy maintenance',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless finish'
    ],
    specifications: {
      'Type': 'Waterproofing',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Protection', desc: 'Prevents water damage' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High moisture resistance' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern appearance' }
    ],
    applications: [
      { name: 'Basements', icon: Building },
      { name: 'Bathrooms', icon: Building },
      { name: 'Kitchens', icon: Building },
      { name: 'Wet Areas', icon: Building }
    ]
  },
  {
    slug: 'sinage-marking',
    title: 'Sinage Marking',
    category: 'Safety Solutions',
    description: 'Custom signage and marking services for clear navigation and safety. Durable and compliant with industry standards.',
    shortDescription: 'Custom signage for clear navigation and safety.',
    images: ['/Sinage marking1.jpg'],
    features: [
      'Custom signage designs',
      'High visibility markings',
      'Durable and long-lasting',
      'Quick application',
      'Low odor during application',
      'Excellent adhesion to surfaces',
      'UV stable colors',
      'Customizable sizes',
      'Anti-slip options available',
      'Environmentally friendly',
      'Cost-effective',
      'Professional installation',
      'Warranty included',
      'Easy to clean and maintain',
      'Chemical resistant'
    ],
    specifications: {
      'Type': 'Signage marking',
      'Drying Time': '4-8 hours',
      'Coverage': 'Varies by area',
      'Colors': 'High visibility colors',
      'Application': 'Professional',
      'Warranty': '2 years'
    },
    benefits: [
      { icon: Shield, title: 'Safety', desc: 'Enhances workplace safety' },
      { icon: CheckCircle, title: 'Organization', desc: 'Clear navigation' },
      { icon: Zap, title: 'Efficiency', desc: 'Quick and easy application' },
      { icon: Award, title: 'Compliance', desc: 'Meets industry standards' }
    ],
    applications: [
      { name: 'Warehouses', icon: Building },
      { name: 'Factories', icon: Hammer },
      { name: 'Offices', icon: Building },
      { name: 'Commercial Spaces', icon: Users }
    ]
  },
  {
    slug: 'pu-wallcoating',
    title: 'PU Wallcoating',
    category: 'Wall Coatings',
    description: 'High-performance polyurethane wall coatings for durability and aesthetics. Smooth finish with excellent adhesion.',
    shortDescription: 'High-performance PU wall coatings for durability.',
    images: ['/PU wallcoating.jpg'],
    features: [
      'High-performance coating',
      'Smooth finish',
      'Excellent adhesion',
      'Durable surface',
      'Easy maintenance',
      'Fast curing time',
      'Low odor during application',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Chemical resistant'
    ],
    specifications: {
      'Thickness': '1-3mm',
      'Drying Time': '12-24 hours',
      'Coverage': '1kg per 2-3 sqm',
      'Colors': 'Multiple options',
      'Application': 'Roller/Spray',
      'Warranty': '3 years'
    },
    benefits: [
      { icon: Shield, title: 'Durability', desc: 'Long-lasting protection' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Smooth, premium finish' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High chemical resistance' }
    ],
    applications: [
      { name: 'Commercial Spaces', icon: Users },
      { name: 'Offices', icon: Building },
      { name: 'Hotels', icon: Star },
      { name: 'Residential', icon: Building }
    ]
  },
  {
    slug: 'pu-dust-proof-staircase-coating',
    title: 'PU Dust Proof Staircase Coating',
    category: 'Staircase Coatings',
    description: 'Dust-proof polyurethane coatings for staircases to ensure safety and cleanliness. Non-slip and easy maintenance.',
    shortDescription: 'Dust-proof PU coatings for staircases.',
    images: ['/staircasePU.avif','/psc1.jpg','/psc.jpg','psc2.jpg'],
    features: [
      'Dust-proof protection',
      'Non-slip surface',
      'Easy maintenance',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless finish',
      'Chemical resistant'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Safety', desc: 'Non-slip surface for staircases' },
      { icon: Droplets, title: 'Hygiene', desc: 'Dust-proof and easy to clean' },
      { icon: Zap, title: 'Performance', desc: 'High durability' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern appearance' }
    ],
    applications: [
      { name: 'Residential', icon: Building },
      { name: 'Commercial', icon: Users },
      { name: 'Public Buildings', icon: Building },
      { name: 'Hotels', icon: Star }
    ]
  },
  {
    slug: 'pu-car-park-coating',
    title: 'PU Car Park Coating',
    category: 'Car Park Coatings',
    description: 'Robust polyurethane coatings for car parks to withstand heavy traffic. UV resistant and fast curing.',
    shortDescription: 'Robust PU coatings for car parks.',
    images: ['/pcp.jpg', '/pcp1.jpg', '/pcp2.jpg', '/CAR PARK 3.avif'],
    features: [
      'Heavy traffic resistance',
      'UV resistant',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless and smooth finish',
      'Easy to clean and maintain',
      'Chemical resistant',
      'Color variety',
      'Customizable thickness'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Durability', desc: 'Withstands heavy traffic' },
      { icon: Car, title: 'Traffic Resistance', desc: 'Ideal for car parks' },
      { icon: Zap, title: 'Performance', desc: 'UV resistant and fast curing' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern appearance' }
    ],
    applications: [
      { name: 'Car Parks', icon: Car },
      { name: 'Parking Lots', icon: Car },
      { name: 'Commercial Spaces', icon: Users },
      { name: 'Industrial Areas', icon: Building }
    ]
  },
  {
    slug: 'pu-waterproof-coating',
    title: 'PU Waterproof Coating',
    category: 'Waterproofing Solutions',
    description: 'Waterproof polyurethane coatings for superior moisture resistance. Flexible and long-lasting protection.',
    shortDescription: 'Waterproof PU coatings for moisture resistance.',
    images: ['/puc.jpg','/puc2.jpg','/puc1.jpg','/puc3.jpg',],
    features: [
      'Superior moisture resistance',
      'Flexible coating',
      'Long-lasting protection',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless finish',
      'Easy to clean and maintain'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Droplets, title: 'Waterproofing', desc: 'Superior moisture resistance' },
      { icon: Shield, title: 'Durability', desc: 'Long-lasting protection' },
      { icon: Zap, title: 'Performance', desc: 'Flexible and durable' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern appearance' }
    ],
    applications: [
      { name: 'Roofs', icon: Building },
      { name: 'Terraces', icon: Building },
      { name: 'Basements', icon: Building },
      { name: 'Wet Areas', icon: Building }
    ]
  },
  {
    slug: 'food-grade-epoxy-flooring',
    title: 'Food Grade Epoxy Flooring',
    category: 'Food Safe Flooring',
    description: 'Hygienic, food-safe epoxy flooring for kitchens and food processing areas. NSF certified and seamless.',
    shortDescription: 'Hygienic food-safe epoxy flooring for kitchens.',
    images: ['/fef.jpg','/fef1.jpg','/fef.jpg','/fef2.jpg'],
    features: [
      'NSF certified',
      'Hygienic surface',
      'Seamless finish',
      'High durability and wear resistance',
      'Easy to clean and maintain',
      'Chemical resistant',
      'Available in various colors',
      'Fast curing time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Shield, title: 'Hygiene', desc: 'NSF certified for food safety' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern, clean appearance' },
      { icon: Droplets, title: 'Cleanliness', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High chemical resistance' }
    ],
    applications: [
      { name: 'Kitchens', icon: Building },
      { name: 'Food Processing', icon: Building },
      { name: 'Restaurants', icon: Users },
      { name: 'Commercial Spaces', icon: Users }
    ]
  },
  {
    slug: 'densification-polished-concrete',
    title: 'Densification Polished Concrete',
    category: 'Polished Concrete',
    description: 'Densified and polished concrete for a sleek, low-maintenance finish. Eco-friendly and cost-effective.',
    shortDescription: 'Sleek polished concrete for low-maintenance finishes.',
    images: ['/Densification polished concrete.jpg'],
    features: [
      'Sleek polished finish',
      'Low-maintenance surface',
      'Eco-friendly',
      'Cost-effective',
      'High durability',
      'Easy to clean',
      'Chemical resistant',
      'UV stable',
      'Customizable designs',
      'Long-lasting',
      'Professional installation',
      'Warranty included',
      'Seamless finish',
      'Anti-slip options available',
      'Environmentally friendly'
    ],
    specifications: {
      'Type': 'Polished concrete',
      'Drying Time': '24-48 hours',
      'Coverage': 'Varies by area',
      'Colors': 'Natural concrete tones',
      'Application': 'Professional',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Sparkles, title: 'Aesthetics', desc: 'Sleek, modern appearance' },
      { icon: CheckCircle, title: 'Maintenance', desc: 'Low-maintenance surface' },
      { icon: Award, title: 'Eco-Friendly', desc: 'Sustainable materials' },
      { icon: Zap, title: 'Performance', desc: 'High durability' }
    ],
    applications: [
      { name: 'Residential', icon: Building },
      { name: 'Commercial', icon: Users },
      { name: 'Retail Spaces', icon: Users },
      { name: 'Offices', icon: Building }
    ]
  },
  {
    slug: 'cementious-self-leveling-underlay',
    title: 'Cementious Self Leveling Underlay',
    category: 'Underlay Solutions',
    description: 'Cementitious self-leveling underlay for even, stable flooring preparation. Fast drying and high strength.',
    shortDescription: 'Cementitious underlay for stable flooring preparation.',
    images: ['/Cementious self leveling underlay.jpg'],
    features: [
      'Even surface preparation',
      'High strength',
      'Fast drying time',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Long-term cost savings',
      'Professional installation',
      'Warranty included',
      'Seamless finish',
      'Easy to clean and maintain',
      'Chemical resistant'
    ],
    specifications: {
      'Thickness': '2-5mm',
      'Drying Time': '24-48 hours',
      'Coverage': '1kg per 1-2 sqm',
      'Colors': 'Gray tones',
      'Application': 'Self-leveling',
      'Warranty': '5 years'
    },
    benefits: [
      { icon: Hammer, title: 'Stability', desc: 'Provides even, stable base' },
      { icon: Zap, title: 'Speed', desc: 'Fast drying time' },
      { icon: Shield, title: 'Durability', desc: 'High strength underlay' },
      { icon: CheckCircle, title: 'Quality', desc: 'Professional results' }
    ],
    applications: [
      { name: 'Floor Preparation', icon: Hammer },
      { name: 'Warehouses', icon: Building },
      { name: 'Commercial Spaces', icon: Users },
      { name: 'Industrial Areas', icon: Building }
    ]
  }
];

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <Link href="/products-services" className="text-[#e13403] hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Get related products (same category, excluding current)
  const relatedProducts = products.filter(p => p.category === product.category && p.slug !== slug).slice(0, 3);



  return (
    <>
      <SimpleNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Images */}
            <div className="space-y-4">
              <div className="relative h-96 w-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}
              </div>
              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-[#e13403]' : 'border-gray-200'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-[#e13403] font-semibold text-lg mb-2">{product.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black">Key Highlights</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#e13403] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="inline-block bg-[#e13403] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d12d02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Product Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
            Product Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <benefit.icon className="w-12 h-12 text-[#e13403] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
            Project Gallery
          </h2>
          <div className="grid grid-cols-3 gap-6 h-[500px] max-w-6xl mx-auto">
            {/* Left Image - Large vertical (50% height) */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] col-span-1 row-span-2">
              <Image
                src={product.images[0]}
                alt={`${product.title} - Image 1`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="text-xl font-bold mb-1">{product.title}</p>
                  <p className="text-sm opacity-90">Professional Installation</p>
                </div>
              </div>
            </div>

            {/* Middle Images - Two stacked smaller images (250px height each) */}
            <div className="col-span-1 space-y-6">
              {/* Middle Top Image */}
              <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] h-[250px]">
                <Image
                  src={product.images[1] || product.images[0]}
                  alt={`${product.title} - Image 2`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-3 border border-white/20">
                    <p className="text-lg font-bold mb-1">{product.title}</p>
                    <p className="text-xs opacity-90">Professional Installation</p>
                  </div>
                </div>
              </div>
              {/* Middle Bottom Image */}
              <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] h-[250px]">
                <Image
                  src={product.images[2] || product.images[0]}
                  alt={`${product.title} - Image 3`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-3 border border-white/20">
                    <p className="text-lg font-bold mb-1">{product.title}</p>
                    <p className="text-xs opacity-90">Professional Installation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Large vertical (50% height) */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] col-span-1 row-span-2">
              <Image
                src={product.images[3]}
                alt={`${product.title} - Image 4`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="text-xl font-bold mb-1">{product.title}</p>
                  <p className="text-sm opacity-90">Professional Installation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
