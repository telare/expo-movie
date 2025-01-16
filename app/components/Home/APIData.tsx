import {
  Movie,
  useGetNowPlayingMovieQuery,
  useGetTopRatedMovieQuery,
} from "@/dataFetching.ts/APISlice";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../Loading";
import { useState } from "react";
import Cart from "../Cart";
import Pagination from "../Pagination";
type APIdataProps = {
  content: "nowPlaying" | "topRated";
};
export default function APIdata({ content }: APIdataProps) {
  //api handling
  const [currentPage, setCurrentPage] = useState<number>(0);
  const {
    data: nowMovies,
    isLoading: nowMoviesLoading,
    isError: nowMoviesError,
  } = useGetNowPlayingMovieQuery(currentPage);
  const {
    data: topMovies,
    isLoading: TopMoviesLoading,
    isError: TopMoviesError,
  } = useGetTopRatedMovieQuery(currentPage);

  const moviesCutted: Movie[] | undefined =
    nowMovies && content == "nowPlaying"
      ? nowMovies.results.slice(0, 4)
      : topMovies?.results.slice(0, 4);

  //pagination functions

  function handleNextClick() {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
  }
  function handlePageClick(index:number) {
    setCurrentPage(index);
  }
  function handleBackClick() {
    setCurrentPage(currentPage !== 3 ? currentPage + 1 : 3);
  }

  if (nowMoviesLoading || TopMoviesLoading) {
    return <Loading />;
  }

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
      <Pagination
        totalPages={4}
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
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
