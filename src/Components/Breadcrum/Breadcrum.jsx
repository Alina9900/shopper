import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = ({ product }) => {
  return (
    <div className="text-gray-600 text-sm mb-6">
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      /{" "}
      <Link to={`/${product.category}`} className="hover:underline capitalize">
        {product.category}
      </Link>{" "}
      / <span className="font-semibold text-gray-900">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
