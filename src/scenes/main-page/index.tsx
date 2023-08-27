import useFetchGames from "@/hooks/useFetchGames";
import Container from "@/components/container";
import Layout from "@/components/layout";
import GameCard from "@/components/game-card";
import Select from "@/components/select";

const MainPage = () => {
  const { data } = useFetchGames();

  return (
    <Layout>
      <Container>
        <div className="flex items-center gap-8 mb-10">
          <Select />
          <Select />
          <Select />
        </div>
        <ul className="grid grid-cols-6 gap-6">
          {data.slice(0, 10).map((card) => (
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
      </Container>
    </Layout>
  );
}

export default MainPage;
