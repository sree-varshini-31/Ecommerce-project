import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo-black.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white text-black flex justify-between items-center px-10 py-6 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-6 ml-10">
        <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
      </div>

      {/* Menu Links */}
      <ul className="flex space-x-8 text-lg font-semibold font-[Poppins] text-black">
  {[
     { name: "Home", path: "/home" },
    { name: "Bestsellers", path: "/bestsellers" },
    { name: "Skin Care", path: "/skincare" },
    { name: "Hair Care", path: "/haircare" },
    { name: "Makeup", path: "/makeup" },
    { name: "Kits & Combos", path: "/kits-combos" },
    { name: "Fragrances", path: "/fragrances" },
  ].map((item) => (
    <li
      key={item.name}
      className="cursor-pointer hover:text-purple-600 transition duration-300"
    >
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
</ul>

      {/* Search Bar + Icons Section */}
      <div className="flex items-center space-x-5 text-xl">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm w-32 md:w-48"
          />
          <i className="fa-solid fa-magnifying-glass text-gray-500 ml-2"></i>
        </div>

        {/* User Icon */}
        <Link to="/login">
          <i className="fa-regular fa-user cursor-pointer text-xl hover:text-purple-600"></i>
        </Link>

        {/* Cart Icon */}
        <div className="relative">
          <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
