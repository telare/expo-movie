import { StyleSheet, View } from "react-native";
import Search from "../components/Search";
import APIdata from "../components/APIData";

export default function SearchResults() {
  return (
    <View style={searchResultStyles.mainCon}>
      <Search />
      <APIdata title="Results" type="search" />
    </View>
  );
}
const searchResultStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: "black",
  }
});
