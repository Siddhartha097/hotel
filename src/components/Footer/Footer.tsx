import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const Footer: React.FC = () => {
  return (
    <footer className="self-stretch py-12 pr-9 pl-20 mt-32 w-full shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <div className="mt-3.5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base text-black max-md:mt-10">
                  <div className="text-4xl italiano text-yellow-700">PrecisionHub</div>{" "}
                  <div className="self-start ml-9 font-bold text-lg max-md:ml-2.5">
                    Hotel
                  </div>{" "}
                  <div className="mt-11 max-md:mt-10">
                    Discover a realm of opulence and refinement at Luxe Haven
                    Retreat, where we redefine the art of hospitality. Nestled
                    in the heart of [City], our hotel is a sanctuary of
                    timeless elegance and{" "}
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl text-black max-md:mt-10">
                  <div>About Us</div>
                  <div className="mt-16 max-md:mt-10">Company Details</div>
                  <div className="mt-10">Know More About Company</div>
                  <div className="mt-4">FAQ</div>
                  <div className="mt-10">View Details</div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl text-black max-md:mt-10">
                  <div>Contact Us</div>
                  <div className="mt-16 max-md:mt-10">Address:</div>
                  <div className="mt-11 max-md:mt-10">Phone No:</div>
                  <div className="mt-11 max-md:mt-10">Fax:</div>
                  <div className="mt-11 max-md:mt-10">Email:</div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          
            <div className='flex flex-col w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor="email" className='font-bold text-yellow-700 inria text-xl tracking-wide pb-10'>Stay in Touch!</Label>
              <div className="flex w-full max-w-sm items-center space-x-2  text-xl max-md:mt-10">
                <Input type='email' placeholder='Email' />
                <Button type='submit'>Send</Button>
              </div>
            </div>
            
        </div>
      </div>
  </footer>
  )
}

export default Footer