"use client";

import Image from "next/image";
import Link from "next/link";

import cart_icon from "../../public/icons/cart-icon.svg";
import { useAppSelector } from "../lib/hooks";

const Nav = () => {
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <nav>
      <ul className="flex items-center justify-between">
        <li className="text-4xl font-bold tracking-tighter text-white">
          ShyftShop
        </li>
        <li>
          <Link href="/cart" title="Cart" className="relative">
            <Image src={cart_icon} alt="Cart icon" height={40} width={40} />
            <div className="absolute text-xs text-white -top-0 -right-0.5 bg-[#225856] rounded-xl w-5 text-center">
              {totalItems}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
