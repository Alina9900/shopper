import React from "react";
import Dump from "../Item/dump"
import data from "../Assets/data" // wherever your product data is

const Popular = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">
        Popular Products
      </h2>

      {/* Responsive grid container */}
      <div className="grid gap-8 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                      max-w-7xl mx-auto px-6">
        {data.map((item, index) => (
          <Dump key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
