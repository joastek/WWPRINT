import NavBar from "@/components/NavBars/NavBar";
import "../styles/globals.scss";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/components/darkMode";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "WWPrint - Agencja reklamowa - Drukarnia",
  description:
    "Profesjonalne naklejki do ścian, mebli i okien, wykonane z dbałością o detale i estetykę. Nasze unikale wzory i precyzja wykonania, wnętrza nabiorą stylowego i efektownego charakteru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        {/* <meta
          name="google-site-verification"
          content="vz7vDaSgtxvNHGqmSQiQiUFn8krabemofn7wov3w_Sg"
        /> */}
        <script>{`window.dataLayer = window.dataLayer || [];`}</script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11277230973"
        ></script>
        <script>
          {`
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'AW-11277230973');
          `}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <Providers>
        <body className={inter.className}>
          <NavBar />
          <div>{children}</div>
          <Footer />
        </body>{" "}
      </Providers>
    </html>
  );
}
