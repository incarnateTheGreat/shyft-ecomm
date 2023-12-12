"use client";

import { useAppDispatch } from "../lib/hooks";
import { removeFromCart } from "../slices/cartSlice";

import ProductList from "./ProductList";

const RemoveFromCart = ({ id }: ProductList) => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>;
};

export default RemoveFromCart;
