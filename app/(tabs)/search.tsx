import { StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import APIdata from "../components/APIData";

export default function seacrhPage() {
  return (
    <View style={styles.mainCon}>
      <Text style={styles.text}>Find Movies, Tv series, and more..</Text>
      <Search />
      <APIdata title="Results" type="search" />
    </View>
  );
}
const styles = StyleSheet.create({
  mainCon:{
    flex:1,
    backgroundColor:"black",
    padding:20
  },
  text: {
    fontSize: 24,
    fontFamily: "Inter_24pt-Regular.ttf",
    color:"white"
  },
});
