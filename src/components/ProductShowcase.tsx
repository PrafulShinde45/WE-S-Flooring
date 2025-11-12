'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    name: "EPU Flooring",
    img: "/EPU.jpg"
  },
  {
    name: "Parking Flooring",
    img: "/CAR PARK 3.avif"
  },
  {
    name: "Wall Coating",
    img: "/wall coating_edited.avif"
  },
  {
    name: " Chemical Flooring",
    img: "/98ffb219-930d-4ca9-9a8c-914e59590234_JPG.avif"
  },
  {
    name: " Epoxy Flooring ",
    img: "/sunteck.avif"
  },
  {
    name: "floor polishing",
    img: "/floor polishing.avif"
  },
  {
    name: "PU Roller Coating",
    img: "/staircasePU.avif"
  },
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Flooring Solutions
          </h2>
          <div className="h-1 w-32 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="mr-4 bg-black text-white rounded-full p-3 shadow-lg hover:bg-red-700 transition-all duration-300 flex-shrink-0 relative -top-7"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Items */}
          <div className="overflow-hidden flex-1 max-w-5xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <Link
                    href={`/products-services?category=${project.name.toLowerCase()}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                      {/* Image Container */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Category Name with Arrow */}
                      <div className="p-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-black group-hover:text-red-600 transition-colors">
                          {project.name}
                        </h3>
                        <svg
                          className="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="ml-4 bg-black text-white rounded-full p-3 shadow-lg hover:bg-red-700 transition-all duration-300 flex-shrink-0 relative -top-7"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
