import Image from "next/image";
import Link from "next/link";

const HomeService = () => {
  return (
    <div class="service-area2 py-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="site-heading text-center">
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i>Our Services
              </span>
              <h2 class="site-title">
                We Believe Everyone Deserves <span>Our Quality Care</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="service-item wow fadeInUp" data-wow-delay=".25s">
              <span class="count">01</span>
              <div class="service-img">
                <img src="/assets/img/service/01.jpg" alt="" />
              </div>
              <div class="service-info">
                <div class="service-icon">
                  <img src="/assets/img/icon/living.svg" alt="" />
                </div>
                <div class="service-content">
                  <h4 class="service-title">
                    <Link href="/service-single">Assisted Living</Link>
                  </h4>
                  <p class="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered words alteration in some.
                  </p>
                  <Link href="/service-single" class="theme-btn">
                    Details<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="service-item wow fadeInUp" data-wow-delay=".50s">
              <span class="count">02</span>
              <div class="service-img">
                <img src="/assets/img/service/02.jpg" alt="" />
              </div>
              <div class="service-info">
                <div class="service-icon">
                  <img src="/assets/img/icon/nurse.svg" alt="" />
                </div>
                <div class="service-content">
                  <h4 class="service-title">
                    <Link href="/service-single">Nursing Care</Link>
                  </h4>
                  <p class="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered words alteration in some.
                  </p>
                  <Link href="/service-single" class="theme-btn">
                    Details<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="service-item wow fadeInUp" data-wow-delay=".75s">
              <span class="count">03</span>
              <div class="service-img">
                <img src="/assets/img/service/03.jpg" alt="" />
              </div>
              <div class="service-info">
                <div class="service-icon">
                  <img src="/assets/img/icon/health-care.svg" alt="" />
                </div>
                <div class="service-content">
                  <h4 class="service-title">
                    <Link href="/service-single">Medical & Health Care</Link>
                  </h4>
                  <p class="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered words alteration in some.
                  </p>
                  <Link href="/service-single" class="theme-btn">
                    Details<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="service-item wow fadeInUp" data-wow-delay=".25s">
              <span class="count">04</span>
              <div class="service-img">
                <img src="/assets/img/service/04.jpg" alt="" />
              </div>
              <div class="service-info">
                <div class="service-icon">
                  <img src="/assets/img/icon/residential.svg" alt="" />
                </div>
                <div class="service-content">
                  <h4 class="service-title">
                    <Link href="/service-single">Residential Care</Link>
                  </h4>
                  <p class="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered words alteration in some.
                  </p>
                  <Link href="/service-single" class="theme-btn">
                    Details<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="service-item wow fadeInUp" data-wow-delay=".50s">
              <span class="count">05</span>
              <div class="service-img">
                <img src="/assets/img/service/01.jpg" alt="" />
              </div>
              <div class="service-info">
                <div class="service-icon">
                  <img src="/assets/img/icon/residential.svg" alt="" />
                </div>
                <div class="service-content">
                  <h4 class="service-title">
                    <Link href="/service-single">Residential Care</Link>
                  </h4>
                  <p class="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered words alteration in some.
                  </p>
                  <Link href="/service-single" class="theme-btn">
                    Details<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="service-item wow fadeInUp" data-wow-delay=".75s">
              <span class="count">06</span>
              <div class="service-img">
                <img src="/assets/img/service/01.jpg" alt="" />
              </div>
              <div class="service-info">
                <div class="service-icon">
                  <img src="/assets/img/icon/personal.svg" alt="" />
                </div>
                <div class="service-content">
                  <h4 class="service-title">
                    <Link href="/service-single">Personal Care</Link>
                  </h4>
                  <p class="service-text">
                    There are many variations of passages orem psum available
                    but the majority have suffered words alteration in some.
                  </p>
                  <Link href="/service-single" class="theme-btn">
                    Details<i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeService;
