import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div class="blog-area py-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div
              class="site-heading text-center wow fadeInDown"
              data-wow-delay=".25s"
            >
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i> Our Blog
              </span>
              <h2 class="site-title">
                Our Latest News & <span>Blog</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
              <div class="blog-item-img">
                <img src="/assets/img/blog/01.jpg" alt="Thumb" />
                <div class="blog-date">
                  <strong>20</strong>
                  <span>Dec</span>
                </div>
              </div>
              <div class="blog-item-info">
                <div class="blog-item-meta">
                  <ul>
                    <li>
                      <Link href="#">
                        <i class="far fa-user-circle"></i> By Alicia Davis
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="far fa-comments"></i> 2.5k Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 class="blog-title">
                  <Link href="blog-single">
                    There are many variations of passages orem available.
                  </Link>
                </h4>
                <p>
                  It is a long established fact that a reader will majority have
                  suffered distracted readable.
                </p>
                <Link class="theme-btn" href="blog-single">
                  Read More<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-item wow fadeInUp" data-wow-delay=".50s">
              <div class="blog-item-img">
                <img src="/assets/img/blog/02.jpg" alt="Thumb" />
                <div class="blog-date">
                  <strong>25</strong>
                  <span>Dec</span>
                </div>
              </div>
              <div class="blog-item-info">
                <div class="blog-item-meta">
                  <ul>
                    <li>
                      <Link href="#">
                        <i class="far fa-user-circle"></i> By Alicia Davis
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="far fa-comments"></i> 1.2k Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 class="blog-title">
                  <Link href="/blog-single">
                    Generator internet repeat tend word chunk necessary.
                  </Link>
                </h4>
                <p>
                  It is a long established fact that a reader will majority have
                  suffered distracted readable.
                </p>
                <Link class="theme-btn" href="/blog-single">
                  Read More<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-item wow fadeInUp" data-wow-delay=".75s">
              <div class="blog-item-img">
                <img src="/assets/img/blog/03.jpg" alt="Thumb" />
                <div class="blog-date">
                  <strong>28</strong>
                  <span>Dec</span>
                </div>
              </div>
              <div class="blog-item-info">
                <div class="blog-item-meta">
                  <ul>
                    <li>
                      <Link href="#">
                        <i class="far fa-user-circle"></i> By Alicia Davis
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="far fa-comments"></i> 2.8k Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 class="blog-title">
                  <Link href="/blog-single">
                    Survived only five centuries but also the leap into.
                  </Link>
                </h4>
                <p>
                  It is a long established fact that a reader will majority have
                  suffered distracted readable.
                </p>
                <Link class="theme-btn" href="/blog-single">
                  Read More<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
