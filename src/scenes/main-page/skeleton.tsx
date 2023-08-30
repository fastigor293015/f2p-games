import GameCardSkeleton from "@/components/skeletons/game-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const MainPageSkeleton = () => {
  const skeletonCards = Array.apply(null, Array(12)).map(() => { });

  return (
    <>
      <Skeleton className="h-[35px] md:h-12 max-w-[800px] mb-5" />
      <Skeleton className="h-6 max-w-[300px] mb-5" />
      <div className="grid grid-cols-3 items-center gap-4 max-w-[782px] mb-10">
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skeletonCards.map((_, i) => (
          <GameCardSkeleton key={i} />
        ))}
      </ul>
    </>
  );
}

export default MainPageSkeleton;
