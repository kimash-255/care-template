import Link from "next/link";
import { useState } from "react";

const MainContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          success: true,
          message: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          success: false,
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <main className="main">
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
                    <p>2406 Se130th avenue, Portland, 97233 Oregon</p>
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
                        +(503) 477-5855 / +(206) 712-0125 / +1 (206) 657-2640
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
                      ,{" "}
                      <Link href="mailto:james@destinycarehome.org">
                        james@destinycarehome.org
                      </Link>
                      ,{" "}
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
                      We are here to answer any questions you may have. Please
                      fill out the form below and we'll get back to you soon.
                    </p>
                  </div>
                  {status.message && (
                    <div
                      className={
                        status.success
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                    >
                      {status.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Your Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        className="form-control"
                        placeholder="Write Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
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
    </main>
  );
};

export default MainContact;
