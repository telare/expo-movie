import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useContext } from "react";
import { paramsContext } from "@/app/(tabs)/details";
import MovieInfo from "./Info/MovieInfo";
import TvInfo from "./Info/TvInfo";
import PersonInfo from "./Info/PersonInfo";

export default function Info() {
  const params = useContext(paramsContext);
  return (
    <View>
      {params.type === "movie" && <MovieInfo />}
      {params.type === "tv" && <TvInfo />}
      {params.type === "person" && <PersonInfo />}
    </View>
  );
}
export const infoStyles = StyleSheet.create({
  infoCon: {
    width: "40%",
    height: "100%",
  },
  text: {
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 26,
  },
  poster: {
    width: "55%",
    height: "90%",
    borderRadius: 23,
  },
});
