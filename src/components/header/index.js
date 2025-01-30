import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import servicesData from "@/data/services.json";

const Header = () => {
  const [isHidden, setHidden] = useState(false);
  const [isSticky, setSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Add a threshold for when to stick the navbar
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* <!-- header top --> */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrap">
            <div className="header-top-left">
              <div className="header-top-list">
                <ul>
                  <li>
                    <Link href="mailto:info@serenityseniorcareafh.com">
                      <i className="far fa-envelope"></i>{" "}
                      info@serenityseniorcareafh.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+253-401-0437">
                      <i className="far fa-phone-volume"></i> +253-401-0437
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="far fa-alarm-clock"></i> Sun - Fri (08AM -
                      10PM)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              {/* Social media icons can be added here */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header top end --> */}

      {/* <!-- navbar --> */}
      <div className="main-navigation">
        <nav
          className={`navbar navbar-expand-lg ${isSticky ? "fixed-top" : ""}`}
        >
          <div className="container position-relative">
            <Link className="navbar-brand" href="/">
              <img
                src="/assets/img/logo/logo.png"
                alt="logo"
                className="h-12 w-auto max-w-[300px]"
              />
            </Link>
            <div className="mobile-menu-right">
              <div className="mobile-menu-btn">
                <button
                  type="button"
                  className="nav-right-link search-box-outer"
                >
                  <i className="far fa-search"></i>
                </button>
              </div>
              <button
                onClick={() => setHidden(true)}
                className="navbar-toggler"
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
              className={`offcanvas offcanvas-start ${isHidden ? "show" : ""}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link
                  href="/"
                  className="offcanvas-brand"
                  id="offcanvasNavbarLabel"
                >
                  <img src="/assets/img/logo/logo.png" alt="" />
                </Link>
                <button
                  type="button"
                  onClick={() => setHidden(false)}
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="far fa-xmark"></i>
                </button>
              </div>
              <div className="offcanvas-body gap-x-4">
                <ul
                  onClick={() => setHidden(false)}
                  className="navbar-nav justify-center flex-grow-1"
                >
                  <li className="nav-item dropdown">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="/services">
                      Services
                    </Link>
                    <ul className="dropdown-menu">
                      {servicesData.map((service) => (
                        <li key={service.slug}>
                          <Link
                            className="dropdown-item"
                            href={`/services/${service.slug}`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* <!-- nav-right --> */}
                <div className="nav-right">
                  <div className="nav-btn">
                    <Link href="/contact" className="theme-btn">
                      Consult Us <i className="fas fa-arrow-right"></i>
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
