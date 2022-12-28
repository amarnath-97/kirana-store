import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <header>
      <nav className="w-full flex justify-between p-4 shadow-md bg-yellow-500">
        <div className="logo">
          <NavLink to="/" className={'font-semibold'}> Kirana store</NavLink>
        </div>
        <div className="links">
          <NavLink to="/cart">cart {cart.length}</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
