import Link from "next/link";
import Image from "next/image";

const MainContact = () => {
  return (
    <main className="main">
      {/* <!-- breadcrumb --> */}
      <div
        className="site-breadcrumb"
        style={{ background: "url(/assets/img/breadcrumb/01.jpg)" }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Contact Us</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Contact Us</li>
          </ul>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- contact area --> */}
      <div className="contact-area py-120">
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-3">
                <div className="contact-info">
                  <div className="icon">
                    <i className="fal fa-map-location-dot"></i>
                  </div>
                  <div className="content">
                    <h5>Office Address</h5>
                    <p>2406 Se130th avenue ,Portland,97233 Oregon</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="contact-info">
                  <div className="icon">
                    <i className="fal fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <h5>Call Us</h5>
                    <p>
                      <Link href="tel:+(206) 712-0125">
                        (503) 477-5855/+(206) 712-0125
                      </Link>
                    </p>{" "}
                    {/* Updated phone number */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="contact-info">
                  <div className="icon">
                    <i className="fal fa-envelopes"></i>
                  </div>
                  <div className="content">
                    <h5>Email Us</h5>
                    <p>
                      <Link href="mailto:benardhomecare@gmail.com">
                        benardhomecare@gmail.com
                      </Link>{" "}
                      {/* Updated email */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="contact-info">
                  <div className="icon">
                    <i className="fal fa-alarm-clock"></i>
                  </div>
                  <div className="content">
                    <h5>Open Time</h5>
                    <p>Mon - Sat (10.00AM - 05.30PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <h2>Get In Touch</h2>
                    <p>
                      At Destiny Care Home LLC, we understand the importance of
                      providing your loved ones with compassionate care. We are
                      here to answer any questions you may have about our
                      services or facilities. Feel free to reach out, and a
                      member of our team will respond promptly.
                    </p>
                  </div>
                  <div className="form-message"></div>
                  <form
                    method="post"
                    action="/senocare/assets/php/contact.php"
                    id="contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-icon">
                            <i className="far fa-user-tie"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name"
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
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-icon">
                        <i className="far fa-pen"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Your Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-icon">
                        <i className="far fa-comment-lines"></i>
                        <textarea
                          name="message"
                          cols="30"
                          rows="5"
                          className="form-control"
                          placeholder="Write Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="theme-btn">
                      Send Message <i className="far fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-img">
                  <img
                    src="/assets/img/contact/01.jpg"
                    alt="Destiny Care Home LLC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end contact area --> */}

      {/* <!-- map --> */}
      <div className="contact-map">
        <iframe
          src="https://g.co/kgs/6jJKe8m"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/* <!-- map end --> */}
    </main>
  );
};

export default MainContact;
