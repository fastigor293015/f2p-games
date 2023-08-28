import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchGameById from "@/hooks/useFetchGameById";
import { Swiper, SwiperSlide } from 'swiper/react';
import Navigation from "@/components/swiper/navigation";
import Pagination from "@/components/swiper/pagination";
import Layout from "@/components/layout/layout";
import Container from "@/components/container";

import "swiper/css";
import { type Swiper as SwiperType } from "swiper/types";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const { data } = useFetchGameById(gameId);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const screensUrls = useMemo(() => data?.screenshots.map((screen) => screen.image) || [], [data]);
  const slidesImgs = useMemo(() => data?.thumbnail ? [data?.thumbnail, ...screensUrls] : [], [screensUrls, data]);

  return (
    <Layout>
      <Container>
        {data && (
          <>
            <Button asChild className="inline-flex items-center gap-2 mb-5 rounded-lg">
              <Link to="/">
                <MoveLeft />
                Back to list
              </Link>
            </Button>
            <h2 className="mb-5 font-medium text-[50px]">
              {data.title}
            </h2>
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-6">
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
                  {slidesImgs.map((img, i) => (
                    <SwiperSlide key={`${i}-${img}`} className="rounded-lg overflow-hidden">
                      <img src={img} alt="thumbnail" />
                    </SwiperSlide>
                  ))}
                  <Navigation swiper={swiper} />
                </Swiper>
                <Pagination className="mb-5" imgList={slidesImgs} swiper={swiper} activeIndex={activeIndex} />
                <p className="text-xl">
                  {data.description}
                </p>
              </div>

              <div className="col-span-6">
                <ul>
                  <Separator />
                  <li className="flex items-center justify-between py-2">
                    <h3 className="text-muted-foreground">
                      Developer
                    </h3>
                    {data.developer}
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between py-2">
                    <h3 className="text-muted-foreground">
                      Release date
                    </h3>
                    {new Date(data.release_date).toLocaleDateString("ru-RU")}
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between py-2">
                    <h3 className="text-muted-foreground">
                      Platform
                    </h3>
                    {data.platform}
                  </li>
                  <Separator />
                </ul>
              </div>
            </div>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default GameDetailsPage;
