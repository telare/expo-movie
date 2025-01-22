import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Slider from "../components/Slider";
import Search from "../components/Search";
import APIdata from "../components/APIData";
import { ImageRequireSource } from "react-native";

export default function Home() {
  const images: ImageRequireSource[] = [
    require("../../assets/images/img1.jpg"),
    require("../../assets/images/img2.jpg"),
    require("../../assets/images/img3.jpg"),
  ];

  return (
    <SafeAreaView style={homeStyles.mainCon}>
      <ScrollView>
        <View style={homeStyles.ImgCarouselCon}>
          <Slider images={images} />
        </View>

        <Search />
        <View style={{ marginBottom: 30 }}>
          <APIdata type="now_playing" title="Now Playing" />
          <APIdata type="top_rated" title="Top rated" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const homeStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: "black",
  },
  ImgCarouselCon: {
    marginTop: 20,
  },
});
