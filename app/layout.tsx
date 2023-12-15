import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import StoreProvider from "./StoreProvider";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyft-Ecomm Store",
  description: "An Ecomm store where you can buy things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={classNames("layout", inter.className)}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
