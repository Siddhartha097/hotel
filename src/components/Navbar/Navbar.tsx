import React from 'react';
import { Link } from 'react-router-dom';

//components


//image




const Navbar: React.FC = () => {
    return (
        <nav className="flex px-4 md:px-8 py-4 md:py-6 justify-between items-center flex-grow bg-[#E8B587A1] shadow-md shadow-black">
            {/* Logo */}
            <div className='p-4 font-medium whitespace-nowrap'>
                <Link to="/">
                {/* <img className="h-8 w-auto" src={Logo} alt="Logo" /> */}
                    <h1 className='text-2xl lg:text-4xl text-center italiano text-yellow-700'>PrecesionHub</h1>
                    <h3 className='text-center text-base font-medium text-black'>Hotel</h3>
                </Link>
            </div>
            {/* Navbar Links */}
            <div className=' text-lg hover:text-neutral-400 hidden items-center justify-between space-x-8 md:flex p-6 font-semibold inter'>
                <Link to="/our-story" className="text-black dark:text-white">Our Story</Link>
                <Link to="/packages" className="text-black dark:text-white poppins">Package</Link>
                <Link to="/contact" className="text-black dark:text-white">Contact</Link>
            </div>
        </nav>
  );
};

export default Navbar;
