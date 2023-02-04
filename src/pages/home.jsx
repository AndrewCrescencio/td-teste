import { HomeContent } from "@/components/HomeContent";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          url: "https://raw.githubusercontent.com/AndrewCrescencio/td-teste/main/public/og-image.webp",
          title: "Tropa Digital | Home",
          description: "Teste de Front-end feito por Andrew Crescencio",
          siteName: "Tropa Digital",
        }}
      />
      <HomeContent />
    </>
  );
};

export default Home;
