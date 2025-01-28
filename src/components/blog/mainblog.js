import Link from "next/link";
import Image from "next/image";

const MainBlog = () => {
  return (
    <main className="main">
      {/* <!-- breadcrumb --> */}
      <div
        className="site-breadcrumb"
        style={{ background: "url(/assets/img/breadcrumb/01.jpg)" }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Our Blog</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Our Blog</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- blog-area --> */}
      <div className="blog-area py-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div
                className="site-heading text-center wow fadeInDown"
                data-wow-delay=".25s"
              >
                <span className="site-title-tagline">
                  <i className="far fa-house-chimney-heart"></i> Our Blog
                </span>
                <h2 className="site-title">
                  Our Latest News & <span>Blog</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                <div className="blog-item-img">
                  <img src="/assets/img/blog/01.jpg" alt="Thumb" />
                  <div className="blog-date">
                    <strong>20</strong>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="far fa-user-circle"></i> By Alicia Davis
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-comments"></i> 2.5k Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <Link
                      href="/blog/[slug]"
                      as="/blog/there-are-many-variations-of-passages-orem-available"
                    >
                      There are many variations of passages orem available.
                    </Link>
                  </h4>
                  <p>
                    It is a long established fact that a reader will majority
                    have suffered distracted readable.
                  </p>
                  <Link
                    className="theme-btn"
                    href="/blog/[slug]"
                    as="/blog/there-are-many-variations-of-passages-orem-available"
                  >
                    Read More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".50s">
                <div className="blog-item-img">
                  <img src="/assets/img/blog/02.jpg" alt="Thumb" />
                  <div className="blog-date">
                    <strong>25</strong>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="far fa-user-circle"></i> By Alicia Davis
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-comments"></i> 1.2k Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <Link
                      href="/blog/[slug]"
                      as="/blog/generator-internet-repeat-tend-word-chunk-necessary"
                    >
                      Generator internet repeat tend word chunk necessary.
                    </Link>
                  </h4>
                  <p>
                    It is a long established fact that a reader will majority
                    have suffered distracted readable.
                  </p>
                  <Link
                    className="theme-btn"
                    href="/blog/[slug]"
                    as="/blog/generator-internet-repeat-tend-word-chunk-necessary"
                  >
                    Read More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item wow fadeInUp" data-wow-delay=".75s">
                <div className="blog-item-img">
                  <img src="/assets/img/blog/03.jpg" alt="Thumb" />
                  <div className="blog-date">
                    <strong>28</strong>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="far fa-user-circle"></i> By Alicia Davis
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-comments"></i> 2.8k Comments
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <Link
                      href="/blog/[slug]"
                      as="/blog/survived-only-five-centuries-but-also-the-leap-into"
                    >
                      Survived only five centuries but also the leap into.
                    </Link>
                  </h4>
                  <p>
                    It is a long established fact that a reader will majority
                    have suffered distracted readable.
                  </p>
                  <Link
                    className="theme-btn"
                    href="/blog/[slug]"
                    as="/blog/survived-only-five-centuries-but-also-the-leap-into"
                  >
                    Read More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- pagination --> */}
          <div className="pagination-area">
            <div aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="fas fa-arrow-left"></i>
                    </span>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- pagination end --> */}
        </div>
      </div>
      {/* <!-- blog-area end --> */}
    </main>
  );
};
export default MainBlog;
