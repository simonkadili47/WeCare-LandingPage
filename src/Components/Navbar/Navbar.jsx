import React from 'react';


const Navlinks = [
    { id: "1", name: "Features", link: "/#features" },
    { id: "2", name: "Case Study", link: "/#case-study" },
    { id: "3", name: "Prices", link: "/#prices" },
    { id: "4", name: "Community", link: "/#community" },
    { id: "5", name: "About Us", link: "/#about-us" },
];

function Navbar() { // Added parentheses here
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div>
                    <h1 className='text-xl font-bold font-serif'>WeCare</h1>
                </div>
                <div className='hidden md:flex space-x-10 gap-4 pl-96 ml-28 w-full'>
                    {/* Static Navigation Links */}
                    {Navlinks.map((link) => (
                        <a key={link.id} href={link.link} className='text-black hover:text-green-500'>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
