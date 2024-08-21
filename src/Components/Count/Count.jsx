import React from 'react';
import { RiHospitalFill } from "react-icons/ri";
import { RiFlag2Fill } from "react-icons/ri";
import { IoThumbsUpSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
function Count() {
  return (
    <div className="flex mb-8 mt-4 mx-2 p-3 justify-start bg-gray-200 w-auto rounded-lg">
      <div className="bg-custom-green ml-10 rounded-full p-6">
        <RiHospitalFill className="text-white text-4xl" />
      </div>
      <div className='p-3 '>
      <h1 className='font-bold'>500+ Corp</h1>
      <p className='text-sm text-gray-600'>Subscribed hosptal/clinic</p>
      </div>
      <div className='bg-custom-green rounded-full p-6 ml-24'>
      <RiFlag2Fill  className="text-white text-4xl" />
      </div>
      <div className='p-3'>
      <h1 className='font-bold'>32+ Countries</h1>
      <p className='text-sm text-gray-600'>Countries Support</p>
      </div>
      <div className='bg-custom-green rounded-full p-6 ml-24'>
      <IoThumbsUpSharp className="text-white text-4xl" />
      </div>
      <div className='p-3'>
      <h1 className='font-bold'>98% Satisfied</h1>
      <p className='text-sm text-gray-600'>Countries Support</p>
      </div>
      <div className='bg-custom-green rounded-full p-6 ml-24'>
      <HiShoppingBag className="text-white text-4xl" />
      </div>
      <div className='p-3'>
      <h1 className='font-bold'>Time savings</h1>
      <p className='text-sm text-gray-600'>By Automating System</p>
      </div>
    </div>
  );
}

export default Count;
