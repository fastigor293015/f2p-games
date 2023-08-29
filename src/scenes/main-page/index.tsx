import { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchGames from "@/hooks/useFetchGames";
import Container from "@/components/container";
import Layout from "@/components/layout/layout";
import GameCard from "@/components/game-card";
import Select, { SelectSection } from "@/components/select";
import SectionTitle from "@/components/section-title";
import MainPageSkeleton from "./skeleton";
import GameCardSkeleton from "@/components/skeletons/game-card-skeleton";

const platformItems: SelectSection[] = [
  {
    title: "Browse by platform:",
    items: [
      {
        value: "pc",
        label: "Windows (PC)",
        onClick: () => { }
      },
      {
        value: "browser",
        label: "Browser (Web)",
        onClick: () => { }
      },
      {
        value: "all",
        label: "All Platforms",
        onClick: () => { }
      },
    ]
  }
];

const genreItems: SelectSection[] = [
  {
    title: "Browse by genre:",
    items: [
      {
        value: "mmo",
        label: "MMO",
        onClick: () => { }
      },
      {
        value: "mmorpg",
        label: "MMORPG",
        onClick: () => { }
      },
      {
        value: "shooter",
        label: "Shooter",
        onClick: () => { }
      },
      {
        value: "strategy",
        label: "Strategy",
        onClick: () => { }
      },
      {
        value: "moba",
        label: "Moba",
        onClick: () => { }
      },
      {
        value: "card",
        label: "Card Games",
        onClick: () => { }
      },
      {
        value: "racing",
        label: "Racing",
        onClick: () => { }
      },
      {
        value: "sports",
        label: "Sports",
        onClick: () => { }
      },
      {
        value: "social",
        label: "Social",
        onClick: () => { }
      },
      {
        value: "fighting",
        label: "Fighting",
        onClick: () => { }
      },
      {
        value: "all",
        label: "All Genres",
        onClick: () => { }
      },
    ]
  },
  {
    title: "Popular tags:",
    items: [
      {
        value: "mmofps",
        label: "MMOFPS",
        onClick: () => { }
      },
      {
        value: "action-rpg",
        label: "Action RPG",
        onClick: () => { }
      },
      {
        value: "sandbox",
        label: "Sandbox",
        onClick: () => { }
      },
      {
        value: "open-world",
        label: "Open World",
        onClick: () => { }
      },
      {
        value: "survival",
        label: "Survival",
        onClick: () => { }
      },
      {
        value: "battle-royale",
        label: "Battle Royale",
        onClick: () => { }
      },
      {
        value: "mmotps",
        label: "MMOTPS",
        onClick: () => { }
      },
      {
        value: "anime",
        label: "Anime",
        onClick: () => { }
      },
      {
        value: "pvp",
        label: "PvP",
        onClick: () => { }
      },
      {
        value: "pve",
        label: "PvE",
        onClick: () => { }
      },
      {
        value: "pixel",
        label: "Pixel",
        onClick: () => { }
      },
      {
        value: "mmorts",
        label: "MMORTS",
        onClick: () => { }
      },
      {
        value: "fantasy",
        label: "Fantasy",
        onClick: () => { }
      },
      {
        value: "sci-fi",
        label: "Sci-Fi",
        onClick: () => { }
      },
      {
        value: "action",
        label: "Action",
        onClick: () => { }
      },
      {
        value: "voxel",
        label: "Voxel",
        onClick: () => { }
      },
      {
        value: "zombie",
        label: "Zombie",
        onClick: () => { }
      },
      {
        value: "turn-based",
        label: "Turn-Based",
        onClick: () => { }
      },
      {
        value: "first-person",
        label: "First Person View",
        onClick: () => { }
      },
      {
        value: "third-person",
        label: "Third Person View",
        onClick: () => { }
      },
      {
        value: "top-down",
        label: "Top-Down View",
        onClick: () => { }
      },
      {
        value: "3d",
        label: "3D Graphics",
        onClick: () => { }
      },
      {
        value: "2d",
        label: "2D Graphics",
        onClick: () => { }
      },
      {
        value: "tank",
        label: "Tank",
        onClick: () => { }
      },
      {
        value: "space",
        label: "Space",
        onClick: () => { }
      },
      {
        value: "sailing",
        label: "Sailing",
        onClick: () => { }
      },
      {
        value: "side-scroller",
        label: "Side Scroller",
        onClick: () => { }
      },
      {
        value: "superhero",
        label: "Superhero",
        onClick: () => { }
      },
      {
        value: "permadeath",
        label: "Permadeath",
        onClick: () => { }
      },
    ]
  }
];

const sortItems: SelectSection[] = [
  {
    title: "Sort By:",
    items: [
      {
        value: "relevance",
        label: "Relevance",
        onClick: () => { }
      },
      {
        value: "popularity",
        label: "Popularity",
        onClick: () => { }
      },
      {
        value: "release-date",
        label: "Release Date",
        onClick: () => { }
      },
      {
        value: "alphabetical",
        label: "Alphabetical",
        onClick: () => { }
      },
    ]
  }
];

const MainPage = () => {
  const { isLoading, data } = useFetchGames();
  const [cardsCount, setCardsCount] = useState(30);
  const displayedCards = useMemo(() => data.slice(0, cardsCount), [data, cardsCount]);

  const maxCardsReturned = 12;
  const skeletonCards = Array.apply(null, Array(maxCardsReturned)).map(() => { });
  const fetchMoreData = () => {
    setTimeout(() => {
      setCardsCount(prev => prev + maxCardsReturned);
    }, 1000);
  }

  return (
    <Layout>
      <Container>
        {isLoading ? (
          <MainPageSkeleton />
        ) : (
          <>
            <SectionTitle>Top Free Games for PC and Browser In 2023</SectionTitle>
            <p className="mb-5 text-muted-foreground">{data.length} free-to-play games found in our games list</p>
            <div className="flex items-center flex-wrap gap-4 mb-10">
              <Select sections={platformItems} defaultValue="all" placeholder="Select a platform:" />
              <Select sections={genreItems} defaultValue="all" placeholder="Select a genre:" />
              <Select sections={sortItems} defaultValue="relevance" placeholder="Sort By:" />
            </div>
            <InfiniteScroll
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              dataLength={displayedCards.length}
              next={fetchMoreData}
              hasMore={displayedCards.length < data.length}
              loader={(
                <>
                  {skeletonCards.map(() => (
                    <GameCardSkeleton />
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
          </>
        )}
      </Container>
    </Layout>
  );
}

export default MainPage;
