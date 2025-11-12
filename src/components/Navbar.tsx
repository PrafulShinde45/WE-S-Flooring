'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search data - replace with actual search logic
  const searchData = [
    'Hardwood Flooring',
    'Laminate Flooring',
    'Tile Installation',
    'Carpet Cleaning',
    'Flooring Installation',
    'Wood Flooring',
    'Vinyl Flooring',
    'Flooring Repair',
    'Flooring Maintenance',
    'Flooring Design'
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close search when opening mobile menu
    if (!isOpen) {
      setSearchResults([]);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Filter search results
      const results = searchData.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);

      // Here you can implement navigation to search results page
      // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const results = searchData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResults([]);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 text-2xl font-bold transition-colors ${isScrolled ? 'text-black' : 'text-white'
              } hover:text-gold relative`}
          >
            <div className={`absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain relative z-10" />
          </Link>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
                }`}
            >
              About
            </Link>
            <Link
              href="/products-services"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
                }`}
            >
              Products
            </Link>
            <Link
              href="/industries"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
                }`}
            >
              Industries
            </Link>
            <Link
              href="/projects"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
                }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="relative hidden md:block">
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
                {isSearching ? (
                  <svg className={`absolute left-3 top-2.5 w-5 h-5 ${isScrolled ? 'text-gray-400' : 'text-white/70'} animate-spin`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ) : (
                  <svg className={`absolute left-3 top-2.5 w-5 h-5 ${isScrolled ? 'text-gray-400' : 'text-white/70'} transition-transform duration-200 hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
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

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setSearchTerm(result);
                      setSearchResults([]);
                      // Navigate to search result or product page
                      console.log('Selected:', result);
                    }}
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-gray-900">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searchTerm && searchResults.length === 0 && (
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



        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/products-services"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Products & Services
              </Link>
              <Link
                href="/industries"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Industries
              </Link>
              <Link
                href="/projects"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                href="#reviews"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <a
                href="tel:+1555123FLOOR"
                className="bg-gold text-brown block px-3 py-2 rounded-md text-base font-medium hover:bg-gold/90"
                onClick={toggleMenu}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};
