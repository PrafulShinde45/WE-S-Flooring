'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CatalogBanner() {

  return (
    <section className="relative bg-gray-800 py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Left Section - 3 Horizontal Images */}
          <div className="relative h-64 lg:h-80 flex items-center justify-center">
            <div className="flex flex-col gap-3 lg:gap-4 z-10">
              {/* Image 1 */}
              <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-lg shadow-xl overflow-hidden">
                <Image src="/wall coating_edited.avif" alt="Wall Coating" fill className="object-cover" />
              </div>
              {/* Image 2 */}
              <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-lg shadow-xl overflow-hidden mx-auto -translate-x-2 lg:-translate-x-3">
                <Image src="/floor polishing.avif" alt="Floor Polishing" fill className="object-cover" />
              </div>
              {/* Image 3 */}
              <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-lg shadow-xl overflow-hidden">
                <Image src="/CAR PARK 3.avif" alt="Car Park Flooring" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Central Section - Text and CTA */}
          <div className="text-center lg:text-left bg-gray-800 py-6 lg:py-8 px-4 lg:px-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
              Get inspired with our latest catalog
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8">
              Explore new trends to make yours with our selection.
            </p>
            <div className="flex justify-center">
              <Link
                href="/products-services"
                className="inline-block bg-white text-gray-900 px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                VIEW CATALOG
              </Link>
            </div>
          </div>

          {/* Right Section - 3 Horizontal Images */}
          <div className="relative h-64 lg:h-80 flex items-center justify-center">
            <div className="flex flex-col gap-3 lg:gap-4 z-10">
              {/* Image 1 */}
              <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-lg shadow-xl overflow-hidden">
                <Image src="/staircasePU.avif" alt="Staircase PU" fill sizes="(max-width: 768px) 128px, 160px" className="object-cover" />
              </div>
              {/* Image 2 */}
              <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-lg shadow-xl overflow-hidden mx-auto -translate-x-2 lg:-translate-x-3">
                <Image src="/98ffb219-930d-4ca9-9a8c-914e59590234_JPG.avif" alt="Chemical Resistant Flooring" fill className="object-cover" />
              </div>
              {/* Image 3 */}
              <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-lg shadow-xl overflow-hidden">
                <Image src="/EPU.jpg" alt="EPU Flooring" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
