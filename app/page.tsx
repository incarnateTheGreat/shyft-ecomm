import { Suspense } from "react";

import ProductList from "./components/ProductList/ProductList";

export default function Home() {
  return (
    <Suspense fallback={<h2 className="suspense">Loading...</h2>}>
      <ProductList />
    </Suspense>
  );
}
