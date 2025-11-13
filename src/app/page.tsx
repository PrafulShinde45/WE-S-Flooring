'use client';

import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductShowcase from '@/components/ProductShowcase';
import CatalogBanner from '@/components/CatalogBanner';
import Reviews from '@/components/Reviews';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero height="min-h-screen" enableSlider={true} />
      <About />
      <div className="flex justify-center mt-0 mb-0">
        <Link
          href="/about"
          className="inline-block bg-[#e13403] text-white px-8 py-3 rounded-lg text-lg font-semibold border-2 border-[#e13403] hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Learn More
        </Link>
      </div>
      <ProductShowcase />
      <CatalogBanner />
      <Reviews />
      <div className="flex justify-center py-12 bg-white" style={{ marginTop: "-120px" }}>
        <div className="bg-white rounded-2xl p-6 w-4/5 max-w-4xl mx-4 shadow-2xl border border-gray-200 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with our experts for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#e13403] text-white px-8 py-3 rounded-lg text-lg font-semibold border-2 border-[#e13403] hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </div>
      <Footer />

      {/* Top Arrow */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 bg-white text-[#e13403] p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919356860035"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </>
  );
}
