import { story1, user1 } from "@/pages/images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

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
    <Card className={cn("p-2 flex flex-col gap-5 h-[64vh]", className)}>
      <CardHeader className="">
        <img className="rounded-lg overflow-hidden" src={headerImage} alt="cardImg" />
      </CardHeader>
      <CardContent className="bg-black rounded-lg text-white inria px-4 py-2 space-y-4 w-full h-full">
        <h1 className="text">{title}</h1>
        <div className="space-y-4">
          <p>{rating} stars</p>
          <div className="flex items-center gap-4">
            <Avatar className="">
              <AvatarImage src={avatarImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>By {author}</p>
          </div>
          <p className="text-xs">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExploreCard;
