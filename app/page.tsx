import { Suspense } from "react";

import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <ProductList />
    </Suspense>
  );
}
