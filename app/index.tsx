import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { btnStyle } from "@/assets/styles/btn";
import Or from "./components/Or";
import { useEffect } from "react";
import { userStore } from "@/store/userStore";
export default function Auth() {
  const router = useRouter();
  const userInfo = userStore();
  useEffect(() => {
    userInfo.setAuth(false);
    userInfo.setNickName("user");
    userInfo.setEmail("");
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Expo{"\n"}Movie</Text>
      <View>
        <TouchableOpacity
          style={btnStyle.btn}
          onPress={() => router.push("/screens/signup")}
        >
          <Text style={btnStyle.text}>Sign Up</Text>
        </TouchableOpacity>
        <Or />
        <TouchableOpacity
          style={btnStyle.btn}
          onPress={() => router.push("/screens/login")}
        >
          <Text style={btnStyle.text}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "center",
    rowGap: 10,
    paddingBottom: 50,
  },
  title: {
    color: "white",
    fontSize: 60,
    fontWeight: "700",
    marginBottom: 300,
    fontFamily: "Inter_24pt-Regular.ttf",
  },
});
