import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog.json"; // Import the blog data

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
            {/* Map through the blog data */}
            {blogData.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="blog-item-img">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                    />
                    <div className="blog-date">
                      <strong>{blog.date.day}</strong>
                      <span>{blog.date.month}</span>
                    </div>
                  </div>
                  <div className="blog-item-info">
                    <div className="blog-item-meta">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle"></i> By{" "}
                            {blog.author}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-comments"></i> {blog.comments}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="blog-title">
                      <Link href={`/blog/[slug]`} as={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h4>
                    <p>
                      It is a long established fact that a reader will majority
                      have suffered distracted readable.
                    </p>
                    <Link
                      className="theme-btn"
                      href={`/blog/[slug]`}
                      as={`/blog/${blog.slug}`}
                    >
                      Read More<i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
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
