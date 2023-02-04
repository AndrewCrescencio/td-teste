import { HomeContent } from "@/components/HomeContent";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <HomeContent />
    </>
  );
};

export default Home;
