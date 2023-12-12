"use client";

import Link from "next/link";

import { useAppSelector } from "../lib/hooks";

const Nav = () => {
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return <nav>
    <ul>
        <li>
            <Link href="/cart">Cart</Link>
        </li>
        <li>{totalItems}</li>
    </ul>
  </nav>;
};

export default Nav;
