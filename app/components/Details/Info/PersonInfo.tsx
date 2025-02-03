import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import ImgCarousel from "../../Slider";
import { useContext } from "react";
import { paramsContext } from "@/app/(tabs)/details";
import {
  useGetDetailsQuery,
  useGetImgsQuery,
} from "@/dataFetching.ts/APISlice";
import Loading from "../../Loading";
import { infoStyles } from "../Info";
import ErrorComponent from "../../Error";

export default function PersonInfo() {
  const params = useContext(paramsContext);
  const {
    data: person,
    isLoading: isPersonLoading,
    isError: isPersonError,
  } = useGetDetailsQuery({
    type: params.type,
    id: params.id,
  });

  const {
    data: imgs,
    isLoading: isImgsLoading,
    isError: isImgsError,
  } = useGetImgsQuery({
    type: "person",
    id: params.id,
  });
  if (isPersonLoading || isImgsLoading) return <Loading />;
  if (isPersonError || isImgsError)
    return (
      <ErrorComponent code="500" message="Error in fetching data. Try again" />
    );
  return (
    <View>
      {person && "profile_path" in person && (
        <View >
          <View
            style={{ flexDirection: "row", gap: "5%", alignItems: "center" }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
              }}
              style={infoStyles.poster}
            />
            <View style={infoStyles.infoCon}>
              <View>
                <Text style={infoStyles.text}>{person.name}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>
                  Birthday date
                </Text>
                <Text style={infoStyles.text}>{person.birthday}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>
                  Place of birthday
                </Text>
                <Text style={infoStyles.text}>{person.place_of_birth}</Text>
              </View>
              <View>
                <Text style={[infoStyles.title, infoStyles.text]}>
                  Department
                </Text>
                <Text style={infoStyles.text}>{person.known_for_department}</Text>
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
            <Text style={[infoStyles.title, infoStyles.text]}>Biography</Text>
            <Text style={infoStyles.text}>{person.biography}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
