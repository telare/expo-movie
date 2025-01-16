import { useGetMovieInfoQuery } from "@/dataFetching.ts/APISlice";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import Loading from "../components/Loading";

type ParamListBase = {
  Search: {
    id: number;
  };
};
type Route = RouteProp<ParamListBase, "Search">;
export default function Details() {
  const router = useRoute<Route>();

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useGetMovieInfoQuery(router.params.id);

  return (
    <View>
      {!isLoading ? (
        movieInfo ? (
          <View>
            <View>
              <View>
                <View>
                  <Text>{movieInfo.title}</Text>
                  <Text>{movieInfo.vote_average}</Text>
                </View>
                <View>
                  <Text>{movieInfo.id}</Text>
                  <Text>{movieInfo.overview}</Text>
                </View>
              </View>
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
