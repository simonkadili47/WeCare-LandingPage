import React from "react";
import image1 from "../Discover/dashboard1.webp";
import image2 from "../Discover/dashboard2.webp"; // Assuming you have another image

function Discover() {
  return (
    <div className="pt-3 mt-14">
      <div className="pt-8 flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* Left Side - First Image */}
        <img src={image1} alt="" className="rounded-xl w-1/4 flex-shrink-0" />

        {/* Center - Text Content */}
        <div className="text-center flex-grow mx-4">
          <h1 className="text-custom-green">GET STARTED NOW</h1>
          <div className="font-bold text-4xl">
            <p>Discover a new era of</p>
            <p>efficiency in healthcare.</p>
            <div className="pt-2 font-normal text-gray-500">
              <p className="text-sm">
                Our Medical Dashboard Platform is designed to make healthcare
                management intuitive and efficient.
              </p>
            </div>
            <div className="flex pt-3 space-x-2 items-center justify-center">
              <div className="text-lg border border-gray-500 px-2 py-1 rounded-lg">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-60 px-2 py-1 border-none outline-none"
                />
              </div>
              <button className="bg-custom-green text-white px-4 py-2 rounded-lg text-sm font-normal hover:bg-green-700 hover:text-gray-100">
                <a href="#">Get Started</a>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Second Image */}
        <img src={image2} alt="" className="rounded-xl w-1/4 flex-shrink-0" />
      </div>
    </div>
  );
}

export default Discover;
