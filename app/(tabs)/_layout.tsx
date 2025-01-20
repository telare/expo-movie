import { Tabs } from "expo-router";
import BottomTab from "../components/BottomBar/BottomBar";
export default function TabLayout() {
  const tabs: string[] = [
    "home",
    "profile",
    "search_results",
    "details",
    "error",
    "favorite"
  ];
  return (
    <Tabs tabBar={(props) => <BottomTab {...props} />}>
      {tabs.map((tab, i) => (
        <Tabs.Screen
          key={i}
          name={tab}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Tabs>
  );
}
