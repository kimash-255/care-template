import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="gallery-area py-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div
              className="site-heading text-center wow fadeInDown"
              data-wow-delay=".25s"
            >
              <span className="site-title-tagline">
                <i className="far fa-house-chimney-heart"></i>our Gallery
              </span>
              <h2 className="site-title">
                Let Us Check Our Photo <span>Gallery</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 popup-gallery">
          {[
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
          ].map((img, index) => (
            <div className="col-md-3" key={img}>
              <div
                className="gallery-item wow fadeInUp"
                data-wow-delay={`${0.25 * (index + 1)}s`}
              >
                <div className="gallery-img w-100 h-60">
                  <Image
                    src={`/assets/img/gallery/${img}`}
                    alt={`Gallery Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="gallery-content">
                  <Link
                    className="popup-img gallery-link"
                    href={`/assets/img/gallery/${img}`}
                  >
                    <i className="fal fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
