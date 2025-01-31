import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import HomeAbout from "@/components/about";
import Counter from "@/components/counter";
import HomeService from "@/components/service";
import Choose from "@/components/choose";
import Cta from "@/components/cta";
import Video from "@/components/video";

const Home = () => {
  return (
    <>
      <Head>
        <title>Destiny Care Home | Best Elderly Care</title>
        <meta name="description" content="Providing the best elderly care services at Destiny Care Home. Where Care Meets Comfort." />
        <meta name="keywords" content="elderly care, senior home, assisted living, Destiny Care Home" />
        <meta name="author" content="Destiny Care Home" />
        <meta property="og:title" content="Destiny Care Home | Best Elderly Care" />
        <meta property="og:description" content="We offer quality care for seniors in a safe and comfortable environment." />
        <meta property="og:image" content="https://www.destinycarehome.org/assets/img/service/01.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <Hero />
        <Feature />
        <HomeAbout />
        <Counter />
        <HomeService />
        <Choose />
        <Cta />
        <Video />
      </Layout>
    </>
  );
};

export default Home;
