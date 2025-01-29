import Image from "next/image";

const Counter = () => {
  return (
    <div className="counter-area">
      <div className="counter-wrap rounded-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icon/senior-care.svg"
                    alt="Elderly Care"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to="1200"
                    data-speed="3000"
                  >
                    1200
                  </span>
                  <h6 className="title">Elderly Cared For</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icon/happy.svg"
                    alt="Happy Residents"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to="98"
                    data-speed="3000"
                  >
                    98%
                  </span>
                  <h6 className="title">Resident Satisfaction</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icon/volunteer.svg"
                    alt="Dedicated Staff"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to="250"
                    data-speed="3000"
                  >
                    250
                  </span>
                  <h6 className="title">Dedicated Caregivers</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icon/award.svg"
                    alt="Awards Won"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span
                    className="counter"
                    data-count="+"
                    data-to="15"
                    data-speed="3000"
                  >
                    15
                  </span>
                  <h6 className="title">Awards for Excellence</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
