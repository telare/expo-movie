import { Tabs } from "expo-router";
import BottomTab from "../components/BottomBar";
import Header from "../components/Header";
import Button from "../components/Button";
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
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          header: () => (
            <Header
              isNavBtn={true}
              title="Profile"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search_results"
        options={{
          headerShown: true,
          header: () => <Header isNavBtn={true} />,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          headerShown: true,
          header: () => <Header isNavBtn={true} />,
        }}
      />
      <Tabs.Screen
        name="error"
        options={{
          headerShown: true,
          header: () => <Header isNavBtn={true} title="Ups..." />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
