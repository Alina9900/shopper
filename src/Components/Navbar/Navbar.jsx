import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../Context/ShopContext"; // ✅ import context

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext); // ✅ use cart items from context
  const links = ["Shop", "Men", "Women", "Kids"];

  // ✅ Calculate total items in the cart
  const totalItems = Object.values(cartItems).reduce((sum, itemCount) => sum + itemCount, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      {/* Left Section - Logo + Name */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        <h2 className="font-bold text-2xl">SHOPPER</h2>
      </div>

      {/* Middle Section - Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 font-medium">
        {links.map((link) => (
          <li key={link} onClick={() => setMenu(link.toLowerCase())}>
            <Link
              to={`/${link.toLowerCase()}`}
              className={`transition-all duration-300 ${
                menu === link.toLowerCase()
                  ? "text-red-500 font-semibold"
                  : "hover:text-red-500"
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Section - Desktop */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/login">
          <button className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition duration-300">
            Login
          </button>
        </Link>

        {/* ✅ Cart with dynamic count */}
        <div className="relative cursor-pointer">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Right Section */}
      <div className="md:hidden flex items-center space-x-5">
        <div className="relative cursor-pointer">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger / Close Icon */}
        <div
          className="text-2xl cursor-pointer text-gray-800 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180 scale-90" : "rotate-0 scale-100"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-2/3 bg-white shadow-2xl transform transition-transform duration-700 ease-in-out z-50 will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold">SHOPPER</h2>
          <FaTimes
            className="text-2xl cursor-pointer text-gray-700"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col items-start px-6 py-6 space-y-6 text-lg font-medium text-gray-700">
          {links.map((link) => (
            <li key={link} onClick={() => setIsOpen(false)}>
              <Link
                to={`/${link.toLowerCase()}`}
                className="hover:text-red-500 transition-colors duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
          <Link to="/login" className="w-full">
            <button className="w-25 border border-gray-700 py-2 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
              Login
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
