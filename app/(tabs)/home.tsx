import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Slider from "../components/Slider";
import Search from "../components/Search";
import APIdata from "../components/APIData";

export default function Home() {
  const images: string[] = [
    `https://image.tmdb.org/t/p/w500/b85bJfrTOSJ7M5Ox0yp4lxIxdG1.jpg`,
    `https://image.tmdb.org/t/p/w500/fYnEbgoNCxW9kL0IgOgtJb9JTBU.jpg`,
    `https://image.tmdb.org/t/p/w500/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg`,
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
