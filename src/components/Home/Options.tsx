import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";


interface OptionsProps {
    name: string;
    img: string;
}

const Options: React.FC<OptionsProps> = ({
    name,
    img,
}) => {
    return (
        <>
            <CarouselItem className="md:basis-1/3 relative lg:basis-1/4 basis-1/2 flex items-center transition-all justify-start">
                <Button className="absolute ml-2 bg-transparent text-white font-semibold text-sm lg:text-lg hover:text-black" variant={'secondary'}>{name}</Button>
                <img src={img} className="rounded-md" alt="bedroom" />
            </CarouselItem>
        </>
    )
}

export default Options