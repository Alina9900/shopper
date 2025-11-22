import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext"

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Your Shopping Cart</h2>

      {/* If cart is empty */}
      {Object.values(cartItems).every((qty) => qty === 0) ? (
        <p className="text-gray-600 text-center py-10">
          Your cart is empty 🛒
        </p>
      ) : (
        <>
          <div className="divide-y">
            {all_product.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-4"
                  >
                    {/* Left - product details */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md border"
                      />
                      <div>
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{item.category}</p>
                        <p className="text-red-600 font-semibold">
                          ₹{item.new_price}
                        </p>
                      </div>
                    </div>

                    {/* Middle - Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-semibold">
                        {cartItems[item.id]}
                      </span>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* Right - Subtotal */}
                    <p className="text-lg font-semibold text-gray-700">
                      ₹{item.new_price * cartItems[item.id]}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Cart Total */}
          <div className="border-t mt-8 pt-4 text-right">
            <h3 className="text-xl font-semibold">
              Total: ₹{getTotalCartAmount()}
            </h3>
            <button className="mt-4 bg-red-600 text-white py-3 px-6 rounded-full font-medium hover:bg-red-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
