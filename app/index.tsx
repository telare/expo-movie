import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Or from "./components/Or";
import { useEffect } from "react";
import { userStore } from "@/store/userStore";
import Button from "./components/Button";
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
        <Button
          title="Sign Up"
          backgroundColor="#6C47DB"
          height={50}
          width={350}
          borderColor="#37246e"
          fontSize={30}
          borderRadius={10}
          func={() => router.push("/screens/signup")}
        />
        <Or />
        <Button
          title="Log In"
          backgroundColor="#6C47DB"
          height={50}
          width={350}
          fontSize={30}
          borderRadius={10}
          borderColor="#37246e"
          func={() => router.push("/screens/login")}
        />
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
