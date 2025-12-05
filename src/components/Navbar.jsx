// src/components/Navbar.jsx (replace your current file)
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo-black.jpg";
import { useCart } from "./CartContext";
import { useAuth } from "../components/AuthContext"; // Add this import

const Navbar = () => {
  const { cartCount } = useCart();
  const { user } = useAuth(); // Add this to get user state
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const lower = searchText.toLowerCase();

    // Hair Care
    if (
      lower.includes("hair") ||
      lower.includes("shampoo") ||
      lower.includes("conditioner") ||
      lower.includes("haircare") ||
      lower.includes("oil") ||
      lower.includes("hair serum") ||
      lower.includes("hair mask")
    ) {
      navigate("/haircare");
      return;
    }

    // Skin Care
    if (
      lower.includes("skin") ||
      lower.includes("skincare") ||
      lower.includes("facewash") ||
      lower.includes("moisturizer") ||
      lower.includes("cleanser") ||
      lower.includes("face serum") ||
      lower.includes("sunscreen") ||
      lower.includes("face mask") ||
      lower.includes("lipbalm") ||
      lower.includes("toner")
    ) {
      navigate("/skincare");
      return;
    }

    // Makeup
    if (
      lower.includes("makeup") ||
      lower.includes("lipstick") ||
      lower.includes("foundation") ||
      lower.includes("eyeliner") ||
      lower.includes("mascara") ||
      lower.includes("highlighter") ||
      lower.includes("compact powder")
    ) {
      navigate("/makeup");
      return;
    }

    // Fragrances
    if (
      lower.includes("perfume") ||
      lower.includes("fragrance") ||
      lower.includes("deo") ||
      lower.includes("body spray")
    ) {
      navigate("/fragrances");
      return;
    }

    // Kits & Combos
    if (
      lower.includes("combo") ||
      lower.includes("kit") ||
      lower.includes("sets")
    ) {
      navigate("/kits-combos");
      return;
    }

    setSearchText("");
  };

  // Handle user icon/avatar click
  const handleUserClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white text-black flex justify-between items-center px-10 py-5 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-6 ml-10">
        <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
      </div>

      {/* Menu */}
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

      {/* Search + User Avatar/Icon + Cart */}
      <div className="flex items-center space-x-5 text-xl">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none text-sm w-32 md:w-48"
          />
          <i
            className="fa-solid fa-magnifying-glass text-gray-500 ml-2 cursor-pointer"
            onClick={handleSearch}
          ></i>
        </div>

        {/* User Icon or Avatar */}
        <button onClick={handleUserClick} className="relative">
          {user ? (
            // Avatar when logged in
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            // User icon when not logged in
            <i className="fa-regular fa-user cursor-pointer text-xl hover:text-purple-600"></i>
          )}
        </button>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <i className="fa-solid fa-cart-shopping cursor-pointer text-xl hover:text-purple-600"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
