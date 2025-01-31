import Head from "next/head";
import Layout from "@/components/layout";
import HomeService from "@/components/service";
import Link from "next/link";

const ServicePage = () => {
  return (
    <>
      <Head>
        <title>Our Services | Destiny Care Home</title>
        <meta name="description" content="Discover the range of elderly care services offered by Destiny Care Home." />
        <meta name="keywords" content="elderly care services, assisted living, senior home care" />
        <meta property="og:title" content="Our Services | Destiny Care Home" />
        <meta property="og:description" content="Providing professional and compassionate care for seniors." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url('assets/img/breadcrumb/01.jpg')` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Service</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">Service</li>
            </ul>
          </div>
        </div>
        <HomeService />
      </Layout>
    </>
  );
};

export default ServicePage;
