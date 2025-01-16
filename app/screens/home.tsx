import { ScrollView, StyleSheet, View } from "react-native";
import ImgCarousel from "../components/Home/ImgCarousel";
import Search from "../components/Home/Search";
import APIdata from "../components/Home/APIData";

export default function Home() {
  return (
    <ScrollView style={homeStyles.con}>
      <ImgCarousel />
      <Search />
      <View style={{marginBottom:30}}>
        <APIdata content="nowPlaying" />
        <APIdata content="topRated" />
       
      </View>
    </ScrollView>
  );
}
const homeStyles = StyleSheet.create({
  con: {
    backgroundColor: "black",
  },
});
