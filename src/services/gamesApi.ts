import { GameDetails, GameItem } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api/",
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
      headers.set("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGames: builder.query<GameItem[], undefined>({
      query: () => "games",
    }),
    getGameById: builder.query<GameDetails, string>({
      query: (id) => ({
        url: "game",
        params: {
          id
        }
      })
    })
  }),
});

export const { useGetGamesQuery, useGetGameByIdQuery } = gamesApi;
