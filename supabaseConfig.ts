import AsyncStorage from "@react-native-async-storage/async-storage";
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
    if (data?.length === 0) {
      addUser(user);
    } else {
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function addUser(user: User) {
  try {
    const { data, error } = await supabase.from("users").insert([user]);
  } catch (e) {
    console.log(e);
  }
}

export async function getUser(userNickname: string) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("nickname", userNickname);
    if (data) {
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}

export async function addToFavorite(favorite: Favorite) {
  try {
    console.log(favorite);
    const { data, error } = await supabase.from("users").insert({ favorite });
    // .eq("nickname", nickname);
    console.log("User added successfully:", data);
    if (error) {
      console.log(error);
    }
  } catch (e) {
    console.log(e);
  }
}
