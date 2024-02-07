
//components
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Hero from "./Hero";
import { Button } from "@/components/ui/button";

//images
import { pool, hall, hotel, cafe, bedroom, about } from "./images";



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
                    <h1 className=" island text-yellow-700 text-4xl md:text-6xl lg:text-8xl">PrecisionHub <span className="inter text-black lg:text-4xl"> Hotel</span></h1>
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
        </main>
    )
}

export default Home