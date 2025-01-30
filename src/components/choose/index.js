import Image from "next/image";
import Link from "next/link";

const Choose = () => {
  return (
    <div className="choose-area bg py-100">
      <div className="container">
        <div
          className="row g-4 align-items-center justify-content-between wow fadeInDown"
          data-wow-delay=".25s"
        >
          <div className="col-lg-6">
            <div className="site-heading mb-0">
              <span className="site-title-tagline align-items-center justify-content-center">
                <i className="far fa-house-chimney-heart"></i> Why Choose Us
              </span>
              <h2 className="site-title">
                Trusted And Experienced Senior Care Provider
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-content wow fadeInUp" data-wow-delay=".25s">
              <div className="choose-content-wrap">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img src="/assets/img/icon/money.svg" alt="" />
                      </div>
                      <div className="choose-item-info">
                        <h4>Affordable Cost</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img src="/assets/img/icon/team.svg" alt="" />
                      </div>
                      <div className="choose-item-info">
                        <h4>Our Experienced Team</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img src="/assets/img/icon/care.svg" alt="" />
                      </div>
                      <div className="choose-item-info">
                        <h4>Quality Services</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img src="/assets/img/icon/certified.svg" alt="" />
                      </div>
                      <div className="choose-item-info">
                        <h4>Certified Company</h4>
                        <p>
                          There are many variations words passage available
                          majority.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-img wow fadeInRight" data-wow-delay=".25s">
              <img src="/assets/img/choose/01.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
