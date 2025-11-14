

'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
// Simple Navbar for Product Pages
function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (searchQuery.trim()) {
      const exactMatch = products.find(product =>
        product.title.toLowerCase() === searchQuery.toLowerCase().trim()
      );
      if (exactMatch) {
        router.push(`/products/${exactMatch.slug}`);
      } else {
        router.push(`/products-services?search=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  const handleSuggestionClick = (product: any) => {
    setSearchQuery(product.title);
    setShowSuggestions(false);
    router.push(`/products/${product.slug}`);
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
                  onChange={handleSearchChange}
                  className="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#e13403] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 bg-[#e13403] text-white rounded-r-lg hover:bg-[#d12d02] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((product, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(product)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{product.title}</div>
                        <div className="text-sm text-gray-600 truncate">{product.description.slice(0, 80)}...</div>
                      </button>
                    ))}
                  </div>
                )}
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
    description: `Self-leveling epoxy flooring is a high-performance resin that naturally spreads across the floor to create a smooth and seamless surface. When applied over an existing concrete floor, the epoxy flows into cracks, chips, and uneven areas, effectively repairing the surface while creating a glossy, durable finish. This system provides an attractive, long-lasting surface with no visible signs of damage or wear, making it suitable for both industrial and commercial environments.`,
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
    description: `A decorative epoxy flooring system enhances the appearance of standard epoxy by adding creative visual effects. While regular epoxy already offers strength, gloss, and durability, decorative epoxy brings a unique touch that helps the flooring stand out. One of the most popular decorative methods is the chip or flake flooring system, where acrylic flakes are mixed with epoxy and then sealed with a clear top coat. This process, when done professionally, results in a beautiful, sparkling finish with customizable patterns that elevate the overall look of the floor.`,
    images: ['/dfs.jpg', '/dfs1.jpg', '/dfs2.jpg'],
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
    description: `Epoxy resurfacing is an effective and affordable solution for restoring damaged or uneven concrete floors. Over time, concrete surfaces may develop cracks, holes, or wear that affect both safety and appearance. The resurfacing process involves removing any existing coating, preparing the floor, and filling imperfections before applying a durable epoxy layer to seal the surface. A final clear top coat enhances strength and shine, leaving the floor looking newer, smoother, and safer.`,
    images: ['/ers.jpg', '/ers1.jpg'],
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
    description: `PU Concrete is a unique flooring system created by combining urethane and cement to form a thick, self-leveling surface that withstands thermal shocks, chemical exposure, heavy impacts, and continuous vehicular traffic. Known for decades of reliable performance in demanding industrial settings, PU Concrete is built to endure both physical and chemical abuses. It is seamless, hygienic, odorless, and resistant to bacterial growth, making it ideal for food and beverage industries where strict cleanliness standards are required. PU Concrete floors can be steam-cleaned to achieve sanitation levels comparable to stainless steel.`,
    images: ['/pcf1.jpg', '/pcf.jpg', '/pcf2.jpg', '/pcf3.jpg'],
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
    description: `Antistatic flooring is essential in environments where electro-static discharge can damage sensitive electronic equipment or pose risks around volatile materials. ESD flooring prevents static charge from building up by dissipating it safely to the ground. These resin-based systems provide a seamless, attractive, and highly durable surface with superior static control properties. Antistatic flooring ensures protection for both personnel and equipment, while also offering exceptional strength and stability.`,
    images: ['/afs.jpg', '/afs1.jpg', '/afs2.jpg', '/afs3.jpg'],
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
    slug: 'micro-topping',
    title: 'Micro Topping',
    category: 'Floor Refinishing',
    description: `Micro topping is a specialized cementitious overlay system designed to transform worn or damaged concrete floors into smooth, durable surfaces. This thin-layer application, typically 1/8 to 1/4 inch thick, provides a seamless finish that can be polished to a high gloss or left matte. Micro topping is ideal for refinishing existing floors without the need for extensive demolition or removal of the original concrete. It offers excellent adhesion to concrete substrates and can be customized with various colors and textures. The system is environmentally friendly, using water-based materials that reduce volatile organic compounds. Micro topping is commonly used in commercial spaces, retail areas, and industrial facilities where a cost-effective, quick renovation is required.`,
    images: ['/mt.jpg', '/mt2.jpg', '/mt3.jpg'],
    features: [
      'Smooth surface finish',
      'High durability',
      'Quick installation',
      'Low odor during application',
      'Excellent adhesion to concrete',
      'UV stable colors',
      'Customizable thickness',
      'Anti-slip options available',
      'Environmentally friendly',
      'Cost-effective',
      'Professional installation',
      'Warranty included',
      'Easy to clean and maintain',
      'Chemical resistant',
      'Seamless finish'
    ],
    specifications: {
      'Thickness': '1-3mm',
      'Drying Time': '12-24 hours',
      'Coverage': '1kg per 2-3 sqm',
      'Colors': 'Multiple options',
      'Application': 'Self-leveling',
      'Warranty': '3 years'
    },
    benefits: [
      { icon: Shield, title: 'Durability', desc: 'Withstands heavy use' },
      { icon: Sparkles, title: 'Aesthetics', desc: 'Modern, smooth appearance' },
      { icon: Droplets, title: 'Hygiene', desc: 'Easy to clean and sanitize' },
      { icon: Zap, title: 'Performance', desc: 'High chemical resistance' }
    ],
    applications: [
      { name: 'Commercial Spaces', icon: Users },
      { name: 'Residential', icon: Building },
      { name: 'Offices', icon: Building },
      { name: 'Retail Spaces', icon: Users }
    ]
  },
  {
    slug: 'industrial-commercial-wall-coating',
    title: 'Industrial & Commercial Wall Coating',
    category: 'Wall Coatings',
    description: `Industrial and commercial wall coatings are specialized protective systems designed to enhance the durability and appearance of interior and exterior walls in demanding environments. These coatings provide superior resistance to impacts, chemicals, moisture, and abrasion while maintaining an attractive finish. Available in various formulations including epoxy, polyurethane, and acrylic systems, they offer excellent adhesion to different substrates and can be customized for specific performance requirements. Wall coatings are essential for maintaining hygiene standards in food processing facilities, withstanding harsh chemicals in manufacturing plants, and providing long-lasting protection in commercial spaces.`,
    images: ['/pwc.jpg'],
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
    description: `Professional sealant application services provide comprehensive joint sealing solutions to enhance building durability and prevent water ingress. Our expert technicians use high-quality sealants to fill expansion joints, control joints, and perimeter gaps in floors and walls. These services are crucial for maintaining structural integrity, preventing moisture damage, and ensuring long-term performance of flooring systems. We offer various sealant types including polyurethane, silicone, and epoxy-based products, each selected for specific application requirements and environmental conditions. Our sealant application ensures proper joint movement accommodation while maintaining waterproofing effectiveness.`,
    images: ['/sas.jpg', '/sas1.jpg', '/sas2.jpg', '/sas3.jpg'],
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
    description: `Advanced waterproofing solutions provide comprehensive protection against moisture and water damage for floors and structures. Our specialized systems create impermeable barriers that prevent water penetration while maintaining breathability to avoid moisture buildup. These solutions are particularly effective in wet areas, basements, and environments exposed to high humidity or water exposure. We utilize premium waterproofing materials including cementitious coatings, liquid membranes, and crystalline waterproofing systems that chemically react with concrete to create permanent waterproofing from within. Our waterproofing services ensure long-term protection against leaks, mold growth, and structural damage.`,
    images: ['/Waterproofing.jpg', '/wp1.jpg', '/Waterproofing.jpg', '/wp.jpg'],
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
    description: `Custom signage and marking services provide essential visual guidance systems for safe and efficient navigation in industrial and commercial environments. Our specialized marking solutions include floor markings, directional signage, hazard warnings, and safety zone delineations that comply with international safety standards. We utilize high-visibility, durable materials that withstand heavy traffic, chemical exposure, and harsh environmental conditions. Our signage marking services help organizations maintain compliance with occupational health and safety regulations while improving operational efficiency and reducing accident risks.`,
    images: ['/sm1.jpg', '/sm2.jpg', '/sm3.jpg'],
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
    slug: 'epu-flooring-system',
    title: 'EPU Flooring System',
    category: 'Epoxy Flooring',
    description: `EPU flooring systems combine the superior chemical resistance of epoxy with the flexibility and UV stability of polyurethane, creating a high-performance coating ideal for demanding industrial and commercial environments. This hybrid system provides exceptional durability, excellent adhesion to concrete substrates, and resistance to thermal shock, abrasion, and chemical exposure. EPU flooring is particularly suitable for areas requiring both mechanical strength and aesthetic appeal, offering a seamless, glossy finish that enhances the overall appearance while providing long-term protection.`,
    images: ['/EPU.jpg', '/epu1.jpg', '/epu2.jpg'],
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
    slug: 'pu-dust-proof-staircase-coating',
    title: 'PU Dust Proof Staircase Coating',
    category: 'Staircase Coatings',
    description: `PU Dust Proof Staircase Coating provides specialized polyurethane formulations designed specifically for staircase applications where safety and cleanliness are paramount. This coating creates a seamless, dust-resistant surface that prevents the accumulation of dust and debris on stair treads and risers. The non-slip properties ensure excellent traction even in wet conditions, reducing the risk of slips and falls. The coating is highly durable, resisting wear from foot traffic while maintaining its aesthetic appeal. Easy to clean and maintain, it requires minimal upkeep while providing long-term protection for both residential and commercial staircases.`,
    images: ['/staircasePU.avif', '/psc1.jpg', '/psc.jpg', 'psc2.jpg'],
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
    description: `PU Car Park Coating delivers specialized polyurethane systems engineered for the demanding conditions of parking facilities. This high-performance coating provides exceptional resistance to vehicular traffic, oil spills, and harsh weather conditions while maintaining excellent UV stability. The seamless, monolithic surface prevents water pooling and reduces maintenance requirements. Available in various colors and finishes, it enhances visibility of parking lines and improves overall safety. The coating's fast-curing properties minimize downtime during application, making it ideal for busy commercial and residential parking areas.`,
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
    description: `PU Waterproof Coating offers advanced polyurethane-based waterproofing systems designed to provide superior moisture protection for a wide range of applications. This flexible coating creates a seamless, impermeable barrier that prevents water penetration while maintaining excellent elasticity to accommodate structural movement. The coating exhibits outstanding resistance to UV degradation, chemical exposure, and mechanical wear, ensuring long-term performance in demanding environments. Its fast-curing properties allow for quick application and minimal downtime, making it ideal for both new construction and renovation projects.`,
    images: ['/puc.jpg', '/puc2.jpg', '/puc1.jpg', '/puc3.jpg',],
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
    description: `Food Grade Epoxy Flooring provides specialized epoxy systems designed specifically for food processing and preparation environments. This NSF-certified flooring meets strict hygiene standards required by food safety regulations, offering a seamless, non-porous surface that prevents bacterial growth and simplifies cleaning procedures. The flooring is resistant to food acids, oils, and cleaning chemicals while maintaining excellent durability under heavy foot traffic and equipment movement. Available in various colors and finishes, it helps facilities comply with HACCP and FDA guidelines while providing an attractive, professional appearance.`,
    images: ['/fef.jpg', '/fef1.jpg', '/fef.jpg', '/fef2.jpg'],
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
    description: `Densification Polished Concrete transforms existing concrete surfaces through a specialized process that hardens and polishes the material to create a durable, attractive finish. The densification process involves applying chemical hardeners that penetrate the concrete surface, increasing its density and resistance to wear. This is followed by multiple grinding and polishing steps that achieve a high-gloss, reflective surface. The result is a low-maintenance flooring solution that maintains its appearance with minimal upkeep while providing excellent durability for commercial and industrial applications.`,
    images: ['/dpc.jpg', '/DPC2.jpg'],
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
    description: `Cementitious Self-Leveling Underlay provides a premium cement-based leveling compound designed to create perfectly flat and stable surfaces for flooring installations. This high-performance underlay flows effortlessly to fill low spots, cracks, and imperfections, creating a uniform base that ensures optimal adhesion and performance of finished flooring systems. The fast-setting formula allows for quick installation and reduced project timelines while maintaining exceptional compressive strength and dimensional stability. Ideal for both new construction and renovation projects, this underlay system eliminates the need for extensive surface preparation and ensures long-term durability of the finished floor.`,
    images: ['/csu.jpg', '/csu1.jpg', '/csu2.jpg', '/csu3.jpg'],
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
  const router = useRouter();
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
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${index === currentImageIndex ? 'border-[#e13403]' : 'border-gray-200'
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
                  {product.description}
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
                  href={`/contact?subject=${encodeURIComponent(product.title)}`}
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

          {/* Mobile View - Only 2 images */}
          <div className="md:hidden grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] h-64">
              <Image
                src={product.images[0]}
                alt={`${product.title} - Image 1`}
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
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] h-64">
              <Image
                src={product.images[1] || product.images[0]}
                alt={`${product.title} - Image 2`}
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

          {/* Desktop View - Full gallery */}
          <div className="hidden md:grid grid-cols-3 gap-6 h-[500px] max-w-6xl mx-auto">
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
            {product?.images?.[3] && (
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
            )}

          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
