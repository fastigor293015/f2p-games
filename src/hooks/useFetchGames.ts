import { useEffect, useState } from "react";
import axios, { type AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";
import { type GameItem } from "@/types";

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const useFetchGames = () => {
  const [data, setData] = useState<GameItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.request(options)
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

export default useFetchGames;
