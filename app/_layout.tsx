import { Stack } from "expo-router";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "@/dataFetching.ts/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
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
            header: () => <Header isNavBtns={true} />,
          }}
        />
        <Stack.Screen
          name="screens/signup"
          options={{
            header: () => <Header isNavBtns={true} />,
          }}
        />
      </Stack>
    </Provider>
  );
}
