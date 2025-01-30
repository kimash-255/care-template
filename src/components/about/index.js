import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div className="about-area py-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
              <div className="about-img">
                <div className="row">
                  <div className="col-6">
                    <img
                      className="img-1"
                      src="/assets/img/about/01.jpg"
                      alt=""
                    />
                    <div className="about-experience">
                      <h5>
                        5<span>+</span>
                      </h5>
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-2">
                      <img src="/assets/img/about/02.jpg" alt="" />
                    </div>
                    <div className="img-3">
                      <img src="/assets/img/about/03.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right wow fadeInUp" data-wow-delay=".25s">
              <div className="site-heading mb-3">
                <span className="site-title-tagline  align-items-center justify-content-center">
                  <i className="far fa-house-chimney-heart"></i> About Us
                </span>
                <h2 className="site-title text-center">
                  We Are The Best and Expert For Senior Care
                </h2>
              </div>
              <p className="about-text text-center">
                By combining professionalism with care, we deliver unmatched
                support for seniors. Many senior care providers focus on general
                solutions, which don’t truly address unique needs. Our approach
                is personalized, ensuring every individual receives the
                attention they deserve.
              </p>
              <div className="about-content">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="about-item text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <img src="/assets/img/icon/team.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Our Expert Nurses</h6>
                        <p>
                          Providing top-tier care with experience and
                          dedication.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-item text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <img src="/assets/img/icon/support-2.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>24/7 Live Support</h6>
                        <p>Always available for assistance and care needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/about" className="theme-btn">
                  Discover More<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
