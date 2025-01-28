import Image from "next/image";
import Link from "next/link";

const Donation = () => {
  return (
    <div class="donation-area bg pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <div class="site-heading text-center">
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i> Donations
              </span>
              <h2 class="site-title">
                We Are Always Where Senior <span>People Need Help</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="donation-slider owl-carousel owl-theme">
          <div class="donation-item">
            <div class="donation-img">
              <img src="/assets/img/donation/01.jpg" alt="" />
              <div class="donation-date">
                <span class="donation-date-day">25</span>
                <span class="donation-date-month">Dec</span>
              </div>
            </div>
            <div class="donation-content">
              <h4 class="donation-title">
                <Link href="/donation-single">Specialist Nursing Care</Link>
              </h4>
              <p class="donation-text">
                There are many variations of passages orem psum available but
                the majority have suffered alteration in some.
              </p>
              <div class="donation-progress">
                <div class="progress-box">
                  <span class="progress-percent">85%</span>
                  <div class="progress" data-value="85">
                    <div class="progress-bar" role="progressbar"></div>
                  </div>
                </div>
                <div class="donation-goal">
                  <p>
                    <span>$24,350</span> Raised
                  </p>
                  <p>
                    <span>$35,000</span> Goal
                  </p>
                </div>
              </div>
              <div class="donation-footer">
                <Link href="/donation-single" class="theme-btn">
                  Donate Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="donation-item">
            <div class="donation-img">
              <img src="/assets/img/donation/02.jpg" alt="" />
              <div class="donation-date">
                <span class="donation-date-day">28</span>
                <span class="donation-date-month">Dec</span>
              </div>
            </div>
            <div class="donation-content">
              <h4 class="donation-title">
                <Link href="/donation-single">Provide Home Visit Care</Link>
              </h4>
              <p class="donation-text">
                There are many variations of passages orem psum available but
                the majority have suffered alteration in some.
              </p>
              <div class="donation-progress">
                <div class="progress-box">
                  <span class="progress-percent">65%</span>
                  <div class="progress" data-value="65">
                    <div class="progress-bar" role="progressbar"></div>
                  </div>
                </div>
                <div class="donation-goal">
                  <p>
                    <span>$24,350</span> Raised
                  </p>
                  <p>
                    <span>$35,000</span> Goal
                  </p>
                </div>
              </div>
              <div class="donation-footer">
                <Link href="donation-single.html" class="theme-btn">
                  Donate Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="donation-item">
            <div class="donation-img">
              <img src="/assets/img/donation/03.jpg" alt="" />
              <div class="donation-date">
                <span class="donation-date-day">30</span>
                <span class="donation-date-month">Dec</span>
              </div>
            </div>
            <div class="donation-content">
              <h4 class="donation-title">
                <a href="donation-single.html">Relatives Accommodation</a>
              </h4>
              <p class="donation-text">
                There are many variations of passages orem psum available but
                the majority have suffered alteration in some.
              </p>
              <div class="donation-progress">
                <div class="progress-box">
                  <span class="progress-percent">75%</span>
                  <div class="progress" data-value="75">
                    <div class="progress-bar" role="progressbar"></div>
                  </div>
                </div>
                <div class="donation-goal">
                  <p>
                    <span>$24,350</span> Raised
                  </p>
                  <p>
                    <span>$35,000</span> Goal
                  </p>
                </div>
              </div>
              <div class="donation-footer">
                <Link href="donation-single.html" class="theme-btn">
                  Donate Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="donation-item">
            <div class="donation-img">
              <img src="/assets/img/donation/04.jpg" alt="" />
              <div class="donation-date">
                <span class="donation-date-day">26</span>
                <span class="donation-date-month">Dec</span>
              </div>
            </div>
            <div class="donation-content">
              <h4 class="donation-title">
                <Link href="/donation-single">Help The Senior Care</Link>
              </h4>
              <p class="donation-text">
                There are many variations of passages orem psum available but
                the majority have suffered alteration in some.
              </p>
              <div class="donation-progress">
                <div class="progress-box">
                  <span class="progress-percent">85%</span>
                  <div class="progress" data-value="85">
                    <div class="progress-bar" role="progressbar"></div>
                  </div>
                </div>
                <div class="donation-goal">
                  <p>
                    <span>$24,350</span> Raised
                  </p>
                  <p>
                    <span>$35,000</span> Goal
                  </p>
                </div>
              </div>
              <div class="donation-footer">
                <Link href="/donation-single" class="theme-btn">
                  Donate Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donation;
