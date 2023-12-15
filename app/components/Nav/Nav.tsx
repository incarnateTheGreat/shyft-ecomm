"use client";

import CartIcon from "learning/public/icons/cartIcon";
import Link from "next/link";

import { useAppSelector } from "../../lib/hooks";

const Nav = () => {
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" title="ShyftShop">
            ShyftShop
          </Link>
        </li>
        <li>
          <Link href="/cart" title="Cart">
            <CartIcon />
            <div className="cartIcon">{totalItems}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
