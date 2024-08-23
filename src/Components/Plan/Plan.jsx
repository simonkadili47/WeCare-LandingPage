import React from "react";
import { FaToggleOff } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

function Plan() {
  return (
    <div className="bg-blue-custom pb-5 mt-24 mx-3 flex rounded-xl">
      <div className="pt-36 pl-16">
        <h1 className="text-gray-400">PRICING PLANS</h1>
        <div className="text-white text-2xl font-bold">
          <p>Explore Our Pricing</p>
          <p>Plan Solutions</p>
        </div>
        <div className="text-white pt-5">
          <p>Discover pricing options designed to accommodate</p>
          <p>practices of all sizes</p>
        </div>
        <div className="flex items-center pt-8 text-white">
          <h1>Annually</h1>
          <div className="px-5 text-3xl text-white">
            <FaToggleOff />
          </div>
          <h1>Monthly</h1>
        </div>
      </div>

      {/* Parent container to control alignment */}
      <div className="flex justify-end w-full pr-16">
        {/* First box */}
        <div className="pt-10 p-2 ml-4 mt-8 border border-gray-500 rounded-lg w-64 h-auto">
          <div className="pl-2 pt-3 bg-blue-custom">
            <h1 className="text-white font-bold text-xl">Standard Plan</h1>
            <p className="text-gray-400">Best for small Healthcare practices</p>
            <p>
              <span className="text-white font-bold text-2xl">$29</span>
              <span className="text-sm text-gray-400"> Month</span>
            </p>
            <div className="border-t border-gray-500 my-8"></div>
            <div className="text-sm text-white">
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Patient Data Management
              </p>
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Appointment Scheduling
              </p>
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Data Security and HIPAA Compliance
              </p>
              <p className="flex items-center ">
                <IoCheckmark className="mr-2 text-xl" /> Basic Billing and Claim Processing
              </p>
            </div>
            <div className="border flex border-gray-500 p-2 text-white justify-center rounded-lg mt-3 pl-2 mx-2 text-center">
              <p>Try For Free </p>
              <FaArrowRight className="pl-2 pt-1 text-2xl" />
            </div>
          </div>
        </div>

        {/* Second box */}
        <div className="pt-10 p-2 ml-4 mt-8 border bg-custom-green border-gray-500 rounded-lg w-64 h-auto">
          <div className="pl-2 pt-3">
            <h1 className="text-white font-bold text-xl">Premium Plan</h1>
            <p className="text-gray-400">Best for medium-sized Healthcare practices</p>
            <p>
              <span className="text-white font-bold text-2xl">$49</span>
              <span className="text-sm text-gray-400"> Month</span>
            </p>
            <div className="border-t border-gray-500 my-8"></div>
            <div className="text-sm text-white">
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Advanced Patient Management
              </p>
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Automated Appointment Reminders
              </p>
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Enhanced Data Security
              </p>
              <p className="flex items-center">
                <IoCheckmark className="mr-2 text-xl" /> Comprehensive Billing
              </p>
            </div>
            <div className="border flex  border-gray-500 p-2 text-black bg-white justify-center rounded-lg mt-8 pl-2 mx-2 text-center">
              <p>Try For Free </p>
              <FaArrowRight className="pl-2 pt-1 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
