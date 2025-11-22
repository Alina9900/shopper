import React from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import {useContext} from "react"
import { ShopContext } from "../Context/ShopContext"
const ProductDisplay = ({ product }) => {
   const { addToCart } = useContext(ShopContext); 
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-8 bg-white rounded-2xl shadow-lg">
      {/* ---------- Left Section ---------- */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        {/* Small Thumbnails */}
        <div className="flex lg:flex-col gap-3 justify-center">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover rounded-lg border border-gray-200 hover:border-red-500 cursor-pointer transition"
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="flex justify-center items-center flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* ---------- Right Section ---------- */}
      <div className="flex flex-col flex-1 gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
          ))}
          <img src={star_dull_icon} alt="star" className="w-5 h-5" />
          <p className="text-gray-600 text-sm ml-1">(22 reviews)</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mt-2">
          <p className="text-gray-400 line-through text-lg">
            ${product.old_price}
          </p>
          <p className="text-red-600 font-bold text-2xl">
            ${product.new_price}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          commodi, amet voluptate maiores dolorem pariatur reiciendis
          dignissimos. Consequuntur magni aspernatur dolore, molestiae natus
          repudiandae.
        </p>

        {/* Size Selection */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Select Size:</h2>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:border-red-500 hover:bg-red-50 transition"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-transform hover:scale-105 w-44" onClick={()=>addToCart(product.id)}>
          Add to Cart
        </button>

        {/* Category Info */}
        <p className="text-gray-500 mt-4 text-sm">
          <span className="font-semibold text-gray-700">Category:</span>{" "}
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
