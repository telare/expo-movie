import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import ImgCarousel from "../components/Home/ImgCarousel";
import Search from "../components/Search";
import APIdata from "../components/Home/APIData";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={homeStyles.mainCon}>
        <View style={homeStyles.ImgCarouselCon}>
          <ImgCarousel />
        </View>

        <Search />
        <View style={{ marginBottom: 30 }}>
          <APIdata content="nowMovies" />
          <APIdata content="topMovies" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const homeStyles = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
  },
  ImgCarouselCon: {
    marginTop: 20,
  },
});
