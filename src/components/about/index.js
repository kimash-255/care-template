import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div class="about-area py-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-left wow fadeInLeft" data-wow-delay=".25s">
              <div class="about-img">
                <div class="row">
                  <div class="col-6">
                    <img class="img-1" src="/assets/img/about/01.jpg" alt="" />
                    <div class="about-experience">
                      <h5>
                        30<span>+</span>
                      </h5>
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="img-2">
                      <img src="/assets/img/about/02.jpg" alt="" />
                    </div>
                    <div class="img-3">
                      <img src="/assets/img/about/03.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-right wow fadeInUp" data-wow-delay=".25s">
              <div class="site-heading mb-3">
                <span class="site-title-tagline">
                  <i class="far fa-house-chimney-heart"></i> About Us
                </span>
                <h2 class="site-title">
                  We Are The Best and Expert For Senior Care
                </h2>
              </div>
              <p class="about-text">
                By combining professionalism with care, we deliver unmatched
                support for seniors. Many senior care providers focus on general
                solutions, which don’t truly address unique needs. Our approach
                is personalized, ensuring every individual receives the
                attention they deserve.
              </p>
              <div class="about-content">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="about-item">
                      <div class="icon">
                        <img src="/assets/img/icon/team.svg" alt="" />
                      </div>
                      <div class="content">
                        <h6>Our Experts Nurse</h6>
                        <p>Take a look at our up of the round shows</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-item">
                      <div class="icon">
                        <img src="/assets/img/icon/support-2.svg" alt="" />
                      </div>
                      <div class="content">
                        <h6>24/7 Live Support</h6>
                        <p>Take a look at our up of the round shows</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/about" class="theme-btn">
                Discover More<i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;
