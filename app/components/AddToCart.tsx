"use client";

import classNames from "classnames";

import { useAppDispatch } from "../lib/hooks";
import { addToCart } from "../slices/cartSlice";

import ProductList from "./ProductList";

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
      className={classNames(
        "bg-[#215a58] p-2 rounded w-28 hover:bg-[#163837]",
        classnames
      )}
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
      Add
    </button>
  );
};

export default AddToCart;
