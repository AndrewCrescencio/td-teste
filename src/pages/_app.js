import { AppThemeProvider } from "@/styles/AppThemeProvider";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <DefaultSeo titleTemplate="Tropa Digital | %s" />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
