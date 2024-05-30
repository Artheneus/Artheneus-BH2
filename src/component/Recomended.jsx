import React from "react";
import Laptop from "../assets/no-img.png";

const Analytics = () => {
  return (
    <div id="registration" className="w-full bg-white py-12 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px] mx-auto" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold md:text-xl">
            MARVEL PACKAGE BATTLE HARDENED
          </p>
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">
            Our Recommendation for Tourism & Main Events
          </h1>
          <p>TBD.</p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
