import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const metadata: Metadata = {
  title: "NFTVERSE - Explore and Trade Digital Assets",
  description:
    "NFTVERSE is the ultimate platform to discover, buy, and sell NFTs. Explore trending collections, digital art, and unique digital assets in a vibrant marketplace.",
  keywords:
    "NFT, marketplace, digital assets, buy NFTs, sell NFTs, blockchain, crypto art, trending collections",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${lato.className} bg-black text-white scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
