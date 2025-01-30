import Link from "next/link";
import Image from "next/image";
import Testimonial from "../testimonial";
import Counter from "../counter";
import HomeAbout from ".";

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
      <HomeAbout />
      {/* <!-- about area end --> */}

      {/* <!-- counter area --> */}
      <Counter />
      {/* <!-- counter area end --> */}

      {/* <!-- team-area --> */}
      {/* <div class="team-area py-100">
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
      </div> */}
      {/* <!-- team-area end --> */}

      {/* <!-- testimonial-area --> */}
      {/* <Testimonial /> */}
      {/* <!-- testimonial-area end --> */}

      <div className="skill-area py-100">
        <div className="container">
          <div className="skill-wrap">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="skill-content wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <span className="site-title-tagline">
                    <i className="far fa-house-chimney-heart"></i> Our Expertise
                  </span>
                  <h2 className="site-title">
                    We Offer the Best Senior Care Services for Your Loved Ones
                  </h2>
                  <p className="skill-text">
                    Our team is dedicated to providing the highest quality care
                    to seniors. We understand the needs of elderly residents and
                    tailor our services to ensure their comfort, safety, and
                    well-being.
                  </p>
                  <div className="skill-progress">
                    <div className="progress-item">
                      <h5>
                        High-Quality Care <span className="percent">90%</span>
                      </h5>
                      <div
                        className="progress"
                        style={{ height: "10px", backgroundColor: "#e0e0e0" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%", backgroundColor: "green" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <h5>
                        Experienced Care Team{" "}
                        <span className="percent">95%</span>
                      </h5>
                      <div
                        className="progress"
                        style={{ height: "10px", backgroundColor: "#e0e0e0" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%", backgroundColor: "green" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <h5>
                        Specialized Senior Care{" "}
                        <span className="percent">85%</span>
                      </h5>
                      <div
                        className="progress"
                        style={{ height: "10px", backgroundColor: "#e0e0e0" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%", backgroundColor: "green" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="theme-btn mt-5">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="skill-img wow fadeInRight"
                  data-wow-delay=".25s"
                >
                  <img src="/assets/img/skill/01.jpg" alt="Elderly Care" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- skill-area end --> */}

      {/* <!-- partner area --> */}
      {/* <div class="partner-area bg pt-40 pb-40">
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
      </div> */}
      {/* <!-- partner area end--> */}
    </main>
  );
};
export default MainAbout;
