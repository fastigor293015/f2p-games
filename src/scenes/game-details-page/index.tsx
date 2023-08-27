import Layout from "@/components/layout";
import { useParams } from "react-router-dom";
import useFetchGameById from "@/hooks/useFetchGameById";
import Container from "@/components/container";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const { data } = useFetchGameById(gameId);

  if (!data) return null;

  return (
    <Layout>
      <Container className="grid grid-cols-12 gap-10">
        <div className="col-span-6 rounded-lg overflow-hidden">
          {/* <img src={data.thumbnail} alt="thumbnail" /> */}
          <Swiper
            spaceBetween={50}
            // slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={data.thumbnail} alt="thumbnail" />
            </SwiperSlide>
            {data.screenshots.map((screen) => (
              <SwiperSlide key={screen.id}>
                <img src={screen.image} alt="thumbnail" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-span-6">

        </div>
      </Container>
    </Layout>
  );
}

export default GameDetailsPage;
