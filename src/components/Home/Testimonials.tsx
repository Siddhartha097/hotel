import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CarouselItem } from "../ui/carousel";

interface TestimonialsProps {
    title: string;
    subTitle: string;
    comment: string;
    avatar: string;
}


const Testimonials: React.FC<TestimonialsProps> = ({
    title,
    subTitle,
    comment,
    avatar,
}) => {
    return (
        <>
            <CarouselItem className="cursor-pointer space-y-5 basis-1/3 bg-neutral-100 shadow-md p-10 ml-5 text-sm ">
                <p className="text-sm">
                    {comment}
                </p>
                <div className="flex items-center justify-start space-x-4">
                    <Avatar>
                        <AvatarImage className="object-cover border-4 border-black" src={avatar} alt="user1" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{title}</h3>
                        <hr />
                        <h4 className="text-xs">{subTitle}</h4>
                    </div>
                </div>                          
            </CarouselItem>       
        </>
    )
}

export default Testimonials