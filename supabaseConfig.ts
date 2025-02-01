import { createClient, SupabaseClient } from "@supabase/supabase-js";
// Initialize the Supabase client
const supabaseUrl: string = "https://dgxtuqtbryhzbdyrgtwm.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRneHR1cXRicnloemJkeXJndHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjQ3OTAsImV4cCI6MjA1MzU0MDc5MH0.FpodBp0tGGGkPAAbMgb0Agjr1jXefcWHDUMfH_inSQQ";
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
type User = {
  nickname: string;
  photoUrl?: string;
  email: string;
};
type Favorite = {
  id: number;
};

export async function registerUser(user: User) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("nickname")
      .eq("nickname", user.nickname);
    if (data?.length === 0 && !error) {
      await addUser(user);
    } else {
      throw new Error(
        "Error in registering user, this user has already registered."
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

export async function addUser(user: User) {
  try {
    const { data, error } = await supabase.from("users").insert([user]);
    if (error) throw new Error("Error in handling user");
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

export async function getUser(userNickname: string) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("nickname", userNickname);
    if (!error) {
      return data;
    } else {
      throw new Error("Error in getting a user. Check info and try again.");
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

export async function addToFavorite(
  userNickName: string,
  favoriteInfo: {
    id: number;
    type: "movie" | "person" | "tv";
  }
) {
  try {
    const { data: favoriteData, error: favoriteDataError } = await supabase
      .from("users")
      .select("*")
      .eq(`favorite_${favoriteInfo.type}_ids`, favoriteInfo.id);
    if (favoriteData && favoriteData.length === 0 && favoriteDataError) {
      const { data, error } = await supabase
        .from("users")
        .update({favorite_movie_ids: favoriteInfo })
        .eq("nickname", userNickName);
      // .eq("nickname", nickname);
      if (data && !error) {
        console.log(`${favoriteInfo.type} added successfully:`, data);
      } else {
        throw new Error(
          `Error in adding ${favoriteInfo.type} to favorite. Try again later.`
        );
      }
    } else {
      throw new Error(
        "Error in adding in favorite. This data has already in favorite"
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}
export default async function getFavoriteInfo(userNickName: string) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("favorite_movies_ids")
      .eq("nickname", userNickName);
    if (!error && data) {
      return data;
    } else {
      throw new Error("Error in getting favorite.");
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}
