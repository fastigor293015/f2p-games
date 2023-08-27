import { useSwiper } from "swiper/react";

interface PaginationProps {
  imgList: string[];
}

const Pagination: React.FC<PaginationProps> = ({ imgList }) => {
  const swiper = useSwiper();

  return (
    <div className="grid grid-cols-4 gap-5 mb-5">
      {imgList?.map((img, i) => (
        <button key={`pagination-${i}-${img}`} className="rounded-lg overflow-hidden" onClick={() => swiper.slideTo(i)}>
          <img src={img} alt="bullet" />
        </button>
      ))}
    </div>
  );
}

export default Pagination;
