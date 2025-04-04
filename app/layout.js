import "./globals.css";
import { fontText, fontCursive, fontMenuRow } from "./fonts";
import { LanguageProvider } from "./hooks/useTranslation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import siteConfig from "./config/site";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: siteConfig.name + " - " + siteConfig.slogan,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    title: siteConfig.name + " - " + siteConfig.slogan,
    description: siteConfig.description,
    url: siteConfig.openGraph.url,
    type: siteConfig.openGraph.type,
    images: [
      {
        url: siteConfig.openGraph.image,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: siteConfig.locale,
  },
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      it: siteConfig.domain,
      en: `${siteConfig.domain}/en`,
      es: `${siteConfig.domain}/es`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.defaultLanguage}>
      <body
        className={`${fontCursive.variable} ${fontText.variable} ${fontMenuRow.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
