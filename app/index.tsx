import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { btnStyle } from "@/assets/styles/btn";
export default function Auth() {
  const router = useRouter();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={btnStyle.btn}
        onPress={() => router.push("/screens/signup")}
      >
        <Text style={btnStyle.text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={btnStyle.btn}
        onPress={() => router.push("/screens/login")}
      >
        <Text style={btnStyle.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
});
