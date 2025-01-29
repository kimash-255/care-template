import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer class="footer-area">
      <div
        className="footer-shape"
        style={{ backgroundImage: "url(/assets/img/shape/04.png)" }}
      ></div>

      <div class="footer-widget">
        <div class="container">
          <div class="footer-widget-wrap pt-100 pb-80">
            <div class="row g-4">
              <div class="col-lg-5">
                <div class="footer-widget-box about-us">
                  <Link href="#" class="footer-logo">
                    <img src="/assets/img/logo/logo.png" alt="" />
                  </Link>
                  <p class="mb-4">
                    We are many variations of passages available but the
                    majority have suffered alteration some form by injected
                    humour words believable.
                  </p>
                  <div class="footer-newsletter">
                    <h6>Subscribe Our Newsletter</h6>
                    <div class="newsletter-form">
                      <form action="#">
                        <div class="form-group">
                          <div class="form-icon">
                            <i class="far fa-envelopes"></i>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Your Email"
                            />
                            <button class="theme-btn" type="submit">
                              Subscribe <span class="far fa-paper-plane"></span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-2">
                <div class="footer-widget-box list">
                  <h4 class="footer-widget-title">Company</h4>
                  <ul class="footer-list">
                    <li>
                      <Link href="/about">
                        <i class="far fa-angle-double-right"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <i class="far fa-angle-double-right"></i>Update News
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonial">
                        <i class="far fa-angle-double-right"></i>Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i class="far fa-angle-double-right"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms">
                        <i class="far fa-angle-double-right"></i>Terms Of
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link href="privacy">
                        <i class="far fa-angle-double-right"></i>Privacy policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-lg-2">
                <div class="footer-widget-box list">
                  <h4 class="footer-widget-title">Services</h4>
                  <ul class="footer-list">
                    <li>
                      <Link href="/service">
                        <i class="far fa-angle-double-right"></i>Assisted Living
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i class="far fa-angle-double-right"></i>Nursing Care
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i class="far fa-angle-double-right"></i>Medical &
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i class="far fa-angle-double-right"></i>Physical
                        Assistance
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i class="far fa-angle-double-right"></i>Residential
                        Care
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i class="far fa-angle-double-right"></i>Personal Care
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-widget-box">
                  <h4 class="footer-widget-title">Get In Touch</h4>
                  <ul class="footer-contact">
                    <li>
                      <div class="icon">
                        <i class="far fa-location-dot"></i>
                      </div>
                      <div class="content">
                        <h6>Our Address</h6>
                        <p>25/AB Milford Road, New York, USA</p>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="far fa-phone"></i>
                      </div>
                      <div class="content">
                        <h6>Call Us</h6>
                        <Link href="tel:+21236547898">+2253-401-0437</Link>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="far fa-envelope"></i>
                      </div>
                      <div class="content">
                        <h6>Mail Us</h6>
                        <Link href="mailto:info@serenityseniorcareafh.com">
                          <i className="far fa-envelope"></i>{" "}
                          info@serenityseniorcareafh.com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 align-self-center">
              <p class="copyright-text">
                &copy; Copyright <span id="date"></span>
                <Link href="#"> SenoCare </Link> All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 align-self-center">
              <ul class="footer-social">
                <li>
                  <Link href="#">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i class="fab fa-x-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i class="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
