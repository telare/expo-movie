import { Movie, Person, Tv } from "@/dataFetching.ts/APISlice";
import { StyleSheet, Text, View } from "react-native";
import MovieCart from "./Carts/MovieCart";
import PersonCart from "./Carts/PersonCart";
import TvCart from "./Carts/TvCart";

type APIdataProps = {
  title: string;
  content: Movie[] | Tv[] | Person[];
};

export default function APIdata({ title, content }: APIdataProps) {
  function isMovie(content: Movie[] | Person[] | Tv[]): content is Movie[] {
    return (
      "title" in content[0] &&
      "poster_path" in content[0] &&
      "vote_average" in content[0]
    );
  }
  function isPerson(content: Movie[] | Tv[] | Person[]): content is Person[] {
    return "name" in content[0] && "profile_path" in content[0];
  }
  function isTv(content: Movie[] | Tv[] | Person[]): content is Tv[] {
    return (
      "name" in content[0] &&
      "poster_path" in content[0] &&
      "vote_average" in content[0]
    );
  }
  return (
    <View style={nowPlayingMoviesStyles.mainCon}>
      <Text style={nowPlayingMoviesStyles.title}>{title}</Text>
      <View style={nowPlayingMoviesStyles.gridCon}>
        {isMovie(content) &&
          content.map((movie) => (
            <MovieCart
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          ))}
        {isPerson(content) &&
          content.map((person) => (
            <PersonCart
              key={person.id}
              id={person.id}
              name={person.name}
              profile_path={person.profile_path}
            />
          ))}
        {isTv(content) &&
          content.map((tv) => (
            <TvCart
              key={tv.id}
              id={tv.id}
              name={tv.name}
              poster_path={tv.poster_path}
              vote_average={tv.vote_average}
            />
          ))}
      </View>
    </View>
  );
}
export const nowPlayingMoviesStyles = StyleSheet.create({
  mainCon: {},
  gridCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 29,
    rowGap: 30,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
});
