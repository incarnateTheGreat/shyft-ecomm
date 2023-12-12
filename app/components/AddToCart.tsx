"use client";

import { useAppDispatch } from "../lib/hooks";
import { addToCart } from "../slices/cartSlice";

import ProductList from "./ProductList";

const AddToCart = ({ id, title, price, description, image }: ProductList) => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          addToCart({
            id,
            title,
            price,
            description,
            image,
          })
        )
      }
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
