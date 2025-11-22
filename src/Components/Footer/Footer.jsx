import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const data = {
    email: "support@shopper.com",
    phone: "+91 98765 43210",
    address: "123 Fashion Street, New Delhi, India",
  };

  return (
    <footer className="bg-linear-to-r from-blue-900 via-gray-900 to-black text-gray-200 py-12 px-6 md:px-16">
      {/* Upper Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        
        {/* Brand / About */}
        <div className="space-y-4">
          <h3 className="font-bold text-2xl text-white/90">Shopper</h3>
          <p className="text-gray-300">
            Shopper is your go-to destination for the latest trends in fashion, footwear, and accessories.
            We bring style and comfort right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl text-white/90">Quick Links</h3>
          <ul className="space-y-2">
            {["Shop", "Men", "Women", "Kids"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300 ease-in-out hover:scale-105 inline-block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl text-white/90">Contact</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Address: {data.address}</p>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl text-white/90">Follow Us</h3>
          <div className="flex flex-wrap justify-start gap-4 mt-2">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition transform hover:scale-110 shadow-lg"
              >
                <Icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-10">
        <h3 className="font-bold text-lg text-white/90 mb-3">Subscribe to our Newsletter</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md flex-1 text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom / Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-left text-gray-400 text-sm">
        © {new Date().getFullYear()} Shopper. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
