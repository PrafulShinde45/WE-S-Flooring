'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";

const reviews = [
  {
    name: 'Mr. Ashish Dighe',
    role: 'Director, Sunteck, Pune',
    initials: 'AD',
    review: 'We S Flooring did a great job. They were very neat and kept to the time schedule. I would highly recommend We S flooring Pvt Ltd.',
  },
  {
    name: 'Mr. Padmanabh Kulkarni',
    role: 'Chemsol Polymers',
    initials: 'PK',
    review: 'My experience with We S flooring was exactly as I expected as they were very professional and efficient applicators. The floor looks exactly as promised.',
  },
  {
    name: 'Vijay Navgire',
    role: 'Director, TFI services LLP',
    initials: 'VN',
    review: 'We S flooring Pvt Ltd. worked as professionals, with expertise, and with good safety. We worked together and complete around 50000 sqft areas of epoxy flooring in Pune Projects. .',
  },
  {
    name: 'Shalini Rao',
    role: 'Interior Designer, Mumbai',
    initials: 'SR',
    review: 'Their attention to detail is unmatched. From the first consultation to the final finish, the team kept me updated and delivered an impeccable floor that elevates every project shot.',
  },
  {
    name: 'Rahul Deshpande',
    role: 'Facility Head, Tech Park Pune',
    initials: 'RD',
    review: 'We needed a heavy-duty solution on a very tight timeline. The crew arrived early, coordinated with our contractors, and handed over a flawless epoxy floor days ahead of schedule.',
  },
  {
    name: 'Nikita Sharma',
    role: 'Homeowner, Navi Mumbai',
    initials: 'NS',
    review: 'I love how warm and welcoming my space feels now. The polishing finish looks premium and is so easy to maintain. The entire team was kind, tidy, and professional.',
  },
];

export default function Reviews() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            Client <span className="text-[#e13403]">Testimonials</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
        </div>

        <div className="relative pb-16">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={false}
            keyboard={{ enabled: true }}
            grabCursor={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            modules={[EffectCoverflow, Autoplay, Keyboard]}
            className="testimonial-swiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mx-auto w-full h-80 flex flex-col">
                  <div className="flex flex-col items-center text-center grow">
                    <div className="w-16 h-16 rounded-full bg-[#e13403]/10 flex items-center justify-center mb-4">
                      <span className="text-[#e13403] font-bold text-xl">
                        {review.initials}
                      </span>
                    </div>
                    <blockquote className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed grow">
                      "{review.review}"
                    </blockquote>
                    <div className="mt-auto">
                      <h6 className="text-black font-semibold text-base mb-1">
                        {review.name}
                      </h6>
                      <p className="text-sm text-gray-500">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
