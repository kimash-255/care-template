import Image from "next/image";
import Link from "next/link";

const Feature = () => {
  return (
    <div class="feature-area2 pt-100">
      <div class="container">
        <div class="feature-wrapper">
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="feature-item wow fadeInUp" data-wow-delay=".25s">
                <span class="count">01</span>
                <div class="feature-icon">
                  <img src="/assets/img/icon/nurse.svg" alt="" />
                </div>
                <div class="feature-content">
                  <h4>Dedicated Team</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis excepturi words of voluptatum deleniti atque.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="feature-item wow fadeInUp" data-wow-delay=".50s">
                <span class="count">02</span>
                <div class="feature-icon">
                  <img src="/assets/img/icon/institute.svg" alt="" />
                </div>
                <div class="feature-content">
                  <h4>Trusted Institute</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis excepturi words of voluptatum deleniti atque.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="feature-item wow fadeInUp" data-wow-delay=".75s">
                <span class="count">03</span>
                <div class="feature-icon">
                  <img src="/assets/img/icon/money.svg" alt="" />
                </div>
                <div class="feature-content">
                  <h4>Affordable Price</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis excepturi words of voluptatum deleniti atque.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="feature-item wow fadeInUp" data-wow-delay="1s">
                <span class="count">04</span>
                <div class="feature-icon">
                  <img src="/assets/img/icon/support.svg" alt="" />
                </div>
                <div class="feature-content">
                  <h4>Emergency Support</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis excepturi words of voluptatum deleniti atque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
