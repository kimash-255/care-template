"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const Hero = () => {
  const slides = [
    { id: 1, image: "/assets/img/hero/slider-1.jpg" },
    { id: 2, image: "/assets/img/hero/slider-2.jpg" },
    { id: 3, image: "/assets/img/hero/slider-3.jpg" },
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
                      <h6 className="hero-sub-title">
                        <i className="far fa-house-chimney-heart"></i> Best
                        Elderly Care
                      </h6>
                      <h1 className="hero-title">
                        Live in care & <span>your family</span> will love
                      </h1>
                      <p>
                        There are many variations of passages of Lorem Ipsum,
                        but the majority have suffered alteration in some form
                        by injected humour.
                      </p>
                      <div className="hero-btn">
                        <Link href="/about" className="theme-btn">
                          About More<i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link href="/contact" className="theme-btn2">
                          Learn More<i className="fas fa-arrow-right"></i>
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
