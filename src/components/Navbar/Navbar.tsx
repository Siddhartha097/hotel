import React from 'react';
import { Link } from 'react-router-dom';

//components


//image




const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center flex-grow bg-[#E8B587A1] shadow-sm">
            {/* Logo */}
            <div className='p-6 font-medium whitespace-nowrap'>
                <Link to="/">
                {/* <img className="h-8 w-auto" src={Logo} alt="Logo" /> */}
                    <h1 className='text-xl lg:text-4xl text-center italiano text-yellow-700'>PrecesionHub</h1>
                    <h3 className='text-center text-base font-medium text-black'>Hotel</h3>
                </Link>
            </div>
            {/* Navbar Links */}
            <div className=' pt-8 text-base hidden items-center justify-between space-x-8 md:flex p-6 font-semibold inter'>
                <Link to="/our-story" className="text-black dark:text-white">Our Story</Link>
                <Link to="/packages" className="text-black dark:text-white poppins">Package</Link>
                <Link to="/contact" className="text-black dark:text-white">Contact</Link>
            </div>
        </nav>
  );
};

export default Navbar;
