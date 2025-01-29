import Link from "next/link";
import Image from "next/image";
import Testimonial from "../testimonial";

const MainAbout = () => {
  return (
    <main class="main">
      {/* <!-- breadcrumb --> */}
      <div
        className="site-breadcrumb"
        style={{ backgroundImage: `url('assets/img/breadcrumb/01.jpg')` }}
      >
        <div class="container">
          <h2 class="breadcrumb-title">About Us</h2>
          <ul class="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li class="active">About Us</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- about area --> */}
      <div class="about-area py-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div class="about-img">
                  <div class="row">
                    <div class="col-6">
                      <img
                        class="img-1"
                        src="/assets/img/about/01.jpg"
                        alt=""
                      />
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
                    We Are The Best and Expert For SeniorCare
                  </h2>
                </div>
                <p class="about-text">
                  By combining professionalism with care, we deliver unmatched
                  support for seniors. Many senior care providers focus on
                  general solutions, which don’t truly address unique needs. Our
                  approach is personalized, ensuring every individual receives
                  the attention they deserve.
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
      {/* <!-- about area end --> */}

      {/* <!-- counter area --> */}
      <div class="counter-area">
        <div class="container">
          <div class="counter-wrap">
            <div class="row g-4">
              <div class="col-lg-3 col-sm-6">
                <div class="counter-box">
                  <div class="icon">
                    <img src="/assets/img/icon/senior-care.svg" alt="" />
                  </div>
                  <div>
                    <span
                      class="counter"
                      data-count="+"
                      data-to="6560"
                      data-speed="3000"
                    >
                      6560
                    </span>
                    <h6 class="title">+ Projects Done </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="counter-box">
                  <div class="icon">
                    <img src="/assets/img/icon/happy.svg" alt="" />
                  </div>
                  <div>
                    <span
                      class="counter"
                      data-count="+"
                      data-to="7320"
                      data-speed="3000"
                    >
                      7320
                    </span>
                    <h6 class="title">+ Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="counter-box">
                  <div class="icon">
                    <img src="/assets/img/icon/volunteer.svg" alt="" />
                  </div>
                  <div>
                    <span
                      class="counter"
                      data-count="+"
                      data-to="1500"
                      data-speed="3000"
                    >
                      1500
                    </span>
                    <h6 class="title">+ Our Volunteer</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="counter-box">
                  <div class="icon">
                    <img src="/assets/img/icon/award.svg" alt="" />
                  </div>
                  <div>
                    <span
                      class="counter"
                      data-count="+"
                      data-to="50"
                      data-speed="3000"
                    >
                      50
                    </span>
                    <h6 class="title">+ Win Awards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- counter area end --> */}

      {/* <!-- team-area --> */}
      <div class="team-area py-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div
                class="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span class="site-title-tagline">
                  <i class="far fa-house-chimney-heart"></i> Our Volunteers
                </span>
                <h2 class="site-title">Meet With Our Awesome Volunteers</h2>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".25s">
                <div class="team-img">
                  <img src="/assets/img/team/01.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Rodrigues Christy</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".50s">
                <div class="team-img">
                  <img src="/assets/img/team/02.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Matthew Hong</Link>
                  </h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".75s">
                <div class="team-img">
                  <img src="/assets/img/team/03.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Anita Bentley</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay="1s">
                <div class="team-img">
                  <img src="/assets/img/team/04.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Beverly Dyer</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- team-area end --> */}

      {/* <!-- testimonial-area --> */}
      {/* <Testimonial /> */}
      {/* <!-- testimonial-area end --> */}

      {/* <!-- skill-area --> */}
      <div class="skill-area py-100">
        <div class="container">
          <div class="skill-wrap">
            <div class="row g-4 align-items-center">
              <div class="col-lg-6">
                <div class="skill-content wow fadeInUp" data-wow-delay=".25s">
                  <span class="site-title-tagline">
                    <i class="far fa-house-chimney-heart"></i> Our Skills
                  </span>
                  <h2 class="site-title">
                    We Offers You Best Senior Care Services
                  </h2>
                  <p class="skill-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which donot
                    look even slightly believable.
                  </p>
                  <div class="skill-progress">
                    <div class="progress-item">
                      <h5>
                        Best Quality Service <span class="percent">85%</span>
                      </h5>
                      <div class="progress" data-value="85">
                        <div class="progress-bar" role="progressbar"></div>
                      </div>
                    </div>
                    <div class="progress-item">
                      <h5>
                        Our Experience <span class="percent">90%</span>
                      </h5>
                      <div class="progress" data-value="90">
                        <div class="progress-bar" role="progressbar"></div>
                      </div>
                    </div>
                    <div class="progress-item">
                      <h5>
                        Senior Care <span class="percent">80%</span>
                      </h5>
                      <div class="progress" data-value="80">
                        <div class="progress-bar" role="progressbar"></div>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" class="theme-btn mt-5">
                    Learn More<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill-img wow fadeInRight" data-wow-delay=".25s">
                  <img src="/assets/img/skill/01.jpg" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- skill-area end --> */}

      {/* <!-- partner area --> */}
      <div class="partner-area bg pt-40 pb-40">
        <div class="container">
          <div class="partner-wrapper partner-slider owl-carousel owl-theme">
            <img src="/assets/img/partner/01.png" alt="thumb" />
            <img src="/assets/img/partner/02.png" alt="thumb" />
            <img src="/assets/img/partner/03.png" alt="thumb" />
            <img src="/assets/img/partner/04.png" alt="thumb" />
            <img src="/assets/img/partner/05.png" alt="thumb" />
            <img src="/assets/img/partner/02.png" alt="thumb" />
            <img src="/assets/img/partner/03.png" alt="thumb" />
          </div>
        </div>
      </div>
      {/* <!-- partner area end--> */}
    </main>
  );
};
export default MainAbout;
