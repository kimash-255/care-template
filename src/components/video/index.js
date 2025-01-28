import Link from "next/link";
import Image from "next/image";

const Video = () => {
  return (
    <div class="video-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="video-info wow fadeInUp" data-wow-delay=".25s">
              <div class="site-heading mb-0">
                <span class="site-title-tagline">
                  <i class="far fa-house-chimney-heart"></i>Latest Video
                </span>
                <h2 class="site-title">
                  Making The Best <span>Impression</span> On Your Old Age
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form by
                  injected humour or randomised word look even slightly
                  believable.
                </p>
              </div>
              <a href="contact.html" class="theme-btn mt-30">
                Learn More <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-7">
            <div
              class="video-content wow fadeInRight"
              data-wow-delay=".25s"
              style="background-image: url(assets/img/video/01.jpg)"
            >
              <Link
                class="play-btn popup-youtube"
                href="https://www.youtube.com/watch?v=ckHzmP1evNU"
              >
                <i class="fas fa-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
