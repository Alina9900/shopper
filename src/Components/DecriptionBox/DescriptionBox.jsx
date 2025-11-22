import React, { useState } from "react";

const DescriptionBox = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10 border-t pt-8">
      {/* Tabs */}
      <div className="flex gap-10 border-b pb-2">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 text-lg font-medium transition-all duration-200 ${
            activeTab === "description"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 text-lg font-medium transition-all duration-200 ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Reviews (122)
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        {activeTab === "description" ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
            <p>
              {product.description ||
                "This product is made with premium materials ensuring durability, comfort, and modern design. Ideal for casual wear, outings, or daily use."}
            </p>
            <p className="mt-4">
              Its lightweight construction provides breathability, while the
              stylish design makes it a wardrobe essential. Available in
              multiple sizes for a perfect fit.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <p className="font-medium">⭐️⭐️⭐️⭐️☆</p>
                <p className="text-sm text-gray-600">John Doe — 2 days ago</p>
                <p className="mt-1">
                  Great product! Fits perfectly and the material feels very
                  comfortable.
                </p>
              </div>

              <div className="border-b pb-4">
                <p className="font-medium">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="text-sm text-gray-600">Alicia — 1 week ago</p>
                <p className="mt-1">
                  Amazing quality for the price. I loved the color and fabric!
                </p>
              </div>

              <div className="border-b pb-4">
                <p className="font-medium">⭐️⭐️⭐️☆☆</p>
                <p className="text-sm text-gray-600">Sam — 1 month ago</p>
                <p className="mt-1">
                  Decent product, but delivery took a bit longer than expected.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
