import { detailsStyles } from "@/app/(tabs)/details";
import {
  useGetImgsQuery,
  useGetMovieDetailsQuery,
} from "@/dataFetching.ts/APISlice";
import { useSearchParams } from "expo-router/build/hooks";
import { Image, Text } from "react-native";
import { View } from "react-native";
import Loading from "../Loading";
import ImgCarousel from "../Slider";

export default function Info() {
  const params: URLSearchParams = useSearchParams();

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useGetMovieDetailsQuery(
    params.get("id") ? Number(params.get("id")) : 200
  );
  const {
    data: imgs,
    isLoading: imgsLoading,
    isError: imgsError,
  } = useGetImgsQuery({
    type: "movie",
    id: params.get("id") ? Number(params.get("id")) : 200,
  });

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
  if (isLoading) return <Loading />;
  return (
    <View>
      {movieInfo ? (
        <View>
          <View
            style={{ flexDirection: "row", gap: "5%", alignItems: "center" }}
          >
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
          <View
            style={{
              marginBottom: 20,
              marginTop: 20,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={[detailsStyles.title, detailsStyles.text]}>
              Photos
            </Text>
          </View>
          {imgs && <ImgCarousel images={imgs} />}
          <View style={{ marginTop: 40 }}>
            <Text style={[detailsStyles.title, detailsStyles.text]}>
              Overview
            </Text>
            <Text style={detailsStyles.text}>{movieInfo.overview}</Text>
          </View>
        </View>
      ) : (
        <View>No data</View>
      )}
    </View>
  );
}
