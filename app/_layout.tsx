import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="screens/auth"
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
          headerTitle: "Login",
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      />
    </Stack>
  );
}
