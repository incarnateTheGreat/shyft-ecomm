"use client";

import CartIcon from "learning/public/icons/cartIcon";
import Link from "next/link";

import { useAppSelector } from "../lib/hooks";

const Nav = () => {
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <nav>
      <ul className="flex items-center justify-between">
        <li className="text-4xl font-bold tracking-tighter text-white">
          <Link href="/" title="ShyftShop">
            ShyftShop
          </Link>
        </li>
        <li>
          <Link href="/cart" title="Cart" className="relative">
            <CartIcon />
            <div className="absolute text-xs text-white -top-0 -right-0.5 bg-[var(--indicator)] rounded-xl w-5 text-center">
              {totalItems}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
