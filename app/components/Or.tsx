import { StyleSheet, Text, View } from "react-native";

export default function Or() {
  return (
    <View style={styles.con}>
      <View style={styles.line}></View>
      <Text style={styles.text}>or</Text>
      <View style={styles.line}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    gap:5,
    justifyContent:"center",
    width: 357,
  },
  line: {
    marginTop:14,
    width: 123,
    height: 2,
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize:19,
    fontFamily:"Inter_24pt-Regular.ttf"
  },
});
