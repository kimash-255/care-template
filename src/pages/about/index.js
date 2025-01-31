import Head from "next/head";
import Layout from "@/components/layout";
import MainAbout from "@/components/about/mainabout";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Destiny Care Home</title>
        <meta name="description" content="Learn more about Destiny Care Home, our mission, and our commitment to elderly care." />
        <meta name="keywords" content="about Destiny Care Home, elderly care, assisted living" />
        <meta name="author" content="Destiny Care Home" />
        <meta property="og:title" content="About Destiny Care Home" />
        <meta property="og:description" content="Providing high-quality senior care with love and dignity." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <MainAbout />
      </Layout>
    </>
  );
};

export default AboutPage;
