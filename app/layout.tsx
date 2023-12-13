import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import StoreProvider from "./StoreProvider";

import "./globals.css";

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
        <body
          className={classNames(
            "max-w-[1200px] flex flex-col px-8 mx-auto h-screen",
            inter.className
          )}
        >
          <Header />
          <main className="flex">{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
