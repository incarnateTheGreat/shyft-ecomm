import AddToCart from "../AddToCart/AddToCart";
import ProductImage from "../ProductImage/ProductImage";

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
  try {
    const productsResponse: Response = await fetch(
      `https://fakestoreapi.com/products`
    );

    const productsResponseJson: ProductList[] = await productsResponse.json();

    return productsResponseJson;
  } catch (err) {
    return [];
  }
}

const ProductList = async () => {
  const productsData = await loadProducts();

  if (productsData.length === 0)
    return <div>Sorry. There are no available products.</div>;

  return (
    <div className="productList">
      {productsData.map((product) => {
        const { id, image, title, description, price } = product;

        return (
          <div key={id} className="container">
            <ProductImage title={title} src={image} />
            <div className="productContents">
              <h2 className="breakWord">{title}</h2>
              <h3>${price.toFixed(2)}</h3>
              <p className="breakWord">{description}</p>
              <AddToCart classnames="addButton" {...product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
