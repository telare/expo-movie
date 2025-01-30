import { Tabs } from "expo-router";
import BottomTab from "../components/BottomBar";
export default function TabLayout() {
  const tabs: string[] = [
    "home",
    "profile",
    "search_results",
    "details",
    "error",
    "search",
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
