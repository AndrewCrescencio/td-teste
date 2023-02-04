import { Login } from "@/components/Login";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="Login" />
      <main>
        <Login />
      </main>
    </>
  );
}
