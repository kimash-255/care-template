import Link from "next/link";
import Image from "next/image";

const Video = () => {
  return (
    <div className="video-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="video-info wow fadeInUp" data-wow-delay=".25s">
              <div className="site-heading mb-0">
                <span className="site-title-tagline">
                  <i className="far fa-house-chimney-heart"></i>Latest Video
                </span>
                <h2 className="site-title">
                  Making The Best Impression On Your Old Age
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form by
                  injected humour or randomised word look even slightly
                  believable.
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
              }}
            >
              <Link
                className="play-btn popup-youtube"
                href="https://www.youtube.com/watch?v=ckHzmP1evNU"
              >
                <i className="fas fa-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
