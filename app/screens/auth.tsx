import { StyleSheet, View } from "react-native";
import Btn from "../components/Btn";
import { Link } from "expo-router";

export default function Auth() {
  return (
    <View style={styles.mainContainer}>
      <Link href="./login">
        <Btn message="Log In" />
      </Link>
      <Link href="./signup">
        <Btn message="Sign Up" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    rowGap:10
  },
});
