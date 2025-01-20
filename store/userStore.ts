
import { Movie, Person } from "@/dataFetching.ts/APISlice";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  nickname: string;
  email: string;
  profileURL: string | null;
  favorite:(Movie | Person)[]
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
      favorite: [],
      auth: false,
      setNickName: (by) => set(() => ({ nickname: by })),
      setEmail: (by) => set(() => ({ email: by })),
      setProfileURL: (by) => set(() => ({ profileURL:by })),
      setFavorite:(by) =>set((state)=>({favorite:[...state.favorite, by]})),
      setAuth: (by) => set(() => ({ auth:by })),
    }),
    { name: "user-store" }
  )
);
