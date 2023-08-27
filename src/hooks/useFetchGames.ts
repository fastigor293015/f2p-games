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

  useEffect(() => {
    console.log(import.meta.env.VITE_RAPID_API_KEY)
    axios.request(options)
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

export default useFetchGames;
