import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-slider ">
        <div
          className="hero-single"
          style={{
            backgroundImage: "url(/assets/img/hero/slider-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="hero-content">
                  <h6
                    className="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    <i className="far fa-house-chimney-heart"></i> Best Elderly
                    Care
                  </h6>
                  <h1
                    className="hero-title"
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
                    className="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
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
        <div
          className="hero-single"
          style={{
            backgroundImage: "url(/assets/img/hero/slider-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="hero-content">
                  <h6
                    className="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    <i className="far fa-house-chimney-heart"></i> Best Elderly
                    Care
                  </h6>
                  <h1
                    className="hero-title"
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
                    className="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
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
        <div
          className="hero-single"
          style={{
            backgroundImage: "url(/assets/img/hero/slider-3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="hero-content">
                  <h6
                    className="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    <i className="far fa-house-chimney-heart"></i> Best Elderly
                    Care
                  </h6>
                  <h1
                    className="hero-title"
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
                    className="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
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
      </div>
    </div>
  );
};

export default Hero;
