import Link from "next/link";
import Image from "next/image";

const Event = () => {
  return (
    <div class="event-area py-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <div class="site-heading text-center">
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i> Upcoming Events
              </span>
              <h2 class="site-title">
                Join Our Upcoming <span>Events For Your</span> Contribution
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="event-item wow fadeInUp" data-wow-delay=".25s">
              <div class="event-img">
                <img src="/assets/img/event/01.jpg" alt="" />
              </div>
              <div class="event-content">
                <div class="event-meta">
                  <ul>
                    <li>
                      <i class="far fa-calendar-alt"></i>15 Dec 2024
                    </li>
                    <li>
                      <i class="far fa-location-dot"></i>New York, USA
                    </li>
                  </ul>
                </div>
                <h4 class="event-title">
                  <Link href="/event-single">
                    Fund Raising Event For Senior Care
                  </Link>
                </h4>
                <p>
                  There are many variations of words passages available the
                  majority.
                </p>
                <Link href="/event-single" class="theme-btn">
                  Join Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="event-item wow fadeInUp" data-wow-delay=".50s">
              <div class="event-img">
                <img src="/assets/img/event/02.jpg" alt="" />
              </div>
              <div class="event-content">
                <div class="event-meta">
                  <ul>
                    <li>
                      <i class="far fa-calendar-alt"></i>17 Dec 2024
                    </li>
                    <li>
                      <i class="far fa-location-dot"></i>New York, USA
                    </li>
                  </ul>
                </div>
                <h4 class="event-title">
                  <Link href="event-single.html">
                    Fund Raising Event For Senior Care
                  </Link>
                </h4>
                <p>
                  There are many variations of words passages available the
                  majority.
                </p>
                <Link href="/event-single" class="theme-btn">
                  Join Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="event-item wow fadeInUp" data-wow-delay=".25s">
              <div class="event-img">
                <img src="/assets/img/event/03.jpg" alt="" />
              </div>
              <div class="event-content">
                <div class="event-meta">
                  <ul>
                    <li>
                      <i class="far fa-calendar-alt"></i>22 Dec 2024
                    </li>
                    <li>
                      <i class="far fa-location-dot"></i>New York, USA
                    </li>
                  </ul>
                </div>
                <h4 class="event-title">
                  <Link href="/event-single">
                    Fund Raising Event For Senior Care
                  </Link>
                </h4>
                <p>
                  There are many variations of words passages available the
                  majority.
                </p>
                <Link href="/event-single" class="theme-btn">
                  Join Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="event-item wow fadeInUp" data-wow-delay=".50s">
              <div class="event-img">
                <img src="/assets/img/event/04.jpg" alt="" />
              </div>
              <div class="event-content">
                <div class="event-meta">
                  <ul>
                    <li>
                      <i class="far fa-calendar-alt"></i>25 Dec 2024
                    </li>
                    <li>
                      <i class="far fa-location-dot"></i>New York, USA
                    </li>
                  </ul>
                </div>
                <h4 class="event-title">
                  <Link href="/event-single">
                    Fund Raising Event For Senior Care
                  </Link>
                </h4>
                <p>
                  There are many variations of words passages available the
                  majority.
                </p>
                <Link href="/event-single" class="theme-btn">
                  Join Now<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
