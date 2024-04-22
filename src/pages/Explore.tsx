import ExploreCard from "@/components/ExploreCard";
import { VisitingPlaces } from "@/data";

const Explore = () => {
  return (
    <main className="container py-10 flex flex-col gap-16">
      <section className="flex flex-col gap-10 items-center text-center">
        <h1 className="text-7xl max-md:text-5xl tracking-tight island font-medium text-yellow-700">
          Explore Kolkata
        </h1>
        <p className="tracking-wide inria max-md:text-sm">
          Embark on a sensory odyssey as you explore the vibrant tapestry of
          Kolkata's cityscape. Wander through the historical lanes adorned with
          colonial architecture, where time seems to stand still. Immerse
          yourself in the bustling markets, filled with the aroma of spices and
          the vibrant colors of handwoven textiles. Marvel at the majestic
          Victoria Memorial and Howrah Bridge, iconic symbols of the city's rich
          heritage. Indulge your taste buds in delectable street food, savoring
          the essence of Bengali cuisine. As day turns to night, witness the
          city come alive with dazzling lights, revealing the soul-stirring
          beauty of Kolkata's enchanting panorama
        </p>
        <div className="flex flex-col space-y-2 font-medium text-8xl max-md:text-6xl tracking-tight island">
          <h2>Top Attractions in Kolkata </h2>
          <h1>(Calcutta)</h1>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between gap-10">
        {VisitingPlaces.map((rows) => (
          <section
            className="flex items-center justify-between gap-5"
            key={rows.id}
          >
            {rows.list.map((place) => (
              <ExploreCard
                className="w-1/4"
                key={place.id}
                title={place.title}
                content={place.content}
                author={place.author}
                rating={place.rating}
              />
            ))}
          </section>
        ))}
      </section>
    </main>
  );
};

export default Explore;

{
  /* <Card className="p-2">
          <CardHeader>
            <img className="rounded-lg" src={story1} alt="cardImg" />
          </CardHeader>
          <CardContent className="bg-black rounded-lg text-white inria px-4 py-2 space-y-4">
            <h1 className="text">1.Victoria Memorable Hall</h1>
            <div className="space-y-4">
              <p>4.5 stars</p>
              <div className="flex items-center gap-4">
                <Avatar className="">
                  <AvatarImage src={user1} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>By Rahim Sheikh</p>
              </div>
              <p className="text-xs">
                Embark on a sensory odyssey as you explore the vibrant tapestry
                of Kolkata's cityscape. Wander through the historical lanes
                adorned with colonial architecture, seems stand still.
              </p>
            </div>
          </CardContent>
        </Card> */
}
