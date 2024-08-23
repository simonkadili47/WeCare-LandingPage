import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navlinks = [
    { id: "1", name: "Features", link: "/#features" },
    { id: "2", name: "Case Study", link: "/#case-study" },
    { id: "3", name: "Prices", link: "/#prices" },
    { id: "4", name: "Community", link: "/#community" },
    { id: "5", name: "About Us", link: "/#about-us" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div>
                    <h1 className='text-xl font-bold font-serif'>WeCare</h1>
                </div>
                <div className="hidden md:flex space-x-10 gap-4">
                    {/* Static Navigation Links */}
                    {Navlinks.map((link) => (
                        <a key={link.id} href={link.link} className='text-black hover:text-green-500'>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    {/* Hamburger Icon */}
                    <button onClick={toggleMenu} className='text-black text-2xl'>
                        <FaBars />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleMenu} className='text-black text-2xl'>
                        <FaTimes />
                    </button>
                </div>
                <div className='flex flex-col items-center mt-8'>
                    {Navlinks.map((link) => (
                        <a key={link.id} href={link.link} className='text-black hover:text-green-500 text-lg py-2' onClick={toggleMenu}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
