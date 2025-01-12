import { Stack } from "expo-router";
import Header from "./components/Header";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header:()=><Header title="Welcome" isNavBtns={false}/>
        }}
      />
      <Stack.Screen
        name="screens/error"
        options={{
          header:()=><Header title="Oops..." isNavBtns={true}/>
        }}
      />
      <Stack.Screen
        name="screens/login"
        options={{
          header:()=><Header title="Log In" isNavBtns={true}/>
        }}
      />
      <Stack.Screen
        name="screens/signup"
        options={{
          header:()=><Header title="Sign Up" isNavBtns={true}/>
        }}
      />
      <Stack.Screen
        name="screens/home"
        options={{
          header:()=><Header title="Home" isNavBtns={false}/>
        }}
      />
    </Stack>
  );
}

