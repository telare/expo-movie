import { Movie, Person, useGetMovieQuery } from "@/dataFetching.ts/APISlice";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../Loading";
import { useState } from "react";
import MovieCart from "../MovieCart";
import Pagination from "../Pagination";
import { useSearchParams } from "expo-router/build/hooks";

type APIdataProps = {
  title: string;
  type: "now_playing" | "top_rated" | "search";
};

export default function APIdata({ type, title }: APIdataProps) {
  const params: string | null = useSearchParams().get("query");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const {
    data: movies,
    isLoading,
    isError,
  } = useGetMovieQuery({
    type: type,
    page: currentPage,
    query: params ? params : null
  });

  const cuttedData: Movie[] | Person[] | undefined = movies?.results.slice(
    0,
    4
  );

  function handleNextClick() {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
  }
  function handlePageClick(index: number) {
    setCurrentPage(index);
  }
  function handleBackClick() {
    setCurrentPage(currentPage !== 3 ? currentPage + 1 : 3);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={nowPlayingMoviesStyles.mainCon}>
      <Text style={nowPlayingMoviesStyles.title}>{title}</Text>
      <View style={nowPlayingMoviesStyles.gridCon}>
        {cuttedData ? (
          cuttedData.map((movie) => (
            <MovieCart
              key={movie.id}
              id={movie.id}
              overview={movie.overview}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              title={movie.title}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
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
