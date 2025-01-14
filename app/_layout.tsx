import { Stack } from "expo-router";
import Header from "./components/Header";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "@/dataFetching.ts/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <Header title="Welcome" isNavBtns={false} />,
          }}
        />
        <Stack.Screen
          name="screens/error"
          options={{
            header: () => <Header title="Oops..." isNavBtns={true} />,
          }}
        />
        <Stack.Screen
          name="screens/login"
          options={{
            header: () => <Header title="Log In" isNavBtns={true} />,
          }}
        />
        <Stack.Screen
          name="screens/signup"
          options={{
            header: () => <Header title="Sign Up" isNavBtns={true} />,
          }}
        />
        <Stack.Screen
          name="screens/home"
          options={{
            header: () => <Header title="Home" isNavBtns={false} />,
          }}
        />
      </Stack>
    </Provider>
  );
}
