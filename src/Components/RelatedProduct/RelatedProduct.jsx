import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext"
import { Link } from "react-router-dom";

const RelatedProducts = ({ category, currentProductId }) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category and exclude the current one
  const related = all_product
    .filter(
      (item) => item.category === category && item.id !== currentProductId
    )
    .slice(0, 4); // show max 4

  return (
    <div className="mt-16 mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        You may also like
      </h2>

      {related.length === 0 ? (
        <p className="text-center text-gray-500">
          No related products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5 md:px-16">
          {related.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.category}</p>
                  <p className="text-lg font-semibold mt-2">₹{item.new_price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
