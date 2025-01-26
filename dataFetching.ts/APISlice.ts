import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ImageRequireSource } from "react-native";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
};
export type MovieDetails = {
  genres: {
    id: number;
    name: string;
  }[];
  production_companies: {
    name: string;
    origin_country: string;
  };
  runtime: number;
  homepage: string;
};

export type Person = {
  id: number;
  name: string;
  profile_path: string;
};
export type PersonDetails = {
  biography: string;
  birthday: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
};

export type Params = {
  object: "movie" | "search" | "person";
  type: "now_playing" | "top_rated";
  page: number;
};

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjEwM2E4NDBlYjE1ZjdiZmExZjMwODgxNjAxNDhiMSIsIm5iZiI6MTczNjkzMDY3Mi43ODQ5OTk4LCJzdWIiOiI2Nzg3NzU3MGFiYWJiYmEwNDBiYmM5N2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PvBXbLZZycv8CtkZ7cKgkGxw26M06aw9B-_Fq9YFuCQ"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //Movie
    getMovieLists: builder.query<
      { results: Movie[] },
      { type: "now_playing" | "top_rated"; page: number }
    >({
      query: ({ type, page }) =>
        `/movie/${type}?language=en-US&page=${page + 1}`,
    }),
    getMovieDetails: builder.query<Movie & MovieDetails, number>({
      query: (movie_id) => `movie/${movie_id}?language=en-US`,
    }),
    searchMovie: builder.query<{ results: Movie[] }, string>({
      query: (query) => `/search/movie?query=${query}`,
    }),

    getImgs: builder.query<
      string[],
      { type: "movie" | "person" | "tv"; id: number }
    >({
      query: ({ type, id }) => `/${type}/${id}/images`,
      transformResponse: (response: {
        backdrops: {
          file_path: string;
        }[];
      }) => {
        const newResp: string[] = response.backdrops.map(
          (path) => `https://image.tmdb.org/t/p/w500/${path.file_path}`
        );
        return newResp;
      },
    }),
    getMovie: builder.query<
      { results: Movie[] },
      {
        type: "now_playing" | "top_rated" | "search";
        page: number;
        query: string | null;
      }
    >({
      query: ({ type, page, query }) => {
        if (type !== "search") {
          return `/movie/${type}?language=en-US&page=${page + 1}`;
        } else {
          return `/search/movie?query=${query !== null ? query : ""}&page=${
            page + 1
          }`;
        }
      },
    }),
    addRating: builder.mutation<
      Movie,
      { id: number; to: "movie" | "tv"; body: { value: number } }
    >({
      query: ({ to, id,body }) => ({
        url: `/${to}/${id}/rating`,
        method: "POST",
        body:body
      }),
    }),

    //Person
    getPopularPerson: builder.query<{ results: Person[] }, number>({
      query: (page) => `person/popular?page=${page + 1}`,
    }),
    searchPerson: builder.query<{ results: Person[] }, string>({
      query: (query) => `/search/person?query=${query}`,
    }),
  }),
});

export const {
  useGetMovieListsQuery,
  useGetMovieDetailsQuery,
  useSearchMovieQuery,
  useAddRatingMutation,
  useGetImgsQuery,
  useGetMovieQuery,
} = movieApi;
