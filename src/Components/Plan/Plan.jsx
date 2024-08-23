import React from 'react';
import { FaToggleOff } from "react-icons/fa6";

function Plan() {
  return (
    <div className='bg-blue-custom mt-24 mx-3 flex rounded-xl'>
      <div className='pt-40 pl-16'>
        <h1 className='text-gray-400'>PRICING PLANS</h1>
        <div className='text-white text-2xl font-bold'>
          <p>Explore Our Pricing</p>
          <p>Plan Solutions</p>
        </div>
        <div className='text-white pt-5'>
          <p>Discover pricing options designed to accommodate</p>
          <p>practices of all sizes</p>
        </div>
        <div className='flex items-center pt-8 text-white'>
          <h1>Annually</h1>
          <div className='px-5 text-3xl text-white'>
            <FaToggleOff />
          </div>
          <h1>Monthly</h1>
        </div>
      </div>
    </div>
  );
}

export default Plan;
