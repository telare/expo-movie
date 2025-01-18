
import { StyleSheet, Text, View } from "react-native";
type Error = {
  code: string | null ;
  message: string | null;
};
export default function ErrorComponent({ code, message }: Error) {
  return (
    <View style={errorStyles.con}>
      <Text style={errorStyles.text}>
        <Text style={[errorStyles.text, { color: "red" }]}>Code:</Text> {code}
      </Text>
      <Text style={errorStyles.text}>
        <Text style={[errorStyles.text, { color: "red" }]}>Message:</Text>{" "}
        {message}
      </Text>
    </View>
  );
}
const errorStyles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "black",
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontFamily: "Inter_24pt-Regular.ttf",
  },
});
