import Layout from "@/components/layout";
import HomeService from "@/components/service";
import Link from "next/link";

const ServicePage = () => {
  return (
    <Layout>
      <div
        className="site-breadcrumb"
        style={{ backgroundImage: `url('assets/img/breadcrumb/01.jpg')` }}
      >
        <div class="container">
          <h2 class="breadcrumb-title">Service Two</h2>
          <ul class="breadcrumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">Service Two</li>
          </ul>
        </div>
      </div>
      <HomeService />
    </Layout>
  );
};
export default ServicePage;
