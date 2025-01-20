import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import ImgCarousel from "../components/Home/ImgCarousel";
import Search from "../components/Search";
import APIdata from "../components/Home/APIData";

export default function Home() {
  return (
    <SafeAreaView style={homeStyles.mainCon}>
      <ScrollView>
        <View style={homeStyles.ImgCarouselCon}>
          <ImgCarousel />
        </View>

        <Search />
        <View style={{ marginBottom: 30 }}>
          <APIdata  type="now_playing"  title="Now Playing"/>
          <APIdata  type="top_rated"  title="Top rated"/>
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
