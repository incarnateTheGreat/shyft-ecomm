"use client";

import handleToast from "learning/app/lib/handleToast";

import { useAppDispatch } from "../../lib/hooks";
import { removeFromCart } from "../../slices/cartSlice";
import ProductList from "../ProductList/ProductList";

const RemoveFromCart = ({ id }: ProductList) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="button"
      onClick={() => {
        dispatch(removeFromCart(id));

        handleToast("You have removed an item to your cart.");
      }}
    >
      Remove
    </button>
  );
};

export default RemoveFromCart;
