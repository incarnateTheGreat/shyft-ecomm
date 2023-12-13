import { Suspense } from "react";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className="max-w-[1200px] flex flex-col px-8 mx-auto">
        <header className="py-2 mb-2 sticky top-0 bg-[var(--background-start)] z-50">
          <Nav />
        </header>
        <main className="flex">
          <ProductList />
        </main>
        <footer className="py-8 font-semibold">
          &copy; {new Date().getFullYear()} ShyftShop Inc.
        </footer>
      </div>
    </Suspense>
  );
}
