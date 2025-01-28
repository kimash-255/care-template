import Link from "next/link";
import Image from "next/image";

const MainTeam = () => {
  return (
    <main class="main">
      {/* <!-- breadcrumb --> */}
      <div
        className="site-breadcrumb"
        style={{ backgroundImage: `url('assets/img/breadcrumb/01.jpg')` }}
      >
        <div class="container">
          <h2 class="breadcrumb-title">Our Team</h2>
          <ul class="breadcrumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">Our Team</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- team-area --> */}
      <div class="team-area py-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div
                class="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span class="site-title-tagline">
                  <i class="far fa-house-chimney-heart"></i> Our Team
                </span>
                <h2 class="site-title">
                  Meet With Our Awesome <span>Team</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".25s">
                <div class="team-img">
                  <img src="/assets/img/team/01.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Rodrigues Christy</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".50s">
                <div class="team-img">
                  <img src="/assets/img/team/02.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <a href="team.html">Matthew Hong</a>
                  </h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".75s">
                <div class="team-img">
                  <img src="/assets/img/team/03.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Anita Bentley</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay="1s">
                <div class="team-img">
                  <img src="/assets/img/team/04.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Beverly Dyer</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".25s">
                <div class="team-img">
                  <img src="/assets/img/team/01.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Rodrigues Christy</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".50s">
                <div class="team-img">
                  <img src="/assets/img/team/02.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Matthew Hong</Link>
                  </h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay=".75s">
                <div class="team-img">
                  <img src="/assets/img/team/03.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Anita Bentley</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="team-item wow fadeInUp" data-wow-delay="1s">
                <div class="team-img">
                  <img src="/assets/img/team/04.jpg" alt="thumb" />
                  <div class="team-social-wrap">
                    <div class="team-social-btn">
                      <button type="button">
                        <i class="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div class="team-social">
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h4>
                    <Link href="/team">Beverly Dyer</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- team-area end --> */}
    </main>
  );
};
export default MainTeam;
