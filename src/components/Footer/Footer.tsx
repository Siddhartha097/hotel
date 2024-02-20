import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const Footer: React.FC = () => {
  return (
    <footer className="self-stretch py-14 pr-9 pl-20 pt-20 w-full shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full bg-neutral-300">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <div className="mt-3.5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col md:w-1/4 max-md:ml-0">
                <section className="flex flex-col text-base text-black w-full">
                  <h1 className="text-4xl italiano text-yellow-700 text-center">PrecisionHub</h1>
                  <h1 className="self-center font-bold text-lg max-md:">
                    Hotel
                  </h1>
                  <div className="my-6 md:mt-8">
                    Discover a realm of opulence and refinement at Luxe Haven
                    Retreat, where we redefine the art of hospitality. Nestled
                    in the heart of [City], our hotel is a sanctuary of
                    timeless elegance and{" "}
                  </div>
                </section>
              </div>
              <div className="px-6 ml-6">
                  <h2 className='font-semibold text-2xl'>About Us</h2>
                  <ul className='mt-10 text-lg flex flex-col gap-10'>
                    <li className=" max-md:">Company Details</li>
                    <li className="">Know More About Company</li>
                    <li className="">FAQ</li>
                    <li className="">View Details</li>
                  </ul>
              </div>
              <div className="px-6 w-[50%] ml-6 md">
                <h2 className='font-semibold text-2xl'>Contact Us</h2>
                  <ul className='mt-10 flex flex-col gap-10 text-lg'>
                    <li className=" max-md:">Address:</li>
                    <li className="max-md:">Phone No:</li>
                    <li className=" max-md:">Fax:</li>
                    <li className=" max-md:">Email:</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
            <div className='flex w-1/4 flex-col items-center gap-1.5'>
              <Label htmlFor="email" className='font-bold text-yellow-700 inria text-xl tracking-wide pb-10'>Stay in Touch!</Label>
              <div className="flex w-full max-w-sm items-center space-x-2  text-xl max-md:mt-10">
                <Input type='email' placeholder='Email' />
                <Button type='submit'>Send</Button>
              </div>
            </div>

      </div>
  </footer>
  )
}

export default Footer