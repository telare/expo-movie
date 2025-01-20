import { useGetMovieInfoQuery } from "@/dataFetching.ts/APISlice";
import { Image, StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import { useSearchParams } from "expo-router/build/hooks";

export default function Details() {
  const params = useSearchParams();

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useGetMovieInfoQuery(params.get("id") ? Number(params.get("id")) : 200);

  const movieDetails: {
    title: string;
    value: string | number | undefined;
  }[] = [
    { title: "Title", value: movieInfo?.title },
    { title: "Id", value: movieInfo?.id },
    { title: "Release data", value: movieInfo?.release_date },
    { title: "Run time", value: `${movieInfo?.runtime} m` },
    {
      title: "Genres",
      value: movieInfo
        ? movieInfo.genres
            .map((genre) => {
              return `${genre.name}`;
            })
            .join(", ")
        : "no data",
    },
  ];
  return (
    <View style={detailsStyles.mainCon}>
      {!isLoading ? (
        movieInfo ? (
          <View>
            <View style={{ flexDirection: "row", gap: "5%", alignItems:"center" }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`,
                }}
                style={detailsStyles.poster}
              />
              <View style={detailsStyles.infoCon}>
                {movieDetails.map((detail, i) => (
                  <View key={i}>
                    <Text style={[detailsStyles.title, detailsStyles.text]}>
                      {detail.title === null ? "" : detail.title}
                    </Text>
                    <Text style={detailsStyles.text}>{detail.value}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={{marginTop:40}}>
              <Text style={[detailsStyles.title, detailsStyles.text]}>
                Overview
              </Text>
              <Text style={detailsStyles.text}>{movieInfo.overview}</Text>
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
  infoCon: {
    width: "40%",
    height: '100%',
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
