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

  useEffect(() => {
    console.log(import.meta.env.VITE_RAPID_API_KEY)
    axios.request(options(id as number))
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => toast.error(err));
  }, []);

  return {
    data
  }
};

export default useFetchGameById;
