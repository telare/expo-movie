import { Stack, useRouter } from "expo-router";
import NavigationBtn from "./components/NavigationBtn";
import { Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { btnStyle } from "@/assets/styles/btn";

export default function RootLayout() {
  const router = useRouter();
  useEffect(()=>{
    console.log(router.canGoBack())
  },[])
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Welcome!",
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      />
      <Stack.Screen
        name="screens/login"
        options={{
          headerTitle: "Log In",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={btnStyle.btn}
              onPress={() => router.back()}
            >
              <Text style={btnStyle.text}>Go</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="screens/signup"
        options={{
          headerTitle: "Sign Up",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerLeft: () => <NavigationBtn />,
        }}
      />
      <Stack.Screen
        name="screens/home"
        options={{
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      />
    </Stack>
  );
}
