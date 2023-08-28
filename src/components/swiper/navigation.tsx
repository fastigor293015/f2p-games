import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Swiper } from "swiper/types";

interface NavigationProps {
  swiper: Swiper | null;
}

const Navigation: React.FC<NavigationProps> = ({ swiper }) => {
  if (!swiper) return null;

  return (
    <div className="absolute z-[1] inset-0 text-white pointer-events-none">
      <button
        className="
          absolute
          top-0
          left-0
          bottom-0
          flex
          items-center
          justify-center
          w-14
          bg-gradient-to-r
          from-black/40
          to-black/0
          pointer-events-auto
          opacity-0
          -translate-x-6
          transition-[opacity,transform]
          group-hover:opacity-100
          group-hover:translate-x-0
          focus:opacity-100
          focus:translate-x-0
        "
        aria-label="Previous slide"
        onClick={() => swiper.slidePrev()}
      >
        {/* <button onClick={() => swiper.slidePrev()}> */}
        <ChevronLeft size={35} />
        {/* </button> */}
      </button>
      <button
        className="
          absolute
          top-0
          right-0
          bottom-0
          flex
          items-center
          justify-center
          w-14
          bg-gradient-to-l
          from-black/40
          to-black/0
          pointer-events-auto
          opacity-0
          translate-x-6
          transition-[opacity,transform]
          group-hover:opacity-100
          group-hover:translate-x-0
          focus:opacity-100
          focus:translate-x-0
        "
        aria-label="Next slide"
        onClick={() => swiper.slideNext()}
      >
        {/* <button onClick={() => swiper.slideNext()}> */}
        <ChevronRight size={35} />
        {/* </button> */}
      </button>
    </div>
  );
}

export default Navigation;
