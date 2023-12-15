"use client";

import classNames from "classnames";
import handleToast from "learning/app/lib/handleToast";

import { useAppDispatch } from "../../lib/hooks";
import { addToCart } from "../../slices/cartSlice";
import ProductList from "../ProductList/ProductList";

type AddToCardProps = ProductList & {
  classnames?: string;
};

const AddToCart = ({
  id,
  title,
  price,
  description,
  image,
  classnames = "",
}: AddToCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={classNames(classnames, "button")}
      onClick={() => {
        dispatch(
          addToCart({
            id,
            title,
            price,
            description,
            image,
          })
        );

        handleToast("You have added an item to the cart");
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
