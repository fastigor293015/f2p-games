import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { GameDetails, GameItem } from "@/types";

export interface FilterParams {
  [key: string]: string;
}

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api/",
      prepareHeaders(headers) {
        headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
        headers.set("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
        return headers;
      },
    }),
    {
      maxRetries: 3,
    }
  ),
  endpoints: (builder) => ({
    getGames: builder.query<GameItem[], FilterParams>({
      query: (params) => ({
        url: "games",
        params: { ...params },
      }),
    }),
    getGameById: builder.query<GameDetails, string>({
      query: (id) => ({
        url: "game",
        params: {
          id
        },
      }),
      keepUnusedDataFor: 5 * 60,
    })
  }),
});

export const { useGetGamesQuery, useGetGameByIdQuery } = gamesApi;
