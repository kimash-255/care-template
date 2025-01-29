import React from "react";
import Link from "next/link";
import servicesData from "@/data/services.json"; // Assuming this is the correct path to your services data

const HomeService = () => {
  // Select the top 6 services from the JSON data
  const topServices = servicesData.slice(0, 6);

  return (
    <div className="service-area2 py-100">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="far fa-house-chimney-heart"></i>Our Services
              </span>
              <h2 className="site-title">
                We Believe Everyone Deserves Our Quality Care
              </h2>
            </div>
          </div>
        </div>

        {/* Service Items */}
        <div className="row g-4">
          {topServices.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.slug}>
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={`${0.25 * (index + 1)}s`}
              >
                <span className="count">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Service Image */}
                <div className="service-img">
                  <img
                    src={`/assets/img/service/${
                      index === 4 || index === 5
                        ? "01"
                        : String(index + 1).padStart(2, "0")
                    }.jpg`}
                    alt={service.title}
                  />
                </div>
                {/* Service Info */}
                <div className="service-info">
                  <div className="service-icon">
                    <img
                      src={`/assets/img/icon/${
                        [
                          "living",
                          "nurse",
                          "health-care",
                          "residential",
                          "residential",
                          "personal",
                        ][index % 6]
                      }.svg`}
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h4>
                    <p className="service-text">
                      {service.description.substring(0, 80)}...
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="theme-btn"
                    >
                      Details <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
