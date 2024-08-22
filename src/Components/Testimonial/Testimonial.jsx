import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import image from '../Testimonial/img.webp';

function Testimonial() {
  return (
    <div className="pt-24 flex flex-col pl-20 bg-custom-green mx-4 mt-8 rounded-xl pb-28 ">
      <div className="flex">
        <div className="mt-1">
          <h1 className="text-gray-300">TESTIMONIALS</h1>
          <div className="text-3xl font-bold text-white">
            <p>Our Platform's impact in</p>
            <p>Their Own Words</p>
          </div>
        </div>
        <div className="pl-48 pt-6 text-gray-300">
          <p>Dive into inspiring success stories that showcase how our</p>
          <p>platform has empowered healthcare practices, improved</p>
          <p>efficiency, and elevated patient satisfaction.</p>
        </div>
        <div className="flex pt-8 p-16 pl-24 items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-custom-gray">
            <IoIosArrowBack />
          </div>
          <div className="px-2 text-center">
            <p><span className="text-white font-bold">01</span><span className="text-custom-gray">/5</span></p>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-custom-gray border-custom-gray">
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="pt-10 flex justify-center">
        <div className="flex space-x-4 -ml-12">
          <div className="max-w-sm text-gray-300 p-4 rounded-lg shadow-lg border border-gray-400 italic">
            <p>"Our clinic has a significant</p>
            <p>improvement in efficiency since</p>
            <p>implementing this medical</p>
            <p>dashboard platform."</p>
            <div className="mt-4 flex items-center not-italic">
              <img src={image} alt="" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <p>John Doe</p>
                <p>Practice Administrator</p>
              </div>
              <div className="pl-7 pt-6 text-7xl text-gray-400 ">"</div>
            </div>
          </div>
          <div className="max-w-sm text-gray-300 p-4 rounded-lg shadow-lg border border-gray-400 italic">
            <p>"Our system relies on</p>
            <p>the data-driven insights provided</p>
            <p>by this medical dashboard</p>
            <p>platform."</p>
            <div className="mt-4 flex items-center not-italic">
              <img src={image} alt="" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <p>Dr. John Doe</p>
                <p>family Physician</p>
              </div>
              <div className="pl-7 pt-6 text-7xl text-gray-400 ">"</div>
            </div>
            
          </div>
          <div className="max-w-sm text-gray-300 p-4 rounded-lg shadow-lg border border-gray-400 italic">
            <p>"The user-friendly interface has</p>
            <p>reduced the administrative</p>
            <p>burden, allowing me to spend</p>
            <p>more time with many patients."</p>
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
    </div>
  );
}

export default Testimonial;
