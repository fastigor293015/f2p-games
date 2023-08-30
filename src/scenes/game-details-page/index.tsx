import { useMemo, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import Layout from "@/components/layout/layout";
import Container from "@/components/container";
import ThumbsSlider from "@/components/thumbs-slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/section-title";
import GameDetailsPageSkeleton from "./skeleton";
import { useGetGameByIdQuery } from "@/services/gamesApi";

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const { data, isLoading } = useGetGameByIdQuery(gameId!);

  const screensUrls = useMemo(() => data?.screenshots.map((screen) => screen.image) || [], [data]);
  const slidesImgs = useMemo(() => data?.thumbnail ? [data?.thumbnail, ...screensUrls] : [], [screensUrls, data]);

  const additionalInfo = useMemo<{
    [key: string]: string;
  }>(() => ({
    "Genre": data?.genre || "???",
    "Developer": data?.developer || "???",
    "Publisher": data?.publisher || "???",
    "Release date": data?.release_date ? new Date(data?.release_date).toLocaleDateString("ru-RU") : "???",
    "Platform": data?.platform || "???",
  }), [data]);

  const systemRequirements = useMemo<{
    [key: string]: string;
  }>(() => ({
    "OS": data?.minimum_system_requirements?.os || "???",
    "Processor": data?.minimum_system_requirements?.processor || "???",
    "Memory": data?.minimum_system_requirements?.memory || "???",
    "Graphics": data?.minimum_system_requirements?.graphics || "???",
    "Storage": data?.minimum_system_requirements?.storage || "???",
  }), [data]);

  const ListItem: React.FC<{ item: [string, string] }> = ({ item }) => {
    return (
      <li className="flex items-center justify-between gap-6 py-2 text-right text-sm sm:text-base">
        <h3 className="font-medium text-muted-foreground">
          {item[0]}
        </h3>
        {item[1]}
      </li>
    )
  }

  return (
    <Layout>
      <Container>
        {isLoading ? (
          <GameDetailsPageSkeleton />
        ) : data ? (
          <>
            <Button size="lg" variant="outline" asChild className="inline-flex items-center gap-2 mb-4 rounded-lg text-base">
              <Link to="/">
                <MoveLeft />
                Back to list
              </Link>
            </Button>
            <SectionTitle>
              {data.title}
            </SectionTitle>
            <div className="grid grid-cols-2 gap-5 lg:gap-10">
              <div className="col-span-2 lg:col-span-1">
                <ThumbsSlider imgsList={slidesImgs} className="sticky top-[80px] mb-5" />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <h2 className="mb-3 font-medium text-2xl">About</h2>
                <p className="mb-5 text-sm sm:text-base">
                  {data.description}
                </p>
                <h2 className="mb-3 font-medium text-2xl">Additional Information</h2>
                <ul className="mb-5">
                  {Object.entries(additionalInfo!).map((entry, i) => (
                    <Fragment key={`${i}-${entry[0]}`}>
                      {i === 0 && <Separator />}
                      <ListItem item={entry} />
                      <Separator />
                    </Fragment>
                  ))}
                </ul>

                <h2 className="mb-3 font-medium text-2xl">Minimum System Requirements</h2>
                <ul>
                  {Object.entries(systemRequirements!).map((entry, i) => (
                    <Fragment key={`${i}-${entry[0]}`}>
                      {i === 0 && <Separator />}
                      <ListItem item={entry} />
                      <Separator />
                    </Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p>Cannot find information about this game.</p>
        )}
      </Container>
    </Layout>
  );
}

export default GameDetailsPage;
