import Head from "next/head";
import Layout from "@/components/layout";
import MainContact from "@/components/contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Destiny Care Home</title>
        <meta
          name="description"
          content="Get in touch with Destiny Care Home for inquiries, admissions, and more."
        />
        <meta
          name="keywords"
          content="contact Destiny Care Home, elderly care inquiry, senior home contact"
        />
        <meta property="og:title" content="Contact Us | Destiny Care Home" />
        <meta
          property="og:description"
          content="We are here to assist you with all your elderly care needs."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <MainContact />
      </Layout>
    </>
  );
};

export default ContactPage;
