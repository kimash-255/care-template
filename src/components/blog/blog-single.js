import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blog.json";
import Link from "next/link";
import Layout from "../layout";

const BlogSingle = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
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
                      <img
                        src={blog.content[0].src}
                        alt={blog.content[0].alt}
                      />
                    </div>
                    <div className="blog-info">
                      <div className="blog-meta">
                        <div className="blog-meta-left">
                          <ul>
                            <li>
                              <i className="far fa-user"></i>
                              <Link href="#">{blog.author}</Link>
                            </li>
                            <li>{blog.comments}</li>
                            <li>{blog.likes}</li>
                          </ul>
                        </div>
                        <div className="blog-meta-right">
                          <Link href="#" className="share-link">
                            <i className="far fa-share-alt"></i>Share
                          </Link>
                        </div>
                      </div>
                      <div className="blog-details">
                        <h3 className="blog-details-title mb-20">
                          {blog.title}
                        </h3>
                        {blog.content.map((item, index) => {
                          if (item.type === "text") {
                            return (
                              <p key={index} className="mb-10">
                                {item.content}
                              </p>
                            );
                          } else if (item.type === "image") {
                            return (
                              <img key={index} src={item.src} alt={item.alt} />
                            );
                          } else if (item.type === "blockquote") {
                            return (
                              <blockquote key={index} className="blockqoute">
                                {item.content}
                                <h6 className="blockqoute-author">
                                  {item.author}
                                </h6>
                                <i className="fal fa-quote-right blockqoute-icon"></i>
                              </blockquote>
                            );
                          }
                          return null;
                        })}
                        <div className="blog-details-tag pb-20">
                          <h5>Tags :</h5>
                          <ul>
                            {blog.tags.map((tag, index) => (
                              <li key={index}>
                                <a href="#">{tag}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="blog-author">
                        <div className="blog-author-img">
                          <img src="/assets/img/blog/author.jpg" alt="" />
                        </div>
                        <div className="author-info">
                          <h6>Author</h6>
                          <h3 className="author-name">Shelly Frederick</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the abcd readable content of a page
                            when looking at its layout that more less.
                          </p>
                          <div className="author-social">
                            <Link href="#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-x-twitter"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-instagram"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-whatsapp"></i>
                            </Link>
                            <a href="#">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blog-comment">
                        <h3>Comments (20)</h3>
                        <div className="blog-comment-wrap">
                          {/* Static comments for demo */}
                          <div className="blog-comment-item">
                            <img src="/assets/img/blog/com-1.jpg" alt="thumb" />
                            <div className="blog-comment-content">
                              <h5>Rosa Fossum</h5>
                              <span>
                                <i className="far fa-clock"></i> Dec 23, 2024
                              </span>
                              <p>
                                There are many variations of passages the
                                majority have suffered in some injected humour
                                or randomised words which donot look even
                                slightly believable.
                              </p>
                              <Link href="#">
                                <i className="far fa-reply"></i> Reply
                              </Link>
                            </div>
                          </div>
                          {/* More comment items can be added similarly */}
                        </div>
                      </div>
                      <div className="blog-comment-form">
                        <h3>Leave A Comment</h3>
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="form-icon">
                                  <i className="far fa-user-tie"></i>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Your Name*"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="form-icon">
                                  <i className="far fa-envelope"></i>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email*"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="form-icon">
                                  <i className="far fa-pen"></i>
                                  <textarea
                                    name="message"
                                    cols="30"
                                    rows="5"
                                    className="form-control"
                                    placeholder="Your Comment*"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <button type="submit" className="theme-btn">
                                Post Comment{" "}
                                <i className="far fa-paper-plane"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar content */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogSingle;
