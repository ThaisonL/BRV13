import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row justify-center md:justify-end w-full h-16">
      <NavLink
        to="/"
        className="flex items-center justify-center rounded-2xl px-6 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer w-32 text-center font-serif text-black"
      >
        Home
      </NavLink>
      <NavLink
        to="/StocksAndA"
        className="flex items-center justify-center rounded-2xl px-6 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer w-32 text-center font-serif text-black"
      >
        Stock Charts
      </NavLink>
      <NavLink
        to="/company"
        className="flex items-center justify-center rounded-2xl px-6 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer w-32 text-center font-serif text-black"
      >
        Company
      </NavLink>
    </nav>
  );
}

export default Navbar;
