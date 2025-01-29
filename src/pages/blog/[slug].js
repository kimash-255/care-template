import React from "react";
import { useRouter } from "next/router";
import BlogsData from "@/data/Blogs.json"; // Path to the JSON file
import Layout from "@/components/layout";
import Link from "next/link";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the Blog with the matching slug
  const service = servicesData.find((service) => service.slug === slug);

  // If service is not found (invalid slug), return a message
  if (!Blog)

    return (
      <Layout>

    <main class="main">
      {/* <!-- breadcrumb --> */}
      <div
        class="site-breadcrumb"
        style={{"background: url(/assets/img/breadcrumb/01.jpg)"}}
      >
        <div class="container">
          <h2 class="breadcrumb-title">Blog Single</h2>
          <ul class="breadcrumb-menu">
            <li><Link href="/">Home</Link></li>
            <li class="active">Blog Single</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- blog single --> */}
      <div class="blog-single py-120">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-8">
              <div class="blog-single-wrap">
                <div class="blog-single-content">
                  <div class="blog-thumb-img">
                    <img src="assets/img/blog/single.jpg" alt="thumb" />
                  </div>
                  <div class="blog-info">
                    <div class="blog-meta">
                      <div class="blog-meta-left">
                        <ul>
                          <li>
                            <i class="far fa-user"></i
                            ><Link href="#">Jean R Gunter</Link>
                          </li>
                          <li><i class="far fa-comments"></i>3.2k Comments</li>
                          <li><i class="far fa-thumbs-up"></i>1.4k Like</li>
                        </ul>
                      </div>
                      <div class="blog-meta-right">
                        <Link href="#" class="share-link"
                          ><i class="far fa-share-alt"></i>Share</Link
                        >
                      </div>
                    </div>
                    <div class="blog-details">
                      <h3 class="blog-details-title mb-20">
                        It is a long established fact that a reader
                      </h3>
                      <p class="mb-10">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                      </p>
                      <p class="mb-10">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, but because those who do not know how to
                        pursue pleasure rationally encounter consequences that
                        are extremely painful.
                      </p>
                      <blockquote class="blockqoute">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using orem psum is
                        that it has a more-or-less the majority have suffered
                        alteration normal distribution.
                        <h6 class="blockqoute-author">Mark Crawford</h6>
                        <i class="fal fa-quote-right blockqoute-icon"></i>
                      </blockquote>
                      <p class="mb-20">
                        In a free hour when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every
                        pain avoided. But in certain circumstances and owing to
                        the claims of duty or the obligations of business it
                        will frequently occur that pleasures have to be
                        repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this
                        principle of selection.
                      </p>

                      <div class="row">
                        <div class="col-md-6 mb-20">
                          <img src="assets/img/blog/01.jpg" alt="" />
                        </div>
                        <div class="col-md-6 mb-20">
                          <img src="/assets/img/blog/02.jpg" alt="" />
                        </div>
                      </div>
                      <p class="mb-20">
                        Power of choice is untrammelled and when nothing
                        prevents our being able to do what we like best, every
                        pleasure is to be welcomed and every pain avoided. But
                        in certain circumstances and owing to the claims of duty
                        or the obligations of business it will frequently occur
                        that pleasures have to be repudiated and annoyances
                        accepted. The wise man therefore always holds in these
                        matters to this principle of selection.
                      </p>
                      <hr />
                      <div class="blog-details-tag pb-20">
                        <h5>Tags :</h5>
                        <ul>
                          <li><Link href="#">Senior</Link></li>
                          <li><Link href="#">Elderly</Link></li>
                          <li><Link href="#">Care</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div class="blog-author">
                      <div class="blog-author-img">
                        <img src="/assets/img/blog/author.jpg" alt="" />
                      </div>
                      <div class="author-info">
                        <h6>Author</h6>
                        <h3 class="author-name">Shelly Frederick</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the abcd readable content of a page when
                          looking at its layout that more less.
                        </p>
                        <div class="author-social">
                          <Link href="#"><i class="fab fa-facebook-f"></i></Link>
                          <Link href="#"><i class="fab fa-x-twitter"></i></Link>
                          <Link href="#"><i class="fab fa-instagram"></i></Link>
                          <Link href="#"><i class="fab fa-whatsapp"></i></Link>
                          <Link href="#"><i class="fab fa-youtube"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="blog-comment">
                    <h3>Comments (20)</h3>
                    <div class="blog-comment-wrap">
                      <div class="blog-comment-item">
                        <img src="/assets/img/blog/com-1.jpg" alt="thumb" />
                        <div class="blog-comment-content">
                          <h5>Rosa Fossum</h5>
                          <span><i class="far fa-clock"></i> Dec 23, 2024</span>
                          <p>
                            There are many variations of passages the majority
                            have suffered in some injected humour or randomised
                            words which don't look even slightly believable.
                          </p>
                          <Link href="#"><i class="far fa-reply"></i> Reply</Link>
                        </div>
                      </div>
                      <div class="blog-comment-item reply">
                        <img src="assets/img/blog/com-2.jpg" alt="thumb" />
                        <div class="blog-comment-content">
                          <h5>Timothy Stone</h5>
                          <span><i class="far fa-clock"></i> Dec 23, 2024</span>
                          <p>
                            There are many variations of passages the majority
                            have suffered in some injected humour or randomised
                            words which don't look even slightly believable.
                          </p>
                          <Link href="#"><i class="far fa-reply"></i> Reply</Link>
                        </div>
                      </div>
                      <div class="blog-comment-item">
                        <img src="assets/img/blog/com-3.jpg" alt="thumb" />
                        <div class="blog-comment-content">
                          <h5>Stacey Anthony</h5>
                          <span><i class="far fa-clock"></i> Dec 23, 2024</span>
                          <p>
                            There are many variations of passages the majority
                            have suffered in some injected humour or randomised
                            words which don't look even slightly believable.
                          </p>
                          <Link
                           href="#"><i class="far fa-reply"></i> Reply</Link
                           >
                        </div>
                      </div>
                    </div>
                    <div class="blog-comment-form">
                      <h3>Leave A Comment</h3>
                      <form action="#">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <div class="form-icon">
                                <i class="far fa-user-tie"></i>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Your Name*"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <div class="form-icon">
                                <i class="far fa-envelope"></i>
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  placeholder="Your Email*"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <div class="form-icon">
                                <i class="far fa-pen"></i>
                                <textarea
                                  name="message"
                                  cols="30"
                                  rows="5"
                                  class="form-control"
                                  placeholder="Your Comment*"
                                  required
                                ></textarea>
                              </div>
                            </div>
                            <button type="submit" class="theme-btn">
                              Post Comment <i class="far fa-paper-plane"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <aside class="blog-sidebar">
                {/* <!-- search--> */}
                <div class="widget search">
                  <h5 class="widget-title">Search</h5>
                  <div class="search-form">
                    <form action="#">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Here..."
                        />
                        <button type="submit">
                          <i class="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- category --> */}
                <div class="widget category">
                  <h5 class="widget-title">Category</h5>
                  <div class="category-list">
                    <Link href="#"
                      ><i class="far fa-arrow-right"></i>Assisted Living<span
                        >(10)</span
                      ></Link
                    >
                    <Link href="#"
                      ><i class="far fa-arrow-right"></i>Nursing Care<span
                        >(15)</span
                      ></Link
                    >
                    <Link href="#"
                      ><i class="far fa-arrow-right"></i>Medical & Health<span
                        >(20)</span
                      ></Link
                    >
                    <Link href="#"
                      ><i class="far fa-arrow-right"></i>Physical
                      Assistance<span>(30)</span></Link
                
                    >
                    <Link href="#" 
                      ><i class="far fa-arrow-right"></i>Residential Care<span
                        >(25)</span
                      ></Link
                    >
                  </div>
                </div>

                {/* <!-- recent post --> */}
                <div class="widget recent-post">
                  <h5 class="widget-title">Recent Post</h5>
                  <div class="recent-post-item">
                    <div class="recent-post-img">
                      <img src="/assets/img/blog/bs-1.jpg" alt="thumb" />
                    </div>
                    <div class="recent-post-info">
                      <h6>
                        <Link href="#"
                          >There are many variatio of passage majority.</Link
                        >
                      </h6>
                      <span><i class="far fa-clock"></i>Dec 23, 2024</span>
                    </div>
                  </div>
                  <div class="recent-post-item">
                    <div class="recent-post-img">
                      <img src="/assets/img/blog/bs-2.jpg" alt="thumb" />
                    </div>
                    <div class="recent-post-info">
                      <h6>
                        <Link href="#"
                          >There are many variatio of passage majority.</Link

                        >
                      </h6>
                      <span><i class="far fa-clock"></i>Dec 23, 2024</span>
                    </div>
                  </div>
                  <div class="recent-post-item">
                    <div class="recent-post-img">
                      <img src="/assets/img/blog/bs-3.jpg" alt="thumb" />
                    </div>
                    <div class="recent-post-info">
                      <h6>
                        <Link href="#"
                          >There are many variatio of passage majority.</Link
                        >
                      </h6>
                      <span><i class="far fa-clock"></i>Dec 23, 2024</span>
                    </div>
                  </div>
                </div>

                {/* <!-- social share --> */}
                <div class="widget social">
                  <h5 class="widget-title">Follow Us</h5>
                  <div class="social-link">
                    <Link href="#"><i class="fab fa-facebook-f"></i></Link>
                    <Link href="#"><i class="fab fa-x-twitter"></i></Link>
                    <Link href="#"><i class="fab fa-dribbble"></i></Link>
                    <Link href="#"><i class="fab fa-whatsapp"></i></Link>
                    <Link href="#"><i class="fab fa-youtube"></i></Link>
                  </div>
                </div>

                {/* <!-- Recent Post --> */}
                <div class="widget tag">
                  <h5 class="widget-title">Popular Tags</h5>
                  <div class="tag-list">
                    <Link href="#">Senior</Link>
                    <Link href="#">Care</Link>
                    <Link href="#">Elderly</Link>
                    <Link href="#">Medical</Link>
                    <Link href="#">Health</Link>
                    <Link href="#">Nurse</Link>
                    <Link href="#">Transport</Link>
                    <Link href="#">Personal</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog single end --> */}
    </main>
      </Layout>
      
   
    );
  };
  export default BlogDetailsPage;