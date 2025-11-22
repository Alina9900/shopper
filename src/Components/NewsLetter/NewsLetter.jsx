import React from "react";

function NewsLetter() {
  return (
    <section className="w-full bg-linear-to-r from-pink-100 via-white to-pink-50 py-16">
      <div
        className="max-w-4xl mx-auto flex flex-col items-center justify-center 
                   bg-white shadow-lg rounded-2xl py-10 px-8 md:px-16
                   hover:shadow-2xl transition-shadow duration-300"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-4">
          Get Exclusive Offers On Your Email
        </h1>

        <p className="text-gray-600 text-lg text-center mb-8">
          Subscribe to our newsletter and stay updated with the latest deals and trends.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-md gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full flex-1 border border-gray-300 rounded-full px-5 py-3 
                       text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400
                       placeholder-gray-400 transition-all duration-300"
          />
          <button
            className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full
                       hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
