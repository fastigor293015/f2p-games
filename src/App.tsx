import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

import './App.css'
import ErrorPage from './scenes/ErrorPage';
import MainPage from './scenes/MainPage';
import GameDetailsPage from './scenes/GameDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:gameName",
    element: <GameDetailsPage />,
  }
])

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
  params: {
    tag: '3d.mmorpg.fantasy.pvp',
    platform: 'pc'
  },
  headers: {
    'X-RapidAPI-Key': '8b4adb30bamsh3d8012d92eb65e8p127d56jsna6fc9abc7b4a',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

function App() {
  useEffect(() => {
    axios.request(options)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
