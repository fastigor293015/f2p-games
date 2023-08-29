import { cn } from "@/lib/utils";
import { type Swiper } from "swiper/types";

interface PaginationProps {
  imgList: string[];
  swiper: Swiper | null;
  activeIndex: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ imgList, swiper, activeIndex, className }) => {
  if (!swiper) return null;

  return (
    <div className={cn("grid grid-cols-6 gap-3 sm:gap-5 mt-3 sm:mt-5", className)} style={{ gridTemplateColumns: `repeat(${imgList.length}, 1fr)` }}>
      {imgList?.map((img, i) => (
        <button
          key={`pagination-${i}-${img}`}
          className={cn(`
            group
            relative
            rounded-lg
            overflow-hidden
            after:content-normal
            after:absolute
            after:inset-0
            after:z-[1]
            after:rounded-lg
            after:border-2
            after:border-foreground
            after:opacity-0
            focus:after:opacity-100
          `,
            activeIndex === i && "after:opacity-100"
          )}
          aria-label={`Switch to slide №${i + 1}`}
          onClick={() => swiper.slideToLoop(i)}
        >
          <img
            className={cn(`
              opacity-50
              group-hover:opacity-100
              transition-opacity
            `,
              activeIndex === i && "opacity-100"
            )}
            src={img}
            alt="thumbnail" />
        </button>
      ))}
    </div>
  );
}

export default Pagination;
