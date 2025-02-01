import { Image, Text } from "react-native";
import { View } from "react-native";
import ImgCarousel from "../../Slider";
import {
  useGetDetailsQuery,
  useGetImgsQuery,
} from "@/dataFetching.ts/APISlice";
import { useContext } from "react";
import { paramsContext } from "@/app/(tabs)/details";
import Loading from "../../Loading";
import { infoStyles } from "../Info";
import ErrorComponent from "../../Error";

export default function TvInfo() {
  const params = useContext(paramsContext);
  const {
    data: tv,
    isLoading: isTvLoading,
    isError: isTvError,
  } = useGetDetailsQuery({
    type: params.type,
    id: params.id,
  });
  const {
    data: imgs,
    isLoading: isImgsLoading,
    isError: isImgsError,
  } = useGetImgsQuery({
    type: "tv",
    id: params.id,
  });
  if (isTvLoading || isImgsLoading) return <Loading />;
  if (isTvError || isImgsError)
    return (
      <ErrorComponent code="500" message="Error in fetching data. Try again" />
    );
  return (
    <View>
      {tv && "number_of_seasons" in tv && (
        <View >
          <View
            style={{ flexDirection: "row", gap: "5%", alignItems: "center" }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
              }}
              style={infoStyles.poster}
            />
            <View style={infoStyles.infoCon}>
              <View>
                <Text style={infoStyles.text}>{tv.name}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>Seasons</Text>
                <Text style={infoStyles.text}>{tv.number_of_seasons}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>
                  Episodes
                </Text>
                <Text style={infoStyles.text}>{tv.number_of_episodes}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>
                  First air date
                </Text>
                <Text style={infoStyles.text}>{tv.first_air_date}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>Genres</Text>
                {tv.genres.map((genre) => (
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
            <Text style={infoStyles.text}>{tv.overview}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
