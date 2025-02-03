import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";
import Button from "./components/Button";
import Or from "./components/Or";
import { LinearGradient } from "expo-linear-gradient";
export default function Auth() {
  const router = useRouter();
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((response) => {
        if (response) {
          AsyncStorage.removeItem("user");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[ "#903494","#020024",]} // Gradient colors
      start={[0.27, 0]} 
      end={[0.65, 1]}
      style={styles.mainContainer}
    >
       
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
    </LinearGradient>
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
