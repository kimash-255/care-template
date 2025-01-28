import Link from "next/link";
import Image from "next/image";

const MainTeam = () => {
  return (
    <main className="main">
      {/* <!-- breadcrumb --> */}
      <div
        className="site-breadcrumb"
        style={{ backgroundImage: `url('assets/img/breadcrumb/01.jpg')` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Our Team</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Our Team</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- team-area --> */}
      <div className="team-area py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">
                  <i className="far fa-house-chimney-heart"></i> Our Team
                </span>
                <h2 className="site-title">
                  Meet With Our Awesome <span>Team</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                <div className="team-img">
                  <img src="/assets/img/team/01.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Rodrigues Christy</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                <div className="team-img">
                  <img src="/assets/img/team/02.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Matthew Hong</Link>
                  </h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                <div className="team-img">
                  <img src="/assets/img/team/03.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Anita Bentley</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay="1s">
                <div className="team-img">
                  <img src="/assets/img/team/04.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Beverly Dyer</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                <div className="team-img">
                  <img src="/assets/img/team/01.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Rodrigues Christy</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                <div className="team-img">
                  <img src="/assets/img/team/02.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Matthew Hong</Link>
                  </h4>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                <div className="team-img">
                  <img src="/assets/img/team/03.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="/team">Anita Bentley</Link>
                  </h4>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay="1s">
                <div className="team-img">
                  <img src="/assets/img/team/04.jpg" alt="thumb" />
                  <div className="team-social-wrap">
                    <div className="team-social-btn">
                      <button type="button">
                        <i className="far fa-share-alt"></i>
                      </button>
                    </div>
                    <div className="team-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-content">
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
