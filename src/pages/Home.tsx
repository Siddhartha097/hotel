
//components
import Box from "@/components/Home/Box";
import Testimonials from "@/components/Home/Testimonials";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, } from "@/components/ui/carousel";
import Rooms from "@/components/Home/Rooms";
import Options from "@/components/Home/Options";
import Hero from "./Hero";

//images
import { about, bar, bedroom, cafe, drinks, food, ghat, hall, hotel, pool, room1, room2, room3, room4, spa, user1, user2, victoria } from "./images";
import Features from "@/components/Home/Features";
import Enquiry from "@/components/Home/Enquiry";

const Home = () => {
    return (
        <main className="w-full h-full mb-10">
            <Hero />

            {/* Hotel Options */}
            <div className=" px-6 mt-0 md:px-10 ">
                <img src={pool} className="object-contain rounded-b-md" alt="pool" />
                <div className=" flex pt-2 items-center justify-between space-x-6">
                    <Carousel>
                        <CarouselContent className="cursor-grab">
                            <Options
                                name="Our Rooms"
                                img={bedroom}
                            />
                            <Options
                                name="Dinning"
                                img={cafe}
                            />
                            <Options
                                name="Offers"
                                img={hall}
                            />
                            <Options
                                name="Gallery"
                                img={hotel}
                            />
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            {/* About Us */}
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

            {/* Features */}
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
                            <Features 
                                img={bar}
                                label="Restuarent & Bar"
                            />
                            <Features 
                                img={drinks}
                                label="24Hrs Room Services"
                            />
                            <Features 
                                img={spa}
                                label="Fitness & Spa"
                            />
                           
                        </CarouselContent>
                    </Carousel>
                </section>
            </div>

            {/* Rooms */}
            <div className="flex gap-6 flex-col-reverse md:flex-row items-center justify-center w-full h-full px-6 mt-10 md:px-10">
                <section className="flex flex-col-reverse gap-5 md:flex-col">
                    <Button className="text-xl w-fit px-8 py-6 bg-[#B26C02] text-black inria font-semibold hover:bg-neutral-400">View All Rooms</Button>
                    <Carousel>
                        <CarouselContent>
                            <Rooms
                                price={25}
                                img={room1}
                                name="President Suite"
                            />
                            <Rooms
                                price={20}
                                img={room2}
                                name="Single BedRoom"
                            />
                            <Rooms
                                price={19}
                                img={room3}
                                name="Double BedRoom"
                            />
                            <Rooms
                                price={35}
                                img={room4}
                                name="Twin BedRoom"
                            />
                            
                        </CarouselContent>
                    </Carousel>
                </section>
                <section className="flex flex-col items-end gap-5 basis-3/5">
                    <h1 className="text-[#B26C02] inria text-3xl font-bold">
                        Accomodation Room for Luxuary Stay
                    </h1>
                    <Box
                        title="Welcome"
                        subtitle="New Suits For You"
                        description="Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and contemporary comfort, designed to captivate the senses and elevate your stay to unparalleled heights. A Symphony of Luxury"
                        rounded="rounded-md"
                        bgColor="bg-neutral-200"
                    />
                </section>
            </div>

            {/* Food Court */}
            <div className="flex gap-6 flex-col inria items-center justify-center w-full h-full px-6 mt-10 md:px-10">
                <h1 className="text-4xl lg:text-5xl text-[#B26C02] font-bold">Food Court</h1>
                <p className="text-center text-sm ">
                    Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and contemporary comfort, designed to captivate the senses and elevate your stay to unparalleled heights.
                    A Symphony of Luxury: Step into a world where luxury isn't just a word; it's an experience woven into every thread of our exquisite interiors. From the moment you enter our grand lobby adorned with crystal chandeliers to the sumptuous comfort of your meticulously appointed room, you'll find a seamless fusion of style and sophistication.
                </p>
            </div>

            {/* Menu */}
            <div className="flex flex-col inria px-6 mt-10 md:px-10 w-full md:flex-row">
                <Box 
                    title="Delicious"
                    subtitle="Taste & Enjoy Best Food"
                    description="Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and contemporary comfort, designed to captivate the senses and elevate your stay to unparalleled heights. A Symphony of Luxury."
                    bgColor="bg-[#E8B587A1]"
                />
                <div className="relative w-full h-full">
                    <div className={`absolute  max-md:relative flex-col flex p-10 max-md:p-6 items-center space-y-6 justify-center bg-black/50 max-md:bg-black h-full w-full z-10`}>
                        <h1 className="text-3xl max-md:text-2xl text-[#B22D02] font-semibold">Our Restuarent Menu</h1>
                        <p className="text-white text-sm text-center">
                            Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and  heights.
                        </p>
                        <ul className="flex w-full px-10 max-md:px-5 items-center justify-between space-x-6 text-2xl max-md:text-xl text-white">
                            <li>Mains</li>
                            <li>Deserts</li>
                            <li>Drinks</li>
                        </ul>
                    </div>
                    <img className="object-fill" src={food} alt="food" />
                </div>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col py-6 md:py-10 lg:py-12 max-md:space-y-8 space-x-8 inria px-6 mt-10 md:px-10 w-full md:flex-row bg-[#D9D9D9]">
                <section className=" md:basis-3/4">
                    <Box 
                        title="Testimonial"
                        subtitle="What They Say About Us !"
                        description="Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and"
                        bgColor="bg-neutral-200"
                        rounded="rounded-md"
                    />
                </section>
                <section className="">
                    <Carousel>
                        <CarouselContent className="">
                            <Testimonials 
                                title="TRIDIB PAL"
                                subTitle="UI/UX Designer"
                                avatar={user1}
                                comment="  Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and "
                            />
                            <Testimonials 
                                title="AVIJIT MAITY"
                                subTitle="Director"
                                avatar={user2}
                                comment="  Discover a realm of opulence and refinement at Luxe Haven Retreat, where we redefine the art of hospitality. Nestled in the heart of [City], our hotel is a sanctuary of timeless elegance and "
                            />
                        </CarouselContent>
                    </Carousel>
                </section>
            </div>

            {/* Enquiry */}
            <div className='flex justify-center flex-col py-6 md:py-10 lg:py-12 max-md:space-y-8 space-x-8 inria px-6 mt-10 md:px-10 w-full md:flex-row'>
               <section className="bg-[#5856562e] w-1/3 shadow-md px-10 py-6 rounded-lg">
                    <h1 className="text-5xl font-bold my-6">Enquiry</h1>
                    <Enquiry />
               </section>
               <section className="bg-[#000000A8] w-1/3 rounded-lg py-10 max-md:py-6 px-10 max-md:px-6">
                    <div className="text-center">
                        <h1 className="text-white text-5xl inria">Explore the Tourism Spot Near By </h1>
                        <h2 className="island mt-5 text-[#B26C02] text-5xl">
                            PrecisionHub 
                            <br />
                            <span className="inria text-black">Hotel</span>
                        </h2>
                        <img className="rounded-lg my-5" src={victoria} alt="victoria" />
                        <img className="rounded-lg my-5" src={ghat} alt="ghat" />
                        <Button className="text-[#B26C02] bg-transparent border border-[#B26C02] uppercase transition-all px-10 hover:bg-[#B26C02] shadow-md hover:border-black py-4 w-fit" variant={`outline`}>Explore More</Button>
                    </div>
               </section>
               <section className="shadow-md rounded-lg flex items-center justify-center px-10 py-5 bg-neutral-300 w-1/3">
                    <h1 className="inria text-6xl">Map</h1>
               </section>
            </div>    
        </main>
    )
}

export default Home