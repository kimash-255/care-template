"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const Hero = () => {
  const slides = [
    {
      id: 2,
      image: "/assets/img/hero/slider-2.jpg",
      title: "Best Adult Care In Portland",
      description:
        "With professional caregivers, engaging activities, and personalized support, we ensure every resident feels valued and cared for.",
    },
    {
      id: 1,
      image: "/assets/img/hero/slider-4.jpg",
      title: "Compassionate Adult Care",
      description:
        "We provide a safe, loving, and supportive environment where seniors can enjoy their golden years with dignity and comfort in private environment with private bathrooms.",
    },
    {
      id: 3,
      image: "/assets/img/hero/slider-3.jpg",
      title: "Quality Care Every Step of the Way",
      description:
        "From daily assistance to medical support, our experienced team is dedicated to enhancing the well-being of every senior in our care.",
    },
  ];

  return (
    <div className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-single relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="container relative z-10">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="hero-content px-4 py-8 lg:py-16 lg:px-12 text-white">
                      {/* Destiny Care Home Name */}
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Destiny Adult Care Home
                      </h2>
                      {/* Motto */}
                      <h6 className="hero-sub-title mt-4 text-base md:text-lg lg:text-xl  italic">
                        <i className="far fa-house-chimney-heart"></i> Where
                        Care Meets Comfort
                      </h6>
                      <h1 className="hero-title text-l md:text-3l lg:text-3l font-bold mt-4">
                        {slide.title}
                      </h1>
                      <p className="mt-2 text-sm md:text-lg lg:text-xl ">
                        {slide.description}
                      </p>
                      <div className="hero-btn mt-6 flex gap-4">
                        <Link
                          href="/about"
                          className="theme-btn px-6 py-3 text-sm md:text-base"
                        >
                          Learn More <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link
                          href="/contact"
                          className="theme-btn2 px-6 py-3 text-sm md:text-base"
                        >
                          Contact Us <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
