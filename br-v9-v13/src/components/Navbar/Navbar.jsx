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
        home
      </NavLink>
      <NavLink
        to="/StocksAndA"
        className="rounded-2xl px-4 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        Playlists
      </NavLink>
      <NavLink
        to="/company"
        className="rounded-2xl px-4 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        {" "}
        Company
      </NavLink>
      <NavLink
        to="/contact"
        className="rounded-2xl px-4 py-3 m-2 bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        {" "}
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
