import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isHidden, setHidden] = useState(false);
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
                    <Link href="mailto:info@serenityseniorcareafh.com">
                      <i className="far fa-envelope"></i>{" "}
                      info@serenityseniorcareafh.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+253-401-0437">
                      <i class="far fa-phone-volume"></i> +253-401-0437
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
              <img
                src="/assets/img/logo/logo.png"
                alt="logo"
                class="h-12 w-auto max-w-[300px]"
              />
            </Link>
            <div class="mobile-menu-right">
              <div class="mobile-menu-btn">
                <button type="button" class="nav-right-link search-box-outer">
                  <i class="far fa-search"></i>
                </button>
                /
              </div>
              <button
                onClick={() => setHidden(true)}
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
              class={`offcanvas offcanvas-start ${isHidden ? "show" : ""}`}
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
                  <img src="/assets/img/logo/logo.png" alt="" />
                </Link>
                <button
                  type="button"
                  onClick={() => setHidden(false)}
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i class="far fa-xmark"></i>
                </button>
              </div>
              <div class="offcanvas-body gap-x-4">
                <ul
                  onClick={() => setHidden(false)}
                  class="navbar-nav justify-center flex-grow-1"
                >
                  <li class="nav-item dropdown">
                    <Link className="nav-link  " href="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link class="nav-link " href="/services">
                      Services
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link "
                      href="/blog"
                      data-bs-toggle="dropdown"
                    >
                      Blog
                    </Link>
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
