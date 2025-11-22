import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <section className="w-full bg-linear-to-b from-pink-50 to-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 sm:px-6">

        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h4 className="text-gray-600 font-semibold text-base md:text-lg tracking-[0.2em]">
            NEW ARRIVALS ONLY
          </h4>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-gray-900">
            new{" "}
            <img
              src={hand_icon}
              alt="hand"
              className="inline-block w-15 h-15 ml-2 animate-bounce"
            />{" "}
            <br />
            collections <br /> for everyone
          </h1>

          <button className="mt-8 flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-full font-semibold text-xl hover:bg-red-700 transition duration-300 w-fit">
            Latest Collection
            <img src={arrow_icon} alt="arrow" className="w-6 h-6" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={hero_image}
            alt="Hero"
            className="w-full max-w-md md:max-w-xl drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
