import React from "react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";

const Navbar: React.FC<NavbarProps> = ({ title, menus }) => {


  return (
    <nav className="flex bg-slate-50">
      <div className="flex flex-row  mx-4 md:mx-8 w-full">
        <div className="">
          <h5 className="text-2xl md:text-base py-4">{title}</h5>
        </div>
        <div className="ml-auto">
          <ul className="flex flex-row">
            {menus.map((item: any, i: number) => (
              <li key={i} className="p-4 cursor-pointer">
                <Link href={item.link}>{item.menu}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
