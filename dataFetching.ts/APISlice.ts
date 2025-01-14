import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
export type MovieResponse = {
  results: Movie[];
};

export type Person = {
  id: number;
  name: string;
};
export type PersonDetails = {
  biography: string;
  birthday: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
};
type PersonResponse = {
  results: Person[];
};

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmJiYjliNjI3ZmVkMTczNGU0ZWJkMmY1NmY0NGVmMCIsIm5iZiI6MTczNjcwNjc1NS4wODE5OTk4LCJzdWIiOiI2Nzg0MGFjMzE0MzFlMDU5MWFiYjkyOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xs0o2K-s2WQzOjSjuxeOLzEeIvRInmwzYAsxbDuYCIg"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNowPlayingMovie: builder.query<MovieResponse, string>({
      query: (region) =>
        `movie/now_playing?language=en-US&page=1&region=${region}`,
    }),
    getTopRatedMovie: builder.query<MovieResponse, string>({
      query: () => `movie/top_rated?language=en-US&page=1`,
    }),
    getMovieByTitle: builder.query<MovieResponse, string>({
      query: (title) => `search/movie?query=${title}&language=en-US&page=1`,
    }),
    getPopularPerson: builder.query<PersonResponse, string>({
      query: () => `person/popular?language=en-US&page=1`,
    }),

    getMovieInfo: builder.query<Movie & MovieDetails, string>({
      query: (movie_id) => `movie/${movie_id}?&language=en-US`,
    }),
    getPersonInfo: builder.query<Person & PersonDetails, string>({
      query: (person_id) => `person/${person_id}?&language=en-US`,
    }),
  }),
});
export const {
  useGetNowPlayingMovieQuery,
  useGetTopRatedMovieQuery,
  useGetPopularPersonQuery,
  useGetMovieByTitleQuery,
  useGetMovieInfoQuery,
  useGetPersonInfoQuery,
} = movieApi;
