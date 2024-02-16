import { Button } from "../ui/button"
import { CarouselItem } from "../ui/carousel"

interface RoomsProps {
    price: number;
    name: string;
    img: string;
}

const Rooms: React.FC<RoomsProps> = ({
    price,
    name,
    img,
}) => {
    return (
        <>
            <CarouselItem className='basis-1/2 relative md:basis-1/4 inria font-semibold flex items-center justify-center flex-col'>
                <Button className="absolute bg-yellow-600 z-10 " variant={"secondary"}>
                    ${price}.00
                </Button>
                <img className="rounded-md cursor-pointer transition-all scale-95 hover:scale-100" src={img} alt="room" />
                <p>{name}</p>
            </CarouselItem>
        </>
    )
}

export default Rooms