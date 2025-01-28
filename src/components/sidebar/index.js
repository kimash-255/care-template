import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      class="sidebar-popup offcanvas offcanvas-end"
      tabindex="-1"
      id="sidebarPopup"
    >
      <div class="offcanvas-header">
        <a href="index.html" class="sidebar-popup-logo">
          <img src="/assets/img/logo/logo.png" alt="" />
        </a>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="far fa-xmark"></i>
        </button>
      </div>
      <div class="sidebar-popup-wrap offcanvas-body">
        <div class="sidebar-popup-content">
          <div class="sidebar-popup-about">
            <h4>About Us</h4>
            <p>
              There are many variations of passages available sure there
              majority have suffered alteration in some form by inject humour or
              randomised words which donot look even slightly believable.
            </p>
          </div>
          <div class="sidebar-popup-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <div class="icon">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="content">
                  <h6>Email</h6>
                  <Link href="/cdn-cgi/l/email-protection#731a1d151c33160b121e031f165d101c1e">
                    <span
                      class="__cf_email__"
                      data-cfemail="3851565e57785d40595548545d165b5755"
                    >
                      [email&#160;protected]
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="far fa-phone"></i>
                </div>
                <div class="content">
                  <h6>Phone</h6>
                  <Link href="tel:+21236547898">+2 123 654 7898</Link>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="far fa-location-dot"></i>
                </div>
                <div class="content">
                  <h6>Address</h6>
                  <Link href="#">25/B Milford Road, New York</Link>
                </div>
              </li>
            </ul>
          </div>
          <div class="sidebar-popup-social">
            <h4>Follow Us</h4>
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
  );
};
export default Sidebar;
