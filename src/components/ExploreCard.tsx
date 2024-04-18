import { story1, user1 } from "@/pages/images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";

interface ExploreCardProps {
  title: string;
  rating?: string;
  headerImage?: string | undefined;
  avatarImage?: string;
  author?: string;
  content?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  rating,
  headerImage = story1,
  avatarImage = user1,
  author = "ABC",
  content,
}) => {
  return (
    <Card className="p-2">
      <CardHeader>
        <img className="rounded-lg" src={headerImage} alt="cardImg" />
      </CardHeader>
      <CardContent className="bg-black rounded-lg text-white inria px-4 py-2 space-y-4">
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
          <p className="text-xs">
            {content}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExploreCard;
