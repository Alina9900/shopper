import React, { useContext, useState } from "react";
import { ShopContext } from "../Components/Context/ShopContext"
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Dump from "../Components/Item/dump";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // State for sorting (optional)
  const [sortOrder, setSortOrder] = useState("default");

  // Filter products by category
  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );

  // Sort products (basic example)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.new_price - b.new_price;
    if (sortOrder === "high-to-low") return b.new_price - a.new_price;
    return 0; // default
  });

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full">
        <img src={props.banner} alt="Category Banner" className="w-full h-auto" />
      </div>

      {/* Filter Bar */}
      <div className="flex justify-between items-center px-10 py-5 border-b">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Showing {sortedProducts.length}</span>{" "}
          products in {props.category}
        </p>

        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-700 text-sm">Sort by</span>
          <img src={dropdown_icon} alt="Sort dropdown" className="w-4 h-4" />

          <select
            className="border rounded-md px-2 py-1 text-sm"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-10 py-8">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((item, index) => <Dump key={index} {...item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
