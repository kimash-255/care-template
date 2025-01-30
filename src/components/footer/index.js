import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/services.json";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div
        className="footer-shape"
        style={{ backgroundImage: "url(/assets/img/shape/04.png)" }}
      ></div>

      <div className="footer-widget">
        <div className="container">
          <div className="footer-widget-wrap pt-100 pb-80">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="footer-widget-box about-us">
                  <Link href="#" className="footer-logo">
                    <img src="/assets/img/logo/logo.png" alt="" />
                  </Link>
                  <p className="mb-4">
                    Our care home provides a comfortable and supportive
                    environment, where residents receive personalized care and
                    attention, ensuring their well-being and dignity are
                    maintained at all times.
                  </p>
                  <div className="footer-newsletter">
                    <h6>Subscribe Our Newsletter</h6>
                    <div className="newsletter-form">
                      <form action="#">
                        <div className="form-group">
                          <div className="form-icon">
                            <i className="far fa-envelopes"></i>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                            <button className="theme-btn" type="submit">
                              Subscribe{" "}
                              <span className="far fa-paper-plane"></span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Company</h4>
                  <ul className="footer-list">
                    <li>
                      <Link href="/about">
                        <i className="far fa-angle-double-right"></i>About Us
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact">
                        <i className="far fa-angle-double-right"></i>Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Services</h4>
                  <ul className="footer-list">
                    {servicesData.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`}>
                          <i className="far fa-angle-double-right"></i>{" "}
                          {service.title}
                        </Link>
                      </li>
                    ))}
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
                        <p>2406 Se130th avenue ,Portland,97233 Oregon</p>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="far fa-phone"></i>
                      </div>
                      <div class="content">
                        <h6>Call Us</h6>
                        <Link href="tel:+(206) 712-0125">
                          +(503) 477-5855/+(206) 712-0125
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="far fa-envelope"></i>
                      </div>
                      <div class="content">
                        <h6>Mail Us</h6>
                        <Link href="mailto:benardhomecare@gmail.com">
                          <i className="far fa-envelope"></i>{" "}
                          benardhomecare@gmail.com
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
                &copy; Designed By <span id="date"></span>
                <Link href="https://mslabdesigns.com/"> Mslabdesigns </Link> All
                Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 align-self-center">
              {/* <ul class="footer-social">
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
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
