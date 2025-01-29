import Image from "next/image";

const Feature = () => {
  return (
    <div className="feature-area2 pt-100">
      <div className="container">
        <div className="feature-wrapper">
          <div className="row g-4">
            {/* Dedicated Team */}
            <div className="col-md-6 col-lg-3">
              <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
                <span className="count">01</span>
                <div className="feature-icon">
                  <Image
                    src="/assets/img/icon/nurse.svg"
                    alt="Dedicated Team"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="feature-content">
                  <h4>Compassionate Caregivers</h4>
                  <p>
                    Our trained and experienced caregivers provide
                    compassionate, 24/7 support to ensure comfort and well-being
                    for every resident.
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted Facility */}
            <div className="col-md-6 col-lg-3">
              <div className="feature-item wow fadeInUp" data-wow-delay=".50s">
                <span className="count">02</span>
                <div className="feature-icon">
                  <Image
                    src="/assets/img/icon/institute.svg"
                    alt="Trusted Facility"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="feature-content">
                  <h4>Trusted & Accredited</h4>
                  <p>
                    Our facility is certified and recognized for its
                    high-quality elderly care, ensuring safety, dignity, and
                    respect for all residents.
                  </p>
                </div>
              </div>
            </div>

            {/* Affordable Care */}
            <div className="col-md-6 col-lg-3">
              <div className="feature-item wow fadeInUp" data-wow-delay=".75s">
                <span className="count">03</span>
                <div className="feature-icon">
                  <Image
                    src="/assets/img/icon/money.svg"
                    alt="Affordable Care"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="feature-content">
                  <h4>Affordable & Transparent</h4>
                  <p>
                    We offer flexible pricing plans with no hidden costs, making
                    high-quality elderly care accessible to families of all
                    backgrounds.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="col-md-6 col-lg-3">
              <div className="feature-item wow fadeInUp" data-wow-delay="1s">
                <span className="count">04</span>
                <div className="feature-icon">
                  <Image
                    src="/assets/img/icon/support.svg"
                    alt="Emergency Support"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="feature-content">
                  <h4>24/7 Medical Assistance</h4>
                  <p>
                    Our medical team is available around the clock to handle
                    emergencies and provide prompt care whenever needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
