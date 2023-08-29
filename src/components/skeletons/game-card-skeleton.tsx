import { Skeleton } from "../ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[150px] mb-2" />
      <Skeleton className="h-6 mb-2" />
      <div className="flex items-center justify-between gap-2 text-muted-foreground">
        <Skeleton className="h-6 basis-[80px] max-w-[80px]" />
        <Skeleton className="h-6 basis-[77px] w-[77px]" />
      </div>
    </div>
  );
}

export default GameCardSkeleton;
