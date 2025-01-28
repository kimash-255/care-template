import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div class="hero-section">
      <div class="hero-slider owl-carousel">
        <div
          class="hero-single"
          style="background-image: url(/assets/img/hero/slider-1.jpg)"
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12 col-lg-6">
                <div class="hero-content">
                  <h6
                    class="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    <i class="far fa-house-chimney-heart"></i> Best Elderly Care
                  </h6>
                  <h1
                    class="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Live in care & <span>your family</span> will love
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <div
                    class="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    <Link href="/about" class="theme-btn">
                      About More<i class="fas fa-arrow-right"></i>
                    </Link>
                    <Link href="/contact" class="theme-btn2">
                      Learn More<i class="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hero-single"
          style="background-image: url(assets/img/hero/slider-2.jpg)"
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12 col-lg-6">
                <div class="hero-content">
                  <h6
                    class="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    <i class="far fa-house-chimney-heart"></i> Best Elderly Care
                  </h6>
                  <h1
                    class="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Live in care & <span>your family</span> will love
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <div
                    class="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    <Link href="/about" class="theme-btn">
                      About More<i class="fas fa-arrow-right"></i>
                    </Link>
                    <Link href="/contact" class="theme-btn2">
                      Learn More<i class="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hero-single"
          style="background-image: url(/assets/img/hero/slider-3.jpg)"
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12 col-lg-6">
                <div class="hero-content">
                  <h6
                    class="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    <i class="far fa-house-chimney-heart"></i> Best Elderly Care
                  </h6>
                  <h1
                    class="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Live in care & <span>your family</span> will love
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <div
                    class="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    <Link href="about.html" class="theme-btn">
                      About More<i class="fas fa-arrow-right"></i>
                    </Link>
                    <Link href="contact.html" class="theme-btn2">
                      Learn More<i class="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
