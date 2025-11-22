import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext"; // ✅ import context

const Dump = ({ id, name, image, old_price, new_price }) => {
  const { addToCart } = useContext(ShopContext); // ✅ use context

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 overflow-hidden flex flex-col items-center p-4 hover:scale-105">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name || "Product Image"}
          onClick={() => window.scrollTo(0, 0)}
          className="w-48 h-60 object-cover rounded-lg mb-4"
        />
      </Link>

      <h2 className="font-semibold text-lg text-center mb-2">{name}</h2>
      <div className="flex items-center justify-center gap-2 mb-3">
        <p className="text-gray-400 line-through">${old_price}</p>
        <p className="text-red-600 font-bold">${new_price}</p>
      </div>

      <button
        onClick={() => addToCart(id)} // ✅ now functional
        className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors duration-200"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Dump;
