import Image from "next/image";
import Link from "next/link";

const Choose = () => {
  return (
    <div class="choose-area bg py-100">
      <div class="container">
        <div
          class="row g-4 align-items-center justify-content-between wow fadeInDown"
          data-wow-delay=".25s"
        >
          <div class="col-lg-6">
            <div class="site-heading mb-0">
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i> Why Choose Us
              </span>
              <h2 class="site-title">
                Trusted And Experience <span>Senior Care </span> Provider
              </h2>
            </div>
          </div>
          <div class="col-lg-5">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when will uncover many web sites
              still in their infancy looking at its layout.
            </p>
            <Link href="/contact" class="theme-btn mt-20">
              Contact Us<i class="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
              <div class="choose-content-wrap">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="choose-item">
                      <span class="count">01</span>
                      <div class="choose-item-icon">
                        <img src="/assets/img/icon/money.svg" alt="" />
                      </div>
                      <div class="choose-item-info">
                        <h4>Affordable Cost</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="choose-item">
                      <span class="count">02</span>
                      <div class="choose-item-icon">
                        <img src="/assets/img/icon/team.svg" alt="" />
                      </div>
                      <div class="choose-item-info">
                        <h4>Our Experience Team</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="choose-item">
                      <span class="count">03</span>
                      <div class="choose-item-icon">
                        <img src="/assets/img/icon/care.svg" alt="" />
                      </div>
                      <div class="choose-item-info">
                        <h4>Quality Services</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="choose-item">
                      <span class="count">04</span>
                      <div class="choose-item-icon">
                        <img src="/assets/img/icon/certified.svg" alt="" />
                      </div>
                      <div class="choose-item-info">
                        <h4>Certified Company</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="choose-img wow fadeInRight" data-wow-delay=".25s">
              <img src="/assets/img/choose/01.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
