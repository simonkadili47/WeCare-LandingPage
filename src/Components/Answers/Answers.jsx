import React from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

function Answers() {
  return (
    <div className="pt-20">
      <div className="flex text-center justify-center">
        <div>
          <h1 className="text-custom-green text-sm font-bold">
            QUESTIONS AND ANSWERS
          </h1>
          <div className="text-2xl font-bold">
            <p>Learn more about our platform</p>
            <p>by user questions</p>
          </div>
        </div>
      </div>

      {/* Main Boxes Section */}
      <div className="pt-10 flex justify-center space-x-2">
        <div className="flex-1 max-w-md bg-gray-color p-4 rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-between items-center">
            <p className="text-custom-green text-lg font-bold">
              Is this platform suitable for small healthcare practices?
            </p>
            <FiMinus className="text-custom-green" />
          </div>
          <p className="text-sm text-gray-700 mt-2">
            Yes, our platform comes in various sizes and configurations, making them suitable for practices of all sizes.
          </p>
        </div>
        <div className="flex-1 max-w-md bg-gray-color p-4 rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Does the medical dashboard platform integrate with other healthcare software, such as Electronic Health Record (EHR) systems?
            </p>
            <div className="text-custom-green"><FaPlus /></div>
          </div>
        </div>
      </div>

      {/* Additional Boxes Section */}
      <div className="pt-10 flex justify-center space-x-2">
        {/* Column 1 */}
        <div className="flex-1 max-w-md space-y-6">
          <div className="bg-gray-color p-3 rounded-lg shadow-lg border border-gray-300 min-h-[100px] flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Types of support and maintenance available?
            </p>
            <div className="text-custom-green"><FaPlus /></div>
          </div>
          <div className="bg-gray-color p-3 rounded-lg shadow-lg border border-gray-300 min-h-[100px] flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Can I track my practice's financial performance?
            </p>
            <div className="text-custom-green"><FaPlus /></div>
          </div>
          <div className="bg-gray-color p-3 rounded-lg shadow-lg border border-gray-300 min-h-[100px] flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Can I handle appointment scheduling and reminders?
            </p>
            <div className="text-custom-green"><FaPlus /></div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex-1 max-w-md space-y-6">
          <div className="bg-gray-color p-3 rounded-lg shadow-lg border border-gray-300 min-h-[100px] flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Can I customize a medical dashboard platform to fit my specific practice needs?
            </p>
            <div className="text-custom-green">
            <FaPlus />
            </div>
          </div>
          <div className="bg-gray-color p-3 rounded-lg shadow-lg border border-gray-300 min-h-[100px] flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Is my patient data secure when using a medical dashboard platform?
            </p>
           <div className="text-custom-green"><FaPlus /></div>
          </div>
          <div className="bg-gray-color p-3 rounded-lg shadow-lg border border-gray-300 min-h-[100px] flex justify-between items-center">
            <p className="text-sm text-gray-700">
              How can medical dashboard platform benefit my healthcare practice?
            </p>
            <div className="text-custom-green"><FaPlus /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answers;
