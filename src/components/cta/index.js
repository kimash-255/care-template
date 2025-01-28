import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <div class="cta-area">
      <div class="container">
        <div class="cta-wrap rounded-5 w-100">
          <div class="col-lg-7 mx-auto">
            <div class="cta-content">
              <h1>
                We Are The Best <span>Senior Care</span> Agency With Love
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its desktop
                publishing and web page editors now layout.
              </p>
              <Link href="/contact" class="theme-btn">
                Contact Now<i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cta;
