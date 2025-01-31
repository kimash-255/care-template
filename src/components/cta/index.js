import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="cta-wrap rounded-5 w-100">
          <div className="col-lg-7 mx-auto">
            <div className="cta-content text-center">
              <h1>The Best Adult Family Home in Portland</h1>
              <p>
                Our warm and compassionate environment ensures seniors thrive
                with the highest level of care, dignity, and meaningful
                engagement.
              </p>
              <Link href="/contact" className="theme-btn">
                Contact Now <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
