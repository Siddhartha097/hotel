
//components
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Hero from "./Hero";
import { Button } from "@/components/ui/button";

//images
import { pool, hall, hotel, cafe, bedroom, about, bar, spa, drinks, room1, room3, room2, room4 } from "./images";
import Box from "@/components/Box";




const Home = () => {
    return (
        <main className="w-full h-full">
            <Hero />
            <div className=" px-6 mt-0 md:px-10 ">
                <img src={pool} className="object-contain rounded-b-md" alt="pool" />
                <div className=" flex pt-2 items-center justify-between space-x-6">
                    <Carousel>
                        <CarouselContent className="">
                            <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1/2 flex items-center transition-all justify-start">
                                <Button className="absolute ml-2 bg-transparent text-white font-semibold text-sm lg:text-lg hover:text-black" variant={'secondary'}>Our Rooms</Button>
                                <img src={bedroom} className="rounded-md" alt="bedroom" />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1/2 flex items-center transition-all justify-start">
                                <Button className="absolute ml-2 bg-transparent text-white font-semibold hover:text-black text-sm lg:text-lg" variant={'secondary'}>Dining</Button>
                                <img src={cafe} className="rounded-md" alt="cafe" />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1/2 flex items-center transition-all justify-start">
                                <Button className="absolute ml-2 bg-transparent text-white font-semibold hover:text-black text-sm lg:text-lg" variant={'secondary'}>Offers</Button>
                                <img src={hall} className="rounded-md" alt="hall" />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1/2 flex items-center transition-all justify-start">
                                <Button className="absolute ml-2 bg-transparent text-white font-semibold hover:text-black text-sm lg:text-lg" variant={'secondary'}>Gallery</Button>
                                <img src={hotel} className="rounded-md" alt="hotel" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <div className="md:flex-row px-6 md:px-10 gap-10 flex flex-col items-center justify-between mt-5">
                <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl lg:text-5xl island text-yellow-700">About Us</h3>
                    <h1 className=" island text-yellow-700 text-4xl md:text-6xl lg:text-8xl">PrecisionHub <span className="inter text-black lg:text-4xl font-semibold"> Hotel</span></h1>
                    <p className="text-sm tracking-wide inria font-medium">
                        Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and contemporary comfort, designed to captivate the senses and elevate your stay to unparalleled heights. <br />
                        A Symphony of Luxury: Step into a world where luxury isn't just a word; it's an experience woven into every thread of our exquisite interiors. From the moment you enter our grand lobby adorned with crystal chandeliers to the sumptuous comfort of your meticulously appointed room, you'll find a seamless fusion of style and sophistication. <br />
                        Unrivaled Comfort: Indulge in a night of unparalleled comfort in our plush, king-sized beds adorned with premium linens. Each room is a haven of tranquility, featuring state-of-the-art amenities, complimentary Wi-Fi, and panoramic views of the city skyline or our lush garden oasis. <br />
                        Gastronomic Delights: Savor the culinary masterpieces crafted by our award-winning chefs. Whether you're dining in our elegant restaurant, enjoying cocktails at the rooftop bar with panoramic city views, or indulging in room service, every bite is a journey through flavors that tantalize the taste buds.
                    </p>
                </div>
                <div className="w-full h-full">
                    <img src={about} className="rounded-full" alt="" />
                </div>
            </div>
            <div className="flex gap-6 flex-col md:flex-row items-center justify-center w-full h-full px-6 mt-10 md:px-10">
                <Box
                    title="Welcome"
                    subtitle="Enjoy Your Stay in Our Hotel"
                    description="Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and contemporary comfort, designed to captivate the senses and elevate your stay to unparalleled heights.
                    A Symphony of Luxury"
                    rounded="rounded-md"
                    bgColor="bg-neutral-200"
                />
                <section>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className='basis-1/2 text-black md:basis-1/3 flex items-center justify-center  '>
                                <p className="inria tracking-wide absolute md:text-lg
                                 font-bold  transition-all  z-10">Restuarent & Bar</p>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={bar} alt="bar" />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 md:basis-1/3 flex items-center justify-center '>
                                <p className=" z-10 inria absolute md:text-lg
                                 font-bold transition-all ">24Hrs Room Services</p>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={drinks} alt="bar" />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 md:basis-1/3 flex items-center justify-center '>
                                <p className=" z-10 inria tracking-wide absolute md:text-lg
                                 font-bold  transition-all ">Fitness & Spa</p>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={spa} alt="bar" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </section>
            </div>
            <div className="flex gap-6 flex-col md:flex-row items-center justify-center w-full h-full px-6 mt-10 md:px-10">
               <section>
                <Carousel>
                        <CarouselContent>
                            <CarouselItem className='basis-1/2 md:basis-1/4 flex items-center justify-center '>
                                <Button className="absolute top-3/4" variant={"secondary"}>
                                    $25.00
                                </Button>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={room1} alt="room" />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 md:basis-1/4 flex items-center justify-center '>
                                <Button className="absolute top-3/4" variant={"secondary"}>
                                    $25.00
                                </Button>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={room2} alt="room" />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 md:basis-1/4 flex items-center justify-center '>
                                <Button className="absolute top-3/4" variant={"secondary"}>
                                    $25.00
                                </Button>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={room3} alt="room" />
                            </CarouselItem>
                            <CarouselItem className='basis-1/2 md:basis-1/4 flex items-center justify-center '>
                                <Button className="absolute top-3/4" variant={"secondary"}>
                                    $25.00
                                </Button>
                                <img className="rounded-md hover:blur-sm cursor-pointer transition-all hover:scale-95" src={room4} alt="room" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
               </section>
                <Box
                    title="Welcome"
                    subtitle="New Suits For
                    You"
                    description="Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and contemporary comfort, designed to captivate the senses and elevate your stay to unparalleled heights.
                    A Symphony of Luxury"
                    rounded="rounded-md"
                    bgColor="bg-neutral-200"
                />
            </div>
        </main>
    )
}

export default Home