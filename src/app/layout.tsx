import NavBar from "@/components/NavBars/NavBar";
import "../styles/globals.scss";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "WWPrint - Producent profesjonalnych naklejek",
  description:
    "Oferujemy profesjonalne naklejki do ścian, okien i mebli, wykonane z dbałością o detale i estetykę. Dzięki naszym unikalnym wzorom i precyzji wykonania, wnętrza nabiorą stylowego i efektownego charakteru",
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
      </Head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
