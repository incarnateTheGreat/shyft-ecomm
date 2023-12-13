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
    <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-4 md:gap-8 mb-4">
      {productsData.map((product) => {
        const { id, image, title, description, price } = product;

        return (
          <div key={id} className="flex flex-col h-[700px] md:h-auto">
            <div className="bg-white relative rounded-t h-full w-auto md:h-[500px] flex flex-col items-center justify-center">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                width="0"
                height="0"
                className="w-full h-auto p-6"
                alt={title}
                src={image}
              />
            </div>
            <div className="px-2 py-4 text-white flex-1 flex flex-col basis-1/2">
              <h2 className="text-lg md:text-2xl font-semibold breakWord">
                {title}
              </h2>
              <p className="text-sm py-2 hidden md:flex breakWord">
                {description}
              </p>
              <div className="mb-8 text-sm md:text-md">${price}</div>
              <AddToCart classnames="mt-auto addButton" {...product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
