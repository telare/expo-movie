import { Stack } from "expo-router";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "@/dataFetching.ts/store";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="screens/login"
          options={{
            header: () => <Header isNavBtn={true} title="Log In"/>,
          }}
        />
        <Stack.Screen
          name="screens/signup"
          options={{
            header: () => <Header isNavBtn={true} title="Sign Up"/>,
          }}
        />
      </Stack>
    </Provider>
  );
}
