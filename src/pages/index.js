import { Login } from "@/components/Login";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Login"
        openGraph={{
          url: "https://raw.githubusercontent.com/AndrewCrescencio/td-teste/main/public/og-image.webp",
          title: "Tropa Digital",
          description: "Teste de Front-end feito por Andrew Crescencio",
          siteName: "Tropa Digital",
        }}
      />
      <main>
        <Login />
      </main>
    </>
  );
}
