import Image from "next/image";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="counter-area">
      <div className="counter-wrap rounded-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box text-center">
                <div className="icon flex justify-center items-center h-16 mb-4">
                  <Image
                    src="/assets/img/icon/senior-care.svg"
                    alt="Elderly Care"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="counter">
                    <CountUp start={0} end={50} duration={5} />
                  </span>
                  <h6 className="title">Elderly Cared For</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="counter-box text-center">
                <div className="icon flex justify-center items-center h-16 mb-4">
                  <Image
                    src="/assets/img/icon/happy.svg"
                    alt="Happy Residents"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="counter">
                    <CountUp start={0} end={98} duration={5} />%
                  </span>
                  <h6 className="title">Resident Satisfaction</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="counter-box text-center">
                <div className="icon flex justify-center items-center h-16 mb-4">
                  <Image
                    src="/assets/img/icon/volunteer.svg"
                    alt="Dedicated Staff"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="counter">
                    <CountUp start={0} end={10} duration={5} />
                  </span>
                  <h6 className="title">Dedicated Caregivers</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="counter-box text-center">
                <div className="icon flex justify-center items-center h-16 mb-4">
                  <Image
                    src="/assets/img/icon/award.svg"
                    alt="Awards Won"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="counter">
                    <CountUp start={0} end={15} duration={5} />
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
