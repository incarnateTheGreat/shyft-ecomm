"use client";

import { Suspense } from "react";
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
    <Suspense fallback={<h2>Loading Cart...</h2>}>
      <section className="flex md:flex-row flex-col md:justify-between md:w-full">
        <div className="flex flex-col w-full pb-4 md:pb-0 md:w-4/5 md:border-r md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300">
          {Object.keys(cartItems).map((key) => {
            const { id, image, title, price, quantity } = cartItems[key];

            total += price * quantity;

            return (
              <div key={id} className="flex my-2">
                <div className="relative bg-white rounded-t w-1/2 md:w-32 h-full">
                  <Image fill alt={title} src={image} className="p-6" />
                </div>
                <div className="w-full px-4 text-white">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <div>${price}</div>
                  <div className="flex my-2">
                    <button
                      onClick={() => dispatch(removeQuantityFromItem(id))}
                      className="border w-10 rounded bg-white text-black"
                    >
                      -
                    </button>
                    <span className="mx-4">{quantity}</span>
                    <button
                      onClick={() => dispatch(addQuantityFromItem(id))}
                      className="border w-10 rounded bg-white text-black"
                    >
                      +
                    </button>
                  </div>
                  <RemoveFromCart {...cartItems[key]} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-white text-right mt-2 md:mt-0">
          <div className="text-xl font-semibold">Total</div>
          <div>${total.toFixed(2)}</div>
        </div>
      </section>
    </Suspense>
  );
};

export default Cart;
