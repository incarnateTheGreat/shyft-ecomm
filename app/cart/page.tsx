"use client";

import { Suspense } from "react";

import ProductImage from "../components/ProductImage/ProductImage";
import RemoveFromCart from "../components/RemoveFromCart/RemoveFromCart";
import handleToast from "../lib/handleToast";
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
      <section className="cart">
        <div className="cartItems">
          {Object.keys(cartItems).map((key) => {
            const { id, image, title, price, quantity } = cartItems[key];

            total += price * quantity;

            return (
              <div key={id} className="cartItem">
                <ProductImage title={title} src={image} />
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
            onClick={() => {
              dispatch(clearAllFromCart());

              handleToast("You have cleared your cart.");
            }}
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
