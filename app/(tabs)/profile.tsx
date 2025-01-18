import { ScrollView, StyleSheet, View } from "react-native";

export default function Profile() {
  return <ScrollView style={homeStyles.mainCon}></ScrollView>;
}
const homeStyles = StyleSheet.create({
  mainCon: {
    backgroundColor: "black",
  },
});
