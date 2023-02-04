import { AppThemeProvider } from "@/styles/AppThemeProvider";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <DefaultSeo
        titleTemplate="Tropa Digital | %s"
        openGraph={{
          url: "https://td-teste.vercel.app/",
          title: "Tropa Digital",
          description: "Teste de Front-end feito por Andrew Crescencio",
          images: [
            {
              url: "https://raw.githubusercontent.com/AndrewCrescencio/td-teste/main/public/og-image.webp",
              width: 1200,
              height: 630,
              alt: "Tropa Digital",
              type: "image/jpeg",
            },
            {
              url: "https://raw.githubusercontent.com/AndrewCrescencio/td-teste/main/public/og-image.webp",
              width: 900,
              height: 800,
              alt: "Tropa Digital",
              type: "image/jpeg",
            },
            {
              url: "https://raw.githubusercontent.com/AndrewCrescencio/td-teste/main/public/og-image.webp",
            },
          ],
          siteName: "SiteName",
        }}
      />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
