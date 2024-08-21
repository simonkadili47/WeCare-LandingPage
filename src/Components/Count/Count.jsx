import React from 'react';
import { RiHospitalFill } from "react-icons/ri";
import { RiFlag2Fill } from "react-icons/ri";
import { IoThumbsUpSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";

function Count() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mt-4 mx-2 p-3 bg-gray-custom w-auto rounded-2xl">
      <div className="flex items-center">
        <div className="bg-custom-green rounded-full p-4 ml-6">
          <RiHospitalFill className="text-white text-lg" />
        </div>
        <div className='p-2 ml-3'>
          <h1 className='font-bold'>500+ Corp</h1>
          <p className='text-sm text-gray-600'>Subscribed hospital/clinic</p>
        </div>
      </div>
      <div className="flex items-center ml-4">
        <div className="bg-custom-green rounded-full p-4">
          <RiFlag2Fill className="text-white text-lg" />
        </div>
        <div className='p-2 ml-3'>
          <h1 className='font-bold'>32+ Countries</h1>
          <p className='text-sm text-gray-600'>Countries Support</p>
        </div>
      </div>
      <div className="flex items-center ml-3">
        <div className="bg-custom-green rounded-full p-4">
          <IoThumbsUpSharp className="text-white text-lg" />
        </div>
        <div className='p-2 ml-3'>
          <h1 className='font-bold'>98% Satisfied</h1>
          <p className='text-sm text-gray-600'>Customer Satisfaction</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-custom-green rounded-full p-4">
          <HiShoppingBag className="text-white text-lg" />
        </div>
        <div className='p-2 ml-3'>
          <h1 className='font-bold'>Time savings</h1>
          <p className='text-sm text-gray-600'>By Automating System</p>
        </div>
      </div>
    </div>
  );
}

export default Count;
