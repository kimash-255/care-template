import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  return (
    <div class="gallery-area py-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div
              class="site-heading text-center wow fadeInDown"
              data-wow-delay=".25s"
            >
              <span class="site-title-tagline">
                <i class="far fa-house-chimney-heart"></i>our Gallery
              </span>
              <h2 class="site-title">
                Let Us Check Our Photo <span>Gallery</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row g-4 popup-gallery">
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay=".25s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/01.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="/assets/img/gallery/01.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay=".50s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/02.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="/assets/img/gallery/02.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay=".75s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/03.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="/assets/img/gallery/03.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay="1s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/04.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="assets/img/gallery/04.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay=".25s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/05.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="assets/img/gallery/05.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay=".50s">
              <div class="gallery-img">
                <img src="assets/img/gallery/06.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="/assets/img/gallery/06.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay=".75s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/07.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="/assets/img/gallery/07.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="gallery-item wow fadeInUp" data-wow-delay="1s">
              <div class="gallery-img">
                <img src="/assets/img/gallery/08.jpg" alt="" />
              </div>
              <div class="gallery-content">
                <Link
                  class="popup-img gallery-link"
                  href="/assets/img/gallery/08.jpg"
                >
                  <i class="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
