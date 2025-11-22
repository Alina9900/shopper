import React from "react";
import women from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <section className="w-full bg-linear-to-r from-pink-100 to-white py-16">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between
                   bg-white shadow-lg rounded-2xl px-8 py-10 md:px-16 md:py-12 
                   hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Exclusive Offers
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-600">
            For You 🎉
          </h3>
          <p className="text-gray-600 text-lg">
            Only on our best-selling products. Don’t miss out on great deals!
          </p>

          <button
            className="mt-6 bg-red-600 text-white font-semibold px-8 py-3 
                       rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            Check Now
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={women}
            alt="Offer"
            className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Offers;
