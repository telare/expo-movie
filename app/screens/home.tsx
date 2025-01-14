import { ScrollView, StyleSheet, View } from "react-native";
import ImgCarousel from "../components/Home/ImgCarousel";
import NowPlayingMovies from "../components/Home/APIdata/NowPlayingMovies";
import TopRatedMovies from "../components/Home/APIdata/TopRatedMovies";
import PopularPersons from "../components/Home/APIdata/PopularPersons";
import Search from "../components/Home/Search";
type HomeProps = {
  
}
export default function Home({}) {
  return (
    <ScrollView style={homeStyles.con}>
      <ImgCarousel />
      <Search />
      <View>
        <NowPlayingMovies />
        <TopRatedMovies />
        {/* <PopularPersons /> */}
      </View>
    </ScrollView>
  );
}
const homeStyles = StyleSheet.create({
  con:{
    backgroundColor:"black"
  }
})