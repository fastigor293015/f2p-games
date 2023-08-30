import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import { FilterParams, useGetGamesQuery } from "@/services/gamesApi";
import Container from "@/components/shared/container";
import Layout from "@/components/layout/layout";
import GameCard from "@/components/shared/game-card";
import SectionTitle from "@/components/shared/section-title";
import GameCardSkeleton from "@/components/skeletons/game-card-skeleton";
import Filters from "@/components/filters";
import MainPageSkeleton from "./skeleton";
import qs from "query-string";
import { genreItems } from "@/lib/utils";

const MainPage = () => {
  const [params] = useSearchParams();
  const parsedParams = useMemo(() => qs.parse(params.toString()), [params]);
  const { data = [], isLoading, error } = useGetGamesQuery(parsedParams as FilterParams);
  const [cardsCount, setCardsCount] = useState(24);
  const displayedCards = useMemo(() => data.slice(0, cardsCount), [data, cardsCount]);

  useEffect(() => {
    if (error) toast.error("Something went wrong.");
  }, [error]);

  const maxCardsReturned = 12;
  const skeletonCards = Array.apply(null, Array(maxCardsReturned)).map(() => { });
  const fetchMoreData = () => {
    setTimeout(() => {
      setCardsCount(prev => prev + maxCardsReturned);
    }, 1000);
  }

  const platformLabel = useMemo(() => {
    const platform = params.get("platform");
    return platform === "pc" ? "PC" : platform === "browser" ? "Browser" : "PC and Browser";
  }, [params]);

  const categoryLabel = useMemo(() => {
    const category = genreItems
      .map((item) => item.items)
      .reduce((prev, cur) => [...prev, ...cur], [])
      .find((item) => item.value === params.get("category"))
      ?.label;
    return category || "";
  }, [params]);

  return (
    <Layout>
      <Container>
        {isLoading ? (
          <MainPageSkeleton />
        ) : error ? (
          <p>
            <i>
              Something went wrong.
            </i>
          </p>
        ) : (
          <>
            <SectionTitle>Top {categoryLabel} Free Games for {platformLabel} In 2023</SectionTitle>
            <p className="mb-5 text-muted-foreground">{data.length} free-to-play {categoryLabel} games found in our games list</p>
            <Filters />
            {data.length ? (
              <InfiniteScroll
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                dataLength={displayedCards.length}
                next={fetchMoreData}
                hasMore={displayedCards.length < data.length}
                loader={(
                  <>
                    {skeletonCards.map((_, i) => (
                      <GameCardSkeleton key={i} />
                    ))}
                  </>
                )}
              >
                <ul className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {displayedCards.map((card) => (
                    <li key={`${card.id}-${card.title}`}>
                      <GameCard
                        id={card.id}
                        title={card.title}
                        releaseDate={card.release_date}
                        publisher={card.publisher}
                        genre={card.genre}
                        img={card.thumbnail}
                      />
                    </li>
                  ))}
                </ul>
              </InfiniteScroll>
            ) : (
              <p>
                <i>
                  No games found.
                </i>
              </p>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export default MainPage;
