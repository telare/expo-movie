import { Text, View } from "react-native";
import Loading from "../../Loading";
import { Movie, useGetTopRatedMovieQuery } from "@/dataFetching.ts/APISlice";
import Cart from "../../Cart";
import { nowPlayingMoviesStyles } from "./NowPlayingMovies";

export default function TopRatedMovies() {
  const { data: movies, isLoading, isError } = useGetTopRatedMovieQuery("");
  if (isLoading) {
    return <Loading />;
  }
  const moviesCutted: Movie[] | undefined = movies
    ? movies.results.slice(0, 4)
    : undefined;
  return (
    <View>
      <Text style={nowPlayingMoviesStyles.title}>Top Rated Movies</Text>
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
