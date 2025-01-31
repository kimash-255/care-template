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
      title: "A Home Away From Home",
      description:
        "With professional caregivers, engaging activities, and personalized support, we ensure every resident feels valued and cared for.",
    },
    {
      id: 1,
      image: "/assets/img/hero/slider-4.jpg",
      title: "Compassionate Elderly Care",
      description:
        "We provide a safe, loving, and supportive environment where seniors can enjoy their golden years with dignity and comfort in private environment with private bathrooms.",
    },
    {
      id: 3,
      image: "/assets/img/hero/slider-3.jpg",
      title: "Quality Care, Every Step of the Way",
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
              className="hero-single"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="hero-content">
                      {/* Added Destiny Care Home Name */}
                      <h2 className="text-white font-bold text-3xl">
                        Destiny Care Home
                      </h2>
                      {/* Added Motto */}
                      <h6 className="text-yellow-300 italic mt-2">
                        Where Care Meets Comfort
                      </h6>
                      <h6 className="hero-sub-title">
                        <i className="far fa-house-chimney-heart"></i> Best
                        Elderly Care
                      </h6>
                      <h1 className="hero-title">{slide.title}</h1>
                      <p>{slide.description}</p>
                      <div className="hero-btn">
                        <Link href="/about" className="theme-btn">
                          Learn More <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link href="/contact" className="theme-btn2">
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
