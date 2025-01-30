import Image from "next/image";

const Video = () => {
  return (
    <div
      className="video-area"
      style={{
        marginTop: "70px",
        marginBottom: "50px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="video-info wow fadeInUp" data-wow-delay=".25s">
              <div className="site-heading mb-0">
                <span className="site-title-tagline">
                  <i className="far fa-house-chimney-heart"></i>Our Care Home
                </span>
                <h2 className="site-title">
                  Providing the Best Care for Your Loved Ones
                </h2>
                <p>
                  Our care home offers a warm and welcoming environment where
                  seniors receive personalized support, companionship, and
                  professional care to enhance their well-being and quality of
                  life.
                </p>
              </div>
              <a href="contact.html" className="theme-btn mt-30">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="video-content wow fadeInRight"
              data-wow-delay=".25s"
              style={{
                backgroundImage: "url('assets/img/video/01.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
