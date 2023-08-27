import Layout from "@/components/layout/layout";
import { useParams } from "react-router-dom";
import useFetchGameById from "@/hooks/useFetchGameById";
import Container from "@/components/container";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import Pagination from "@/components/swiper/pagination";

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const { data } = useFetchGameById(gameId);

  if (!data) return null;
  const screensUrls = data?.screenshots.map((screen) => screen.image);
  const slidesImgs = [data?.thumbnail, ...screensUrls];

  return (
    <Layout>
      <Container className="grid grid-cols-12 gap-10">
        <div className="col-span-6">
          <Swiper
            className="rounded-lg overflow-hidden"
            lazyPreloadPrevNext={2}
            modules={[Pagination]}
            spaceBetween={50}
            // slidesPerView={3}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slidesImgs.map((img, i) => (
              <SwiperSlide key={`${i}-${img}`} className="rounded-lg overflow-hidden">
                <img src={img} alt="thumbnail" />
              </SwiperSlide>
            ))}
            <Pagination imgList={slidesImgs} />
          </Swiper>

        </div>

        <div className="col-span-6">

        </div>
      </Container>
    </Layout>
  );
}

export default GameDetailsPage;
