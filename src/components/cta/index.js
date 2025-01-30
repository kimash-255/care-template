import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <div class="cta-area">
      <div class="container">
        <div class="cta-wrap rounded-5 w-100">
          <div class="col-lg-7 mx-auto">
            <div class="cta-content">
              <h1>We Are The Best Senior Care Agency With Love</h1>
              <p>
                It is a well-known fact that seniors thrive in a supportive
                environment where compassionate care and meaningful engagement
                enhance their quality of life.
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
