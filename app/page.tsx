import { Suspense } from "react";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductList />
      </main>
    </Suspense>
  );
}
