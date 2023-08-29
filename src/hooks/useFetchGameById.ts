import { useEffect, useState } from "react";
import axios, { type AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";
import { type GameDetails } from "@/types";

const options = (id: number): AxiosRequestConfig => ({
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: { id },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
});

const useFetchGameById = (id: string | number | undefined) => {
  const [data, setData] = useState<GameDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.request(options(id as number))
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    data
  }
};

export default useFetchGameById;
