"use client";

import { Suspense } from "react";
import Image from "next/image";

import RemoveFromCart from "../components/RemoveFromCart/RemoveFromCart";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  addQuantityFromItem,
  clearAllFromCart,
  removeQuantityFromItem,
} from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  let total = 0;

  if (Object.keys(cartItems).length === 0)
    return (
      <section className="suspense">There are no items in your cart.</section>
    );

  return (
    <Suspense fallback={<h2 className="suspense">Loading Cart...</h2>}>
      <section>
        <div className="cartItems">
          {Object.keys(cartItems).map((key) => {
            const { id, image, title, price, quantity } = cartItems[key];

            total += price * quantity;

            return (
              <div key={id} className="cartItem">
                <div className="imageContainer">
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    width="0"
                    height="0"
                    alt={title}
                    src={image}
                  />
                </div>
                <div className="cartContents">
                  <h2>{title}</h2>
                  <div>${price.toFixed(2)}</div>
                  <div className="addRemoveButtons">
                    <button
                      disabled={quantity === 1}
                      onClick={() => dispatch(removeQuantityFromItem(id))}
                    >
                      -
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={() => dispatch(addQuantityFromItem(id))}>
                      +
                    </button>
                  </div>
                  <RemoveFromCart {...cartItems[key]} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <button
            className="button"
            onClick={() => dispatch(clearAllFromCart())}
          >
            Clear Cart
          </button>
          <div className="label">Total</div>
          <div>${total.toFixed(2)}</div>
        </div>
      </section>
    </Suspense>
  );
};

export default Cart;
