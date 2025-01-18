import { useGetMovieInfoQuery } from "@/dataFetching.ts/APISlice";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import { useSearchParams } from "expo-router/build/hooks";
import Cart from "../components/Cart";

export default function Details() {
  const params = useSearchParams();

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useGetMovieInfoQuery(params.get("id") ? Number(params.get("id")) : 200);
  const titles: string[] = [
    "ID",
    "Release data",
    "Genres",
    "Production Company(ies)",
    "Run time",
    "Overview",
  ];
  return (
    <View style={detailsStyles.mainCon}>
      {!isLoading ? (
        movieInfo ? (
          <View>
            <Cart
              poster_path={movieInfo.poster_path}
              title={movieInfo.title}
              id={movieInfo.id}
              type="movie"
              vote_average={movieInfo.vote_average}
            />
            <View>
              <Text>Detailed Info</Text>
              <Text>
                Genres:{" "}
                {movieInfo.genres.map((genre) => (
                  <Text key={genre.id}>{genre.name}</Text>
                ))}
              </Text>
              <Text>
                Production Company(ies): {movieInfo.production_companies.name}
              </Text>
              

              <Text>ID: {movieInfo.id}</Text>
              <Text>Release data: {movieInfo.release_date}</Text>
              
              <Text>Run time: {movieInfo.runtime} m</Text>
              <Text>Overview: {movieInfo.overview}</Text>
            </View>
          </View>
        ) : (
          <View>No data</View>
        )
      ) : (
        <Loading />
      )}
    </View>
  );
}
const detailsStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
  },
  title: {
    fontWeight: "500",
  },
});
