import { story1, user1 } from "@/pages/images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface ExploreCardProps {
  title: string;
  rating?: string;
  headerImage?: string | undefined;
  avatarImage?: string;
  author?: string;
  content?: string;
  className?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  rating,
  headerImage = story1,
  avatarImage = user1,
  author = "ABC",
  content = "Embark on a sensory odyssey as you explore the vibrant tapestry of Kolkata's cityscape. Wander through the historical lanes adorned with colonial architecture, seems stand still.",
  className,
}) => {
  return (
    <Card className={cn("p-2 flex flex-col items-center justify-center gap-2 h-[65vh]", className)}>
      <CardHeader className="h-[25vh]">
        <img className="rounded-lg overflow-hidden" src={headerImage} alt="cardImg" />
      </CardHeader>
      <CardContent className="bg-black rounded-lg text-white inria p-4 space-y-4 h-full">
        <h1 className="text">{title}</h1>
        <div className="space-y-4">
          <p className="text-xs flex items-center gap-[5px]">{rating} <StarIcon size={12} /></p>
          <div className="flex items-center gap-4">
            <Avatar className="">
              <AvatarImage src={avatarImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-xs">By {author}</p>
          </div>
          <p className="text-xs">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExploreCard;
