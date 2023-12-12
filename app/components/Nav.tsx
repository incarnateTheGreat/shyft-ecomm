"use client";

import { useAppSelector } from "../lib/hooks";

const Nav = () => {
  const cartItems = useAppSelector((state) => state.cart.totalItems);

  return <nav>Nav. {cartItems}</nav>;
};

export default Nav;
