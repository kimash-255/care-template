import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <div class="testimonial-area testimonial-bg pt-80 pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="site-heading wow fadeInDown" data-wow-delay=".25s">
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i> Testimonials
              </span>
              <h2 class="site-title text-white">
                What Our Client <span>Say</span> about us
              </h2>
              <p class="text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                All the generators on the Internet tend to repeat predefined
                chunks.
              </p>
              <a href="contact.html" class="theme-btn mt-30">
                Know More <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <div
              class="testimonial-slider owl-carousel owl-theme wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <span class="testimonial-quote-icon">
                    <i class="fal fa-quote-right"></i>
                  </span>
                  <div class="testimonial-shadow-icon">
                    <img src="/assets/img/icon/quote.svg" alt="" />
                  </div>
                  <p>
                    There are many variations passage available the majority
                    have suffered of alteration in some form by the injected
                    humour or randomised words which look even slightly
                    believable.
                  </p>
                  <div class="testimonial-rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="testimonial-content">
                  <div class="testimonial-author-img">
                    <img src="/assets/img/testimonial/01.jpg" alt="" />
                  </div>
                  <div class="testimonial-author-info">
                    <h4>Niesha Phips</h4>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <span class="testimonial-quote-icon">
                    <i class="fal fa-quote-right"></i>
                  </span>
                  <div class="testimonial-shadow-icon">
                    <img src="/assets/img/icon/quote.svg" alt="" />
                  </div>
                  <p>
                    There are many variations passage available the majority
                    have suffered of alteration in some form by the injected
                    humour or randomised words which look even slightly
                    believable.
                  </p>
                  <div class="testimonial-rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="testimonial-content">
                  <div class="testimonial-author-img">
                    <img src="/assets/img/testimonial/02.jpg" alt="" />
                  </div>
                  <div class="testimonial-author-info">
                    <h4>Daniel Porter</h4>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <span class="testimonial-quote-icon">
                    <i class="fal fa-quote-right"></i>
                  </span>
                  <div class="testimonial-shadow-icon">
                    <img src="/assets/img/icon/quote.svg" alt="" />
                  </div>
                  <p>
                    There are many variations passage available the majority
                    have suffered of alteration in some form by the injected
                    humour or randomised words which look even slightly
                    believable.
                  </p>
                  <div class="testimonial-rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="testimonial-content">
                  <div class="testimonial-author-img">
                    <img src="/assets/img/testimonial/03.jpg" alt="" />
                  </div>
                  <div class="testimonial-author-info">
                    <h4>Ebony Swihart</h4>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <span class="testimonial-quote-icon">
                    <i class="fal fa-quote-right"></i>
                  </span>
                  <div class="testimonial-shadow-icon">
                    <img src="/assets/img/icon/quote.svg" alt="" />
                  </div>
                  <p>
                    There are many variations passage available the majority
                    have suffered of alteration in some form by the injected
                    humour or randomised words which look even slightly
                    believable.
                  </p>
                  <div class="testimonial-rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="testimonial-content">
                  <div class="testimonial-author-img">
                    <img src="/assets/img/testimonial/04.jpg" alt="" />
                  </div>
                  <div class="testimonial-author-info">
                    <h4>Loreta Jones</h4>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
