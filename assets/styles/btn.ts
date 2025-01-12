import { StyleSheet } from "react-native";
export const btnStyle = StyleSheet.create({
  btn: {
    backgroundColor: "#6C47DB",
    width: 351,
    height: 57,
    borderRadius: 13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    gap:10, 
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Inter_24pt-Regular.ttf",
  },
});
