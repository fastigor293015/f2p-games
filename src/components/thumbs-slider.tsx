import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Navigation from "@/components/swiper/navigation";
import Pagination from "@/components/swiper/pagination";
import { type Swiper as SwiperType } from "swiper/types";
import "swiper/css";

interface ThumbsSliderProps {
  imgsList: string[];
  className: string;
}

const ThumbsSlider: React.FC<ThumbsSliderProps> = ({ imgsList, className }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <Swiper
        className="group rounded-lg overflow-hidden"
        lazyPreloadPrevNext={2}
        spaceBetween={20}
        loop={true}
        onSlideChange={(swiper) => {
          setSwiper(swiper);
          setActiveIndex(swiper.realIndex);
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {imgsList.map((img, i) => (
          <SwiperSlide key={`${i}-${img}`} className="rounded-lg overflow-hidden">
            <img className="h-full" src={img} alt="thumbnail" />
          </SwiperSlide>
        ))}
        <Navigation swiper={swiper} />
      </Swiper>
      <Pagination imgList={imgsList} swiper={swiper} activeIndex={activeIndex} />
    </div>
  );
}

export default ThumbsSlider;
