import React from 'react';

//components
import Navbar from '@/components/Navbar/Navbar';
import { Button } from '@/components/ui/button';

//images
import { hero } from './images';

const Hero: React.FC = () => {
    return (
        <div>
            <section className='w-full h-full md:flex'>
                <div className='w-full items-center justify-between bg-[#E8B587A1]'>
                    <Navbar />
                    <section className='flex px-20 py-12 pb-32 flex-col justify-center text-left space-y-2 '>
                        <h1 className="text-4xl island text-[#B26C02EB] md:text-7xl">Memorable</h1>
                    
                        <h1 className='text-2xl md:text-5xl font-medium inria tracking-wider antialiased'>Hotels for 
                            
                            <p>Moments <span className='island text-4xl text-[#B26C02EB] md:text-7xl'>Rich</span></p>
                            <p>in Emotions</p>
                        </h1>
                        <br />
                        <p className='inria tracking-wide text-base md:text-lg'>Book Now and get the best Prices</p>
                    </section>
                    
                </div>
                <div className='h-full w-full'>
                    <Button variant="outline" className='absolute bg-transparent text-white top-5 right-5'>Book Now</Button>
                    <img className='w-full object-fill' src={hero} alt='hero' />
                </div>
            </section>

            <section className='flex max-md:flex-col max-md:gap-0'>
                <div className='grow justify-center items-start py-12 pr-16 pl-24 w-full text-4xl text-black border border-solid bg-opacity-60 border-opacity-90 max-md:pr-5 max-md:pl-8 inria max-md:max-w-full border-[#B26C02EB] bg-[#E8B587A1] max-md:text-2xl'>       
                    Here,Local talents
                    <br />
                    comes together
                </div>
                <div className=' max-md:text-sm grow justify-center items-center py-12 pr-16 pl-24 w-full text-base text-right text-black border border-solid bg-opacity-60 border-opacity-90 max-md:px-5 max-md:max-w-full bg-[#E8B587A1] inria border-[#B26C02EB]'>
                    Escape the hustle and bustle of everyday life as you enter our tranquil oasis. Our lush gardens, soothing water features, and secluded nooks offer a retreat from the outside world, creating a haven of peace and relaxation.
                </div>
            </section>
        </div>
    )
}

export default Hero;