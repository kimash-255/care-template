import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header class="header">
      {/* <!-- header top --> */}
      <div class="header-top">
        <div class="container">
          <div class="header-top-wrap">
            <div class="header-top-left">
              <div class="header-top-list">
                <ul>
                  <li>
                    <Link href="/cdn-cgi/l/email-protection#375e59515877524f565a475b521954585a">
                      <i class="far fa-envelopes"></i>
                      <span
                        class="__cf_email__"
                        data-cfemail="640d0a020b24011c05091408014a070b09"
                      >
                        [email&#160;protected]
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+21236547898">
                      <i class="far fa-phone-volume"></i> +2 123 654 7898
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="far fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header-top-right">
              <div class="header-top-list">
                <Link href="/login">
                  <i class="far fa-sign-in"></i> Login
                </Link>
              </div>
              <div class="header-top-lang">
                <div class="dropdown">
                  <Link
                    href="#"
                    class="top-lang dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i class="fal fa-globe"></i> Eng
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link class="dropdown-item" href="#">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        German
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Russian
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Spanish
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="header-top-social">
                <span>Follow Us: </span>
                <Link href="#">
                  <i class="fab fa-facebook"></i>
                </Link>
                <Link href="#">
                  <i class="fab fa-x-twitter"></i>
                </Link>
                <Link href="#">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link href="#">
                  <i class="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header top end --> */}

      {/* <!-- navbar --> */}
      <div class="main-navigation">
        <nav class="navbar navbar-expand-lg">
          <div class="container position-relative">
            <Link class="navbar-brand" href="/">
              <img src="assets/img/logo/logo.png" alt="logo" />
            </Link>
            <div class="mobile-menu-right">
              <div class="mobile-menu-btn">
                <button type="button" class="nav-right-link search-box-outer">
                  <i class="far fa-search"></i>
                </button>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <Link
                  href="/"
                  class="offcanvas-brand"
                  id="offcanvasNavbarLabel"
                >
                  <img src="assets/img/logo/logo.png" alt="" />
                </Link>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i class="far fa-xmark"></i>
                </button>
              </div>
              <div class="offcanvas-body gap-xl-4">
                <ul class="navbar-nav justify-content-end flex-grow-1">
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle active"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Home
                    </Link>
                    <ul class="dropdown-menu fade-down">
                      <li>
                        <Link class="dropdown-item" href="/">
                          Home Demo 01
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/2">
                          Home Demo 02
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/3">
                          Home Demo 03
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </Link>
                    <ul class="dropdown-menu fade-down">
                      <li>
                        <Link class="dropdown-item" href="/service">
                          Services One
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/service-2">
                          Services Two
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/service-single">
                          Service Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </Link>
                    <ul class="dropdown-menu fade-down">
                      <li>
                        <Link class="dropdown-item" href="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/team">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/pricing">
                          Pricing Plan
                        </Link>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Events
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/event">
                              Events
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/event-single">
                              Event Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Donations
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/donation">
                              Donations
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/donation-single">
                              Donation Single
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/donation-form">
                              Donation Form
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Volunteer
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/volunteer">
                              Volunteer
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item"
                              href="/volunteer-single"
                            >
                              Volunteer Single
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item"
                              href="/become-volunteer"
                            >
                              Become A Volunteer
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Living Options
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/living-option">
                              Living Options
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item"
                              href="/living-option-single"
                            >
                              Living Options Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Stories
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/stories">
                              Stories
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/stories-single">
                              Stories Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Authentication
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/register">
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/forgot-password">
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu">
                        <Link class="dropdown-item dropdown-toggle" href="#">
                          Extra Pages
                        </Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" href="/coming-soon">
                              Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/terms">
                              Terms Of Service
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" href="/privacy">
                              Privacy Policy
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/gallery">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/faq">
                          Faq
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/testimonial">
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="404.html">
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Portfolio
                    </Link>
                    <ul class="dropdown-menu fade-down">
                      <li>
                        <Link class="dropdown-item" href="/portfolio">
                          Portfolio One
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/portfolio-2">
                          Portfolio Two
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/portfolio-single">
                          Portfolio Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Blog
                    </Link>
                    <ul class="dropdown-menu fade-down">
                      <li>
                        <Link class="dropdown-item" href="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/blog-single">
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* <!-- nav-right --> */}
                <div class="nav-right">
                  <div class="search-btn">
                    <button
                      type="button"
                      class="nav-right-link search-box-outer"
                    >
                      <i class="far fa-search"></i>
                    </button>
                  </div>
                  <div class="nav-btn">
                    <Link href="/contact" class="theme-btn">
                      Let Us Talk<i class="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- navbar end--> */}
    </header>
  );
};
export default Header;
