import React from "react";
import { useRouter } from "next/router";
import blogData from "@/data/blog.json"; // Import blog data
import Layout from "@/components/layout";
import Link from "next/link";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog using the title (slug)
  const blog = blogData.find((blog) => blog.slug === slug);

  // If the blog doesn't exist, show an error message
  if (!blog) {
    return (
      <Layout>
        <main className="main">
          <div
            className="site-breadcrumb"
            style={{ background: "url(/assets/img/breadcrumb/01.jpg)" }}
          >
            <div className="container">
              <h2 className="breadcrumb-title">Blog Single</h2>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Blog Single</li>
              </ul>
            </div>
          </div>

          <div className="blog-single py-120">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="blog-single-wrap">
                    <h2>Blog not found</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="main">
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/01.jpg)" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Blog Single</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">Blog Single</li>
            </ul>
          </div>
        </div>

        <div className="blog-single py-120">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="blog-single-wrap">
                  <div className="blog-single-content">
                    <div className="blog-thumb-img">
                      <img src={blog.image} alt="thumb" />
                    </div>

                    <div className="blog-info">
                      <div className="blog-meta">
                        <div className="blog-meta-left">
                          <ul>
                            <li>
                              <i className="far fa-user"></i>
                              <Link href="#">{blog.author}</Link>
                            </li>
                            <li>
                              <i className="far fa-comments"></i>
                              {blog.comments}
                            </li>
                          </ul>
                        </div>
                        <div className="blog-meta-right">
                          <Link href="#" className="share-link">
                            <i className="far fa-share-alt"></i> Share
                          </Link>
                        </div>
                      </div>

                      <div className="blog-details">
                        <h3 className="blog-details-title mb-20">
                          {blog.title}
                        </h3>
                        <p className="mb-10">
                          {blog.content || "No content available."}
                        </p>

                        {/* Tags */}
                        <div className="blog-details-tag pb-20">
                          <h5>Tags :</h5>
                          <ul>
                            <li>
                              <Link href="#">Senior</Link>
                            </li>
                            <li>
                              <Link href="#">Elderly</Link>
                            </li>
                            <li>
                              <Link href="#">Care</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Author info */}
                    <div className="blog-author">
                      <div className="blog-author-img">
                        <img src="/assets/img/blog/author.jpg" alt="author" />
                      </div>
                      <div className="author-info">
                        <h6>Author</h6>
                        <h3 className="author-name">{blog.author}</h3>
                        <p>Short bio or description of the author.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <aside className="blog-sidebar">
                  {/* Sidebar widgets */}
                  <div className="widget search">
                    <h5 className="widget-title">Search</h5>
                    <div className="search-form">
                      <form action="#">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Here..."
                          />
                          <button type="submit">
                            <i className="far fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="widget category">
                    <h5 className="widget-title">Category</h5>
                    <div className="category-list">
                      <Link href="#">
                        <i className="far fa-arrow-right"></i>Assisted Living{" "}
                        <span>(10)</span>
                      </Link>
                      <Link href="#">
                        <i className="far fa-arrow-right"></i>Nursing Care{" "}
                        <span>(15)</span>
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogDetailsPage;
