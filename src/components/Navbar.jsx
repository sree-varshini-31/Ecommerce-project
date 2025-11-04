import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-black flex justify-between items-center px-8 py-6 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* <img src="../assets/"alt="logo"
          className="w-16 h-auto"
        /> */}
        <img src="../assets/luv1.jpg" alt="" />
      </div>

      {/* Menu Links */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-gray-500 cursor-pointer">Bestsellers</li>
        <li className="hover:text-gray-500 cursor-pointer">Skin Care</li>
        <li className="hover:text-gray-500 cursor-pointer">Hair Care</li>
        <li className="hover:text-gray-500 cursor-pointer">Makeup</li>
        <li className="hover:text-gray-500 cursor-pointer">Kits & Combos</li>
        <li className="hover:text-gray-500 cursor-pointer">Collections</li>
        <li className="hover:text-gray-500 cursor-pointer">Fragrances</li>
        <li className="hover:text-gray-500 cursor-pointer">Gifting</li>
        <li className="hover:text-gray-500 cursor-pointer">More</li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-5 text-xl">
        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        <i className="fa-regular fa-user cursor-pointer"></i>
        <i className="fa-solid fa-truck cursor-pointer"></i>
        <div className="relative">
          <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
