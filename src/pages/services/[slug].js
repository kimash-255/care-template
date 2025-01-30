import React from "react";
import { useRouter } from "next/router";
import servicesData from "@/data/services.json"; // Path to the JSON file
import Layout from "@/components/layout";
import Link from "next/link";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the service with the matching slug
  const service = servicesData.find((service) => service.slug === slug);

  // If service is not found (invalid slug), return a message
  if (!service)
    return (
      <Layout>
        <main className="main">
          <div className="container py-120">
            <h2>Service Not Found</h2>
            <p>
              The requested service could not be found. Please check the URL or
              return to the homepage.
            </p>
            <Link href="/" className="btn btn-primary">
              Go Back to Home
            </Link>
          </div>
        </main>
      </Layout>
    );

  return (
    <Layout>
      <main className="main">
        {/* Breadcrumb */}
        <div
          className="site-breadcrumb"
          style={{ background: `url('/assets/img/breadcrumb/01.jpg')` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{service.title}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">{service.title}</li>
            </ul>
          </div>
        </div>

        {/* Service Single */}
        <div className="service-single py-120">
          <div className="container">
            <div className="service-single-wrap">
              <div className="row">
                {/* Sidebar */}
                <div className="col-xl-4 col-lg-4">
                  <div className="service-sidebar">
                    <div className="widget">
                      <h4 className="title">All Services</h4>
                      <div className="category">
                        {servicesData.map((item) => (
                          <Link key={item.slug} href={`/services/${item.slug}`}>
                            <i className="far fa-angle-double-right"></i>{" "}
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-xl-8 col-lg-8">
                  <div className="service-details">
                    {/* Service Image */}
                    <div className="mb-30">
                      <img src={service.image} alt={service.title} />
                    </div>

                    {/* Service Description */}
                    <div className="content">
                      <h3 className="mb-20">{service.title}</h3>
                      <p className="mb-20">{service.description}</p>

                      {/* Additional Images */}
                      <div className="row">
                        <div className="col-md-6 mb-20">
                          <img
                            src="/assets/img/service/01.jpg"
                            alt="Additional"
                          />
                        </div>
                        <div className="col-md-6 mb-20">
                          <img
                            src="/assets/img/service/02.jpg"
                            alt="Additional"
                          />
                        </div>
                      </div>

                      {/* Work Process */}
                      {service.workProcess && (
                        <div className="my-4">
                          <div className="mb-3">
                            <h3 className="mb-3">Our Work Process</h3>
                            <p>
                              Here is how we ensure quality service delivery:
                            </p>
                          </div>
                          <ul className="list">
                            {service.workProcess.map((step, index) => (
                              <li key={index}>
                                <i className="far fa-check-double"></i> {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Why Choose Us */}
                      {service.whyChooseUs && (
                        <div className="mt-4">
                          <h3 className="mb-3">Why Choose Our Services?</h3>
                          <p>{service.whyChooseUs}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Main Content End */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ServiceDetailsPage;
