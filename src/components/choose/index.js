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
                <i className="far fa-house-chimney-heart"></i> Why Choose Our
                Care Homes
              </span>
              <h2 className="site-title">
                Trusted And Experienced Elderly Care Providers
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
                        <img
                          src="/assets/img/icon/money.svg"
                          alt="Affordable"
                        />
                      </div>
                      <div className="choose-item-info">
                        <h4>Affordable Care</h4>
                        <p>
                          We provide affordable senior living options without
                          compromising on quality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img
                          src="/assets/img/icon/team.svg"
                          alt="Experienced Team"
                        />
                      </div>
                      <div className="choose-item-info">
                        <h4>Experienced Care Team</h4>
                        <p>
                          Our dedicated team has years of experience in elderly
                          care, providing comfort and support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img
                          src="/assets/img/icon/care.svg"
                          alt="Quality Care"
                        />
                      </div>
                      <div className="choose-item-info">
                        <h4>Quality Services</h4>
                        <p>
                          We offer a range of services tailored to the needs of
                          senior residents, ensuring their well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose-item text-center">
                      <div className="choose-item-icon d-flex align-items-center justify-content-center">
                        <img
                          src="/assets/img/icon/certified.svg"
                          alt="Certified"
                        />
                      </div>
                      <div className="choose-item-info">
                        <h4>Certified and Licensed</h4>
                        <p>
                          We are fully certified and licensed to provide
                          high-quality care in a safe and supportive
                          environment.
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
              <img src="/assets/img/choose/01.jpg" alt="Elderly Care Home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
