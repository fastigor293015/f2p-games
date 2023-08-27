import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
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
    path: "/game/:gameId",
    element: <GameDetailsPage />,
  }
])

function App() {
  const { mode } = useAppSelector(state => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");

    if (mode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(mode);
  }, [mode]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
