"use client";

import Image from "next/image";

import RemoveFromCart from "../components/RemoveFromCart";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  addQuantityFromItem,
  removeQuantityFromItem,
} from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  let total = 0;

  if (Object.keys(cartItems).length === 0)
    return <section>There are no items in your cart.</section>;

  return (
    <section>
      {Object.keys(cartItems).map((key) => {
        const { id, image, title, description, price, quantity } =
          cartItems[key];

        total += price * quantity;

        return (
          <div key={id} className="border flex">
            <div className="w-2/6 h-full">
              <Image width={300} height={300} alt={title} src={image} />
            </div>
            <div className="w-full">
              <h2>{title}</h2>
              <h3>{description}</h3>
              <span>{price}</span>
              <div className="flex">
                <button
                  onClick={() => dispatch(removeQuantityFromItem(id))}
                  className="border w-10 rounded"
                >
                  -
                </button>
                <span className="mx-4">{quantity}</span>
                <button
                  onClick={() => dispatch(addQuantityFromItem(id))}
                  className="border w-10 rounded"
                >
                  +
                </button>
              </div>
              <RemoveFromCart {...cartItems[key]} />
            </div>
          </div>
        );
      })}
      <div>
        <div>Total</div>
        <div>{total}</div>
      </div>
    </section>
  );
};

export default Cart;
