import { CarouselItem } from "../ui/carousel";


interface FeaturesProps {
    img: string;
    label: string;
}

const Features: React.FC<FeaturesProps> = ({
    img,
    label,
}) => {
    return (
        <>
            <CarouselItem className='basis-1/2 relative text-black md:basis-1/3 flex items-center justify-center  '>
                <p className="inria w-min md:w-fit tracking-wide absolute md:text-lg font-bold  transition-all z-10">{label}</p>
                <img className="rounded-md cursor-pointer transition-all scale-90 hover:scale-100" src={img} alt="bar" />
            </CarouselItem>
        </>
    )
}

export default Features