import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const GameDetailsPageSkeleton = () => {
  const skeletonItems = Array.apply(null, Array(5)).map(() => { });

  const ListItem = () => {
    return (
      <li className="grid grid-cols-[100px_70px] items-center justify-between gap-6 py-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </li>
    )
  }

  return (
    <>
      <Skeleton className="h-11 w-[175px] mb-4" />
      <Skeleton className="h-[35px] md:h-12 max-w-[300px] mb-5" />
      <div className="grid grid-cols-2 gap-5 lg:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="sticky top-[90px] grid grid-cols-4 grid-rows-[200px_40px] sm:grid-rows-[400px_80px] gap-3 sm:gap-5">
            <Skeleton className="col-span-4" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Skeleton className="h-6 max-w-[150px] mb-3" />
          <Skeleton className="h-36 sm:h-48 mb-5" />
          <Skeleton className="h-6 max-w-[150px] mb-3" />
          <ul className="mb-5">
            {skeletonItems.map((_, i) => (
              <Fragment key={i}>
                {i === 0 && <Separator />}
                <ListItem />
                <Separator />
              </Fragment>
            ))}
          </ul>

          <Skeleton className="h-6 max-w-[150px] mb-3" />
          <ul>
            {skeletonItems.map((_, i) => (
              <Fragment key={i}>
                {i === 0 && <Separator />}
                <ListItem />
                <Separator />
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default GameDetailsPageSkeleton;
