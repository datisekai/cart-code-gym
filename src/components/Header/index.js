import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../App.css'

const Header = () => {
  return (
    <div className="bg-red-100 h-[50px] flex justify-center flex-rol items-center">
      <NavLink
        to={"/"}
        activeclassname='active'
        className="flex items-center justify-center text-lg hover:bg-blue-400 transition-all rounded-md px-5 py-1 hover:text-gray-100"
      >
        {" "}
        <i className="fa-solid fa-house"></i>
        <span className="ml-2 font-semibold">Home</span>
      </NavLink>
      <NavLink
        to={"/cart"}
        activeclassname='active'
        className="ml-1 flex items-center justify-center text-lg hover:bg-blue-400 transition-all rounded-md px-5 py-1 hover:text-gray-100"
      >
        {" "}
        <i className="fa-solid fa-cart-shopping"></i>{" "}
        <span className="ml-2 font-semibold">Cart</span>
      </NavLink>
    </div>
  );
};

export default Header;
