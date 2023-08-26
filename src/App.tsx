import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

import ErrorPage from './scenes/error-page';
import MainPage from './scenes/main-page';
import GameDetailsPage from './scenes/game-details-page';

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
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
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
    // <div className="overflow-x-hidden overflow-y-auto">
    <RouterProvider router={router} />
    // </div>
  )
}

export default App
