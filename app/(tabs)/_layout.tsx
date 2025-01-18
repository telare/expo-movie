import { Tabs } from "expo-router";
import BottomTab from "../components/BottomBar/BottomBar";
export default function TabLayout() {
  const tabs: string[] = ["home", "profile"];
  return (
    <Tabs tabBar={(props) => <BottomTab {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search_results"
        options={{
          headerShown: false,
        }}
      />
      
      <Tabs.Screen
        name="error"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
