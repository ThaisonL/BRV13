import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly ">
      <NavLink
        to="/"
        className="rounded-2xl px-4 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer "
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to="/StocksAndA"
        className="rounded-2xl px-4 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        Stock Charts
      </NavLink>
      <NavLink
        to="/company"
        className="rounded-2xl px-4 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer text"
      >
        {" "}
        Company
      </NavLink>
    </nav>
  );
}

export default Navbar;
