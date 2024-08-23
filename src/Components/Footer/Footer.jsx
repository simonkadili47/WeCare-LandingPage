import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaGoogle, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className='bg-custom-blue py-6 px-4 sm:px-8 mt-8 sm:mt-10 mx-2 mb-4 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-white'>
        {/* Column 1: WeCare Section */}
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold'>WeCare</h1>
          <p className='mt-2 text-sm'>
            Streamline your administrative tasks, access critical patient data, 
            and enhance collaboration among your healthcare team effortlessly.
          </p>
          <div className='mt-4 flex justify-center gap-3'>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaFacebook />
            </a>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaTwitter />
            </a>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaYoutube />
            </a>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaGoogle />
            </a>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaTiktok />
            </a>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaInstagram />
            </a>
            <a href="#" className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full text-xl'>
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Column 2: Additional Content */}
        <div>
          <h2 className='text-lg font-bold'>Pages</h2>
          <ul className='mt-2 space-y-1'>
            <li><a href="#/" className='hover:underline'>Page 1</a></li>
            <li><a href="#/" className='hover:underline'>Page 2</a></li>
            <li><a href="#/" className='hover:underline'>Page 3</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h2 className='text-lg font-bold'>Useful Links</h2>
          <ul className='mt-2 space-y-1'>
            <li><a href="#/" className='hover:underline'>Link 1</a></li>
            <li><a href="#/" className='hover:underline'>Link 2</a></li>
            <li><a href="#/" className='hover:underline'>Link 3</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h2 className='text-lg font-bold'>Contact Us</h2>
          <p className='flex items-center mt-2'>
            <FaPhoneAlt className='mr-2 text-xl' />
            +255 456 7890
          </p>
          <p className='flex items-center mt-2'>
            <MdOutlineEmail className='mr-2 text-xl' />
            <a href="mailto:info@wecare.com" className='hover:underline'>info@wecare.com</a>
          </p>
          <p className='flex items-center mt-2'>
            <IoLocationSharp className='mr-2 text-xl' />
            Address: 123 Healthcare St, Health City, HC 12345
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
