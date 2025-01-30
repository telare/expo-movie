import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Info from "../components/Details/Info";
import Rating from "../components/Details/Rating";

export default function Details() {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={detailsStyles.mainCon}>
          <Info />
          <Rating />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export const detailsStyles = StyleSheet.create({
  mainCon: {
    padding: 20,
    alignItems: "center",
  },
  infoCon: {
    width: "40%",
    height: "100%",
  },
  text: {
    color: "white",
    fontFamily: "Inter_24pt-Regular.ttf",
    fontSize: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 26,
  },
  poster: {
    width: "55%",
    height: "90%",
    borderRadius: 23,
  },
});
