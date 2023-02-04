import { AppThemeProvider } from "@/styles/AppThemeProvider";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <DefaultSeo
        titleTemplate="Tropa Digital | %s"
        openGraph={{
          url: "",
          title: "Tropa Digital",
          description: "Teste de Front-end feito por Andrew Crescencio",
          siteName: "Tropa Digital",
        }}
      />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
