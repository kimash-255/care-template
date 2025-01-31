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
                        +(503) 477-5855/+(206) 712-0125/+1 (206) 657-2640
                      </Link>
                    </p>
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
                      <Link href="mailto:info@destinycarehome.org">
                        info@destinycarehome.org
                      </Link>
                      ,
                      <Link href="mailto:james@destinycarehome.org">
                        james@destinycarehome.org
                      </Link>
                      ,
                      <Link href="mailto:benard@destinycarehome.org">
                        benard@destinycarehome.org
                      </Link>
                    </p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5063844428234!2d-122.53669234518993!3d45.51778494177956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495d762f2d3d87d%3A0x7203d536c1d3b808!2s2406%20SE%20130th%20Ave%2C%20Portland%2C%20OR%2097233%2C%20USA!5e0!3m2!1sen!2sus!4v1674321234924!5m2!1sen!2sus"
          width="100%"
          height="400"
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
