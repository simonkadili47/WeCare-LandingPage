import React from 'react';
import image1 from '../ChooseUs/image1.webp';
import { IoCheckmarkCircle } from "react-icons/io5";

function Chooseus() {
  return (
    <div className='px-4 md:pl-24 pt-16 md:pt-32'>
      <div className='flex flex-col md:flex-row items-center'>
        {/* Left side with text */}
        <div className='flex-1 mb-8 md:mb-0'>
          <div className='text-custom-green font-bold text-sm md:text-md'>
            <h1>WHY CHOOSE WECARE?</h1>
          </div>
          <div className='text-2xl md:text-4xl pt-2 font-bold'>
            <p>Why you should choose</p>
            <p>Wecare as your companion</p>
          </div>
          <div className='text-sm pt-4'>
            <p>Our medical Dashboard platform is designed to make healthcare</p>
            <p>management intuitive and efficient</p>
          </div>
          <div className='flex flex-col md:flex-row pt-6 gap-4'>
            <button className="border rounded-lg border-custom-green bg-custom-green p-2 px-4 text-white hover:bg-custom-green hover:text-white transition-colors">
              <a href="#" className="no-underline">Get Started</a>
            </button>
            <button className="border rounded-lg border-custom-green p-2 px-4 text-custom-green hover:bg-custom-green hover:text-white transition-colors">
              <a href="#" className="no-underline">Learn More</a>
            </button>
          </div>
        </div>
        
        {/* Right side with image */}
        <div className='flex-1 flex justify-center md:ml-52'>
          <img src={image1} alt="Why Choose Us" className="w-full md:w-[400px] h-auto rounded-xl" />
        </div>
      </div>

      {/* Text boxes below the heading and images */}
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:pr-24 text-lg rounded-xl'>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Accurate Information</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Appointment Management</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Revenue Optimization</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Inter-Team Collaboration</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Interface Customization</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Improved Patient Care</p>
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
