'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
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
      setShowSearch(false);
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
    setShowSearch(false);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold transition-colors ${
            isScrolled ? 'text-black' : 'text-white'
          } hover:text-gold`}>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span>We's Flooring</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              About
            </Link>
            <Link
              href="#services"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Gallery
            </Link>

            <Link
              href="#contact"
              className={`transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Contact
            </Link>

            {/* Search Icon */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-brown hover:text-gold' : 'text-white hover:text-gold'
              }`}
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Get a Quote Button */}
            <a
              href="tel:9356860035"
              className="bg-gold text-brown px-4 py-2 rounded-md text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${
                isScrolled ? 'text-brown' : 'text-white'
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

        {/* Search Bar */}
        {showSearch && (
          <div ref={searchRef} className="hidden md:block pb-4">
            <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search flooring products..."
                  className="w-full px-4 py-2 pl-10 pr-12 bg-white/95 backdrop-blur-sm border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  autoFocus
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

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
                        setShowSearch(false);
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
            </form>
          </div>
        )}

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
                href="#services"
                className="text-brown hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="#gallery"
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
                href="#contact"
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
  )};
