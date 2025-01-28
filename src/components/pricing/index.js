import Link from "next/link";
import Image from "next/image";

const Pricing = () => {
  return (
    <div class="pricing-area py-100">
      <div class="container pb-30">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div
              class="site-heading text-center wow fadeInDown"
              data-wow-delay=".25s"
            >
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i> Pricing Plan
              </span>
              <h2 class="site-title">
                Let Us Check Our Pricing <span>Plan For You</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row g-4 g-lg-5">
          <div class="col-md-6 col-lg-4">
            <div class="pricing-item border wow fadeInUp" data-wow-delay=".25s">
              <div class="pricing-header">
                <h5>Basic</h5>
              </div>
              <div class="pricing-amount">
                <strong>$359</strong>
                <span class="pricing-amount-type">/Monthly</span>
              </div>
              <div class="pricing-btn">
                <Link href="/pricing" class="theme-btn">
                  Purchase Now <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div class="pricing-feature">
                <ul>
                  <li>
                    <i class="fas fa-check-circle"></i>Best Quality Care
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Unlimited Transportation
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Emergency Call System
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Meals Facilities
                  </li>
                  <li>
                    <i class="fas fa-xmark-circle not-include"></i>Laundry
                    Servicing
                  </li>
                  <li>
                    <i class="fas fa-xmark-circle not-include"></i>24/7 Live
                    Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="pricing-item active wow fadeInUp" data-wow-delay=".50s">
              <div class="pricing-header">
                <h5>Standard</h5>
              </div>
              <div class="pricing-amount">
                <strong>$559</strong>
                <span class="pricing-amount-type">/Monthly</span>
              </div>
              <div class="pricing-btn">
                <Link href="/pricing" class="theme-btn">
                  Purchase Now <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div class="pricing-feature">
                <ul>
                  <li>
                    <i class="fas fa-check-circle"></i>Best Quality Care
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Unlimited Transportation
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Emergency Call System
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Meals Facilities
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Laundry Servicing
                  </li>
                  <li>
                    <i class="fas fa-xmark-circle not-include"></i>24/7 Live
                    Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="pricing-item border wow fadeInUp" data-wow-delay=".75s">
              <div class="pricing-header">
                <h5>Premium</h5>
              </div>
              <div class="pricing-amount">
                <strong>$959</strong>
                <span class="pricing-amount-type">/Monthly</span>
              </div>
              <div class="pricing-btn">
                <Link href="/pricing" class="theme-btn">
                  Purchase Now <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div class="pricing-feature">
                <ul>
                  <li>
                    <i class="fas fa-check-circle"></i>Best Quality Care
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Unlimited Transportation
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Emergency Call System
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Meals Facilities
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>Laundry Servicing
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>24/7 Live Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
