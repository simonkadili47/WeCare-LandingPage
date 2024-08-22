import React from 'react';
import image1 from '../ChooseUs/image1.webp';
import { IoCheckmarkCircle } from "react-icons/io5";

function Chooseus() {
  return (
    <div className='pl-24 pt-32'>
      <div className='flex items-center'>
        {/* Left side with text */}
        <div className='flex-1'>
          <div className='text-custom-green font-bold text-md'>
            <h1>WHY CHOOSE WECARE?</h1>
          </div>
          <div className='text-4xl pt-2 font-bold'>
            <p>Why you should choose</p>
            <p>Wecare as your companion</p>
          </div>
          <div className='text-sm pt-4'>
            <p>Our medical Dashboard platform is designed to make healthcare</p>
            <p>management intuitive and efficient</p>
          </div>
          <div className='flex pt-6'>
            <button className="border rounded-lg border-custom-green bg-custom-green p-2 px-4 text-white hover:bg-custom-green hover:text-white transition-colors">
              <a href="#" className="no-underline">Get Started</a>
            </button>
            <button className="border rounded-lg border-custom-green p-2 px-4 text-custom-green ml-6 hover:bg-custom-green hover:text-white transition-colors">
              <a href="#" className="no-underline">Learn More</a>
            </button>
          </div>
        </div>
        
        {/* Right side with image */}
        <div className='flex-1 flex ml-52'>
          <img src={image1} alt="Why Choose Us" className="w-[400px] h-auto rounded-xl" />
        </div>
      </div>

      {/* Text boxes below the heading and images */}
      <div className='mt-8 grid grid-cols-3 gap-3 pt-4 text-lg rounded-xl '>
        <div className="flex items-center bg-gray-custom p-4 ml-24 rounded-lg w-[300px]">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Accurate Information</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 mr-16 ml-16 rounded-lg w-[300px]">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Appointment Management</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 mr-24 rounded-lg w-[300px]">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Revenue Optimization</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 ml-24 rounded-lg w-[300px]">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Inter-Team Collaboration</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4  mr-16 ml-16 rounded-lg w-[300px]">
          <IoCheckmarkCircle className="text-green-500 mr-2" />
          <p>Interface Customization</p>
        </div>
        <div className="flex items-center bg-gray-custom p-4 rounded-lg w-[300px] mr-4">
  <IoCheckmarkCircle className="text-green-500 mr-2" />
  <p>Improved Patient Care</p>
</div>

      </div>
    </div>
  );
}

export default Chooseus;
