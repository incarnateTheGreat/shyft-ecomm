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
    <div>
      {productsData.map((product) => {
        const { id, image, title, description, price } = product;

        return (
          <div key={id} className="border flex">
            <div className="w-2/6 h-full">
              <Image width={300} height={300} alt={title} src={image} />
            </div>
            <div className="w-full">
              <h2>{title}</h2>
              <h3>{description}</h3>
              <h4>{price}</h4>
              <AddToCart {...product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
