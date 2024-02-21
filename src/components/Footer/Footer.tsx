import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const Footer: React.FC = () => {
  return (
    <footer className="self-stretch inria py-14 px-14 w-full h-full shadow-sm max-md:py-10 max-md:px-6 max-md:mt-10 max-md:max-w-full bg-neutral-300">
      <div className="flex space-x-6 space-y-8 max-md:flex-wrap">
        <div className=' w-1/4 max-md:w-full h-full text-center'>
          <h1 className='text-4xl island font-bold text-[#B26C02]'>PrecisionHub</h1>
          <h2 className='text-2xl text-center font-bold'>Hotel</h2>
          <br />
          <p className='text-sm font-semibold'>
            Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and 
          </p>
        </div>
        {/* About Us */}
        <div className='w-1/4 max-md:w-1/2 h-full px-8 max-md:px-0'>
          <h1 className='text-2xl font-semibold'>
            About Us
          </h1>
          <ul className=' mt-6 space-y-8'>
            <li>Company Details</li>
            <li>Know More About Company</li>
            <li>FAQ</li>
            <li>View Details</li>
          </ul>
        </div>
        {/* Contact us */}
        <div className='w-1/4 max-md:w-1/3 h-full px-8 max-md:px-0'>
          <h1 className='text-2xl font-semibold'>
            Contact Us
          </h1>
          <ul className=' mt-6 space-y-8'>
            <li>Address:</li>
            <li>Phone No:</li>
            <li>Fax:</li>
            <li>Email:</li>
          </ul>
        </div>
        <div className='flex w-1/4 max-md:w-full flex-col items-center'>
          <Label htmlFor="email" className='font-bold text-yellow-700 inria text-xl tracking-wide pb-10 max-md:pb-7'>Stay in Touch!</Label>
          <div className="flex w-full items-center space-x-2  text-xl max-md:mt-6">
            <Input type='email' placeholder='Email' />
            <Button type='submit'>Send</Button>
          </div>
        </div>
        {/* <div className='flex w-1/4 flex-col items-center gap-1.5'>
          <Label htmlFor="email" className='font-bold text-yellow-700 inria text-xl tracking-wide pb-10'>Stay in Touch!</Label>
          <div className="flex w-full max-w-sm items-center space-x-2  text-xl max-md:mt-10">
            <Input type='email' placeholder='Email' />
            <Button type='submit'>Send</Button>
          </div>
        </div>   */}
      </div>
    </footer>
  )
}

export default Footer