import {
  useGetDetailsQuery,
  useGetImgsQuery,
} from "@/dataFetching.ts/APISlice";
import { Image, StyleSheet, Text, View } from "react-native";
import ImgCarousel from "../../Slider";
import { useContext } from "react";
import { paramsContext } from "@/app/(tabs)/details";
import Loading from "../../Loading";
import { infoStyles } from "../Info";
import ErrorComponent from "../../Error";

export default function MovieInfo() {
  const params = useContext(paramsContext);
  const {
    data: movies,
    isLoading: isMoviesLoading,
    isError: isMoviesError,
  } = useGetDetailsQuery({
    type: params.type,
    id: params.id,
  });
  const {
    data: imgs,
    isLoading: isImgsLoading,
    isError: isImgsError,
  } = useGetImgsQuery({
    type: "movie",
    id: params.id,
  });
  if (isMoviesLoading || isImgsLoading) return <Loading />;
  if (isMoviesError || isImgsError)
    return (
      <ErrorComponent code="500" message="Error in fetching data. Try again" />
    );
  return (
    <View>
      {movies && "runtime" in movies && (
        <View>
          <View
            style={{ flexDirection: "row", gap: "5%", alignItems: "center" }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movies.poster_path}`,
              }}
              style={infoStyles.poster}
            />
            <View style={infoStyles.infoCon}>
              <View>
                <Text style={infoStyles.text}>{movies.title}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>Runtime</Text>
                <Text style={infoStyles.text}>{movies.runtime}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>
                  Release date
                </Text>
                <Text style={infoStyles.text}>{movies.release_date}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>Genres</Text>
                {movies.genres.map((genre) => (
                  <Text style={infoStyles.text} key={genre.id}>{genre.name}</Text>
                ))}
              </View>
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
            <Text style={[infoStyles.title, infoStyles.text]}>Photos</Text>
          </View>
          {imgs && <ImgCarousel images={imgs} />}
          <View style={{ marginTop: 40 }}>
            <Text style={[infoStyles.title, infoStyles.text]}>Overview</Text>
            <Text style={infoStyles.text}>{movies.overview}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
