import Link from "next/link";
import Image from "next/image";

const Counter = () => {
  return (
    <div class="counter-area">
      <div class="counter-wrap rounded-0">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <img src="/assets/img/icon/senior-care.svg" alt="" />
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="6560"
                    data-speed="3000"
                  >
                    6560
                  </span>
                  <h6 class="title">+ Projects Done</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <img src="/assets/img/icon/happy.svg" alt="" />
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="7320"
                    data-speed="3000"
                  >
                    7320
                  </span>
                  <h6 class="title">+ Happy Clients</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <img src="/assets/img/icon/volunteer.svg" alt="" />
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="1500"
                    data-speed="3000"
                  >
                    1500
                  </span>
                  <h6 class="title">+ Our Volunteer</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <img src="/assets/img/icon/award.svg" alt="" />
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="50"
                    data-speed="3000"
                  >
                    50
                  </span>
                  <h6 class="title">+ Win Awards</h6>
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
