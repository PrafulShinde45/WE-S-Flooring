'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close search when opening mobile menu
    if (!isOpen) {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowProductsDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 2000); // 2 seconds delay
    setDropdownTimeout(timeout);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
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
    if (searchTerm.trim()) {
      const exactMatch = products.find(product =>
        product.title.toLowerCase() === searchTerm.toLowerCase().trim()
      );
      if (exactMatch) {
        router.push(`/products/${exactMatch.slug}`);
      } else {
        router.push(`/products-services?search=${encodeURIComponent(searchTerm.trim())}`);
      }
    }
  };

  const handleSuggestionClick = (product: any) => {
    setSearchTerm(product.title);
    setShowSuggestions(false);
    router.push(`/products/${product.slug}`);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Product data for search
  const products = [
    {
      slug: 'self-leveling-epoxy-flooring-system',
      title: 'Self-Leveling Epoxy Flooring System',
      category: 'Epoxy Flooring',
      description: `Self-leveling epoxy flooring is a high-performance resin that naturally spreads across the floor to create a smooth and seamless surface. When applied over an existing concrete floor, the epoxy flows into cracks, chips, and uneven areas, effectively repairing the surface while creating a glossy, durable finish. This system provides an attractive, long-lasting surface with no visible signs of damage or wear, making it suitable for both industrial and commercial environments.`,
    },
    {
      slug: 'decorative-flooring-system',
      title: 'Decorative Flooring System',
      category: 'Decorative Flooring',
      description: `A decorative epoxy flooring system enhances the appearance of standard epoxy by adding creative visual effects. While regular epoxy already offers strength, gloss, and durability, decorative epoxy brings a unique touch that helps the flooring stand out. One of the most popular decorative methods is the chip or flake flooring system, where acrylic flakes are mixed with epoxy and then sealed with a clear top coat. This process, when done professionally, results in a beautiful, sparkling finish with customizable patterns that elevate the overall look of the floor.`,
    },
    {
      slug: 'epoxy-resurfacing-floor-repair',
      title: 'Epoxy Resurfacing / Floor Repair Service',
      category: 'Floor Repair',
      description: `Epoxy resurfacing is an effective and affordable solution for restoring damaged or uneven concrete floors. Over time, concrete surfaces may develop cracks, holes, or wear that affect both safety and appearance. The resurfacing process involves removing any existing coating, preparing the floor, and filling imperfections before applying a durable epoxy layer to seal the surface. A final clear top coat enhances strength and shine, leaving the floor looking newer, smoother, and safer.`,
    },
    {
      slug: 'pu-concrete-flooring',
      title: 'PU Concrete Flooring',
      category: 'Polyurethane Flooring',
      description: `PU Concrete is a unique flooring system created by combining urethane and cement to form a thick, self-leveling surface that withstands thermal shocks, chemical exposure, heavy impacts, and continuous vehicular traffic. Known for decades of reliable performance in demanding industrial settings, PU Concrete is built to endure both physical and chemical abuses. It is seamless, hygienic, odorless, and resistant to bacterial growth, making it ideal for food and beverage industries where strict cleanliness standards are required. PU Concrete floors can be steam-cleaned to achieve sanitation levels comparable to stainless steel.`,
    },
    {
      slug: 'antistatic-flooring-system',
      title: 'Antistatic Flooring System',
      category: 'Specialty Flooring',
      description: `Antistatic flooring is essential in environments where electro-static discharge can damage sensitive electronic equipment or pose risks around volatile materials. ESD flooring prevents static charge from building up by dissipating it safely to the ground. These resin-based systems provide a seamless, attractive, and highly durable surface with superior static control properties. Antistatic flooring ensures protection for both personnel and equipment, while also offering exceptional strength and stability.`,
    },
    {
      slug: 'micro-topping',
      title: 'Micro Topping',
      category: 'Floor Refinishing',
      description: `Micro topping is a specialized cementitious overlay system designed to transform worn or damaged concrete floors into smooth, durable surfaces. This thin-layer application, typically 1/8 to 1/4 inch thick, provides a seamless finish that can be polished to a high gloss or left matte. Micro topping is ideal for refinishing existing floors without the need for extensive demolition or removal of the original concrete. It offers excellent adhesion to concrete substrates and can be customized with various colors and textures. The system is environmentally friendly, using water-based materials that reduce volatile organic compounds. Micro topping is commonly used in commercial spaces, retail areas, and industrial facilities where a cost-effective, quick renovation is required.`,
    },
    {
      slug: 'industrial-commercial-wall-coating',
      title: 'Industrial & Commercial Wall Coating',
      category: 'Wall Coatings',
      description: `Industrial and commercial wall coatings are specialized protective systems designed to enhance the durability and appearance of interior and exterior walls in demanding environments. These coatings provide superior resistance to impacts, chemicals, moisture, and abrasion while maintaining an attractive finish. Available in various formulations including epoxy, polyurethane, and acrylic systems, they offer excellent adhesion to different substrates and can be customized for specific performance requirements. Wall coatings are essential for maintaining hygiene standards in food processing facilities, withstanding harsh chemicals in manufacturing plants, and providing long-lasting protection in commercial spaces.`,
    },
    {
      slug: 'sealant-application-services',
      title: 'Sealant Application Services',
      category: 'Sealant Services',
      description: `Professional sealant application services provide comprehensive joint sealing solutions to enhance building durability and prevent water ingress. Our expert technicians use high-quality sealants to fill expansion joints, control joints, and perimeter gaps in floors and walls. These services are crucial for maintaining structural integrity, preventing moisture damage, and ensuring long-term performance of flooring systems. We offer various sealant types including polyurethane, silicone, and epoxy-based products, each selected for specific application requirements and environmental conditions. Our sealant application ensures proper joint movement accommodation while maintaining waterproofing effectiveness.`,
    },
    {
      slug: 'waterproofing',
      title: 'Waterproofing',
      category: 'Waterproofing Solutions',
      description: `Advanced waterproofing solutions provide comprehensive protection against moisture and water damage for floors and structures. Our specialized systems create impermeable barriers that prevent water penetration while maintaining breathability to avoid moisture buildup. These solutions are particularly effective in wet areas, basements, and environments exposed to high humidity or water exposure. We utilize premium waterproofing materials including cementitious coatings, liquid membranes, and crystalline waterproofing systems that chemically react with concrete to create permanent waterproofing from within. Our waterproofing services ensure long-term protection against leaks, mold growth, and structural damage.`,
    },
    {
      slug: 'sinage-marking',
      title: 'Sinage Marking',
      category: 'Safety Solutions',
      description: `Custom signage and marking services provide essential visual guidance systems for safe and efficient navigation in industrial and commercial environments. Our specialized marking solutions include floor markings, directional signage, hazard warnings, and safety zone delineations that comply with international safety standards. We utilize high-visibility, durable materials that withstand heavy traffic, chemical exposure, and harsh environmental conditions. Our signage marking services help organizations maintain compliance with occupational health and safety regulations while improving operational efficiency and reducing accident risks.`,
    },
    {
      slug: 'epu-flooring-system',
      title: 'EPU Flooring System',
      category: 'Epoxy Flooring',
      description: `EPU flooring systems combine the superior chemical resistance of epoxy with the flexibility and UV stability of polyurethane, creating a high-performance coating ideal for demanding industrial and commercial environments. This hybrid system provides exceptional durability, excellent adhesion to concrete substrates, and resistance to thermal shock, abrasion, and chemical exposure. EPU flooring is particularly suitable for areas requiring both mechanical strength and aesthetic appeal, offering a seamless, glossy finish that enhances the overall appearance while providing long-term protection.`,
    },
    {
      slug: 'pu-dust-proof-staircase-coating',
      title: 'PU Dust Proof Staircase Coating',
      category: 'Staircase Coatings',
      description: `PU Dust Proof Staircase Coating provides specialized polyurethane formulations designed specifically for staircase applications where safety and cleanliness are paramount. This coating creates a seamless, dust-resistant surface that prevents the accumulation of dust and debris on stair treads and risers. The non-slip properties ensure excellent traction even in wet conditions, reducing the risk of slips and falls. The coating is highly durable, resisting wear from foot traffic while maintaining its aesthetic appeal. Easy to clean and maintain, it requires minimal upkeep while providing long-term protection for both residential and commercial staircases.`,
    },
    {
      slug: 'pu-car-park-coating',
      title: 'PU Car Park Coating',
      category: 'Car Park Coatings',
      description: `PU Car Park Coating delivers specialized polyurethane systems engineered for the demanding conditions of parking facilities. This high-performance coating provides exceptional resistance to vehicular traffic, oil spills, and harsh weather conditions while maintaining excellent UV stability. The seamless, monolithic surface prevents water pooling and reduces maintenance requirements. Available in various colors and finishes, it enhances visibility of parking lines and improves overall safety. The coating's fast-curing properties minimize downtime during application, making it ideal for busy commercial and residential parking areas.`,
    },
    {
      slug: 'pu-waterproof-coating',
      title: 'PU Waterproof Coating',
      category: 'Waterproofing Solutions',
      description: `PU Waterproof Coating offers advanced polyurethane-based waterproofing systems designed to provide superior moisture protection for a wide range of applications. This flexible coating creates a seamless, impermeable barrier that prevents water penetration while maintaining excellent elasticity to accommodate structural movement. The coating exhibits outstanding resistance to UV degradation, chemical exposure, and mechanical wear, ensuring long-term performance in demanding environments. Its fast-curing properties allow for quick application and minimal downtime, making it ideal for both new construction and renovation projects.`,
    },
    {
      slug: 'food-grade-epoxy-flooring',
      title: 'Food Grade Epoxy Flooring',
      category: 'Food Safe Flooring',
      description: `Food Grade Epoxy Flooring provides specialized epoxy systems designed specifically for food processing and preparation environments. This NSF-certified flooring meets strict hygiene standards required by food safety regulations, offering a seamless, non-porous surface that prevents bacterial growth and simplifies cleaning procedures. The flooring is resistant to food acids, oils, and cleaning chemicals while maintaining excellent durability under heavy foot traffic and equipment movement. Available in various colors and finishes, it helps facilities comply with HACCP and FDA guidelines while providing an attractive, professional appearance.`,
    },
    {
      slug: 'densification-polished-concrete',
      title: 'Densification Polished Concrete',
      category: 'Polished Concrete',
      description: `Densification Polished Concrete transforms existing concrete surfaces through a specialized process that hardens and polishes the material to create a durable, attractive finish. The densification process involves applying chemical hardeners that penetrate the concrete surface, increasing its density and resistance to wear. This is followed by multiple grinding and polishing steps that achieve a high-gloss, reflective surface. The result is a low-maintenance flooring solution that maintains its appearance with minimal upkeep while providing excellent durability for commercial and industrial applications.`,
    },
    {
      slug: 'cementious-self-leveling-underlay',
      title: 'Cementious Self Leveling Underlay',
      category: 'Underlay Solutions',
      description: `Cementitious Self-Leveling Underlay provides a premium cement-based leveling compound designed to create perfectly flat and stable surfaces for flooring installations. This high-performance underlay flows effortlessly to fill low spots, cracks, and imperfections, creating a uniform base that ensures optimal adhesion and performance of finished flooring systems. The fast-setting formula allows for quick installation and reduced project timelines while maintaining exceptional compressive strength and dimensional stability. Ideal for both new construction and renovation projects, this underlay system eliminates the need for extensive surface preparation and ensures long-term durability of the finished floor.`,
    }
  ];

  // Close search and products dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
        setShowSuggestions(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setShowProductsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`flex items-center gap-2 text-2xl font-bold transition-colors ${isScrolled ? 'text-black' : 'text-white'
                } hover:text-[#e13403] relative p-2`}
            >
            <div className={`absolute inset-0 bg-white ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
            <Image src="/logo.png" alt="Logo" width={60} height={50} className="object-contain relative z-10" />
            </Link>
          </div>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8 mx-8">
            <Link
              href="/"
              className={`transition-colors px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-black hover:text-[#e13403]' : 'text-white hover:text-[#e13403]'
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-black hover:text-[#e13403]' : 'text-white hover:text-[#e13403]'
                }`}
            >
              About
            </Link>
            <div ref={productsRef} className="relative">
              <button
                onClick={() => router.push('/products-services')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`transition-colors px-3 py-2 rounded-md text-base font-medium flex items-center gap-1 hover:cursor-pointer ${isScrolled ? 'text-black hover:text-[#e13403]' : 'text-white hover:text-[#e13403]'
                  }`}
              >
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Products Dropdown */}
              {showProductsDropdown && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-96 z-50 max-h-96 overflow-y-auto"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      href={`/products/${product.slug}`}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-[#e13403] transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      <div className="font-medium text-sm">{product.title}</div>
                      <div className="text-xs text-gray-600 truncate">{product.category}</div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/products-services"
                      className="block px-4 py-2 text-[#e13403] hover:bg-gray-100 transition-colors font-medium text-sm"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/industries"
              className={`transition-colors px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-black hover:text-[#e13403]' : 'text-white hover:text-[#e13403]'
                }`}
            >
              Industries
            </Link>
            <Link
              href="/projects"
              className={`transition-colors px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-black hover:text-[#e13403]' : 'text-white hover:text-[#e13403]'
                }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className={`transition-colors px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-black hover:text-[#e13403]' : 'text-white hover:text-[#e13403]'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Search and Mobile Button */}
          <div className="flex items-center space-x-4 flex-shrink-0 ml-auto">
            {/* Search Bar */}
            <div ref={searchRef} className="absolute right-12 top-7 hidden md:block">
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search flooring products..."
                    className={`w-64 px-4 py-2 pl-10 pr-12 rounded-2xl text-sm font-medium transition-all duration-300 shadow-lg ${
                      isScrolled
                        ? 'bg-white/90 backdrop-blur-md border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gold/50 focus:border-gold/50'
                        : 'bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-gold/50 focus:border-gold/50'
                    }`}
                  />
                  <svg className={`absolute left-3 top-2.5 w-5 h-5 ${isScrolled ? 'text-gray-400' : 'text-white/70'} transition-transform duration-200 hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className={`absolute right-2 top-2.5 ${isScrolled ? 'text-gray-400 hover:text-gray-600' : 'text-white/70 hover:text-white'}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </form>

              {/* Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
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

              {searchTerm && showSuggestions && suggestions.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 text-gray-500 text-center">
                    No results found for "{searchTerm}"
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`focus:outline-none ${isScrolled ? 'text-brown' : 'text-white'
                  }`}
              >
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
        </div>



        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg animate-slide-in-left">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="text-brown hover:text-[#e13403] block px-3 py-2 rounded-md text-base font-medium animate-slide-in-left-delay-1"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-brown hover:text-[#e13403] block px-3 py-2 rounded-md text-base font-medium animate-slide-in-left-delay-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="/products-services"
                  className="text-brown hover:text-[#e13403] block px-3 py-2 rounded-md text-base font-medium animate-slide-in-left-delay-3"
                  onClick={toggleMenu}
                >
                  Products & Services
                </Link>
                <Link
                  href="/industries"
                  className="text-brown hover:text-[#e13403] block px-3 py-2 rounded-md text-base font-medium animate-slide-in-left-delay-4"
                  onClick={toggleMenu}
                >
                  Industries
                </Link>
                <Link
                  href="/projects"
                  className="text-brown hover:text-[#e13403] block px-3 py-2 rounded-md text-base font-medium animate-slide-in-left-delay-5"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  className="text-brown hover:text-[#e13403] block px-3 py-2 rounded-md text-base font-medium animate-slide-in-left-delay-6"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};
