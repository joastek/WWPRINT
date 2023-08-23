"use client";
import NavBar from "@/components/NavBars/NavBar";
import "../styles/globals.scss";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/components/darkMode";
import GoogleAnalytics from "@/components/GoogleAnalytcis";
import { useState, useEffect } from "react";
import FacebookMsg from "@/components/FacebookMsg";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const metadata = {
  title: "WWPrint - Agencja reklamowa- Drukarnia",
  description:
    "Profesjonalne naklejki do ścian, mebli i okien, wykonane z dbałością o detale i estetykę. Nasze unikale wzory i precyzja wykonania, wnętrza nabiorą stylowego i efektownego charakteru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <html lang="pl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="vz7vDaSgtxvNHGqmSQiQiUFn8krabemofn7wov3w_Sg"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <GoogleAnalytics GA_MEASUREMENT_ID="G-7NP54G6NG0" />
      <body className={inter.className}>
        {" "}
        <div>
          {domLoaded && (
            <Providers>
              {" "}
              <NavBar />
              {children} <Footer />
              <FacebookMsg />
            </Providers>
          )}
        </div>
      </body>
    </html>
  );
}
