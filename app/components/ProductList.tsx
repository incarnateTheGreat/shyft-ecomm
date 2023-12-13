import Image from "next/image";

import AddToCart from "./AddToCart";

type ProductList = {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  };
};

async function loadProducts() {
  const productsResponse: Response = await fetch(
    `https://fakestoreapi.com/products`
  );

  const productsResponseJson: ProductList[] = await productsResponse.json();

  return productsResponseJson;
}

const ProductList = async () => {
  const productsData = await loadProducts();

  if (productsData.length === 0)
    return <div>Sorry. There are no products.</div>;

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-4 md:gap-8">
      {productsData.map((product) => {
        const { id, image, title, description, price } = product;

        return (
          <div key={id} className="flex flex-col">
            <div className="relative bg-white rounded-t h-[220px]">
              <Image fill alt={title} src={image} className="p-6" />
            </div>
            <div className="px-2 py-4 text-white flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-sm py-2">{description}</p>
              <div className="mb-8">${price}</div>
              <AddToCart classnames="mt-auto" {...product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
