import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // from react-icons
import logo from "../Assets/logo.png";
function Foot() {
  return (
    <footer className="w-full bg-linear-to-r from-pink-200 to-white   py-10">
        <div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shopper Logo" className="w-10 h-10" />
          <h2 className="text-2xl font-bold text-black tracking-wide">SHOPPER</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-lg">
          <li><a href="/company" className="hover:text-white transition">Company</a></li>
          <li><a href="/products" className="hover:text-white transition">Products</a></li>
          <li><a href="/offices" className="hover:text-white transition">Offices</a></li>
          <li><a href="/about" className="hover:text-white transition">About</a></li>
          <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} — All Rights Reserved by{" "}
          <span className="font-semibold text-white">Shopper</span>
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Foot;
