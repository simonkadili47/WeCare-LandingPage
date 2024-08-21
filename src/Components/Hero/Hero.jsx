import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";


function Hero() {
  return (
    <div className="mt-2 mx-2 pb-32 rounded-xl bg-dark-blue">
      <div className="ml-12  ">
        <h1 className="text-white text-sm pt-16">ENHANCING PATIENT CARE</h1>
        <div className="mt-4 text-3xl font-bold text-white">
          <p>Smart Solutions</p>
          <p>for Healthcare</p>
          <p>Management</p>
        </div>
        <div className="mt-4 text-gray-400">
          <p>Access critical patient data and enhance colaboration</p>
          <p>among your Healthcare team effortlessy</p>
        </div>
        <div className="mt-6 flex">
          <input
            type="text"
            placeholder="Your email address"
            className="border bg-custom-blue  border-gray-300 rounded-lg p-2   w-64   focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
          <button className="border rounded-lg border-gray-300 w-auto p-2 ml-4 bg-green-600 px-4  text-white hover:bg-green-500 hover:text-white transition-colors">
            <a href="#" className="no-underline">
              Get Started
            </a>
          </button>
        </div>
        <div className='text-gray-400 mt-4 flex'>
          <p>
          <IoCheckmarkCircle /> Get free trial of 7 days
          </p>
          <div className="ml-32">
            <p>
            <IoCheckmarkCircle /> will not spam your email
            </p>
          </div>
        
          

        </div>
      </div>
      
    </div>
    
  );
}

export default Hero;
