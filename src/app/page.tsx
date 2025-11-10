import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';

import Footer from '@/components/Footer';
import FloatingQuote from '@/components/FloatingQuote';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <div className="flex justify-center py-12 bg-gradient-to-br from-beige via-amber-50 to-yellow-50">
        <div className="bg-white rounded-2xl p-6 w-4/5 max-w-4xl mx-4 shadow-2xl border border-gray-200 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brown mb-3">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with our experts for a free consultation and quote
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gold/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </div>
      <Footer />
      <FloatingQuote />
    </>
  );
}
