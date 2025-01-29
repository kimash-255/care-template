import HomeAbout from "@/components/about";
import Blog from "@/components/blog";
import Choose from "@/components/choose";
import Counter from "@/components/counter";
import Cta from "@/components/cta";
import Donation from "@/components/donation";
import Event from "@/components/event";
import Feature from "@/components/feature";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Partner from "@/components/partner";
import Pricing from "@/components/pricing";
import HomeService from "@/components/service";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Video from "@/components/video";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Feature />
      <HomeAbout />
      <Counter />
      <HomeService />
      <Cta />
      <Choose />
      {/* <Pricing /> */}
      <Video />
      {/* <Gallery /> */}
      {/* <Donation /> */}
      {/* <Team /> */}
      {/* <Event /> */}
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      {/* <Partner /> */}
    </Layout>
  );
};

export default Home;
