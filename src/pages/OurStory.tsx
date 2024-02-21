import { story2, story1 } from "./images"


const OurStory = () => {
    return (
        <div className="py-20 px-16">
            <div className="flex-col space-y-8">
                <h1 className="text-8xl text-[#B26C02] text-center island ">Our Story</h1>
                <div className="flex items-start w-full justify-between">
                    <p className="inria w-1/3 text-lg font-semibold">
                        In the heart of the bustling city, our hotel stands as a testament to a story woven with passion, elegance, and a commitment to creating memorable experiences. From its inception, our founders envisioned a haven where every guest is not just a visitor but a cherished part of our narrative. The lobby, adorned with contemporary art and bathed in soft, welcoming light, tells the tale of a place that values sophistication and warmth in equal measure. Each room unfolds a chapter of comfort, with meticulously chosen furnishings and panoramic windows offering glimpses of both the vibrant cityscape and our serene garden retreat. Our culinary journey, inspired by local flavors and global influences, speaks to the diverse tastes of our guests, adding yet another layer to our unfolding narrative. Beyond the luxurious amenities, it's our dedicated team that breathes life into our story, ensuring every guest feels like a character in a tale of impeccable service and genuine hospitality. From the moment you step through our doors, you become part of the narrative—a story of comfort, indulgence, and the timeless allure of our hotel. Welcome to a chapter that begins with you.
                    </p>
                    <div className="relative w-1/2">
                        <div className="rotate-[30] w-80">
                            <img className="rounded-[100px]" src={story1} alt="story1" />
                        </div>
                        <div className="rotate-[30] absolute top-1/4 -z-10 left-1/4 w-96 max-h-screen">
                            <img className="rounded-[100px]" src={story2} alt="story2" />
                        </div>
                        {/* <img className="absolute w-1/2 rotate-45" src={story2} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory