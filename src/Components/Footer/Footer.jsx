import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaGoogle, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className='bg-custom-blue mt-10 h-auto py-6 mx-2 mb-4 rounded-xl px-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 text-white'>
        {/* Column 1: WeCare Section */}
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold'>WeCare</h1>
          <div className='pt-2 max-w-xs'>
          <p className='mt-2 text-sm'>Streamline your administrative tasks, access critical patient data, 
            and enhance collaboration among your healthcare team effortlessly.</p>
         
          </div>
          <div className='bg-custom-blue mt-2 pt-2  py-4 rounded-b-xl'>
            <div className='flex justify-center gap-3 text-xl'>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaFacebook />
              </div>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaTwitter />
              </div>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaYoutube />
              </div>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaGoogle />
              </div>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaTiktok />
              </div>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaInstagram />
              </div>
              <div className='flex items-center justify-center w-8 h-8 bg-white text-custom-blue rounded-full'>
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Additional Content */}
        <div className='ml-56'>
          <h2 className='text-lg font-bold'>Pages</h2>
          <ul className='mt-2'>
            <li><a href="#/" className='hover:underline'>Page 1</a></li>
            <li><a href="#/" className='hover:underline'>Page 2</a></li>
            <li><a href="#/" className='hover:underline'>Page 3</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className='ml-24'>
          <h2 className='text-lg font-bold'>Useful Links</h2>
          <ul className='mt-2'>
            <li><a href="#/" className='hover:underline'>Link 1</a></li>
            <li><a href="#/" className='hover:underline'>Link 2</a></li>
            <li><a href="#/" className='hover:underline'>Link 3</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h2 className='text-lg font-bold'>Contact Us</h2>
          <p className='flex pt-2'>
          <FaPhoneAlt className='pr-1 mt-1 text-xl' />
             +255 456 7890</p>
          <p className='mt-2 flex '>
          <MdOutlineEmail className='mt-1 pr-1 text-xl' />
             <a href="mailto:info@wecare.com" className='hover:underline'>info@wecare.com</a></p>
          <p className='flex pt-2'>
          <IoLocationSharp className='pr-1 mt-1 text-xl' />
            Address: 123 Healthcare St, Health City, HC 12345</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
