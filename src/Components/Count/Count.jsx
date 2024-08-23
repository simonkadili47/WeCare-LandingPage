import React from 'react';
import { RiHospitalFill } from "react-icons/ri";
import { RiFlag2Fill } from "react-icons/ri";
import { IoThumbsUpSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";

function Count() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-4 mx-4 p-4 bg-gray-custom rounded-2xl">
      {/* Subscribed hospital/clinic */}
      <div className="flex items-center justify-center md:justify-start flex-nowrap">
        <div className="bg-custom-green rounded-full p-3 md:p-4">
          <RiHospitalFill className="text-white text-lg md:text-xl" />
        </div>
        <div className='p-2 ml-3 flex-grow'>
          <h1 className='font-bold text-base md:text-lg'>500+ Corp</h1>
          <p className='text-sm text-gray-600'>Subscribed hospital/clinic</p>
        </div>
      </div>

      {/* Countries Support */}
      <div className="flex items-center justify-center md:justify-start flex-nowrap">
        <div className="bg-custom-green rounded-full p-3 md:p-4">
          <RiFlag2Fill className="text-white text-lg md:text-xl" />
        </div>
        <div className='p-2 ml-3 flex-grow'>
          <h1 className='font-bold text-base md:text-lg'>32+ Countries</h1>
          <p className='text-sm text-gray-600'>Countries Support</p>
        </div>
      </div>

      {/* Customer Satisfaction */}
      <div className="flex items-center justify-center md:justify-start flex-nowrap">
        <div className="bg-custom-green rounded-full p-3 md:p-4">
          <IoThumbsUpSharp className="text-white text-lg md:text-xl" />
        </div>
        <div className='p-2 ml-3 flex-grow'>
          <h1 className='font-bold text-base md:text-lg'>98% Satisfied</h1>
          <p className='text-sm text-gray-600'>Customer Satisfaction</p>
        </div>
      </div>

      {/* Time Savings */}
      <div className="flex items-center justify-center md:justify-start flex-nowrap">
        <div className="bg-custom-green rounded-full p-3 md:p-4">
          <HiShoppingBag className="text-white text-lg md:text-xl" />
        </div>
        <div className='p-2 ml-3 flex-grow'>
          <h1 className='font-bold text-base md:text-lg'>Time savings</h1>
          <p className='text-sm text-gray-600'>By Automating System</p>
        </div>
      </div>
    </div>
  );
}

export default Count;
