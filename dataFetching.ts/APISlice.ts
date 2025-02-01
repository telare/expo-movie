import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
export type Tv = {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
};
export type Person = {
  id: number;
  name: string;
  profile_path: string;
};
export type MovieDetails = {
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  release_date: string;
  production_companies: {
    name: string;
    origin_country: string;
  };
  runtime: number;
};

export type TvDetails = {
  created_by: {
    id: number;
    name: string;
  }[];

  first_air_date: string;
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: {
    name: string;
    origin_country: string;
  };
};

export type PersonDetails = {
  biography: string;
  birthday: string;
  known_for_department: string;
  place_of_birth: string;
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
    //General
    getTrending: builder.query<
      Movie[] | Person[] | Tv[],
      { page: number; type: "movie" | "person" | "tv" }
    >({
      query: ({ page, type }) =>
        `trending/${type}/day?language=en-US&page=${page + 1}`,
      transformResponse: (response: { results: Movie[] | Person[] | Tv[] }) => {
        const result: Movie[] | Person[] | Tv[] = response.results.slice(0, 4);
        return result;
      },
    }),

    getDetails: builder.query<
      (Movie & MovieDetails) | (Tv & TvDetails) | (Person & PersonDetails),
      { type: string; id: number }
    >({
      query: ({ type, id }) => `/${type}/${id}?language=en-US`,
    }),

    getImgs: builder.query<
      string[],
      { type: "movie" | "person" | "tv"; id: number }
    >({
      query: ({ type, id }) => `/${type}/${id}/images`,
      transformResponse: (
        response:
          | {
              backdrops: {
                file_path: string;
              }[];
            }
          | {
              profiles: {
                file_path: string;
              }[];
            }
      ) => {
        if ("backdrops" in response) {
          const newResp: string[] = response.backdrops.map(
            (path) => `https://image.tmdb.org/t/p/w500/${path.file_path}`
          );
          return newResp;
        } else {
          const newResp: string[] = response.profiles.map(
            (path) => `https://image.tmdb.org/t/p/w500/${path.file_path}`
          );
          return newResp;
        }
      },
    }),

    //Movies

    searchMovie: builder.query<{ results: Movie[] }, string>({
      query: (query) => `/search/movie?query=${query}`,
    }),
    addRating: builder.mutation<
      Movie | Tv,
      { id: number; to: string; body: { value: number } }
    >({
      query: ({ to, id, body }) => ({
        url: `/${to}/${id}/rating`,
        method: "POST",
        body: body,
      }),
    }),

    //TV
    searchTv: builder.query<{ results: Tv[] }, string>({
      query: (query) => `/search/tv?query=${query}`,
    }),

    //Persons
    searchPersons: builder.query<{ results: Movie[] }, string>({
      query: (query) => `/search/person?query=${query}`,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetDetailsQuery,
  useSearchPersonsQuery,
  useAddRatingMutation,
  useGetImgsQuery,
} = movieApi;
