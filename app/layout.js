import "./globals.css";
import { fontText, fontCursive, fontMenuRow } from "./fonts";
import { LanguageProvider } from "./hooks/useTranslation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import siteConfig from "./config/site";
import ScrollToTop from "./components/ScrollToTop";
import SeoSchema from "./components/SeoSchema";
import Script from "next/script";

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
      <head>
        <SeoSchema />

        {/* Verifica Search Console */}
        <meta
          name="google-site-verification"
          content="w844wFy3UC767SOXheh-FcB0lpLU3JAjkpUNb7bMAI0"
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LNLRN84P6C"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LNLRN84P6C');
    `}
        </Script>
      </head>

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
