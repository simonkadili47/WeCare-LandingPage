import React from 'react';
import image1 from '../Features/imag1.webp';
import image2 from '../Features/imag2.webp';
import image3 from '../Features/imag3.webp';

function Features() {
  return (
    <div className='px-4 md:ml-14 pt-8'>
      <div className='flex flex-col gap-8'>
        {/* Top Section with Heading and Description */}
        <div className='flex flex-col md:flex-row items-start gap-8'>
          <div className='flex-1'>
            <h1 className='text-custom-green font-bold text-xl md:text-2xl'>OUR KEY FEATURES</h1>
            <div className='font-bold text-2xl md:text-3xl pt-2'>
              <p>Our features that streamline</p>
              <p>Healthcare Management</p>
            </div>
          </div>
          <div className='flex-1 pt-4 md:pt-9'>
            <p>Our platform typically offers a range of features to help</p>
            <p>healthcare professionals and administrations streamline</p>
            <p>their tasks and improve patient care</p>
          </div>
          <div className='flex-1 pt-4 md:pt-9 flex items-center justify-center'>
            <button className="border rounded-lg border-custom-green p-2 px-4 text-custom-green hover:bg-custom-green hover:text-white transition-colors">
              <a href="#" className="no-underline">Learn More</a>
            </button>
          </div>
        </div>
        
        {/* Feature Items */}
        <div className='flex flex-col md:flex-row gap-8 md:px-24'>
          <div className='flex flex-col items-center flex-1'>
            <img src={image1} alt="Feature 1" className="rounded-xl w-full h-auto" />
            <p className='mt-2 font-bold text-center'>Centralize Patient Records</p>
            <div>
              <p className='mt-2 text-sm text-center'>Eliminating the need for physical records</p>
              <p className='mt-2 text-sm text-center'>and reducing errors</p>
            </div>
          </div>
          <div className='flex flex-col items-center flex-1'>
            <img src={image2} alt="Feature 2" className="rounded-xl w-full h-auto" />
            <p className='mt-2 font-bold text-center'>Perfect Data Visualization</p>
            <div>
              <p className='mt-2 text-sm text-center'>Data visualization tools like charts and graphs for</p>
              <p className='mt-2 text-sm text-center'>easy interpretation of trends and insights</p>
            </div>
          </div>
          <div className='flex flex-col items-center flex-1'>
            <img src={image3} alt="Feature 3" className="rounded-xl w-full h-auto" />
            <p className='mt-2 font-bold text-center'>Medical and Supply Tracking</p>
            <div>
              <p className='mt-2 text-sm text-center'>Helps manage medication and supply levels</p>
              <p className='mt-2 text-sm text-center'>ensuring timely restocking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
