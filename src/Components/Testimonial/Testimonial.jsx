import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import image from "../Testimonial/img.webp";

function Testimonial() {
  return (
    <div className="pt-12 px-4 sm:px-8 md:px-12 lg:px-20 bg-custom-green mx-4 mt-8 rounded-xl pb-16">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-gray-300">TESTIMONIALS</h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
            <p>Our Platform's impact in</p>
            <p>Their Own Words</p>
          </div>
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0 lg:pl-8 text-gray-300">
          <p>Dive into inspiring success stories that showcase how our platform has empowered healthcare practices, improved efficiency, and elevated patient satisfaction.</p>
        </div>
      </div>

      <div className="flex justify-center mt-8 lg:justify-end lg:pr-8">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-custom-gray mr-2">
            <IoIosArrowBack />
          </div>
          <div className="px-2 text-center">
            <p>
              <span className="text-white font-bold">01</span>
              <span className="text-custom-gray">/5</span>
            </p>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-gray border-custom-gray">
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-8 flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0">
        <div className="max-w-xs text-gray-300 p-4 rounded-lg shadow-lg border border-gray-400 italic ">
          <p>"Our clinic has seen a significant improvement in efficiency since implementing this medical dashboard platform."</p>
          <div className="mt-4 flex items-center not-italic">
            <img src={image} alt="" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <p>John Doe</p>
              <p>Practice Administrator</p>
            </div>
            <div className="pl-7 pt-6 text-7xl text-gray-400 ">"</div>
          </div>
        </div>
        <div className="max-w-xs text-gray-300 p-4 rounded-lg shadow-lg border border-gray-400 italic">
          <p>"Our system relies on the data-driven insights provided by this medical dashboard platform."</p>
          <div className="mt-4 flex items-center not-italic">
            <img src={image} alt="" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <p>Dr. John Doe</p>
              <p>Family Physician</p>
            </div>
            <div className="pl-7 pt-6 text-7xl text-gray-400 ">"</div>
          </div>
        </div>
        <div className="max-w-xs text-gray-300 p-4 rounded-lg shadow-lg border border-gray-400 italic">
          <p>"The user-friendly interface has reduced the administrative burden, allowing me to spend more time with my patients."</p>
          <div className="mt-4 flex items-center not-italic">
            <img src={image} alt="" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <p>Mark Thomson</p>
              <p>Hospital Administrator</p>
            </div>
            <div className="pl-7 pt-6 text-7xl text-gray-400 ">"</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
