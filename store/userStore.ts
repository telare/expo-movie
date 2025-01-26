import { Movie, Person } from "@/dataFetching.ts/APISlice";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  nickname: string;
  email: string;
  profileURL: string | null;
  favorite: {
    movies: Movie[];
    persons: Person[];
  };
  auth: boolean;

  setNickName: (by: string) => void;
  setEmail: (by: string) => void;
  setProfileURL: (by: string | null) => void;
  setFavorite: (by: Movie | Person) => void;
  setAuth: (by: boolean) => void;
};

export const userStore = create<User>()(
  persist(
    (set) => ({
      nickname: "",
      email: "",
      profileURL: null,
      favorite: {
        movies: [],
        persons: [],
      },
      auth: false,
      setNickName: (by) => set(() => ({ nickname: by })),
      setEmail: (by) => set(() => ({ email: by })),
      setProfileURL: (by) => set(() => ({ profileURL: by })),
      setFavorite: (by) =>
        set((state) => {
          if ("title" in by) {
            const index = state.favorite.movies.findIndex(
              (movie) => movie.id === by.id
            );
            if (index === -1) {
              return {
                favorite: {
                  ...state.favorite,
                  movies: [...state.favorite.movies, by as Movie],
                },
              };
            } else {
              state.favorite.movies.splice(index, 1);

              return {
                favorite: {
                  ...state.favorite,
                  movies: [...state.favorite.movies],
                },
              };
            }
          } else {
            return {
              favorite: {
                ...state.favorite,
                persons: [...state.favorite.persons, by as Person],
              },
            };
          }
        }),
      setAuth: (by) => set(() => ({ auth: by })),
    }),
    { name: "user-store" }
  )
);
