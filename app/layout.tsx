import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
