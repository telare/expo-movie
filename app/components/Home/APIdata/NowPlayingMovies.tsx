import {
  Movie,
  MovieResponse,
  useGetNowPlayingMovieQuery,
} from "@/dataFetching.ts/APISlice";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../../Loading";
import { useState } from "react";
import Cart from "../../Cart";

export default function NowPlayingMovies() {
  const [query, setQuery] = useState<string>("US");
  const {
    data: movies,
    isLoading,
    isError,
  } = useGetNowPlayingMovieQuery(query);
  if (isLoading) {
    return <Loading />;
  }
  const moviesCutted: Movie[] | undefined = movies
    ? movies.results.slice(0, 4)
    : undefined;
  return (
    <View style={nowPlayingMoviesStyles.mainCon}>
      <Text style={nowPlayingMoviesStyles.title}>Now Playing</Text>
      <View style={nowPlayingMoviesStyles.gridCon}>
        {moviesCutted ? (
          moviesCutted.map((movie) => (
            <Cart
              key={movie.id}
              type="movie"
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          ))
        ) : (
          <View>No data</View>
        )}
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
