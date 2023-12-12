"use client";

import { useAppSelector } from "../lib/hooks";

const Nav = () => {
  const cartItems = useAppSelector(
    (state) => Object.keys(state.cart.items).length
  );

  return <nav>Nav. {cartItems}</nav>;
};

export default Nav;
