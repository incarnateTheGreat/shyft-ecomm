import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
          <header className="py-2 mb-2 sticky top-0 bg-[var(--background-start)] z-50">
            <Nav />
          </header>
          <main className="flex">{children}</main>
          <footer className="py-2 font-semibold border-t text-gray-50 border-t-gray-50 mt-auto">
            &copy; {new Date().getFullYear()} ShyftShop Inc.
          </footer>
        </body>
      </StoreProvider>
    </html>
  );
}
