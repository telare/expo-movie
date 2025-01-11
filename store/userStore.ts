import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  nickname: string;
  email: string;
  auth: boolean;
  setNickName: (by: string) => void;
  setEmail: (by: string) => void;
  setAuth: (by: boolean) => void;
};

export const userStore = create<User>()(
  persist(
    (set) => ({
      nickname: "",
      email: "",
      auth: false,
      setNickName: (by) => set(() => ({ nickname: by })),
      setEmail: (by) => set(() => ({ email: by })),
      setAuth: (by) => set(() => ({ auth: by })),
    }),
    { name: "user-store" }
  )
);
